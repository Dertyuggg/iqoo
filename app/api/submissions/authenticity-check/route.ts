import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  try {
    const { submissionId, repoUrl } = await req.json();

    if (!submissionId || !repoUrl) {
      return NextResponse.json({ error: 'Missing submissionId or repoUrl' }, { status: 400 });
    }

    const supabase = await createClient();

    // STUB for Step D2
    // Dhyanesh: Replace this stub with actual authenticity check logic.
    // 1. Analyze repo
    // 2. Determine outcome ('passed', 'failed', 'flagged')
    // 3. Insert into authenticity_checks table
    // 4. Update project_submissions status

    // For now, mock a passed status
    const mockOutcome = 'passed';

    const { error: insertError } = await supabase
      .from('authenticity_checks')
      .insert({
        submission_id: submissionId,
        overall_status: mockOutcome,
        timestamp_analysis_result: { mock: true },
        commit_message_coherence: { mock: true },
        public_repo_diff_result: { mock: true }
      });

    if (insertError) {
      console.error('Stub insert error:', insertError);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    const newStatus = mockOutcome === 'passed' ? 'authenticity_checked' : 'rejected';
    
    const { error: updateError } = await supabase
      .from('project_submissions')
      .update({ status: newStatus })
      .eq('id', submissionId);

    if (updateError) {
      console.error('Stub update error:', updateError);
      return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
    }

    return NextResponse.json({ success: true, status: newStatus });

  } catch (err) {
    console.error('Authenticity check error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
