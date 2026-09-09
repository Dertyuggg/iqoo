# BUILD_PLAN.md — 24–36 Hour Hackathon Build
## Verified Talent & Hiring Bridge — Oviam & Dhyanesh

> This plan assumes the `.md` rule files (`AGENTS.md`, `PROJECT.md`, `VERIFICATION_PIPELINE.md`, `BUILD_ORDER.md`, `RISKS_AND_CONSTRAINTS.md`, `TECH_STACK.md`, `DATA_MODEL.md`, `COMPETITIVE_POSITIONING.md`) already sit at the repo root. Every master prompt below tells the agent to read those first — don't skip that instruction even under time pressure, it's what keeps both halves of the app consistent with each other.

## Why this split
Feature slices, not frontend/backend — each person ships something demo-able end-to-end, so if time runs out, you still have two working verticals instead of two half-finished layers.

- **Oviam owns: Student journey + the trust-critical "defend your project" flow.** This is the hardest-to-build, most novel part of the demo (judges will remember the synchronous defense round) and it's inherently full-stack (UI + a real-time/scheduled session + status logic).
- **Dhyanesh owns: Verification/scoring backend + Company-facing ranked shortlist.** This is data-and-logic heavy (commit checks, AI review, scoring) and its payoff is the company-side view that shows the "product" judges are actually paying for conceptually.

Both slices meet at the `project_submissions` table and the `verified_ranks` table — agree on those schemas in Step 0 before splitting off.

**Note:** since scaffolding (Next.js + TypeScript + Tailwind, route groups, Supabase clients) is already done, Step 0 is now ~1 hr instead of ~2, giving you back time — put it toward Step O4 / Step D4, the two hardest and highest-payoff steps.

## Timeline (24–36 hr)

| Hours | Oviam | Dhyanesh |
|---|---|---|
| 0–1 | **Step 0 (together):** verify scaffold, write schema + RLS migration | Step 0 (together) |
| 1–5 | Step 1: Auth + student profile + GitHub connect | Step 1: RLS hardening + test the migration from Step 0 |
| 6–10 | Step 2: Project submission UI + upload flow | Step 2: Commit authenticity check logic |
| 10–14 | Step 3: No-paste assessment UI | Step 3: AI project analysis integration |
| 14–20 | Step 4: Defend-your-project scheduling + session flow (the centerpiece) | Step 4: Scoring/ranking engine (`verified_ranks`) |
| 20–26 | Step 5: Student dashboard (status, roadmap stub) | Step 5: Company dashboard (ranked shortlist view) |
| 26–30 | **Together:** integration testing, seed demo data | Together |
| 30–36 | **Together:** demo script, deploy, polish | Together |

Adjust hour counts to your actual hackathon length — the step order matters more than the exact hours.

---

## Step 0 — Verify Scaffold + Write the Schema (Both, together, ~1 hr)

**Your scaffold already exists** — Next.js + TypeScript + Tailwind, `app/(student)`, `app/(company)`, `app/(auth)` route groups, and `lib/supabase/server.ts` + `client.ts` are already in place, along with all the rule `.md` files at the repo root. Step 0 is now a verification + schema-writing pass, not a from-scratch setup. Do this together at one screen — the schema is the one thing that must be agreed before splitting.

