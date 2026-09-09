# TECH_STACK.md — Next.js + Supabase Conventions

> Stack: Next.js (App Router) + Supabase (Postgres, Auth, Storage). These are the working conventions for this repo. Deviate only with explicit user approval.

## Core stack
- **Frontend/Framework:** Next.js, App Router (not Pages Router) unless the repo already uses Pages Router — check before assuming.
- **Database:** Supabase Postgres.
- **Auth:** Supabase Auth. Use Row Level Security (RLS) as the primary access control mechanism — see below, this is not optional given the data sensitivity in `RISKS_AND_CONSTRAINTS.md`.
- **Storage:** Supabase Storage for any file uploads (project files, resumes, etc.), never store binary blobs directly in Postgres columns.
- **Styling:** Tailwind CSS (default assumption for this stack) unless told otherwise.

## Row Level Security is mandatory, not optional
Given student data sensitivity (assessment results, project code, personal data — see `RISKS_AND_CONSTRAINTS.md` #5), every table containing student or company data must have RLS policies defined before it's usable, not added later as a "hardening pass." Concretely:
- Students can read/write their own profile and submissions, not others'.
- Companies can read only verified/ranked profile *summaries* for domains they have access to — never raw assessment data, private submission details, or other companies' shortlists.
- Service-role/admin operations (e.g., human spot-audits, AI review pipeline writes) should go through server-side code with the service role key, never exposed to the client.
- When creating a new table, write the RLS policy in the same migration, not a follow-up one.

## Environment & secrets
- Supabase service role key: server-side only (API routes / server actions), never in client components, never in `NEXT_PUBLIC_*` env vars.
- GitHub OAuth tokens, LeetCode integration tokens, etc.: store encrypted or via Supabase Vault if available; never log them, never return them in API responses beyond what's needed client-side.

## Suggested project structure (adapt to what already exists in the repo — check first)
```
/app
  /(student)/...          — student-facing routes (profile, submissions, roadmap)
  /(company)/...          — company-facing routes (ranked shortlist, domain views)
  /(auth)/...             — auth flows
  /api/...                — API routes (webhooks, server-side verification pipeline steps)
/lib
  /supabase/               — Supabase client setup (server + client variants)
  /verification/           — commit authenticity checks, scoring logic — keep this isolated and well-tested, see VERIFICATION_PIPELINE.md
/supabase
  /migrations/             — SQL migrations including RLS policies
```

## Server vs. client components
- Default to Server Components. Use Client Components only when needed (interactivity, hooks, browser APIs like clipboard-paste blocking for no-paste assessments).
- Verification pipeline logic (commit checks, AI analysis calls, scoring) belongs server-side — API routes or server actions, never computed client-side where it could be tampered with. This is a security requirement, not just a code-organization preference: a client-computed trust score is trivially fakeable.

## Database migrations
- All schema changes go through Supabase migrations (`supabase/migrations`), not manual dashboard edits, so schema history stays reproducible and is documented — see `DATA_MODEL.md` for schema starting point.
- Every migration that adds a table with student or company data must include its RLS policy in the same file.

## Testing expectations
- Verification pipeline logic (`/lib/verification`) should have unit tests given how central it is to the business model — see `VERIFICATION_PIPELINE.md`. A regression here isn't a normal bug.
- RLS policies should be tested (Supabase supports policy testing) before merging, especially for company-facing read access — a leaked policy could expose student data across companies.

## When something isn't specified here
If a technical decision isn't covered (e.g., a specific library choice, deployment target), make a reasonable choice consistent with the Next.js + Supabase ecosystem and state the assumption, rather than blocking on it — per general working style, proceed and flag the assumption rather than stalling.
