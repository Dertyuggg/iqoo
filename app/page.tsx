import Link from 'next/link';

/* ───── tiny data arrays ───── */
const companies = [
  'Meridian Robotics', 'Sakhi Pay', 'Northbeam', 'Kalpa Systems',
  'Vayu Labs', 'Orbit Fintech', 'Tandem Health', 'Sixth Sense AI',
  'Meridian Robotics', 'Sakhi Pay', 'Northbeam', 'Kalpa Systems',
  'Vayu Labs', 'Orbit Fintech', 'Tandem Health', 'Sixth Sense AI',
];

const steps = [
  {
    num: 1,
    color: '#f472b6',
    title: 'Show up',
    desc: 'A daily streak of small, timed problems. Consistency is the first signal — it is also the one nobody can buy.',
    tag: '41-day median streak',
  },
  {
    num: 2,
    color: '#34d399',
    title: 'Prove the basics',
    desc: 'Assessments where pasting is blocked, tab switches are logged, and typing rhythm is recorded alongside your answer.',
    tag: 'Paste-proof · proctored',
  },
  {
    num: 3,
    color: '#60a5fa',
    title: 'Ship something',
    desc: 'Submit a project with its repo. Screenshots and a demo link are optional; the commit history is not.',
    tag: 'Repo required',
  },
  {
    num: 4,
    color: '#fbbf24',
    title: 'Get reviewed',
    desc: 'We check who actually wrote the commits, how the work was spread over time, then read the code for depth.',
    tag: 'Authorship + AI review',
  },
  {
    num: 5,
    color: '#f87171',
    title: 'Defend it live',
    desc: 'Nine minutes, questions generated from your own diff. Explain a choice you made and a bug you fixed.',
    tag: 'The part that counts',
  },
];

const verificationSteps = [
  { num: 1, title: 'Shows up daily', sub: '41-day practice streak', status: 'cleared' },
  { num: 2, title: 'Proves the basics', sub: 'Paste-proof assessment, 6 problems', status: 'cleared' },
  { num: 3, title: 'Ships something real', sub: 'Project + repo submitted', status: 'cleared' },
  { num: 4, title: 'Commits get checked', sub: 'Authorship, cadence, AI review', status: 'cleared' },
  { num: 5, title: 'Defends it live', sub: '9-minute call on her own code', status: 'checking...' },
];

const studentBenefits = [
  { bold: 'Always free.', text: 'Students never pay, at any stage.' },
  { bold: 'One profile link.', text: 'Send it instead of a résumé.' },
  { bold: 'Feedback you can act on.', text: 'Every failed check tells you what to fix.' },
  { bold: 'Works in low bandwidth.', text: 'The defence round runs on audio alone.' },
];

const companyBenefits = [
  { bold: 'Ranked by proof,', text: 'not by keyword match.' },
  { bold: 'Watch the defence.', text: 'Recordings attached to each profile.' },
  { bold: 'Pay on hire.', text: 'No listing fee, no credits to buy.' },
  { bold: 'Spot-audited.', text: 'Humans re-check a random slice every week.' },
];

const stats = [
  { value: '12,400', label: 'Verified profiles', color: 'stat-pink' },
  { value: '386', label: 'Colleges represented', color: 'stat-blue' },
  { value: '71%', label: 'Get a first-round call', color: 'stat-cyan' },
  { value: '38', label: 'Hiring teams reading', color: 'stat-yellow' },
];

