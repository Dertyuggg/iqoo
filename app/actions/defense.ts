'use server';

import { createClient, createAdminClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function scheduleDefenseSession(submissionId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  // 1. Verify the submission belongs to the user
  const { data: submission } = await supabase
    .from('project_submissions')
    .select('id, status')
    .eq('id', submissionId)
    .eq('student_id', user.id)
    .single();

  if (!submission || submission.status !== 'ai_reviewed') {
    throw new Error('Project must be AI reviewed before scheduling a defense.');
  }

  const supabaseAdmin = await createAdminClient();

  // 2. Create the defense_session row (requires service role)
  const { error: defenseError } = await supabaseAdmin
    .from('defense_sessions')
    .insert({
      submission_id: submissionId,
      scheduled_time: new Date().toISOString(), // Immediate for demo purposes
      session_notes: 'Jitsi link: https://meet.jit.si/iqoo-defense-' + submissionId,
    });

  if (defenseError) {
    console.error('Failed to create defense session:', defenseError);
    throw new Error('Failed to schedule defense session.');
  }

  // 3. Update the submission status to 'pending_defense'
  await supabaseAdmin
    .from('project_submissions')
    .update({ status: 'pending_defense' })
    .eq('id', submissionId);

  revalidatePath('/dashboard');
  return { success: true };
}

// THIS IS THE ONLY WAY TO REACH 'verified' STATUS
// Note: In production, this would be a protected admin route or service-role only action.
// For hackathon demo, we expose it here but enforce the logic.
export async function submitDefenseReview(
  sessionId: string,
  submissionId: string,
  outcome: 'pass' | 'fail',
  notes: string
) {
  const supabaseAdmin = await createAdminClient();
  
  // 1. Update the defense session outcome
  const { error: updateError } = await supabaseAdmin
    .from('defense_sessions')
    .update({
      outcome: outcome,
      reviewer_notes: notes,
    })
    .eq('id', sessionId);

  if (updateError) {
    console.error('Failed to update defense session:', updateError);
    throw new Error('Failed to submit defense review.');
  }

  // 2. ONLY if pass, transition to verified
  if (outcome === 'pass') {
    // Extra safety check: ensure the defense session actually passed
    const { data: session } = await supabaseAdmin
      .from('defense_sessions')
      .select('outcome')
      .eq('id', sessionId)
      .single();
      
    if (session?.outcome === 'pass') {
       // Single call site for transitioning to 'verified'
       await supabaseAdmin
         .from('project_submissions')
         .update({ status: 'verified' })
         .eq('id', submissionId);
         
       // Trigger rank computation now that the submission is verified
       const { data: submissionData } = await supabaseAdmin
         .from('project_submissions')
         .select('student_id, domain')
         .eq('id', submissionId)
         .single();
         
       if (submissionData && submissionData.student_id) {
         const { computeAndStoreVerifiedRank } = await import('@/lib/verification/scoring');
         try {
           await computeAndStoreVerifiedRank(submissionData.student_id, submissionData.domain);
         } catch (e) {
           console.error('Scoring computation failed:', e);
         }
       }
    }
  } else {
    // If fail, transition to 'rejected'
    await supabaseAdmin
      .from('project_submissions')
      .update({ status: 'rejected' })
      .eq('id', submissionId);
  }

  revalidatePath('/dashboard');
  return { success: true };
}