### Master Prompt — Step 0
```
Read AGENTS.md, PROJECT.md, DATA_MODEL.md, and TECH_STACK.md in this repo before doing anything else.

This project (iqoo) already has: Next.js App Router with TypeScript + Tailwind, route groups at app/(student), app/(company), app/(auth), and Supabase client utilities at lib/supabase/server.ts and lib/supabase/client.ts. Do NOT recreate any of this — inspect what exists first and confirm it matches TECH_STACK.md conventions (server client uses service role key server-only, never exposed to client bundle). Flag anything that deviates rather than silently rewriting it.

Then:
1. Create the initial Supabase migration (supabase/migrations/) implementing the core tables from DATA_MODEL.md: students, activity_events, project_submissions, authenticity_checks, ai_reviews, defense_sessions, human_audits, verified_ranks, companies, hires, performance_checkins.
2. Write RLS policies in the SAME migration file for every table, following TECH_STACK.md: students can only read/write their own data, companies can only read from verified_ranks (never raw submission/assessment data), service-role-only access for pipeline internals.
3. Confirm/set up environment variables (.env.local.example) for Supabase URL, anon key, and service role key, with clear comments on which are safe for NEXT_PUBLIC_ and which are server-only — check what's already in .env.local first rather than overwriting real credentials.
4. Add lib/verification/ as a new folder for pipeline logic (commit checks, AI review, scoring) if it doesn't already exist — this is where Dhyanesh's Step D2-D4 work will live.
5. Run `supabase gen types typescript` (or equivalent) once the migration is applied, so both of you get typed table access from the start — this matters more than usual since you're on TypeScript and splitting work across two people against the same schema.

Do not build any UI yet beyond what's already scaffolded. This step is schema + types only. When done, output the migration SQL so both team members can review the schema together before splitting into individual workstreams.
```

**Checkpoint before splitting:** both of you should read the generated migration and generated TypeScript types, and agree the table/RLS structure matches what you'll each build against. This is the single most important sync point in the whole build — since the scaffold already exists, this checkpoint is now your main "are we aligned" moment instead of a full project-setup review.

---

## OVIAM'S TRACK — Student Journey + Defend-Your-Project

### Step O1 — Auth + Student Profile + GitHub Connect (~4 hrs)

#### Master Prompt — Step O1
```
Read AGENTS.md, PROJECT.md, RISKS_AND_CONSTRAINTS.md, and TECH_STACK.md before starting.

This repo already has an app/(auth) route group and app/(student) route group scaffolded, plus lib/supabase/client.ts and server.ts. Inspect what's already there before adding files — build inside the existing route groups, don't create parallel/duplicate ones.

Build the student-facing auth and profile flow:
1. Supabase Auth-based signup/login for students (email or GitHub OAuth as the login method — reuse the OAuth token for GitHub API access afterward rather than requiring a second connection step, if practical), inside app/(auth).
2. A student profile creation form inside app/(student): name, college, domain of interest (single domain for this MVP per BUILD_ORDER.md — don't build multi-domain selection UI yet).
3. GitHub connection flow (if not already handled via GitHub OAuth login): store the GitHub username/OAuth token securely server-side per RISKS_AND_CONSTRAINTS.md #5 (never log tokens, never expose to client beyond what's needed).
4. A basic student dashboard shell inside app/(student) showing profile info and connection status (GitHub connected: yes/no) — this will be extended in Step O5, keep it minimal for now.

Do NOT build LinkedIn integration — it's excluded from v1 per RISKS_AND_CONSTRAINTS.md and BUILD_ORDER.md. Do NOT build LeetCode integration yet unless there's spare time at the end; GitHub-only is enough for MVP demo purposes.

Confirm the students table RLS policy from Step 0 actually restricts a student to only reading/writing their own row — write a quick manual test (two test accounts, confirm cross-access fails) before moving on.
```

### Step O2 — Project Submission Flow (~4 hrs)

#### Master Prompt — Step O2
```
Read VERIFICATION_PIPELINE.md and DATA_MODEL.md before starting — this is the first stage of the trust pipeline, get the status naming right.

Build the project submission flow for students:
1. A form where a student submits a project: GitHub repo URL, domain tag, short description.
2. On submission, create a project_submissions row with status = "submitted".
3. Trigger the next pipeline stage (this will call Dhyanesh's commit-authenticity-check logic once it exists — for now, stub this as an API route that Dhyanesh's Step D2 work will fill in; agree on the API contract together: input = repo URL + submission ID, output = pass/fail/flagged + written to authenticity_checks table).
4. A submission status view on the student dashboard showing where the project is in the pipeline (submitted → authenticity checked → AI reviewed → pending defense → defended → verified), pulling from the status enum — do not let the UI ever display "verified" for any status before "defended" per VERIFICATION_PIPELINE.md rule 2.

Coordinate with Dhyanesh on the exact API contract for the authenticity-check trigger before building the stub, so Step D2 slots in without rework.
```

