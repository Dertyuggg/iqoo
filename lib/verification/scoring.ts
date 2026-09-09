// VERIFICATION_PIPELINE.md requires that component scores are stored separately
// and not just a single blended number. Consistency ≠ raw time spent.

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

export function calculateConsistencyScore(activityEvents: any[]): number {
  // Logic to compute streak/consistency without rewarding just raw volume.
  // E.g., plateauing score past a certain reasonable threshold.
  
  if (!activityEvents || activityEvents.length === 0) return 0;
  
  // Basic mock implementation:
  const uniqueDays = new Set(
    activityEvents.map(e => new Date(e.event_timestamp).toDateString())
  ).size;
  
  // Cap at max 50 points to prevent rewarding pure free time over skill.
  return Math.min(uniqueDays * 2, 50); 
}
