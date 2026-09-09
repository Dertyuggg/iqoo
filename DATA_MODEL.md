# DATA_MODEL.md — Core Entities

> This is a starting schema reference, not a rigid final spec. The key requirement per `PROJECT.md` is that the data model supports outcome tracking (the real moat) from day one, even though we won't build the full feedback loop until later phases. Adjust field-level details as needed, but preserve the entity relationships and the "decomposable, traceable" principle throughout.

## Core entities

### `students`
- Basic identity + auth link (Supabase Auth user id)
- College, domain(s) of interest
- Consent flags per integration (GitHub connected? LeetCode connected? LinkedIn — excluded from v1, see `RISKS_AND_CONSTRAINTS.md`)

### `activity_events`
- Raw log of activity: GitHub commits, LeetCode submissions, in-app task completions
- One row per event, with timestamp, source, student_id
- **Do not** collapse this into a single "streak count" field on the student — streaks/consistency scores must be *derived* from this raw log so they're auditable and recomputable. See `VERIFICATION_PIPELINE.md` rule 4.

### `project_submissions`
- student_id, domain, repo link/reference, submission timestamp
- Status enum: something like `submitted` → `authenticity_checked` → `ai_reviewed` → `pending_defense` → `defended` → `verified` (or `rejected`/`flagged` at any authenticity/defense-failure point)
- **Important naming note:** do not name any intermediate status "verified" — only the final state after defend-your-project passes should be `verified`. See `VERIFICATION_PIPELINE.md` rule 2.

### `authenticity_checks`
- Linked to a project_submission
- Stores: commit timestamp analysis result, commit message coherence result, public-repo diff result, overall pass/fail/flagged
- Keep this as its own table (not fields bolted onto `project_submissions`) so audit history is traceable per `RISKS_AND_CONSTRAINTS.md` #2.

### `ai_reviews`
- Linked to a project_submission
- Stores: AI-generated code quality score, structure notes, originality signal, raw model output reference
- This is a *component* of the final score, never the final verification decision alone.

### `defense_sessions`
- Linked to a project_submission
- Scheduled time, synchronous session record/notes, pass/fail outcome, reviewer (human or structured AI-assisted) notes
- This table existing and being populated is what makes `verified` status legitimate — don't let `verified` be reachable without a row here.

### `human_audits`
- Linked to a verified project_submission or student profile
- Sampled (5-10% target per `VERIFICATION_PIPELINE.md`), audit outcome, auditor notes
- Build the schema to support this even before the audit *process* is operational — a `flagged_for_audit` boolean or sampling mechanism should exist from early on.

### `verified_ranks`
- student_id, domain, computed trust score
- **Component scores stored separately**, not just a blended final number: streak/consistency component, project depth component, defense performance component, audit adjustment
- Timestamped/versioned — a rank is a snapshot, not a mutable single field, since re-ranking should be traceable over time (also needed for the outcome-tracking moat below)

### `companies`
- Basic identity, domain(s) they're hiring for, billing phase (success_fee / subscription — see `BUILD_ORDER.md`)

### `hires` (build schema now, feedback loop logic can come later)
- Links: student_id, company_id, project_submission/verified_rank snapshot at time of hire, hire date
- This table is what makes the post-hire feedback loop possible — see `PROJECT.md` "real moat" section. It should exist from the first version of the schema even if nothing writes to it yet in Phase 1 MVP.

### `performance_checkins` (schema-ready, not necessarily built in Phase 1)
- Linked to a `hire`, e.g., a 3-month check-in from the employer
- This is explicitly called out in the business model as core infrastructure, not an afterthought — the schema should anticipate it even if the actual check-in UI/process isn't built until later.

## Principles to preserve regardless of exact schema
1. **Raw events over derived aggregates as source of truth** (activity log → streak, not streak-as-a-field).
2. **Decomposable scores, not opaque final numbers** (component scores stored, not just blended totals).
3. **Status/verification state machines should make "verified" unreachable without passing every required gate**, especially the defend-your-project round.
4. **Outcome-tracking tables (`hires`, `performance_checkins`) should exist in the schema early**, even before the workflows around them are built, because retrofitting this later means losing historical data needed for the moat.
5. **Company-facing views should read from `verified_ranks` (the safe, aggregated layer), never directly from `project_submissions`, `ai_reviews`, or `activity_events`** — this keeps sensitive underlying data out of company-facing RLS policies by construction. See `TECH_STACK.md` RLS section.
