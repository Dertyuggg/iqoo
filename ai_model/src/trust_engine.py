import os
import sys
import json
import joblib
import subprocess


# =========================================================
# PATHS
# =========================================================

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "models",
    "talent_trust_model.pkl"
)

FEATURES_PATH = os.path.join(
    BASE_DIR,
    "models",
    "features.pkl"
)

GITHUB_ANALYZER = os.path.join(
    BASE_DIR,
    "src",
    "github_analyzer.py"
)

PROJECT_REVIEWER = os.path.join(
    BASE_DIR,
    "src",
    "project_reviewer.py"
)


# =========================================================
# LOAD RANDOM FOREST MODEL
# =========================================================

def load_model():

    if not os.path.exists(MODEL_PATH):

        raise Exception(
            "Trust model not found. "
            "Run train_model.py first."
        )

    model = joblib.load(MODEL_PATH)
    return model

# =========================================================
# RUN GITHUB ANALYZER
# =========================================================

def run_github_analyzer(repo_url):

    print("\n")
    print("=" * 55)
    print("STEP 1: GITHUB EVIDENCE ANALYSIS")
    print("=" * 55)

    process = subprocess.run(
        [
            sys.executable,
            GITHUB_ANALYZER
        ],
        input=repo_url + "\n",
        text=True,
        capture_output=True
    )

    if process.returncode != 0:

        print(process.stdout)
        print(process.stderr)

        raise Exception(
            "GitHub Analyzer failed."
        )

    output = process.stdout

    # Find Evidence JSON
    marker = "Evidence JSON:"

    if marker not in output:

        raise Exception(
            "GitHub Analyzer did not return evidence."
        )

    json_text = output.split(
        marker,
        1
    )[1].strip()

    evidence = json.loads(
        json_text
    )

    print(
        f"\nCoding Consistency: "
        f"{evidence['coding_consistency']}/100"
    )

    print(
        f"GitHub Authenticity: "
        f"{evidence['github_authenticity']}/100"
    )

    print(
        f"Projects Completed: "
        f"{evidence['projects_completed']}"
    )

    return evidence


# =========================================================
# RUN GEMINI PROJECT REVIEWER
# =========================================================

def run_project_reviewer(project_path):

    print("\n")
    print("=" * 55)
    print("STEP 2: AI PROJECT REVIEW")
    print("=" * 55)

    process = subprocess.run(
        [
            sys.executable,
            PROJECT_REVIEWER
        ],
        input=project_path + "\n",
        text=True,
        capture_output=True
    )

    if process.returncode != 0:

        print(process.stdout)
        print(process.stderr)

        raise Exception(
            "Project Reviewer failed."
        )

    output = process.stdout

    print(output)

    return output


# =========================================================
# EXTRACT GEMINI SCORES
# =========================================================

def extract_score(
    text,
    label
):

    import re

    pattern = (
        rf"{re.escape(label)}"
        rf".*?(\d{{1,3}})"
        rf"\s*/\s*100"
    )

    match = re.search(
        pattern,
        text,
        re.IGNORECASE
    )

    if match:

        return int(
            match.group(1)
        )

    return None


def extract_project_quality(
    reviewer_output
):

    quality = extract_score(
        reviewer_output,
        "Code Quality"
    )

    return quality


# =========================================================
# CREATE TRUST ENGINE INPUT
# =========================================================

def create_features(
    github_evidence,
    project_quality
):

    # -----------------------------------------------------
    # These are currently available automatically
    # -----------------------------------------------------

    coding_consistency = (
        github_evidence[
            "coding_consistency"
        ]
    )

    github_authenticity = (
        github_evidence[
            "github_authenticity"
        ]
    )

    projects_completed = (
        github_evidence[
            "projects_completed"
        ]
    )

    # -----------------------------------------------------
    # These will be connected later
    # -----------------------------------------------------

    assessment_score = 0

    defense_score = 0

    if project_quality is None:

        project_quality = 0

    features = {

        "coding_consistency":
            coding_consistency,

        "assessment_score":
            assessment_score,

        "project_quality":
            project_quality,

        "github_authenticity":
            github_authenticity,

        "defense_score":
            defense_score,

        "projects_completed":
            projects_completed
    }

    return features


# =========================================================
# PREDICT TRUST
# =========================================================

def predict_trust(
    model,
    features
):

    feature_order = [
        "coding_consistency",
        "assessment_score",
        "project_quality",
        "github_authenticity",
        "defense_score",
        "projects_completed"
    ]

    values = [
        features[name]
        for name in feature_order
    ]

    probability = model.predict_proba(
        [values]
    )[0][1]

    prediction = model.predict(
        [values]
    )[0]

    return (
        probability,
        prediction
    )


# =========================================================
# MAIN TRUST ENGINE
# =========================================================

def main():

    print("=" * 55)
    print("        AI TALENT TRUST ENGINE")
    print("          COMPLETE ANALYZER")
    print("=" * 55)

    # -----------------------------------------------------
    # Load model
    # -----------------------------------------------------

    print("\nLoading trained Random Forest model...")

    model = load_model()

    print("Model loaded successfully.")

    # -----------------------------------------------------
    # Candidate GitHub
    # -----------------------------------------------------

    github_url = input(
        "\nEnter candidate GitHub repository URL: "
    ).strip()

    # -----------------------------------------------------
    # Candidate project
    # -----------------------------------------------------

    project_path = input(
        "Enter candidate project folder path: "
    ).strip()

    # -----------------------------------------------------
    # GitHub analysis
    # -----------------------------------------------------

    github_evidence = run_github_analyzer(
        github_url
    )

    # -----------------------------------------------------
    # Gemini project review
    # -----------------------------------------------------

    reviewer_output = run_project_reviewer(
        project_path
    )

    # -----------------------------------------------------
    # Extract project quality
    # -----------------------------------------------------

    project_quality = extract_project_quality(
        reviewer_output
    )

    # -----------------------------------------------------
    # Create model features
    # -----------------------------------------------------

    features = create_features(
        github_evidence,
        project_quality
    )

    # -----------------------------------------------------
    # Display features
    # -----------------------------------------------------

    print("\n")
    print("=" * 55)
    print("TRUST ENGINE INPUT")
    print("=" * 55)

    for name, value in features.items():

        print(
            f"{name}: {value}"
        )

    # -----------------------------------------------------
    # Prediction
    # -----------------------------------------------------

    probability, prediction = predict_trust(
        model,
        features
    )

    # -----------------------------------------------------
    # Final result
    # -----------------------------------------------------

    print("\n")
    print("=" * 55)
    print("           FINAL TRUST RESULT")
    print("=" * 55)

    print(
        f"\nTrust Probability: "
        f"{probability * 100:.2f}%"
    )

    if prediction == 1:

        print(
            "\nDecision: VERIFIED"
        )

    else:

        print(
            "\nDecision: NOT VERIFIED"
        )

    print("\n")
    print("=" * 55)


# =========================================================
# PROGRAM START
# =========================================================

if __name__ == "__main__":

    try:

        main()

    except Exception as e:

        print(
            f"\nERROR: {e}"
        )

        sys.exit(1)