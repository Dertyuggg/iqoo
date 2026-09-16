import { verifyGithubRepo } from './lib/github-verification';
import { fetchRepoCode } from './lib/github-code-fetcher';

async function main() {
  console.log("Testing verifyGithubRepo");
  try {
    await verifyGithubRepo("https://github.com/my-owner/my_repo-123");
    console.log("Valid repo passed");
  } catch (e: any) {
    if (e.message !== 'Invalid GitHub URL') {
       console.log("Valid repo threw unexpected error", e.message);
    }
  }

  try {
    await verifyGithubRepo("https://github.com/myowner/myrepo?malicious=true");
    console.log("Invalid repo failed to throw");
  } catch (e: any) {
    console.log("Invalid repo threw expected error:", e.message);
  }

  console.log("Testing fetchRepoCode");
  try {
    await fetchRepoCode("https://github.com/owner/repo");
    console.log("Valid repo passed");
  } catch (e: any) {
     if (e.message !== 'Invalid GitHub URL') {
       console.log("Valid repo threw unexpected error", e.message);
     }
  }

  try {
    await fetchRepoCode("https://github.com/owner/repo/invalid");
    console.log("Invalid repo failed to throw");
  } catch (e: any) {
    console.log("Invalid repo threw expected error:", e.message);
  }
}
main();
