'use server';

import { createClient } from '@/lib/supabase/server';

export async function submitAssessmentAction(data: {
  domain: string;
  answer: string;
  pasteAttempts: number;
  timeSpentSeconds: number;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  // Record raw activity event for the consistency/streak signal
  const { error } = await supabase
    .from('activity_events')
    .insert({
      student_id: user.id,
      source: 'in_app',
      event_type: 'assessment_submission',
      event_timestamp: new Date().toISOString(),
      raw_data: {
        domain: data.domain,
        paste_attempts: data.pasteAttempts,
        time_spent_seconds: data.timeSpentSeconds,
        answer_length: data.answer.length,
      }
    });

  if (error) {
    console.error('Error submitting assessment:', error);
    throw new Error('Failed to submit assessment');
  }

  return { success: true };
}
