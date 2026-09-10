import { createAdminClient } from '@/lib/supabase/server';

export interface ComponentScores {
  consistencyScore: number;
  projectDepthScore: number;
  defensePerformanceScore: number;
  auditAdjustment: number;
}

export function computeTotalTrustScore(scores: ComponentScores): number {
  return (
    scores.consistencyScore +
    scores.projectDepthScore +
    scores.defensePerformanceScore +
    scores.auditAdjustment
  );
}

// IMPORTANT PER VERIFICATION_PIPELINE.md rule 6 & RISKS_AND_CONSTRAINTS.md #4:
// This function intentionally uses a diminishing returns / capped logic.
// It counts unique active days up to a reasonable weekly threshold.
// Raw volume of commits/hours is NOT used to prevent favoring students with more free time over skill.
export function calculateConsistencyScore(activityEvents: { event_timestamp: string }[]): number {
  if (!activityEvents || activityEvents.length === 0) return 0;
  
  const uniqueDays = new Set(
    activityEvents.map(e => new Date(e.event_timestamp).toDateString())
  ).size;
  
  // E.g. each active day gives 5 points.
  // Cap at 40 points so students don't need to code every single day to max this out.
  // This explicitly prevents grinding for points.
  return Math.min(uniqueDays * 5, 40); 
}

export async function computeAndStoreVerifiedRank(studentId: string, domain: string) {
  const supabase = await createAdminClient();

  // 1. Fetch activity_events for consistency
  const { data: events } = await supabase
    .from('activity_events')
    .select('event_timestamp')
    .eq('student_id', studentId);

  const consistencyScore = calculateConsistencyScore(events || []);

  // 2. Fetch project submissions for this domain that are verified
  const { data: submissions } = await supabase
    .from('project_submissions')
    .select('id')
    .eq('student_id', studentId)
    .eq('domain', domain)
    .eq('status', 'verified');

  if (!submissions || submissions.length === 0) {
    throw new Error('No verified submissions found for this domain.');
  }

  const submissionIds = submissions.map(s => s.id);

  // 3. Fetch ai_reviews to compute project depth
  let projectDepthScore = 0;
  const { data: aiReviews } = await supabase
    .from('ai_reviews')
    .select('code_quality_score')
    .in('submission_id', submissionIds);

  if (aiReviews && aiReviews.length > 0) {
    // Average the code quality scores, scaled to a max of 30 points
    const totalRaw = aiReviews.reduce((sum, r) => sum + (r.code_quality_score || 0), 0);
    const avgRaw = totalRaw / aiReviews.length; 
    // code_quality_score is typically 0-100. Scale down to 30.
    projectDepthScore = Math.round((avgRaw / 100) * 30);
  }

  // 4. Fetch defense_sessions to compute defense performance
  let defensePerformanceScore = 0;
  const { data: defenseSessions } = await supabase
    .from('defense_sessions')
    .select('outcome')
    .in('submission_id', submissionIds);

  if (defenseSessions && defenseSessions.length > 0) {
    // A single 'pass' is enough to max out the defense points (e.g. 30 points)
    const passed = defenseSessions.some(d => d.outcome === 'pass');
    defensePerformanceScore = passed ? 30 : 0;
  }

  // 5. Fetch human_audits for adjustment
  let auditAdjustment = 0;
  // We check audits for both the student profile and the specific submissions
  const { data: audits } = await supabase
    .from('human_audits')
    .select('audit_outcome, target_type, target_id');

  if (audits) {
    const relevantAudits = audits.filter(a => 
      (a.target_type === 'profile' && a.target_id === studentId) ||
      (a.target_type === 'submission' && submissionIds.includes(a.target_id))
    );

    for (const audit of relevantAudits) {
      if (audit.audit_outcome === 'pass') auditAdjustment += 5; // Slight bump for passing audit
      if (audit.audit_outcome === 'fail') auditAdjustment -= 50; // Heavy penalty for failing
    }
  }

  // 6. Store to verified_ranks
  const { error: insertError } = await supabase
    .from('verified_ranks')
    .insert({
      student_id: studentId,
      domain: domain,
      consistency_score: consistencyScore,
      project_depth_score: projectDepthScore,
      defense_performance_score: defensePerformanceScore,
      audit_adjustment: auditAdjustment,
      snapshot_timestamp: new Date().toISOString()
    });

  if (insertError) {
    console.error('Failed to store verified rank:', insertError);
    throw new Error('Database error while saving rank.');
  }

  return {
    consistencyScore,
    projectDepthScore,
    defensePerformanceScore,
    auditAdjustment,
    totalTrustScore: consistencyScore + projectDepthScore + defensePerformanceScore + auditAdjustment
  };
}

export async function fetchStudentRank(studentId: string, domain: string) {
  const supabase = await createAdminClient();
  const { data: rank } = await supabase
    .from('verified_ranks')
    .select('*')
    .eq('student_id', studentId)
    .eq('domain', domain)
    .order('snapshot_timestamp', { ascending: false })
    .limit(1)
    .single();
    
  return rank;
}