### Step O3 — No-Paste Assessment UI (~4 hrs)

#### Master Prompt — Step O3
```
Read VERIFICATION_PIPELINE.md rule 7 before starting (no-paste is a deterrent, not a guarantee — don't oversell it in UI copy).

Build a simple in-app assessment UI for the single domain in scope:
1. A timed coding/short-answer assessment screen tied to the student's chosen domain.
2. Block paste events in the answer input (disable clipboard paste via JS, detect and log paste attempts rather than silently allowing them).
3. On submission, store the result linked to the student and feed it into activity_events (per DATA_MODEL.md, this is a raw event, not a standalone score field) so it can contribute to the consistency/streak signal later.
4. UI copy should describe this as a "protected assessment environment" or similar — do NOT describe it as "cheat-proof" anywhere in the interface, per RISKS_AND_CONSTRAINTS.md #3.

Keep this to ONE assessment for the demo domain — do not build a multi-domain assessment bank, that's beyond MVP scope per BUILD_ORDER.md.
```

### Step O4 — Defend-Your-Project Flow (~6 hrs) — THE CENTERPIECE

#### Master Prompt — Step O4
```
Read VERIFICATION_PIPELINE.md in full before starting — this is explicitly called out as the hardest-to-fake, most important stage of the entire pipeline, and the feature most likely to impress hackathon judges as the differentiator.

Build the "defend your project" flow:
1. Once a project_submission reaches status "ai_reviewed" (Dhyanesh's Step D3 output), allow the student to schedule/start a synchronous defense session. For a hackathon demo, this can be a live video call (e.g., using a simple WebRTC library, or even a scheduled Google Meet/Jitsi link generator) rather than a fully custom video infrastructure — don't over-engineer real-time video from scratch under time pressure.
2. The session must be timed (e.g., 5-10 minutes) and synchronous — do NOT build any async/pre-recorded submission path for this step, that defeats its entire purpose per VERIFICATION_PIPELINE.md.
3. Create a defense_sessions row when a session is scheduled/started, and require a pass/fail outcome to be recorded (for the hackathon demo, this can be a simple reviewer form — a teammate or judge manually marks pass/fail with notes — rather than automated evaluation; note in code comments that a real deployment would need a defined evaluator, either human reviewers at scale or a more sophisticated interactive AI evaluator).
4. On a "pass" outcome, and ONLY on a pass outcome, transition the project_submission status to "verified". Make sure this transition is literally impossible to reach any other way in the code (single function, single call site, gated on defense_sessions.outcome = 'pass').
5. Update the student dashboard to show the defense scheduling/status clearly, since this will likely be the flow you demo live to judges.

This is your highest-priority, highest-demo-value step. If time is tight, cut assessment polish (Step O3) before cutting corners here.
```

### Step O5 — Student Dashboard + Roadmap Stub (~6 hrs)

#### Master Prompt — Step O5
```
Read PROJECT.md (student-side free commitment) and BUILD_ORDER.md (roadmap tool is Step 5, lower priority) before starting.

Polish the student dashboard into a cohesive view:
1. Consolidate profile, GitHub connection status, submission pipeline status, and defense scheduling into one clean dashboard.
2. Add a minimal "roadmap" stub — this does NOT need to be a full personalized-learning-path engine for the hackathon. A simple static or lightly dynamic list of next steps based on domain and current pipeline stage is enough (e.g., "Complete your no-paste assessment," "Submit your first project"). Note in comments that a real roadmap engine is future scope per BUILD_ORDER.md Step 5.
3. Make sure nothing on this dashboard implies any paid feature — everything shown must be part of the always-free student experience per PROJECT.md.

This step is UI polish and demo-readiness, not new pipeline logic. Prioritize a clean, presentable dashboard over new features if time is short.
```

