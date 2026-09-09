# PROJECT.md — Verified Talent & Hiring Bridge

> This is the single source of truth for what this product is and why. Every other rule file assumes you've read this. If a coding decision conflicts with anything here, stop and flag it instead of guessing.

## One-line description
A platform where Tier-2/Tier-3 college students build a **verified** skill profile (projects + assessments + consistency tracking), and companies pay for a ranked, pre-qualified shortlist instead of running campus drives.

## Who pays, who doesn't
- **Students: always free.** This is not a "freemium with a paywall later" situation — the free-for-students principle is the trust story and the acquisition engine. Never design a feature that quietly paywalls something students need to get verified or discovered.
- **Companies pay**, and the pricing model evolves in phases:
  - **Phase 1 (Pilot):** success/placement fee only — company pays only when a hire completes.
  - **Phase 2 (Growth):** subscription for ranked shortlist access per domain.
  - **Phase 3 (Scale):** subscription + premium filters/analytics + optional bulk hiring tools.
  - **Optional/later:** student-side premium (extra mock interviews, resume review) — secondary revenue only, must never compromise the free core.

## The actual product (core pillars)
1. **Profile & consistency tracking** — GitHub, LeetCode, and consent-based LinkedIn integration, plus an in-platform streak counter that measures *sustained* activity, not one-off performance.
2. **Verified project submissions** — real projects, checked for authenticity via commit history, reviewed by AI.
3. **Anti-cheat assessments** — no-paste, tamper-resistant, domain-specific.
4. **"Defend your project" round** — synchronous, timed, the student explains their own project live. This is the hardest step to fake and the core trust claim of the whole platform.
5. **Personalized roadmap** — free, assessment-driven learning path from fundamentals to job-readiness.
6. **Company-side ranked shortlist** — verified, ranked candidate pool per domain instead of manual sourcing/screening.

## What we are actually selling
Companies are not paying for data. They're paying for a **trustworthy rank**. If the verification pipeline is weak, the entire business model collapses — there is no fallback value proposition. See `VERIFICATION_PIPELINE.md` before touching anything related to scoring, ranking, or submission review.

## The real moat (don't forget this while building)
Individual features (assessments, streak counters, AI review) are replicable by competitors within months. The durable moat is **accumulated outcome data**: verified project → hired → performed well, repeated across enough students that companies trust the rank as a genuine performance predictor. This means:
- Post-hire feedback loops (e.g., 3-month employer check-ins) are core infrastructure, not a "nice to have" or Phase 3 afterthought. Design the data model from day one so this is possible later without a rewrite.
- Don't over-invest in UI polish at the expense of the data pipeline that makes outcome tracking possible.

## Explicit non-goals / things NOT to build casually
- Do **not** build LinkedIn scraping. Ever. LinkedIn actively blocks and litigates this. Only OAuth/consent-based LinkedIn connection is allowed, and it's excluded from v1 entirely — see `RISKS_AND_CONSTRAINTS.md`.
- Do **not** build a generic job board, competition platform, or mentorship marketplace. That's Unstop's model, not ours. Stay narrow and verification-led.
- Do **not** build raw problem-solving test infrastructure as the primary product (that's HackerRank/HackerEarth's model). Assessments exist to support project verification, not replace it.
- Do **not** design ranking that rewards raw time-spent/hours-logged over demonstrated skill — this recreates the inequity (favoring students with more free time) the platform exists to fix. See `RISKS_AND_CONSTRAINTS.md`.
- Do **not** build features that optimize for "what looks good to companies" at the expense of student outcomes. If a feature helps companies filter/see more but doesn't help students get better or get discovered fairly, question it.

## Current build phase
**Pre-MVP / Phase 1 target.** Per `BUILD_ORDER.md`, the immediate priority is the "defend your project" verification flow — not a full-featured platform. Resist scope creep toward Phase 2/3 features (subscriptions, premium analytics, bulk hiring tools) until Phase 1 is proven with one real pilot hire.

## Reference documents in this rule set
- `VERIFICATION_PIPELINE.md` — the trust/scoring system, mandatory reading before touching ranking or submission logic
- `BUILD_ORDER.md` — sequencing; what to build now vs. later
- `RISKS_AND_CONSTRAINTS.md` — legal, ethical, and fairness constraints (DPDP Act, LinkedIn, ranking bias)
- `TECH_STACK.md` — Next.js + Supabase conventions for this repo
- `DATA_MODEL.md` — core entities and how they relate, built to support outcome tracking from day one
- `COMPETITIVE_POSITIONING.md` — what NOT to accidentally rebuild (Superset, Unstop, HackerRank, HireUp)

## Source document
This entire rule set is derived from `Business_Model_Talent_Platform.pdf` (business/strategy doc, not a technical spec). Business logic decisions should trace back to that document's intent. If the agent is ever unsure whether a feature aligns with the business model, re-read this file and `VERIFICATION_PIPELINE.md` before proceeding, and ask the user rather than assuming.
