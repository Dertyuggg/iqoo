export async function fetchRepoCode(repoUrl: string, maxFiles = 10): Promise<string> {
  const match = repoUrl.match(/github\.com\/([A-Za-z0-9-]+)\/([A-Za-z0-9_.-]+)/);
  if (!match) {
    throw new Error('Invalid GitHub URL');
  }
  const [, owner, repo] = match;
  const repoName = repo.replace(/\.git$/, '');

  const headers = {
    'User-Agent': 'IQoo-Hackathon-App',
    'Accept': 'application/vnd.github.v3+json',
  };

  // 1. Get default branch
  const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}`, { headers });
  if (!repoRes.ok) {
    throw new Error(`Failed to fetch repo info: ${repoRes.status}`);
  }
  const repoData = await repoRes.json();
  const defaultBranch = repoData.default_branch;

  // 2. Get tree
  const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repoName}/git/trees/${defaultBranch}?recursive=1`, { headers });
  if (!treeRes.ok) {
    throw new Error(`Failed to fetch repo tree: ${treeRes.status}`);
  }
  const treeData = await treeRes.json();
  const tree = treeData.tree || [];

  // 3. Filter for interesting files (source code, ignoring node_modules, dist, etc.)
  const interestingFiles = tree.filter((file: { type: string, path: string }) => {
    if (file.type !== 'blob') return false;
    const path = file.path;
    if (path.includes('node_modules/') || path.includes('.git/') || path.includes('dist/') || path.includes('build/')) {
      return false;
    }
    // Only grab common source file extensions
    return /\.(js|jsx|ts|tsx|py|java|c|cpp|go|rs|md|json)$/i.test(path);
  });

  // Limit to maxFiles
  const filesToFetch = interestingFiles.slice(0, maxFiles);

  let combinedCode = "";

  for (const file of filesToFetch) {
    const rawRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repoName}/${defaultBranch}/${file.path}`);
    if (rawRes.ok) {
      const content = await rawRes.text();
      combinedCode += `\n--- File: ${file.path} ---\n${content}\n`;
    }
  }

  return combinedCode;
}
