import { NextResponse } from 'next/server';
import { createAdminClient, createClient } from '@/lib/supabase/server';
import { fetchRepoCode } from '@/lib/github-code-fetcher';
import { GoogleGenAI } from '@google/genai';

export const maxDuration = 60; // Max duration for Vercel Hobby plan

export async function POST(req: Request) {
  try {
    const supabaseClient = await createClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { submissionId, repoUrl } = await req.json();

    if (!submissionId || !repoUrl) {
      return NextResponse.json({ error: 'Missing submissionId or repoUrl' }, { status: 400 });
    }

    // Verify ownership
    const { data: submissionData, error: subError } = await supabaseClient
      .from('project_submissions')
      .select('student_id')
      .eq('id', submissionId)
      .single();

    if (subError || !submissionData || submissionData.student_id !== user.id) {
      return NextResponse.json({ error: 'Forbidden or Not Found' }, { status: 403 });
    }

    const supabase = await createAdminClient();

    // Verify submission is authenticity_checked
    const { data: submission, error: fetchError } = await supabase
      .from('project_submissions')
      .select('status')
      .eq('id', submissionId)
      .single();

    if (fetchError || !submission) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    if (submission.status !== 'authenticity_checked') {
      return NextResponse.json({ error: 'Submission must pass authenticity check first' }, { status: 400 });
    }

    // 1. Fetch code
    let codeSnippet = "";
    try {
      codeSnippet = await fetchRepoCode(repoUrl, 15);
    } catch (err: unknown) {
      console.error('Failed to fetch repo code:', err);
      return NextResponse.json({ error: 'Failed to fetch repository code' }, { status: 500 });
    }

    if (!codeSnippet) {
      return NextResponse.json({ error: 'Repository is empty or code could not be read' }, { status: 500 });
    }

    // 2. Call LLM
    let llmOutputText = "";
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('GEMINI_API_KEY is not set');
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `You are an expert AI code reviewer. Evaluate the following repository code snippets.
Analyze three aspects:
1. code_quality_score: A number out of 100 representing overall code quality, cleanliness, and best practices.
2. structure_notes: Brief notes on the structural organization of the project (e.g. well-architected vs messy).
3. originality_signal: Does this look like genuinely authored work vs templated/copied boilerplate? (e.g., presence of unique logic, custom comments, etc).

Respond ONLY with a JSON object in the following format:
{
  "code_quality_score": 85,
  "structure_notes": "Well organized with clear component separation.",
  "originality_signal": "High originality. Custom logic for state management."
}

Repository Code:
${codeSnippet}
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });
      llmOutputText = response.text || "{}";
    } catch (err: unknown) {
      console.error('LLM API Error:', err);
      // Don't update status, just return error so it can be retried
      return NextResponse.json({ error: 'AI analysis failed or timed out' }, { status: 500 });
    }

    // 3. Parse LLM Output
    type ParsedOutput = {
      code_quality_score: number | null;
      structure_notes: string;
      originality_signal: string;
    };
    
    let parsedOutput: ParsedOutput;
    try {
      parsedOutput = JSON.parse(llmOutputText);
    } catch (err: unknown) {
      console.error('Failed to parse LLM JSON:', err);
      parsedOutput = {
         code_quality_score: null,
         structure_notes: "Failed to parse AI output.",
         originality_signal: "Unknown"
      };
    }

    // 4. Store in ai_reviews table
    const { error: insertError } = await supabase
      .from('ai_reviews')
      .insert({
        submission_id: submissionId,
        code_quality_score: parsedOutput.code_quality_score,
        structure_notes: parsedOutput.structure_notes,
        originality_signal: parsedOutput.originality_signal,
        raw_model_output: { raw: llmOutputText }
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json({ error: 'Database error while saving review' }, { status: 500 });
    }

    // 5. Update project_submissions status to "ai_reviewed"
    const { error: updateError } = await supabase
      .from('project_submissions')
      .update({ status: 'ai_reviewed' })
      .eq('id', submissionId);

    if (updateError) {
      console.error('Update status error:', updateError);
      return NextResponse.json({ error: 'Failed to update submission status' }, { status: 500 });
    }

    return NextResponse.json({ success: true, status: 'ai_reviewed' });
  } catch (err: unknown) {
    console.error('AI review error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
