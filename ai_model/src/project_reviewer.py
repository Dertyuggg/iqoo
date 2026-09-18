import os
import time
import json
from pathlib import Path
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

ALLOWED_EXTENSIONS = {
    ".py", ".js", ".jsx", ".ts", ".tsx",
    ".java", ".c", ".cpp", ".h", ".cs",
    ".html", ".css", ".sql", ".json",
    ".md", ".txt"
}

IGNORED_DIRS = {
    "node_modules", ".git", "dist", "build",
    ".next", "__pycache__", "venv", ".venv"
}


def collect_files(project_path):
    files = []

    for path in Path(project_path).rglob("*"):
        if not path.is_file():
            continue

        if any(part in IGNORED_DIRS for part in path.parts):
            continue

        if path.suffix.lower() not in ALLOWED_EXTENSIONS:
            continue

        try:
            content = path.read_text(encoding="utf-8", errors="ignore")

            # Prevent extremely large files from overwhelming the model
            if len(content) > 12000:
                content = content[:12000] + "\n...[truncated]"

            files.append({
                "file": str(path.relative_to(project_path)),
                "content": content
            })

        except Exception:
            continue

    return files


def analyze_project(project_path):
    files = collect_files(project_path)

    if not files:
        print("No supported source files found.")
        return

    print(f"\nCollected {len(files)} source files.")
    print("Sending project evidence to Gemini...\n")

    project_text = "\n\n".join(
        f"===== FILE: {item['file']} =====\n{item['content']}"
        for item in files
    )

    prompt = f"""
You are an AI software project reviewer for a talent verification platform.

Analyze the submitted project evidence below.

Evaluate ONLY what can reasonably be supported by the provided files.
Do not assume features exist if there is no evidence.

Give scores from 0 to 100 for:

1. code_quality
2. project_depth
3. project_structure
4. documentation
5. technical_complexity
6. originality_signal

Also provide:
- strengths: 3 short points
- weaknesses: 3 short points
- summary: short explanation

Return ONLY valid JSON in exactly this structure:

{{
  "code_quality": 0,
  "project_depth": 0,
  "project_structure": 0,
  "documentation": 0,
  "technical_complexity": 0,
  "originality_signal": 0,
  "strengths": [],
  "weaknesses": [],
  "summary": ""
}}

PROJECT EVIDENCE:

{project_text}
"""
    for attempt in range(4):
        try:
            response = client.models.generate_content(
                model="gemini-3.6-flash",
                contents=prompt
            )
            break
        except Exception as e:
            if attempt == 3:
                raise

            wait = 5 * (2 ** attempt)
            print(f"Gemini busy. Retrying in {wait} seconds...")
            time.sleep(wait)
  
    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "").replace("```", "").strip()

    try:
        result = json.loads(text)
    except json.JSONDecodeError:
        print("Gemini returned invalid JSON:")
        print(text)
        return

    print("========== AI PROJECT REVIEW ==========")
    print(f"Code Quality:         {result['code_quality']}/100")
    print(f"Project Depth:        {result['project_depth']}/100")
    print(f"Project Structure:    {result['project_structure']}/100")
    print(f"Documentation:        {result['documentation']}/100")
    print(f"Technical Complexity: {result['technical_complexity']}/100")
    print(f"Originality Signal:   {result['originality_signal']}/100")

    print("\nStrengths:")
    for item in result["strengths"]:
        print(f"- {item}")

    print("\nWeaknesses:")
    for item in result["weaknesses"]:
        print(f"- {item}")

    print("\nSummary:")
    print(result["summary"])

    print("\n========================================")


if __name__ == "__main__":
    project_path = input(
        "Enter project folder path to analyze: "
    ).strip().strip('"')

    if not os.path.isdir(project_path):
        print("Invalid project folder.")
    else:
        analyze_project(Path(project_path))
