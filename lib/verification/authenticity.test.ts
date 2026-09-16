import { checkCommitAuthenticity, CommitActivity } from './authenticity';

describe('checkCommitAuthenticity', () => {
  const createCommit = (msg: string, timeOffsetMs: number = 0): CommitActivity => ({
    sha: Math.random().toString(36).substring(7),
    message: msg,
    timestamp: new Date(Date.now() + timeOffsetMs).toISOString(),
    author: 'test-author',
  });

  it('fails when no commits are provided', () => {
    const result = checkCommitAuthenticity([]);
    expect(result.passed).toBe(false);
    expect(result.reason).toBe('No commits found');
  });

  it('passes for valid commits with good duration and specific messages', () => {
    const commits: CommitActivity[] = [
      createCommit('Implement user authentication feature', 0),
      createCommit('Add tests for user authentication', 2 * 60 * 60 * 1000), // +2 hours
      createCommit('Refactor login flow', 4 * 60 * 60 * 1000), // +4 hours
    ];
    const result = checkCommitAuthenticity(commits);
    expect(result.passed).toBe(true);
  });

  it('fails for suspicious burst (more than 5 commits in less than an hour)', () => {
    const commits: CommitActivity[] = [];
    for (let i = 0; i < 6; i++) {
      // 6 commits over 30 minutes total
      commits.push(createCommit(`Commit ${i}`, i * 5 * 60 * 1000));
    }
    const result = checkCommitAuthenticity(commits);
    expect(result.passed).toBe(false);
    expect(result.flagged).toBe(true);
    expect(result.reason).toContain('less than an hour');
  });

  it('passes for 5 commits in less than an hour (threshold is > 5)', () => {
    const commits: CommitActivity[] = [];
    for (let i = 0; i < 5; i++) {
      commits.push(createCommit(`Commit ${i}`, i * 5 * 60 * 1000));
    }
    const result = checkCommitAuthenticity(commits);
    expect(result.passed).toBe(true);
  });

  describe('generic commit messages threshold', () => {
    const OneHour = 60 * 60 * 1000;

    it('passes if commits <= 10 even if all are generic', () => {
      const commits: CommitActivity[] = [];
      for (let i = 0; i < 10; i++) {
        commits.push(createCommit('update fix', i * 2 * OneHour));
      }
      const result = checkCommitAuthenticity(commits);
      expect(result.passed).toBe(true);
    });

    it('passes if commits > 10 but generic messages are <= 80%', () => {
      const commits: CommitActivity[] = [];
      // 11 commits: 8 generic, 3 specific
      // 8 / 11 = 0.727... (<= 0.8)
      for (let i = 0; i < 8; i++) {
        commits.push(createCommit('fix this bug', i * 2 * OneHour));
      }
      for (let i = 0; i < 3; i++) {
        commits.push(createCommit('Specific implementation details', (8 + i) * 2 * OneHour));
      }

      const result = checkCommitAuthenticity(commits);
      expect(result.passed).toBe(true);
    });

    it('fails if commits > 10 and generic messages > 80%', () => {
      const commits: CommitActivity[] = [];
      // 11 commits: 9 generic, 2 specific
      // 9 / 11 = 0.818... (> 0.8)
      for (let i = 0; i < 9; i++) {
        commits.push(createCommit('fix this bug', i * 2 * OneHour));
      }
      for (let i = 0; i < 2; i++) {
        commits.push(createCommit('Specific implementation details', (9 + i) * 2 * OneHour));
      }

      const result = checkCommitAuthenticity(commits);
      expect(result.passed).toBe(false);
      expect(result.flagged).toBe(true);
      expect(result.reason).toContain('excessive generic placeholder messages');
    });
  });
});
