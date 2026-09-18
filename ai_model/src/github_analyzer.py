import json
import re
import sys
from datetime import datetime, timezone
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError


GITHUB_API = "https://api.github.com"


# =========================================================
# GITHUB API REQUEST
# =========================================================

def github_request(endpoint):

    url = GITHUB_API + endpoint

    request = Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "Talent-Trust-Engine"
        }
    )

    try:

        with urlopen(request, timeout=15) as response:

            return json.loads(
                response.read().decode("utf-8")
            )

    except HTTPError as e:

        if e.code == 404:
            raise Exception(
                "GitHub repository not found or is private."
            )

        elif e.code == 403:
            raise Exception(
                "GitHub API rate limit reached."
            )

        raise Exception(
            f"GitHub API error: {e.code}"
        )

    except URLError:

        raise Exception(
            "Could not connect to GitHub."
        )


# =========================================================
# REPOSITORY URL PARSER
# =========================================================

def parse_repo_url(repo_url):

    repo_url = repo_url.strip().rstrip("/")

    match = re.search(
        r"github\.com/([^/]+)/([^/#]+)",
        repo_url
    )

    if not match:

        raise Exception(
            "Invalid GitHub repository URL."
        )

    owner = match.group(1)
    repo = match.group(2)

    if repo.endswith(".git"):

        repo = repo[:-4]

    return owner, repo


# =========================================================
# GET COMMIT DATES
# =========================================================

def get_commit_dates(commits):

    dates = []

    for commit in commits:

        date = (
            commit
            .get("commit", {})
            .get("author", {})
            .get("date")
        )

        if date:

            try:

                parsed_date = datetime.fromisoformat(
                    date.replace("Z", "+00:00")
                )

                dates.append(parsed_date)

            except ValueError:

                pass

    return dates


# =========================================================
# CODING CONSISTENCY ANALYSIS
# =========================================================

def calculate_consistency(commits):

    dates = get_commit_dates(commits)

    if not dates:

        return 0, {
            "active_days": 0,
            "development_span_days": 0,
            "commits_per_active_day": 0,
            "largest_daily_burst": 0
        }

    # -----------------------------------------------------
    # Active coding days
    # -----------------------------------------------------

    active_days = len(
        set(
            date.date()
            for date in dates
        )
    )

    # -----------------------------------------------------
    # Development time span
    # -----------------------------------------------------

    first_date = min(dates)
    last_date = max(dates)

    development_span_days = max(
        1,
        (last_date - first_date).days
    )

    # -----------------------------------------------------
    # Average commits per active day
    # -----------------------------------------------------

    commits_per_active_day = (
        len(commits) / active_days
    )

    # -----------------------------------------------------
    # Find largest commit burst in one day
    # -----------------------------------------------------

    daily_commits = {}

    for date in dates:

        day = date.date()

        daily_commits[day] = (
            daily_commits.get(day, 0) + 1
        )

    largest_daily_burst = max(
        daily_commits.values()
    )

    # -----------------------------------------------------
    # SCORE CALCULATION
    # -----------------------------------------------------

    # Development duration contributes up to 35 points
    span_score = min(
        35,
        (development_span_days / 120) * 35
    )

    # Active coding days contribute up to 40 points
    active_day_score = min(
        40,
        active_days * 2
    )

    # Base activity points
    base_score = 25

    # -----------------------------------------------------
    # Burst penalty
    # -----------------------------------------------------

    burst_penalty = 0

    if largest_daily_burst >= 50:

        burst_penalty = 20

    elif largest_daily_burst >= 30:

        burst_penalty = 12

    elif largest_daily_burst >= 20:

        burst_penalty = 7

    elif largest_daily_burst >= 10:

        burst_penalty = 3

    # -----------------------------------------------------
    # Final consistency score
    # -----------------------------------------------------

    consistency_score = (
        span_score
        + active_day_score
        + base_score
        - burst_penalty
    )

    consistency_score = max(
        0,
        min(100, consistency_score)
    )

    evidence = {

        "active_days": active_days,

        "development_span_days":
            development_span_days,

        "commits_per_active_day":
            round(
                commits_per_active_day,
                2
            ),

        "largest_daily_burst":
            largest_daily_burst
    }

    return (
        round(consistency_score),
        evidence
    )


# =========================================================
# COMMIT MESSAGE ANALYSIS
# =========================================================

def analyze_commit_messages(commits):

    messages = []

    for commit in commits:

        message = (
            commit
            .get("commit", {})
            .get("message", "")
        )

        if message:

            first_line = (
                message
                .split("\n")[0]
                .strip()
                .lower()
            )

            messages.append(first_line)

    if not messages:

        return 50, 0

    # Number of unique commit messages
    unique_messages = len(
        set(messages)
    )

    # Message diversity
    diversity = (
        unique_messages /
        len(messages)
    )

    message_score = diversity * 100

    # Number of repeated messages
    repetitive_commits = (
        len(messages)
        - unique_messages
    )

    return (
        round(message_score),
        repetitive_commits
    )


# =========================================================
# GITHUB AUTHENTICITY ANALYSIS
# =========================================================

