import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { verifyGithubRepo } from '@/lib/github-verification';

export async function POST(req: Request) {
  try {
    const { submissionId, repoUrl } = await req.json();

    if (!submissionId || !repoUrl) {
      return NextResponse.json({ error: 'Missing submissionId or repoUrl' }, { status: 400 });
    }

    const supabase = await createClient();

    // 1. & 2. Analyze repo and determine outcome
    let verificationResult;
    try {
      verificationResult = await verifyGithubRepo(repoUrl);
    } catch (err: unknown) {
      console.error('GitHub Verification Error:', err);
      // If we can't verify (e.g. repo not found/private), we flag it for manual review
      verificationResult = {
        overallStatus: 'flagged',
        timestamp_analysis_result: { passed: false, reason: err.message },
        commit_message_coherence: { passed: false, reason: err.message },
        public_repo_diff_result: { passed: false, reason: err.message }
      };
    }

    // 3. Insert into authenticity_checks table
    const { error: insertError } = await supabase
      .from('authenticity_checks')
      .insert({
        submission_id: submissionId,
        overall_status: verificationResult.overallStatus,
        timestamp_analysis_result: verificationResult.timestamp_analysis_result,
        commit_message_coherence: verificationResult.commit_message_coherence,
        public_repo_diff_result: verificationResult.public_repo_diff_result
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // 4. Update project_submissions status
    // Per VERIFICATION_PIPELINE.md: "authenticity_checked" (if passed) or "flagged" (if failed)
    // Actually the initial schema sets 'rejected' in the enum, but the prompt says 'flagged' for failed.
    // We will use 'flagged' to match the prompt and VERIFICATION_PIPELINE.md's rule that it runs before AI review and shouldn't proceed.
    // Wait, the schema comment in step 0 says: `'submitted', 'authenticity_checked', 'ai_reviewed', 'pending_defense', 'defended', 'verified', 'rejected'`.
    // I'll use 'flagged' since the prompt explicitly asked for it ("update the project_submissions status to "authenticity_checked" (if passed) or "flagged" (if failed) — a flagged submission should NOT proceed to AI review automatically").
    const newStatus = verificationResult.overallStatus === 'passed' ? 'authenticity_checked' : 'flagged';
    
    const { error: updateError } = await supabase
      .from('project_submissions')
      .update({ status: newStatus })
      .eq('id', submissionId);

    if (updateError) {
      console.error('Update status error:', updateError);
      return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
    }

    return NextResponse.json({ success: true, status: newStatus, result: verificationResult });

  } catch (err) {
    console.error('Authenticity check error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