---

## DHYANESH'S TRACK — Verification Backend + Company Shortlist

### Step D1 — RLS Hardening + Migration Test (~4 hrs)

#### Master Prompt — Step D1
```
Read TECH_STACK.md (RLS section) and DATA_MODEL.md before starting. This builds on the Step 0 migration both of you wrote together — do not recreate tables, extend what's there.

Harden and test the database layer:
1. Review the Step 0 migration and add any missing indexes (e.g., on project_submissions.student_id, activity_events.student_id + timestamp, verified_ranks.domain).
2. Write and test RLS policies specifically for the company-facing read path: companies must be able to read ONLY from verified_ranks (aggregated, safe data), and must NEVER be able to query project_submissions, ai_reviews, authenticity_checks, or activity_events directly, per TECH_STACK.md and RISKS_AND_CONSTRAINTS.md #5.
3. Write a quick manual RLS test: create a test company account and a test student account, confirm the company account's queries against restricted tables fail, and queries against verified_ranks succeed and return only the expected fields.
4. Set up a companies table entry flow (for the hackathon, this can be a simple manually-inserted seed row or a basic signup form — full self-serve company onboarding is Phase 2/3 scope per BUILD_ORDER.md, don't over-build this).
5. Verify the generated TypeScript types from Step 0 are actually being imported and used in lib/supabase/server.ts and client.ts, not just generated and ignored — this is worth double-checking since the clients pre-date the schema.

Confirm with Oviam that the schema still matches what the student-side flows (Step O1-O2) expect before proceeding — this is a shared dependency.
```

### Step D2 — Commit Authenticity Check (~4 hrs)

#### Master Prompt — Step D2
```
Read VERIFICATION_PIPELINE.md and RISKS_AND_CONSTRAINTS.md #2 before starting — this stage exists specifically to catch cloned/relabeled projects, take the checks seriously even under hackathon time pressure.

Build the commit authenticity check as a server-side function/API route:
1. Given a GitHub repo URL, fetch commit history via the GitHub API (use the student's OAuth token from Step O1 if needed for private repos, or public API access for public repos).
2. Implement at least these checks: (a) commit timestamp realism — flag repos where all commits cluster suspiciously (e.g., entire history committed within minutes/hours, implying a bulk upload of an existing project), (b) commit message coherence — flag repos with generic/placeholder commit messages throughout, (c) basic diff-against-public-repos check — for a hackathon MVP, this can be a simplified check (e.g., searching GitHub for repos with highly similar file structure/names) rather than a full code-similarity engine; note the simplification in code comments as a known MVP limitation.
3. Write results to the authenticity_checks table, with an overall pass/fail/flagged status.
4. On completion, update the project_submissions status to "authenticity_checked" (if passed) or "flagged" (if failed) — a flagged submission should NOT proceed to AI review automatically per VERIFICATION_PIPELINE.md ("commit authenticity checks run before AI review, not after").
5. Expose this as the API route Oviam's Step O2 stub calls — confirm the exact input/output contract matches what was agreed in Step 0/O2.

Keep the similarity-detection logic simple and honest about its limits for a hackathon — a lightweight heuristic that visibly works in a demo beats an ambitious one that's broken.
```

### Step D3 — AI Project Analysis (~4 hrs)

#### Master Prompt — Step D3
```
Read VERIFICATION_PIPELINE.md before starting — AI analysis is a first-pass signal only, never sufficient alone for "verified" status.

Build the AI project analysis stage:
1. For a project_submission that has passed authenticity checks, fetch the repo's code (via GitHub API) and send it to an LLM (e.g., via Anthropic API or whichever provider you have access to) with a prompt asking it to evaluate: code quality, structural organization, and originality signals (does this look like genuinely authored work vs. templated/copied boilerplate).
2. Store the AI's evaluation (score/notes) in the ai_reviews table — keep the raw model output too, not just a distilled score, in case it's needed for later dispute/audit.
3. On completion, update project_submissions status to "ai_reviewed" — this status name matters, do NOT call it "verified" or anything implying final trust status, per VERIFICATION_PIPELINE.md rule 2. This status is what unlocks Oviam's Step O4 (defend-your-project scheduling becomes available once a submission reaches "ai_reviewed").
4. Handle the case where the LLM call fails or times out gracefully — don't let a failed AI review silently stall the pipeline with no visible status/error to the student.

Coordinate with Oviam on the exact status value/trigger so Step O4's defense-scheduling UI correctly unlocks when this stage completes.
```