def calculate_authenticity(
    repo,
    commits,
    message_score
):

    score = 0

    # -----------------------------------------------------
    # Public repository
    # -----------------------------------------------------

    if not repo.get("private", True):

        score += 20

    # -----------------------------------------------------
    # Repository description
    # -----------------------------------------------------

    if repo.get("description"):

        score += 10

    # -----------------------------------------------------
    # License
    # -----------------------------------------------------

    if repo.get("license"):

        score += 10

    # -----------------------------------------------------
    # Commit history
    # -----------------------------------------------------

    if len(commits) >= 20:

        score += 20

    elif len(commits) >= 10:

        score += 15

    elif len(commits) >= 5:

        score += 10

    # -----------------------------------------------------
    # Commit message quality
    # -----------------------------------------------------

    score += round(
        message_score * 0.15
    )

    # -----------------------------------------------------
    # Recent development activity
    # -----------------------------------------------------

    updated = repo.get(
        "updated_at"
    )

    if updated:

        try:

            updated_date = datetime.fromisoformat(
                updated.replace("Z", "+00:00")
            )

            age_days = (
                datetime.now(timezone.utc)
                - updated_date
            ).days

            if age_days <= 30:

                score += 15

            elif age_days <= 90:

                score += 8

        except ValueError:

            pass

    # -----------------------------------------------------
    # Fork penalty
    # -----------------------------------------------------

    if repo.get("fork", False):

        score -= 15

    return max(
        0,
        min(100, score)
    )


# =========================================================
# MAIN REPOSITORY ANALYZER
# =========================================================

def analyze_repository(repo_url):

    owner, repo_name = parse_repo_url(
        repo_url
    )

    print(
        "\nFetching GitHub repository..."
    )

    print(
        f"Repository: {owner}/{repo_name}"
    )

    # -----------------------------------------------------
    # Get repository information
    # -----------------------------------------------------

    repo = github_request(
        f"/repos/{owner}/{repo_name}"
    )

    # -----------------------------------------------------
    # Get commits
    # -----------------------------------------------------

    commits = github_request(
        f"/repos/{owner}/{repo_name}/commits?per_page=100"
    )

    if not isinstance(commits, list):

        commits = []

    # -----------------------------------------------------
    # Get programming languages
    # -----------------------------------------------------

    languages = github_request(
        f"/repos/{owner}/{repo_name}/languages"
    )

    # -----------------------------------------------------
    # Calculate coding consistency
    # -----------------------------------------------------

    consistency, consistency_data = (
        calculate_consistency(
            commits
        )
    )

    # -----------------------------------------------------
    # Analyze commit messages
    # -----------------------------------------------------

    message_score, repetitive_commits = (
        analyze_commit_messages(
            commits
        )
    )

    # -----------------------------------------------------
    # Calculate GitHub authenticity
    # -----------------------------------------------------

    authenticity = calculate_authenticity(
        repo,
        commits,
        message_score
    )

    # -----------------------------------------------------
    # Project count
    # -----------------------------------------------------

    if repo.get("fork", False):

        project_count = 0

    else:

        project_count = 1

    # -----------------------------------------------------
    # Create result
    # -----------------------------------------------------

    result = {

        "repository":
            f"{owner}/{repo_name}",

        "coding_consistency":
            consistency,

        "github_authenticity":
            authenticity,

        "projects_completed":
            project_count,

        "total_commits_found":
            len(commits),

        "languages":
            list(languages.keys()),

        "stars":
            repo.get(
                "stargazers_count",
                0
            ),

        "forks":
            repo.get(
                "forks_count",
                0
            ),

        "description":
            repo.get(
                "description"
            ),

        "last_updated":
            repo.get(
                "updated_at"
            ),

        "active_days":
            consistency_data[
                "active_days"
            ],

        "development_span_days":
            consistency_data[
                "development_span_days"
            ],

        "commits_per_active_day":
            consistency_data[
                "commits_per_active_day"
            ],

        "largest_daily_burst":
            consistency_data[
                "largest_daily_burst"
            ],

        "commit_message_score":
            message_score,

        "repetitive_commits":
            repetitive_commits
    }

    # =====================================================
    # DISPLAY RESULTS
    # =====================================================

    print(
        "\n========== GITHUB EVIDENCE =========="
    )

    print(
        f"Coding Consistency:   "
        f"{result['coding_consistency']}/100"
    )

    print(
        f"GitHub Authenticity:  "
        f"{result['github_authenticity']}/100"
    )

    print(
        f"Projects Completed:   "
        f"{result['projects_completed']}"
    )

    print(
        f"Commits Found:        "
        f"{result['total_commits_found']}"
    )

    print(
        f"Active Days:          "
        f"{result['active_days']}"
    )

    print(
        f"Development Span:     "
        f"{result['development_span_days']} days"
    )

    print(
        f"Commits/Active Day:   "
        f"{result['commits_per_active_day']}"
    )

    print(
        f"Largest Daily Burst:  "
        f"{result['largest_daily_burst']}"
    )

    print(
        f"Commit Message Score: "
        f"{result['commit_message_score']}/100"
    )

    print(
        f"Repetitive Commits:   "
        f"{result['repetitive_commits']}"
    )

    print(
        f"Languages:            "
        f"{', '.join(result['languages']) or 'None detected'}"
    )

    print(
        f"Stars:                "
        f"{result['stars']}"
    )

    print(
        f"Forks:                "
        f"{result['forks']}"
    )

    print(
        "======================================"
    )

    # =====================================================
    # JSON OUTPUT
    # =====================================================

    print(
        "\nEvidence JSON:"
    )

    print(
        json.dumps(
            result,
            indent=2
        )
    )


# =========================================================
# PROGRAM START
# =========================================================

if __name__ == "__main__":

    print(
        "======================================"
    )

    print(
        "     AI TALENT TRUST ENGINE"
    )

    print(
        "        GitHub Analyzer"
    )

    print(
        "======================================"
    )

    repo_url = input(
        "\nEnter GitHub repository URL: "
    ).strip()

    try:

        analyze_repository(
            repo_url
        )

    except Exception as e:

        print(
            f"\nERROR: {e}"
        )

        sys.exit(1)