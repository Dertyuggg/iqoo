# RISKS_AND_CONSTRAINTS.md — Legal, Ethical, and Fairness Guardrails

> These are hard constraints, not suggestions. Violating any of these creates legal exposure or undermines the platform's core fairness claim. If a feature request conflicts with one of these, say so before building it.

## 1. LinkedIn — no scraping, ever
LinkedIn actively blocks and litigates against scraping. Rules:
- **Never** implement LinkedIn scraping (no headless browser automation against LinkedIn, no unofficial API calls, no scraping via third-party scraping services).
- LinkedIn integration, if built at all, must be **OAuth/consent-based only**, using LinkedIn's official API within its terms.
- LinkedIn integration is **excluded from v1** per `BUILD_ORDER.md`. Don't build it unless explicitly requested, and if requested, confirm the user understands it must be official-API/consent-based.

## 2. Commit history can be faked — never trust it blindly
A cloned project can be re-committed under a new account to fake authenticity. Any code touching commit verification must:
- Check commit timestamp realism (irregular patterns, e.g., all commits at implausible identical intervals, or a full project history committed in one burst).
- Check commit message coherence (generic/placeholder messages across a suspiciously complete history is a red flag).
- Diff submitted code against public repos to catch clones.
- Never mark a submission as passing authenticity checks based on commit *count* alone.

## 3. AI-graded verification can be gamed by AI-generated explanations
Because students could use AI to generate plausible-sounding project explanations, AI-based review stages must never be the sole gate for "verified" status. The synchronous, timed "defend your project" round exists specifically to counter this — see `VERIFICATION_PIPELINE.md`, rule 1. Do not weaken this by making the defend round optional, async, or skippable for "high AI-review scores."

## 4. Ranking bias — don't reward free time over skill
This is a fairness-critical constraint, not just a UX concern. The platform's entire premise is unlocking overlooked talent that lacks *pedigree*, not talent that has more *free time*. Concretely:
- Streak/consistency metrics must not simply reward volume (e.g., "most commits," "most hours logged," "most days active in a row" with no cap).
- When implementing scoring, prefer metrics that plateau (diminishing returns past a reasonable threshold) over unbounded linear rewards for activity volume.
- If a scoring change is proposed that would advantage students with more disposable time (e.g., unlimited assessment retakes rewarded, or streak length uncapped and heavily weighted), flag this explicitly to the user before implementing.

## 5. Student data sensitivity — DPDP Act alignment (India)
This platform handles assessment results, submitted project code, and personal data for Indian students. Baseline requirements:
- Collect only data necessary for verification and matching — no incidental personal data collection "just in case."
- Store credentials/tokens (GitHub OAuth tokens, etc.) securely — never in plaintext, never logged.
- Build with the assumption that students can request data deletion/export eventually (data model shouldn't make this structurally impossible — avoid scattering personally identifying data across denormalized tables with no way to trace/delete it).
- Do not share individual student data with companies beyond what's needed for the ranked shortlist (i.e., don't expose raw assessment answers, private repo contents, etc. to company-side views — only the verified rank/profile summary).
- This is a working baseline for planning purposes, not legal advice — flag to the user that formal DPDP compliance review should happen before real student data is processed at scale.

## 6. Free-for-students is a structural commitment, not a marketing line
Per `PROJECT.md`, this is core to the trust story. Concretely for implementation:
- Do not gate any part of the *verification pipeline itself* (streak tracking, project submission, assessments, defend-your-project, roadmap) behind a paywall.
- Optional student-side premium (extra mock interviews, resume review) must be clearly separated in the data model / feature flags from core verification features, so it's structurally obvious in code review that the core path stays free.

## 7. Chicken-and-egg / GTM constraint (not legal, but structural)
The business model in `PROJECT.md` and `BUILD_ORDER.md` explicitly avoids building for scale before proving the model with manually-seeded profiles and one pilot company. Building heavy scaling infrastructure (multi-tenant company onboarding flows, self-serve company signup, automated billing) before that proof point exists is a structural risk to flag, not just a technical one — it's effort spent before product-market signal exists.

## When in doubt
If a request seems to conflict with any rule above, don't silently comply or silently refuse — state the conflict plainly and ask how the user wants to proceed. These constraints exist because getting them wrong is expensive (legal exposure, reputational risk, or undermining the fairness claim the whole platform depends on).