### Step D4 — Scoring & Ranking Engine (~6 hrs)

#### Master Prompt — Step D4
```
Read VERIFICATION_PIPELINE.md rule 4 and DATA_MODEL.md (verified_ranks section) carefully before starting — this is the core "product" the business model sells to companies, get the decomposability right.

Build the scoring/ranking engine:
1. Write a function that computes a trust score for a verified student profile (i.e., one with at least one project_submission at status "verified" per Oviam's Step O4 output) from these components, STORED SEPARATELY, not blended into a single opaque number:
   - Streak/consistency component: derived from activity_events (per DATA_MODEL.md, compute this from the raw event log, don't just read a stored counter). IMPORTANT per VERIFICATION_PIPELINE.md rule 6 and RISKS_AND_CONSTRAINTS.md #4: this must NOT be a simple linear function of activity volume/hours — use a capped/plateauing function (e.g., diminishing returns past a reasonable weekly activity threshold) so it doesn't reward raw time-spent over skill. Flag this design choice in your code comments so Oviam and any judges asking about fairness can see it was deliberate.
   - Project depth component: derived from ai_reviews scores for the student's verified submissions.
   - Defense performance component: derived from defense_sessions outcomes/notes.
   - Audit adjustment component: derived from human_audits if any exist (default neutral if no audit has occurred yet — don't penalize for absence of audit).
2. Write all four components plus a computed overall score into a new verified_ranks row (versioned/timestamped — a rank is a snapshot per DATA_MODEL.md, not a mutable single field).
3. Trigger this computation whenever a project_submission reaches "verified" status (hook into Oviam's Step O4 completion) or on a scheduled/manual recompute trigger for the demo.
4. Write a simple function/endpoint to fetch a student's current rank breakdown (all four components + overall) for later use in the company dashboard (Step D5) and optionally the student dashboard (Step O5) if there's time to show students their own breakdown.

This is the most conceptually important step for demoing the business model's core claim to judges — be ready to explain the fairness-aware design choice in #1 if asked.
```

### Step D5 — Company Dashboard / Ranked Shortlist (~6 hrs)

#### Master Prompt — Step D5
```
Read PROJECT.md, BUILD_ORDER.md, and TECH_STACK.md (RLS section) before starting.

This repo already has an app/(company) route group scaffolded — build inside it rather than creating a new one.

Build the company-facing ranked shortlist view:
1. A simple company login/dashboard inside app/(company) (reuse Supabase Auth, a separate user type/role from students, and app/(auth) for the login flow if it's shared).
2. A shortlist view for the single domain in scope, listing verified student profiles ranked by overall score from verified_ranks, with each profile showing: name, college, overall score, AND the decomposed component breakdown (streak, project depth, defense performance, audit status) per VERIFICATION_PIPELINE.md rule 4 — don't just show a single number, the decomposability is part of the trust story.
3. Confirm this view queries ONLY the verified_ranks table (plus safe student display fields like name/college), never project_submissions, ai_reviews, or activity_events directly — this should already be enforced by RLS from Step D1, but double-check the actual query code doesn't attempt a join into restricted tables.
4. Do NOT build subscription billing, premium filters, or bulk hiring tools — these are Phase 2/3 per BUILD_ORDER.md. For the hackathon, a company account having access at all is sufficient (success-fee-based Phase 1 model doesn't need billing infrastructure).
5. Add a simple "request intro" or "shortlist this candidate" button that, for demo purposes, can just log an interest record — doesn't need real hiring-workflow logic behind it yet.

This is the payoff screen for judges — the one that visually demonstrates "this is what a company pays for." Make sure it looks clean even if the interest/shortlist button behind it is a stub.
```

