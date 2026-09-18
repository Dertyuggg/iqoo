'use client';

import Link from 'next/link';
import { useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroEntrance, { HeroStats } from '@/components/HeroEntrance';
import CountUpStat from '@/components/CountUpStat';
import FadeIn from '@/components/FadeIn';

const LiveVerificationChain = dynamic(() => import('@/components/LiveVerificationChain'), {
  ssr: false,
  loading: () => <div className="bg-surface-container rounded-2xl border border-outline/50 p-6 shadow-2xl max-w-md mx-auto lg:ml-auto h-[320px]" />,
});

const PipelineRail = dynamic(() => import('@/components/PipelineRail'), {
  ssr: false,
  loading: () => <div className="h-[400px]" />,
});

const CursorGlowPanel = dynamic(() => import('@/components/CursorGlowPanel'), {
  ssr: false,
  loading: () => <div className="bg-surface-container border border-outline/40 rounded-2xl p-8 h-[300px]" />,
});

/* ───── tiny data arrays ───── */
const companies = [
  'Meridian Robotics', 'Sakhi Pay', 'Northbeam', 'Kalpa Systems',
  'Vayu Labs', 'Orbit Fintech', 'Tandem Health', 'Sixth Sense AI',
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
  { value: 12400, label: 'Verified profiles', color: 'stat-pink' },
  { value: 386, label: 'Colleges represented', color: 'stat-blue' },
  { value: 71, suffix: '%', label: 'Get a first-round call', color: 'stat-cyan' },
  { value: 38, label: 'Hiring teams reading', color: 'stat-yellow' },
];

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
            Login
          </Link>
        </div>
      </header>

      <main className="w-full pt-16">

{/* ╔════════════════════════════════╗
            ║        HERO SECTION           ║
            ╚═════════════════════════════════╝ */}
        <section className="relative hero-bg overflow-hidden" style={{ contain: 'layout style paint' }}>
          <div className="aurora-layer" aria-hidden="true">
            <span className="aurora-orb aurora-violet" />
            <span className="aurora-orb aurora-magenta" />
            <span className="aurora-orb aurora-cyan" />
            <span className="aurora-orb aurora-amber" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-4xl lg:py-[7rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-3xl items-center">

              {/* Left: copy */}
              <HeroEntrance heroRef={heroRef} />

              {/* Right: live verification card */}
              <div className="relative">
                <div className="bg-surface-container rounded-2xl border border-outline/50 p-6 shadow-2xl max-w-md mx-auto lg:ml-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-on-surface-variant text-[14px] font-medium">Live verification · Ananya R, Trichy</h3>
                    <span className="text-on-surface-muted text-[12px]">Build 1.3</span>
                  </div>

                  <Suspense fallback={<div className="bg-surface-container rounded-2xl border border-outline/50 p-6 shadow-2xl max-w-md mx-auto lg:ml-auto h-[320px]" />}>
  <LiveVerificationChain />
</Suspense>
                </div>
              </div>
            </div>

            <HeroStats heroRef={heroRef} />
          </div>
        </section>

        {/* ╔════════════════════════════════╗
            ║      COMPANY MARQUEE          ║
            ╚════════════════════════════════╝ */}
        <section className="w-full border-y border-outline/30 py-6 overflow-hidden bg-surface-dim" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}>
          <div className="marquee-viewport relative w-full overflow-hidden">
            <div className="marquee-track whitespace-nowrap">
              {[false, true].map((isDuplicate) => (
                <div key={String(isDuplicate)} className="marquee-set" aria-hidden={isDuplicate}>
                  {companies.map((company) => (
                    <span key={company} className="mx-8 text-on-surface-variant text-[15px] font-semibold tracking-wide">
                      {company}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

{/* ╔════════════════════════════════╗
            ║     FIVE THINGS SECTION       ║
            ╚═════════════════════════════════╝ */}
        <section id="how-it-works" className="w-full bg-surface py-space-4xl" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px', contain: 'layout style paint' }}>
          <FadeIn className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">

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

            <Suspense fallback={<div className="h-[400px]" />}>
  <PipelineRail />
</Suspense>
          </FadeIn>
        </section>

{/* ╔════════════════════════════════╗
            ║    FOR STUDENTS / COMPANIES   ║
            ╚═════════════════════════════════╝ */}
        <section id="for-students" className="w-full bg-surface-dim py-space-4xl" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 700px', contain: 'layout style paint' }}>
          <FadeIn className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Students card */}
              <Suspense fallback={<div className="bg-surface-container border border-outline/40 rounded-2xl p-8 h-[300px]" />}>
                <CursorGlowPanel hue="#a78bfa" className="bg-surface-container border border-outline/40 rounded-2xl p-8 flex flex-col gap-5 card-glow transition-transform hover:-translate-y-1 hover:shadow-lg">
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
                </CursorGlowPanel>
              </Suspense>

              {/* Companies card */}
              <Suspense fallback={<div className="bg-surface-container border border-outline/40 rounded-2xl p-8 h-[300px]" />}>
                <CursorGlowPanel id="for-companies" hue="#34d399" className="bg-surface-container border border-outline/40 rounded-2xl p-8 flex flex-col gap-5 card-glow transition-transform hover:-translate-y-1 hover:shadow-lg">
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
              </CursorGlowPanel>
            </Suspense>
            </div>
          </FadeIn>
        </section>

{/* ╔════════════════════════════════╗
            ║       BIG STATS SECTION       ║
            ╚═════════════════════════════════╝ */}
        <section ref={statsRef} className="w-full bg-surface py-space-4xl" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px', contain: 'layout style paint' }}>
          <FadeIn className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, index) => (
                <div key={s.label} className="bg-surface-container border border-outline/40 rounded-2xl p-6 text-center card-glow hover:-translate-y-1 transition-transform hover:shadow-lg" style={{ transitionDelay: `${index * 50}ms` }}>
                  <p className={`text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none mb-2 ${s.color}`}>
                    <CountUpStat value={s.value} suffix={s.suffix} rootRef={statsRef} />
                  </p>
                  <p className="text-on-surface-muted text-[14px]">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

{/* ╔════════════════════════════════╗
            ║         FINAL CTA             ║
            ╚═════════════════════════════════╝ */}
        <section className="w-full bg-surface py-space-4xl" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px', contain: 'layout style paint' }}>
          <FadeIn className="max-w-[900px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
            <div className="cta-glass rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6">
              <h2 className="font-display text-[clamp(1.6rem,4vw,2.5rem)] font-extrabold leading-tight text-gradient-cta">
                Start the streak today.<br />Be verified by next month.
              </h2>
              <p className="text-on-surface-variant text-[16px] max-w-md">
                It takes eleven minutes to set up and one problem a day to keep going.
              </p>
              <Link
                href="/login"
                className="mt-2 px-8 py-3.5 rounded-full bg-on-surface text-surface text-[15px] font-semibold hover:bg-on-surface/90 transition-all hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-primary/20"
              >
                Create my profile
              </Link>
            </div>
          </FadeIn>
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