export default function LandingPage() {
  return (
    <>
      {/* ╔════════════════════════════════╗
          ║           NAVBAR              ║
          ╚════════════════════════════════╝ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline/30">
        <div className="h-16 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-1">
              <div className="grid grid-cols-2 gap-0.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-primary" />
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
                <span className="w-2.5 h-2.5 rounded-sm bg-tertiary" />
                <span className="w-2.5 h-2.5 rounded-sm bg-step-4" />
              </div>
            </div>
            <span className="font-display text-[18px] text-on-surface font-extrabold tracking-tight">
              Praman
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-on-surface-variant hover:text-on-surface text-[14px] font-medium transition-colors">How it works</Link>
            <Link href="#for-students" className="text-on-surface-variant hover:text-on-surface text-[14px] font-medium transition-colors">For students</Link>
            <Link href="#for-companies" className="text-on-surface-variant hover:text-on-surface text-[14px] font-medium transition-colors">For companies</Link>
          </nav>

          {/* CTA */}
          <Link
            href="/login"
            className="px-5 py-2 rounded-full bg-on-surface text-surface text-[14px] font-semibold hover:bg-on-surface/90 transition-colors"
          >
            Start your profile
          </Link>
        </div>
      </header>

      <main className="w-full pt-16">

        {/* ╔════════════════════════════════╗
            ║        HERO SECTION           ║
            ╚════════════════════════════════╝ */}
        <section className="relative hero-bg overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl lg:py-[7rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-3xl items-center">

              {/* Left: copy */}
              <div className="flex flex-col gap-space-lg">
                {/* Social proof pill */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-on-surface-variant text-[14px]">2,140 defence rounds run this month</span>
                </div>

                <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight">
                  Your repo says<br />you built it.<br />
                  <span className="text-gradient-hero">Praman proves it.</span>
                </h1>

                <p className="text-on-surface-variant text-[16px] leading-relaxed max-w-lg">
                  A skill profile recruiters can trust — built from daily practice,
                  paste-proof assessments, real commit history, and a live round
                  where you defend what you shipped. Made for the colleges
                  hiring teams never visit.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-space-sm">
                  <Link
                    href="/login"
                    className="px-6 py-3 rounded-full bg-on-surface text-surface text-[15px] font-semibold hover:bg-on-surface/90 transition-all hover:shadow-lg hover:shadow-primary/10"
                  >
                    Start your profile — free
                  </Link>
                  <Link
                    href="#for-companies"
                    className="px-6 py-3 rounded-full border border-outline-variant text-on-surface-variant text-[15px] font-medium hover:border-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    Hire verified talent →
                  </Link>
                </div>
              </div>

              {/* Right: live verification card */}
              <div className="relative">
                <div className="bg-surface-container rounded-2xl border border-outline/50 p-6 shadow-2xl max-w-md mx-auto lg:ml-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-on-surface-variant text-[14px] font-medium">Live verification · Ananya R, Trichy</h3>
                    <span className="text-on-surface-muted text-[12px]">Build 1.3</span>
                  </div>

                  {/* Steps */}
                  <div className="flex flex-col gap-4">
                    {verificationSteps.map((s) => {
                      const isActive = s.status === 'checking...';
                      return (
                        <div
                          key={s.num}
                          className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                            isActive ? 'bg-surface-container-high border-2 pulse-border' : 'bg-surface-container-low border border-transparent'
                          }`}
                        >
                          <div
                            className="step-circle text-surface"
                            style={{ backgroundColor: steps[s.num - 1].color }}
                          >
                            {s.num}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-on-surface text-[15px] font-semibold">{s.title}</p>
                            <p className="text-on-surface-muted text-[13px] truncate">{s.sub}</p>
                          </div>
                          <span className={`text-[13px] font-semibold shrink-0 ${
                            isActive ? 'text-secondary' : 'text-success'
                          }`}>
                            {s.status}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Score footer */}
                  <div className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-outline/30">
                    <span className="text-success text-[18px]">✓</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-on-surface text-[28px] font-extrabold leading-none">84</p>
                    </div>
                    <p className="text-on-surface-muted text-[13px] text-right">
                      Verification score — shared with 38 hiring teams
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 mt-space-4xl pt-space-3xl border-t border-outline/30">
              <div>
                <p className="text-on-surface text-[28px] font-extrabold">12,400</p>
                <p className="text-on-surface-muted text-[14px]">students verified</p>
              </div>
              <div>
                <p className="text-on-surface text-[28px] font-extrabold">386</p>
                <p className="text-on-surface-muted text-[14px]">colleges, 71% Tier-2/3</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-on-surface text-[28px] font-extrabold">9 min</p>
                <p className="text-on-surface-muted text-[14px]">median defence round</p>
              </div>
            </div>
          </div>
        </section>

        {/* ╔════════════════════════════════╗
            ║      COMPANY MARQUEE          ║
            ╚════════════════════════════════╝ */}
        <section className="w-full border-y border-outline/30 py-6 overflow-hidden bg-surface-dim">
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {companies.map((c, i) => (
                <span key={i} className="mx-8 text-on-surface-variant text-[15px] font-semibold tracking-wide">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ╔════════════════════════════════╗
            ║     FIVE THINGS SECTION       ║
            ╚════════════════════════════════╝ */}
        <section id="how-it-works" className="w-full bg-surface py-space-4xl">
          <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">

            {/* Section header */}
            <div className="max-w-2xl mb-space-3xl">
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold leading-tight tracking-tight mb-space-md">
                Five things happen before<br />your profile says verified
              </h2>
              <p className="text-on-surface-variant text-[16px] leading-relaxed">
                Each stage is hard to fake on its own. Together they are close to impossible.
                You can see exactly where you are, and so can the company reading your profile.
              </p>
            </div>

            {/* Step progress bar */}
            <div className="flex items-center gap-0 mb-space-xl">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center flex-1 last:flex-initial">
                  <div
                    className="step-circle text-surface shrink-0 z-10"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-[3px] rounded-full" style={{ backgroundColor: s.color, opacity: 0.4 }} />
                  )}
                </div>
              ))}
            </div>

            {/* Step cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="bg-surface-container border border-outline/40 rounded-2xl p-5 flex flex-col gap-3 card-glow transition-all hover:-translate-y-1"
                >
                  <h3 className="text-on-surface text-[16px] font-bold">{s.title}</h3>
                  <p className="text-on-surface-variant text-[14px] leading-relaxed flex-1">{s.desc}</p>
                  <span className="text-[13px] font-semibold" style={{ color: s.color }}>{s.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ╔════════════════════════════════╗
            ║    FOR STUDENTS / COMPANIES   ║
            ╚════════════════════════════════╝ */}
        <section id="for-students" className="w-full bg-surface-dim py-space-4xl">
          <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Students card */}
              <div className="bg-surface-container border border-outline/40 rounded-2xl p-8 flex flex-col gap-5 card-glow">
                <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-primary/15 text-primary text-[13px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  For students
                </span>
                <h3 className="font-display text-[clamp(1.4rem,3vw,1.75rem)] font-extrabold leading-tight">
                  No campus drive? Fine.
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">
                  Build the proof yourself, in public, and let companies
                  come to the evidence instead of the college name.
                </p>
                <ul className="flex flex-col gap-3 mt-auto">
                  {studentBenefits.map((b) => (
                    <li key={b.bold} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0 mt-0.5 text-[14px]">✓</span>
                      <p className="text-[14px] text-on-surface-variant">
                        <strong className="text-on-surface">{b.bold}</strong> {b.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Companies card */}
              <div id="for-companies" className="bg-surface-container border border-outline/40 rounded-2xl p-8 flex flex-col gap-5 card-glow">
                <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full bg-success/15 text-success text-[13px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  For companies
                </span>
                <h3 className="font-display text-[clamp(1.4rem,3vw,1.75rem)] font-extrabold leading-tight">
                  Shortlist, not slush pile.
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">
                  Every candidate arrives with a score you can open up
                  — stage by stage, with the evidence attached.
                </p>
                <ul className="flex flex-col gap-3 mt-auto">
                  {companyBenefits.map((b) => (
                    <li key={b.bold} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0 mt-0.5 text-[14px]">✓</span>
                      <p className="text-[14px] text-on-surface-variant">
                        <strong className="text-on-surface">{b.bold}</strong> {b.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ╔════════════════════════════════╗
            ║       BIG STATS SECTION       ║
            ╚════════════════════════════════╝ */}
        <section className="w-full bg-surface py-space-4xl">
          <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface-container border border-outline/40 rounded-2xl p-6 text-center card-glow">
                  <p className={`text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none mb-2 ${s.color}`}>
                    {s.value}
                  </p>
                  <p className="text-on-surface-muted text-[14px]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ╔════════════════════════════════╗
            ║         FINAL CTA             ║
            ╚════════════════════════════════╝ */}
        <section className="w-full bg-surface py-space-4xl">
          <div className="max-w-[900px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="cta-glass rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-tight text-gradient-cta">
                Start the streak today.<br />Be verified by next month.
              </h2>
              <p className="text-on-surface-variant text-[16px] max-w-md">
                It takes eleven minutes to set up and one problem a day to keep going.
              </p>
              <Link
                href="/login"
                className="mt-2 px-8 py-3.5 rounded-full bg-on-surface text-surface text-[15px] font-semibold hover:bg-on-surface/90 transition-all hover:shadow-xl hover:shadow-primary/20"
              >
                Create my profile
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ╔════════════════════════════════╗
          ║           FOOTER              ║
          ╚════════════════════════════════╝ */}
      <footer className="w-full border-t border-outline/30 bg-surface-dim">
        <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-on-surface-muted text-[14px]">
            Praman — verified talent, wherever you studied.
          </p>
          <p className="text-on-surface-muted text-[13px]">
            Built at a 36-hour hackathon · Next.js + Supabase
          </p>
        </div>
      </footer>
    </>
  );
}