---

## Integration & Demo Prep (Both, together, ~6–10 hrs)

### Master Prompt — Integration Testing
```
Read AGENTS.md's "fast rules" section and VERIFICATION_PIPELINE.md before starting this pass.

Run an end-to-end integration test together:
1. Create a fresh test student account, go through the FULL pipeline manually: profile creation → GitHub connect → project submission → authenticity check → AI review → defend-your-project session → verified status → appears correctly ranked in the company dashboard.
2. At each stage, confirm the status naming matches VERIFICATION_PIPELINE.md exactly (never "verified" before the defense passes).
3. Confirm a company test account can see the ranked shortlist but cannot query restricted tables (re-run the RLS test from Step D1 one more time against the full integrated app, not just the raw database).
4. Fix any broken handoffs between Oviam's and Dhyanesh's tracks — the two most likely friction points are (a) the authenticity-check API contract from Step O2/D2, and (b) the status-transition trigger from Step D3 (ai_reviewed) unlocking Step O4 (defense scheduling).

Log any known issues/limitations you don't have time to fix as a short "known limitations" list for the demo — judges respond well to honest scoping, especially for a 24-36 hour build.
```

### Master Prompt — Demo Data Seeding
```
Seed the database with realistic demo data before presenting:
1. Create 3-5 fake student profiles across different stages of the pipeline (one still at "submitted," one at "ai_reviewed" showing the defense-scheduling UI, two or three fully "verified" with different score profiles to make the ranked shortlist look meaningful rather than empty).
2. Create 1 demo company account with a shortlist view populated by the verified students above.
3. Make sure the score breakdowns for the verified students are varied and plausible (not all identical) so the ranking/decomposition actually demonstrates something when judges look at it.

Do this in a seed script (not manual UI clicking) so it's reproducible if you need to reset before the actual demo.
```

### Master Prompt — Demo Script
```
Read PROJECT.md's "real moat" section and COMPETITIVE_POSITIONING.md before writing the demo narrative.

Draft a 3-4 minute demo script that:
1. Opens with the problem (Tier-2/3 students overlooked despite skill — from PROJECT.md section 1).
2. Shows the student journey briefly (profile, submission) without dwelling — this is the expected part.
3. Spends the most time on the "defend your project" flow — this is the differentiator, walk through why it's hard to fake.
4. Shows the company-side ranked shortlist with the decomposed score breakdown, explicitly stating "this is what a company pays for, not raw data."
5. Closes with the "real moat" pitch: this isn't just features, it's the accumulation of outcome data over time — mention the hires/performance_checkins schema exists even if not fully wired up yet, as evidence you built for this from day one, not as an afterthought.
6. Briefly and confidently name 1-2 known limitations (e.g., "commit similarity checking is a simplified heuristic for this build") — this reads as credibility, not weakness, to most hackathon judges.

Keep the script conversational, not slide-read. Assign who narrates which section based on who built it (Oviam on defense flow, Dhyanesh on scoring/shortlist) so the explanations sound genuinely informed rather than memorized.
```

---

## If You're Behind Schedule — Cut List (in order)
1. Cut LeetCode integration entirely (GitHub-only is fine).
2. Cut the roadmap stub (Step O5) down to a single static list.
3. Cut human_audits UI entirely — leave the table schema-ready but unused, note it as "designed for, not built" in the demo.
4. Simplify the commit-diff-against-public-repos check (Step D2) to just the timestamp + message coherence checks.
5. Simplify defense scheduling to an immediate "start now" video call link rather than a full scheduling UI.

**Never cut:** the defend-your-project gate on "verified" status, the decomposed score breakdown, or the RLS restriction on company access to raw data. These three are what make the demo's trust claim credible — cutting any of them undermines the pitch itself, not just the polish.
