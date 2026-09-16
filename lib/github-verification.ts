export async function verifyGithubRepo(repoUrl: string) {
  // 1. Parse URL
  const match = repoUrl.match(/github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9_.-]+)/);
  if (!match) {
    throw new Error('Invalid GitHub URL');
  }
  const [, owner, repo] = match;
  const repoName = repo.replace(/\.git$/, '');

  // We'll use unauthenticated requests for public repos.
  // Note: GitHub API has rate limits (60/hr for unauth).
  const headers = {
    'User-Agent': 'IQoo-Hackathon-App',
    'Accept': 'application/vnd.github.v3+json'
  };

  // Fetch commits
  const commitsRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/commits?per_page=100`, { headers });
  
  if (!commitsRes.ok) {
    if (commitsRes.status === 404) {
      throw new Error('Repository not found or is private (OAuth token required for private repos in future)');
    }
    throw new Error(`GitHub API error: ${commitsRes.status}`);
  }

  const commits = await commitsRes.json();

  if (!Array.isArray(commits) || commits.length === 0) {
    throw new Error('No commits found in repository');
  }

  // A) Timestamp Realism Check
  // Sort commits by date (oldest first)
  const sortedCommits = commits
    .map(c => new Date(c.commit.author.date).getTime())
    .sort((a, b) => a - b);
  
  let timestampPassed = true;
  let timestampReason = 'Looks realistic';
  let timeSpanHours = 0;

  if (sortedCommits.length > 5) {
    const firstCommit = sortedCommits[0];
    const lastCommit = sortedCommits[sortedCommits.length - 1];
    timeSpanHours = (lastCommit - firstCommit) / (1000 * 60 * 60);

    // If a project with >5 commits was entirely built in < 2 hours, it's highly suspicious (likely a bulk upload/clone)
    if (timeSpanHours < 2) {
      timestampPassed = false;
      timestampReason = `Suspiciously short development time: ${sortedCommits.length} commits spanned only ${timeSpanHours.toFixed(2)} hours. Likely a bulk upload.`;
    }
  }

  // B) Commit Message Coherence Check
  const messages = commits.map(c => c.commit.message.toLowerCase().trim());
  const uniqueMessages = new Set(messages);
  const uniqueMessagesRatio = uniqueMessages.size / messages.length;
  
  let coherencePassed = true;
  let coherenceReason = 'Messages are reasonably varied';
  
  const genericMessages = ['initial commit', 'update', 'wip', 'fix', 'bug fix', 'test', 'done'];
  const genericCount = messages.filter(m => genericMessages.includes(m)).length;
  
  if (messages.length > 3) {
    if (uniqueMessagesRatio < 0.3) {
      coherencePassed = false;
      coherenceReason = 'Too many repeated commit messages. Shows lack of coherent project history.';
    } else if (genericCount / messages.length > 0.5) {
      coherencePassed = false;
      coherenceReason = 'Over 50% of commit messages are generic placeholders.';
    }
  }

  // C) Diff-against-public-repos check (Simplified for MVP)
  // We search GitHub for repos with the same name to see if it's a common clone (e.g. "netflix-clone", "e-commerce-app")
  let diffPassed = true;
  let diffReason = 'Original enough for MVP check';
  let similarRepoCount = 0;

  try {
    const searchRes = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(repoName)}+in:name`, { headers });
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      similarRepoCount = searchData.total_count || 0;
      
      // If there are thousands of repos with this exact name, it's likely a generic tutorial clone
      if (similarRepoCount > 500) {
        diffPassed = false;
        diffReason = `Known MVP limitation check: Repo name '${repoName}' is highly generic (${similarRepoCount} similar repos found). Flagged for potential clone.`;
      }
    }
  } catch (err) {
    console.warn("Failed to search github repos for diff check", err);
  }

  // Overall status
  const overallPassed = timestampPassed && coherencePassed && diffPassed;
  const overallStatus = overallPassed ? 'passed' : 'flagged';

  return {
    overallStatus,
    timestamp_analysis_result: { passed: timestampPassed, reason: timestampReason, timeSpanHours },
    commit_message_coherence: { passed: coherencePassed, reason: coherenceReason, uniqueMessagesRatio },
    public_repo_diff_result: { passed: diffPassed, reason: diffReason, similarRepoCount }
  };
}
