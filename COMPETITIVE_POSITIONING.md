# COMPETITIVE_POSITIONING.md — What Not to Accidentally Rebuild

> This space isn't empty. Knowing what existing players do helps the agent avoid quietly drifting the product toward a different, already-occupied model. Use this as a sanity check when a new feature is proposed.

## The landscape

| Player | What they do | Where we differ |
|---|---|---|
| **Superset** | End-to-end campus hiring SaaS for universities and employers; large existing college/company network | Superset digitizes existing campus drives. We **replace the need for a drive** with a pre-verified ranked pool. If a feature starts to look like "digitizing a campus drive workflow" (scheduling drive dates, managing drive logistics), that's Superset's model, not ours. |
| **Unstop** | Learning, competitions, mentorship, and jobs in one funnel | Unstop is broad and competition-led. We are **narrower and verification-led**. If a feature pulls toward "add more competition types" or "add a general mentorship marketplace," that's scope drift toward Unstop's model. |
| **HackerEarth / HackerRank** | Skill assessments used directly by companies, often bypassing campus drives entirely | These test raw problem-solving. We add **real project verification and consistency tracking**, not just test scores. If a feature reduces us to "just another coding test platform" with assessments as the primary product (rather than supporting project verification), that's drift toward this model. |
| **HireUp / similar hackathon projects** | GitHub/LinkedIn/LeetCode-based scoring for Tier-2/3 students | This validates the problem is real, but our edge must be **verification depth** — commit authenticity + defend-your-project — not just aggregating public profile data. If a feature is "just aggregate more platforms into a score" without adding verification depth, it's not differentiated from this category. |

## How to use this file
When a new feature is proposed, a quick check:
- Does this feature deepen **verification** (commit authenticity, defend-your-project, audits, outcome tracking)? → Aligned with our differentiation.
- Does this feature just add **more data aggregation** (more platforms, more scores) without a verification layer? → Drifting toward HireUp-style aggregation; ask whether verification depth should come first.
- Does this feature add **general competitions/learning content/mentorship**? → Drifting toward Unstop; probably out of scope unless explicitly requested.
- Does this feature digitize **campus drive logistics** (managing drive scheduling, university-side event management)? → Drifting toward Superset; probably out of scope.
- Does this feature turn assessments into the **primary product** rather than a supporting signal for project verification? → Drifting toward HackerRank/HackerEarth; check against `VERIFICATION_PIPELINE.md`, which treats project + defense as the core, assessments as one input.

This isn't a hard block — the user may have valid reasons to build something that resembles a competitor's feature. The point is to surface the resemblance so it's a conscious decision, not an accidental one.
