# GIT_WORKFLOW.md — Branching Rules

> These rules apply to every AI coding agent working on this repo, for both Oviam's and Dhyanesh's tracks. The core rule is simple and non-negotiable: **no code reaches `main` without the user explicitly saying so.**

## The hard rule

1. **Every feature/step gets its own branch.** Never work directly on `main`. Before starting any step from `BUILD_PLAN.md`, create a branch for it.
2. **Never push to `main`, merge to `main`, or open a merge that auto-merges to `main` without the user explicitly giving permission in that conversation.** Finishing a feature, passing your own tests, or the code "looking done" is NOT permission. The agent must stop and ask.
3. **Verification happens before the permission-ask, not instead of it.** "I verified it, so I merged it" is never acceptable — verification is what earns the right to *ask*, not the right to *act*.

## Branch naming

Use `<person>/<step-id>-<short-description>`, matching the step IDs from `BUILD_PLAN.md`:

- `oviam/o1-auth-profile`
- `oviam/o2-project-submission`
- `oviam/o3-assessment-ui`
- `oviam/o4-defend-flow`
- `oviam/o5-dashboard`
- `dhyanesh/d1-rls-hardening`
- `dhyanesh/d2-authenticity-check`
- `dhyanesh/d3-ai-review`
- `dhyanesh/d4-scoring-engine`
- `dhyanesh/d5-company-dashboard`
- `shared/step0-schema` for the joint Step 0 work

If a step gets split into smaller chunks, extend the branch name (`oviam/o4-defend-flow-scheduling`) rather than reusing one branch for unrelated work.

## Required flow for every step

1. Agent creates the branch from the latest `main` before writing any code for that step.
2. Agent does the work, per that step's master prompt in `BUILD_PLAN.md`.
3. Agent runs whatever verification the step calls for (manual RLS test, integration check, etc. — see the step's prompt) **on the branch**, not after merging.
4. Agent reports back: what was built, what was verified, and how — then **explicitly asks the user for permission to merge to `main`.**
5. Only after the user replies with clear permission (e.g., "merge it," "push to main," "yes go ahead") does the agent merge/push to `main`.
6. If the user says anything short of clear permission (silence, "looks good" without mentioning merging, a question, a request for a change) — do not merge. Treat ambiguity as "not yet."

## What "asking for permission" should look like

The agent should state it plainly, not bury it in other text — e.g.:

> "Step O2 (project submission flow) is done and verified — submission creates a `project_submissions` row with status `submitted`, and the authenticity-check trigger stub matches the API contract agreed with Dhyanesh. This is on branch `oviam/o2-project-submission`. Want me to merge this to `main`?"

Not:

> "Step O2 is done." *(and then merges anyway)*

## Shared-table collision rule

Because Oviam's and Dhyanesh's tracks meet at `project_submissions` and `verified_ranks` (per `BUILD_PLAN.md`), any branch that changes the schema or status-transition logic for either of those tables should be flagged to the other person before asking the user for merge permission — not just merged silently even with user permission, since it could break the other track's in-progress branch. A quick "this touches a table Dhyanesh/Oviam's track depends on, heads up" is enough; the user's merge permission is still required either way.

## Migration files specifically

`supabase/migrations/` is the highest-collision-risk area since both tracks touch the schema.
- Never edit an existing migration file that's already been merged to `main` — add a new migration for schema changes, even small ones.
- If two branches both add migrations, the second to merge needs to be re-checked against `main` post-merge (migration ordering matters) before it's asked about — don't just merge and hope.

## What this does NOT block
This rule governs `main` only. Agents can freely commit, amend, and push to their own feature branch without asking each time — the permission gate is specifically for merging into `main`. Don't ask permission for every commit; ask once, when the step/feature is complete and ready to be reviewed for merge.

## If the user is away / unresponsive
If a step finishes and the user hasn't responded yet, the agent should keep working on the next step on its own branch (or wait, if there's nothing else to do) — never merge in the meantime "to save time." A finished-but-unmerged branch is a safe state; an unreviewed merge to `main` is not.
