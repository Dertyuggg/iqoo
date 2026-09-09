// Commit authenticity logic based on VERIFICATION_PIPELINE.md and RISKS_AND_CONSTRAINTS.md

export interface CommitActivity {
  sha: string;
  message: string;
  timestamp: string;
  author: string;
}

export function checkCommitAuthenticity(commits: CommitActivity[]) {
  if (!commits || commits.length === 0) {
    return { passed: false, reason: 'No commits found' };
  }

  // 1. Check for suspicious bursts (e.g. all commits on same day or within narrow window)
  const timestamps = commits.map(c => new Date(c.timestamp).getTime());
  const maxTime = Math.max(...timestamps);
  const minTime = Math.min(...timestamps);
  const durationHours = (maxTime - minTime) / (1000 * 60 * 60);

  if (commits.length > 5 && durationHours < 1) {
    return { 
      passed: false, 
      reason: 'Suspicious commit pattern: full project history in less than an hour.',
      flagged: true
    };
  }

  // 2. Check for generic commit messages (placeholder messages across complete history)
  const genericWords = ['update', 'fix', 'initial', 'wip', 'test'];
  const genericCount = commits.filter(c => 
    genericWords.some(w => c.message.toLowerCase().includes(w))
  ).length;

  if (commits.length > 10 && (genericCount / commits.length) > 0.8) {
    return {
      passed: false,
      reason: 'Suspicious commit messages: excessive generic placeholder messages.',
      flagged: true
    };
  }

  return { passed: true, reason: 'Passed basic authenticity checks' };
}
