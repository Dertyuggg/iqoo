import os
import sys
import json
import subprocess
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GITHUB_ANALYZER = os.path.join(BASE_DIR, "src", "github_analyzer.py")
PROJECT_REVIEWER = os.path.join(BASE_DIR, "src", "project_reviewer.py")

def fetch_github_evidence(repo_url):
    try:
        process = subprocess.run(
            [sys.executable, GITHUB_ANALYZER],
            input=repo_url + "\n",
            text=True,
            capture_output=True,
            timeout=45
        )
        
        if process.returncode != 0:
            print(f"GitHub Analyzer failed: {process.stderr}", file=sys.stderr)
            return None
            
        output = process.stdout
        marker = "Evidence JSON:"
        
        if marker not in output:
            print("GitHub Analyzer did not return evidence JSON.", file=sys.stderr)
            return None
            
        json_text = output.split(marker, 1)[1].strip()
        evidence = json.loads(json_text)
        return evidence
        
    except subprocess.TimeoutExpired:
        print("GitHub Analyzer timed out.", file=sys.stderr)
        return None
    except Exception as e:
        print(f"Error fetching GitHub evidence: {e}", file=sys.stderr)
        return None


def fetch_project_evidence(project_path):
    try:
        process = subprocess.run(
            [sys.executable, PROJECT_REVIEWER],
            input=project_path + "\n",
            text=True,
            capture_output=True,
            timeout=180
        )
        
        output = process.stdout
        
        # Check for Gemini failure
        if "Gemini returned invalid JSON" in output or process.returncode != 0:
            print(f"Project Reviewer failed or invalid JSON. Stdout: {output[:500]}", file=sys.stderr)
            return None
            
        # Parse scores from standard output based on format:
        # Code Quality:         85/100
        # Project Depth:        88/100
        
        scores = {}
        patterns = {
            "code_quality": r"Code Quality:\s*(\d{1,3})/100",
            "project_depth": r"Project Depth:\s*(\d{1,3})/100",
            "project_structure": r"Project Structure:\s*(\d{1,3})/100",
            "documentation": r"Documentation:\s*(\d{1,3})/100",
            "technical_complexity": r"Technical Complexity:\s*(\d{1,3})/100",
            "originality_signal": r"Originality Signal:\s*(\d{1,3})/100"
        }
        
        for key, pattern in patterns.items():
            match = re.search(pattern, output)
            if match:
                scores[key] = int(match.group(1))
            else:
                scores[key] = 0
                
        # If all scores are 0 and there was no proper output
        if all(v == 0 for v in scores.values()):
            return None
            
        return scores
        
    except subprocess.TimeoutExpired:
        print("Project Reviewer timed out.", file=sys.stderr)
        return None
    except Exception as e:
        print(f"Error fetching Project evidence: {e}", file=sys.stderr)
        return None
