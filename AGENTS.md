# AGENTS.md — Start Here

This repo builds **a verified talent & hiring bridge for Tier-2/Tier-3 college students** (Next.js + Supabase). Before making any non-trivial change, read the relevant files below — they encode business-model-critical constraints, not just style preferences.

## Read in this order

1. **`PROJECT.md`** — what the product is, who pays, what NOT to build, current build phase. Read this first, always.
2. **`VERIFICATION_PIPELINE.md`** — mandatory before touching anything related to profiles, submissions, scoring, ranking, or "verified" status. This pipeline is the product.
3. **`BUILD_ORDER.md`** — what's in scope right now vs. later phases. Prevents scope creep.
4. **`RISKS_AND_CONSTRAINTS.md`** — legal/ethical hard limits (LinkedIn, DPDP Act, ranking fairness). These are not optional.
5. **`TECH_STACK.md`** — Next.js + Supabase conventions, RLS requirements, project structure.
6. **`DATA_MODEL.md`** — core entities, including outcome-tracking tables that must exist from day one.
7. **`COMPETITIVE_POSITIONING.md`** — sanity check against accidentally rebuilding Superset/Unstop/HackerRank/HireUp.

## Fast rules (the ones most likely to get violated)

- Students are **always free**. Never gate core verification features behind payment.
- `verified` status is **never** reachable without the defend-your-project round completing. No shortcuts.
- No LinkedIn scraping, ever. OAuth-only, and excluded from v1 anyway.
- Store component scores separately; never collapse ranking into a single opaque number.
- RLS policies are written in the same migration as the table, not after.
- Verification/scoring logic runs server-side only, never client-computed.
- Consistency/streak metrics must not simply reward time-spent volume — that recreates the inequity this platform is meant to fix.
- If a request implies skipping ahead in `BUILD_ORDER.md` or conflicts with a constraint in `RISKS_AND_CONSTRAINTS.md`, say so before proceeding — don't silently comply or silently refuse.

## Source document
All of the above is derived from `Business_Model_Talent_Platform.pdf`, a strategy/business doc (not a technical spec). It's included in this repo for reference — treat it as intent, and these `.md` files as the operational translation of that intent for coding purposes.
