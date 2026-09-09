# BUILD_ORDER.md — What To Build Now vs. Later

> This file exists to stop scope creep. AI agents left unchecked tend to build "complete" platforms (auth + payments + admin panels + analytics dashboards) when asked for a small feature. This project has an explicit sequence — follow it.

## The sequence (from the business model doc)

1. **"Defend your project" verification flow** — the hardest-to-copy piece, the core trust claim. Build this first, even before a polished profile UI.
2. **Launch in ONE narrow domain** (e.g., web development or DSA/backend) with manually seeded student profiles. Do not build multi-domain infrastructure prematurely — hardcode/scope to one domain first if that speeds up shipping.
3. **Land one real pilot company** on a success-fee basis — get one verified, real hire. This means: no subscription billing system needed yet. A success-fee arrangement can be tracked manually/semi-manually at this stage; don't over-engineer payment infrastructure before it's needed.
4. **Add commit-authenticity checks and human spot-audits** to strengthen verification claim.
5. **Build the free roadmap/assessment tool** as the student-side acquisition engine.
6. **Move eligible companies from success-fee to subscription** once outcome data exists.
7. **Expand domain-by-domain and college-cluster-by-cluster.**

## Practical implications for the agent

- **Before building subscription billing, payment infra, or multi-tenant company dashboards:** check whether Phase 1 (one pilot, success-fee) is actually done. If the user hasn't indicated this, ask rather than assuming Phase 2/3 infra is needed.
- **Before building multi-domain scoring/tagging systems:** confirm whether we're still in single-domain mode. It's fine to design the data model to *support* multiple domains later (see `DATA_MODEL.md`), but don't build multi-domain UI/matching logic before it's asked for.
- **LinkedIn integration is explicitly excluded from v1.** Do not implement LinkedIn OAuth or scraping unless the user explicitly asks for it and confirms they've reviewed the legal risk in `RISKS_AND_CONSTRAINTS.md`.
- **The roadmap/assessment tool (student acquisition engine) is Step 5, not Step 1.** If asked to prioritize, verification flow and single-pilot-company support come first.
- **Don't build analytics dashboards, premium filters, or bulk hiring tools** — these are Phase 3. If asked for "a company dashboard," build the minimal ranked-shortlist view, not a full analytics suite, unless told otherwise.

## When the user's request seems to skip ahead
If a request implies Phase 2/3 work (e.g., "add subscription tiers," "build the analytics dashboard") while earlier phases seem incomplete, it's fine to build what's asked — the user may have good reason (e.g., building ahead of a demo, investor pitch, or hackathon judging criteria). Just flag the sequencing mismatch briefly rather than silently ignoring `BUILD_ORDER.md`, so the decision is visible, not silently overridden.

## Definition of "MVP" for this project
The minimum viable version that proves the concept is:
- A student can create a profile, connect GitHub, submit ONE project in ONE domain.
- The project goes through: commit authenticity check → AI analysis → defend-your-project round (even if manually conducted via video call at this stage — doesn't need to be fully automated yet).
- A resulting "verified" or "not verified" status with a decomposable score.
- A simple company-side view showing verified profiles ranked for that one domain.

Anything beyond this is beyond MVP scope unless explicitly requested.
