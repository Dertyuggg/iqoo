# VERIFICATION_PIPELINE.md — The Core Differentiator

> Read this before writing any code that touches: student profiles, project submissions, scoring, ranking, assessments, or anything labeled "verified." This pipeline IS the product. A bug or shortcut here is a business-model-level bug, not a normal bug.

## Why this file exists
Companies pay for a **trustworthy rank**, not raw data. If any stage of this pipeline can be silently bypassed, faked, or watered down "to ship faster," the entire value proposition breaks — there's no secondary reason for a company to pay. Treat shortcuts here as P0, not tech debt.

## The pipeline stages, in order

| Stage | Purpose | Implementation notes |
|---|---|---|
| **Streak tracking** | Signal of sustained consistency | Continuous activity log across coding platforms (GitHub, LeetCode) + in-app tasks. Must be a running log over time, NOT a one-time snapshot score. Store raw activity events, compute streak derived from them — don't just store a "streak count" integer as the source of truth. |
| **No-paste assessments** | Reduce copy-paste cheating | Block paste events in the assessment UI (disable clipboard paste, detect paste attempts). Document clearly in code comments that this raises the bar but is **not** fully cheat-proof — don't oversell this stage's guarantee anywhere in UI copy either. |
| **Project submission** | Real, applied proof of skill | Students submit actual projects tied to a specific domain. Domain tagging is required metadata, not optional. |
| **Commit authenticity check** | Detect cloned/relabeled projects | Check commit timestamp realism (irregular/suspicious patterns), commit message coherence, and diff against public repos to catch clones. This must run BEFORE AI project analysis, not after — no point AI-reviewing a clone. |
| **AI project analysis** | Automated first-pass review | Evaluates code quality, structure, originality signals. This is a first pass, not the final word — never let AI analysis alone produce a "verified" status. |
| **"Defend your project" round** | Confirm genuine understanding | Synchronous, timed Q&A on the student's own project. This is explicitly called out as **the hardest step to fake** — it must be a required gate, not skippable, and not something that can be done async or pre-recorded (defeats the purpose). |
| **Human spot-audits** | Independent credibility check | Manual review of a sample (5–10%) of verified profiles. Needs to be built into the data model from day one (flaggable/sampleable records) even if the actual human review process is manual/off-platform initially. |
| **Verified profile + rank** | Output shown to companies | A trust score reflecting consistency + verified project depth — **never a single test score**. The rank must be explainable/decomposable (which stages contributed what) — don't collapse it into an opaque single number with no breakdown, since disputes and audits will need to trace back through it. |

## Hard rules for the agent

1. **Never let a profile show as "verified" without passing the defend-your-project round.** If you're building a status field, the state machine must make this state unreachable any other way. No admin override shortcuts unless explicitly built as an audited exception path.
2. **Never treat AI project analysis as sufficient on its own for verification status.** It's a pre-filter/first-pass, always. Naming matters: don't call an AI-analysis-only status "Verified" anywhere in code, DB enums, or UI — call it something like `ai_reviewed` or `pending_defense`.
3. **Commit authenticity checks run before AI review**, not in parallel or after. If a submission fails authenticity checks, it should be flagged/rejected before consuming AI review resources.
4. **The ranking/scoring algorithm must be decomposable.** Store component scores (streak signal, project depth, defense performance, audit status) separately in the data model, not just a final blended number. This supports explaining rank to companies and disputing/re-auditing later.
5. **Design for the post-hire feedback loop from day one**, even if you're not building it in Phase 1. The data model needs a way to eventually attach "hired" and "3-month performance check-in" data back to a specific verified profile/rank snapshot. See `DATA_MODEL.md`.
6. **Consistency ≠ raw time spent.** When implementing streak/consistency logic, do not simply reward volume of commits/hours logged. This risks favoring students with more free time, which recreates the inequity problem the platform exists to solve. If you're unsure whether a proposed streak metric has this bias, flag it to the user rather than shipping it.
7. **No-paste and AI grading are not marketed or coded as "cheat-proof."** If you're writing UI copy, docs, or comments referencing these features, they raise the cost of cheating — they don't eliminate it. Overselling this creates legal/trust risk.

## When extending this pipeline
If a new verification signal is proposed (e.g., a new integration, a new type of check), ask before implementing:
- Does it measure genuine skill/understanding, or just activity volume?
- Can it be gamed by an AI-generated or automated submission, and if so, is there a synchronous human-verifiable check counterbalancing it?
- Does it advantage students with more free time/resources over students with genuine but time-constrained skill?

If any answer is unclear, surface it to the user before building — this file's rules exist because getting this wrong undermines the whole business, not just one feature.
