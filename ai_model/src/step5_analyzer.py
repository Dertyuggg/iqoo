import os
import sys
import argparse
import json

from evidence_pipeline import fetch_github_evidence, fetch_project_evidence
from result_formatter import format_final_result

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

def main():
    parser = argparse.ArgumentParser(description="Step 5 AI Verification Analyzer")
    parser.add_argument("--github-url", required=True, help="Candidate's GitHub repository URL")
    parser.add_argument("--project-path", required=True, help="Local path to candidate's project")
    
    args = parser.parse_args()
    
    # 1. Fetch Evidence
    github_evidence = fetch_github_evidence(args.github_url)
    project_evidence = fetch_project_evidence(args.project_path)
    
    # Check if empty dict returned, restore None if it failed for the formatter
    raw_github = github_evidence if github_evidence and (github_evidence.get("coding_consistency", 0) != 0 or github_evidence.get("github_authenticity", 0) != 0) else None
    
    # 2. Format Final JSON Result
    final_result = format_final_result(
        github_evidence=raw_github,
        project_evidence=project_evidence
    )
    
    # Ensure output directory exists
    output_dir = os.path.join(BASE_DIR, "output")
    os.makedirs(output_dir, exist_ok=True)
    
    # Write to candidate_result.json
    output_file = os.path.join(output_dir, "candidate_result.json")
    with open(output_file, "w") as f:
        json.dump(final_result, f, indent=2)
        
    # Print exactly the JSON and nothing else to stdout for Node to capture
    print(json.dumps(final_result))
    
if __name__ == "__main__":
    main()
