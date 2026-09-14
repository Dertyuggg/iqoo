import Link from 'next/link';
import Navbar from '@/components/Navbar';

import { createClient } from '@/lib/supabase/server';

export default async function StudentDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: student } = user ? await supabase.from('students').select('*').eq('id', user.id).single() : { data: null };
  const fullName = student?.full_name || user?.user_metadata?.full_name || 'Anonymous User';
  const firstName = fullName.split(' ')[0];

  return (
    <>
      <Navbar activePath="/dashboard" />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
<div className="max-w-[1280px] mx-auto w-full px-gutter-mobile lg:px-gutter-desktop py-space-xl space-y-space-xl">
{/* Top Greeting Banner & Momentum Stats */}
<section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-container to-tertiary text-on-primary p-space-lg lg:p-space-xl shadow-xl">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-fixed opacity-10 blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-20 w-64 h-64 rounded-full bg-secondary-container opacity-20 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-white/15 backdrop-blur-md text-primary-fixed font-badge text-badge tracking-wider uppercase">
<span className="material-symbols-outlined text-[16px]">bolt</span> Momentum Surge
          </div>
<h1 className="font-headline-lg text-headline-lg tracking-tight font-extrabold text-on-primary">
            Welcome back, {firstName}! 🚀
          </h1>
<p className="font-body-lg text-body-lg text-primary-fixed-dim/95 leading-relaxed">
            Your profile strength is in the <span className="text-secondary-fixed font-semibold">top 15%</span> this week!
          </p>
</div>
<div className="flex items-center gap-space-sm">
<Link className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]" href="/profile/setup">
<span className="material-symbols-outlined text-[20px]">visibility</span>
<span>View Public Showcase</span>
</Link>
<Link href="/profile/edit" className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-white/20 hover:bg-white/30 text-on-primary font-label-lg text-label-lg shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]">
<span className="material-symbols-outlined text-[20px]">edit</span>
<span>Edit Profile</span>
</Link>
</div>
</div>
{/* Quick Stats Row */}
<div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-xl pt-space-lg border-t border-white/10">
<div className="flex flex-col p-space-sm rounded-2xl bg-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
<div className="flex items-center justify-between text-primary-fixed-dim">
<span className="font-label-md text-label-md uppercase tracking-wider">Profile Views</span>
<span className="material-symbols-outlined text-[18px]">trending_up</span>
</div>
<div className="mt-space-2xs flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero-mobile lg:text-display-hero font-extrabold leading-none">48</span>
<span className="font-badge text-badge text-secondary-fixed font-semibold">+32% wk</span>
</div>
</div>
<div className="flex flex-col p-space-sm rounded-2xl bg-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
<div className="flex items-center justify-between text-primary-fixed-dim">
<span className="font-label-md text-label-md uppercase tracking-wider">Inquiries</span>
<span className="material-symbols-outlined text-[18px]">mail</span>
</div>
<div className="mt-space-2xs flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero-mobile lg:text-display-hero font-extrabold leading-none">3</span>
<span className="font-badge text-badge text-secondary-fixed font-semibold">Active direct</span>
</div>
</div>
<div className="flex flex-col p-space-sm rounded-2xl bg-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
<div className="flex items-center justify-between text-primary-fixed-dim">
<span className="font-label-md text-label-md uppercase tracking-wider">Verified Skills</span>
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="mt-space-2xs flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero-mobile lg:text-display-hero font-extrabold leading-none">4</span>
<span className="font-badge text-badge text-primary-fixed font-semibold">Gold standard</span>
</div>
</div>
<div className="flex flex-col p-space-sm rounded-2xl bg-white/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
<div className="flex items-center justify-between text-primary-fixed-dim">
<span className="font-label-md text-label-md uppercase tracking-wider">Showcase Proof</span>
<span className="material-symbols-outlined text-[18px]">rocket_launch</span>
</div>
<div className="mt-space-2xs flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero-mobile lg:text-display-hero font-extrabold leading-none">2</span>
<span className="font-badge text-badge text-white/80 font-medium">1 in audit</span>
</div>
</div>
</div>
</section>
{/* Main Workspace Layout: Asymmetric 8 / 4 Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* Left Main Column (8 cols): Actionable Personal Growth & Projects */}
<div className="lg:col-span-8 space-y-space-xl">
{/* 1. Next Milestones (Growth Launchpad) */}
<section className="bg-surface-container-lowest rounded-3xl p-space-lg lg:p-space-xl shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg">
<div>
<div className="flex items-center gap-space-xs">
<span className="h-3 w-3 rounded-full bg-secondary-container"></span>
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">Your Growth Trajectory</span>
</div>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface mt-space-2xs">Recommended Next Steps</h2>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-badge text-badge text-primary bg-primary/10 px-space-sm py-space-2xs rounded-full font-bold">Step 2 of 3 Completed</span>
</div>
</div>
{/* Milestones Cards */}
<div className="space-y-space-md">
{/* Milestone 1: Flagship Project Submission */}
<div className="group relative overflow-hidden p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[26px]">terminal</span>
</div>
<div className="space-y-space-2xs">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-title-md text-title-md font-bold text-on-surface">Submit your flagship project</h3>
<span className="px-space-xs py-space-2xs rounded-md bg-secondary-fixed text-on-secondary-fixed font-badge text-badge">Ready to link</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      Showcase your top projects to boost your visibility.
                    </p>
</div>
</div>
<div className="shrink-0 flex items-center md:self-center">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-secondary-container text-on-secondary font-label-lg text-label-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform" data-path="submit-project" href="#">
<span>Submit Project</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/* Milestone 2: System Design Verification */}
<div className="group relative overflow-hidden p-space-lg rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all shadow-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-2xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 shadow-md">
<span className="material-symbols-outlined text-[26px]">schema</span>
</div>
<div className="space-y-space-2xs">
<div className="flex items-center gap-space-xs flex-wrap">
<h3 className="font-title-md text-title-md font-bold text-on-surface">Verify your System Design &amp; API skills</h3>
<span className="px-space-xs py-space-2xs rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-badge text-badge">45 min benchmark</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                      Unlock the <span className="font-semibold text-primary">"Verified Backend"</span> credential.
                    </p>
</div>
</div>
<div className="shrink-0 flex items-center md:self-center">
<a className="w-full md:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all" data-path="skill-assessment" href="#">
<span>Start Assessment</span>
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
</a>
</div>
</div>
</div>
{/* Milestone 3: Completed GitHub Sync */}
<div className="p-space-md lg:p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md opacity-90">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">check_circle</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Connect your GitHub account</h3>
<span className="px-space-xs py-space-2xs rounded-full bg-primary/15 text-primary font-badge text-badge flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">done</span> Synced
                    </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Account: <span className="font-mono font-medium text-primary">@{firstName.toLowerCase()}-dev</span>
                  </p>
</div>
</div>
<div className="shrink-0 flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">verified_user</span> Continuous Sync Active
              </div>
</div>
</div>
</section>
{/* 2. Your Active Showcase Projects */}
<section className="space-y-space-md">
<div className="flex items-center justify-between">
<div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">layers</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">Showcase Projects</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Engineered solutions backed by real repositories and live endpoints</p>
</div>
<a className="font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold inline-flex items-center gap-1" data-path="submit-project" href="#">
<span>+ Add New Work</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Project 1: DistroPay */}
<article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
<div className="relative h-44 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Modern abstract software dashboard showing financial analytics and micro-lending metrics with teal illuminated UI lines, ambient dark teal and white accents, high fidelity tech render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAszcDvFfp5-lf9KuPI2IlkLITSPLrxHNTvvWPE79kv9pAfXyTfnGEdEimytu76GC-3QZ2Z6QHifN1akaNmSyTm7WICtQn-WWKmV9i4pwBDTIlbJPGXwSMFzZt4ktzpjhVb_HnSOipqcZ2x17NlTXvbAyZ5HOx8jeWOhecn4qJhTYpRuzHZjE_fGcm76AcOux--DXYxgx1xgqcb-xujOzJgWkbCAu5UribU1yiGzPLOsR2lAvMpqhQ19g"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary/95 text-on-primary font-badge text-badge shadow-md backdrop-blur-md">
<span className="material-symbols-outlined text-[13px]">verified</span> Verified &amp; Public
                  </span>
</div>
<div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 text-on-surface font-badge text-badge backdrop-blur-sm font-mono">Next.js</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 text-on-surface font-badge text-badge backdrop-blur-sm font-mono">TypeScript</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 text-on-surface font-badge text-badge backdrop-blur-sm font-mono">Tailwind</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    DistroPay: Web3 Micro-lending Interface
                  </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    A decentralized collateral management app.
                  </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-2xs text-primary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[16px]">insights</span>
<span>32 recruiter clicks</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-space-2xs rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Live Preview" type="button">
<span className="material-symbols-outlined text-[20px]">open_in_new</span>
</button>
<button className="p-space-2xs rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Verification Report" type="button">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
</button>
</div>
</div>
</div>
</article>
{/* Project 2: Realtime Collaborative Editor */}
<article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
<div className="relative h-44 w-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Minimalist code editor and collaborative document interface with multi-cursor avatars, real-time sync indicators, clean typography on cool grey and soft cyan backdrop, software architecture UI" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzoi6SsclBQGYhao5YIRi6kruM9YB7Oyx4ROKEs5kqAhVetoDV8LCzZF6mdSZKzu7tYV0BjtyDV1-KQUQDeZe2RsdUkmuG-F_gxs4vr9P42SuhMw_9uu1dz5SmNed2hpBmCeE1Mz3p6Z9UAxkgfnqazllsxxm1UWSUqD7PxuTuLp_hHKuGjDJNK3FLwYfaDw0CdHI7vOTP7haEswDxEeVsshn7LVXaPC6JoKiFAcOx09asptx19SHwg"/>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary font-badge text-badge shadow-md">
<span className="material-symbols-outlined text-[13px] animate-spin">sync</span> In Review (Est. 12h)
                  </span>
</div>
<div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 text-on-surface font-badge text-badge backdrop-blur-sm font-mono">Go</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 text-on-surface font-badge text-badge backdrop-blur-sm font-mono">WebSockets</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest/90 text-on-surface font-badge text-badge backdrop-blur-sm font-mono">Redis</span>
</div>
</div>
<div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    Realtime Collaborative Markdown Editor
                  </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Distributed CRDT text synchronization engine.
                  </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-2xs text-secondary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[16px]">hourglass_top</span>
<span>Automated test harness: 100% pass</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-space-2xs rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Check Audit Log" type="button">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
</button>
</div>
</div>
</div>
</article>
</div>
</section>
</div>
{/* Right Sidebar (4 cols): Credential Badges, Market Demand, Community Events */}
<aside className="lg:col-span-4 space-y-space-lg">
{/* 1. Verified Builder Badge Preview & Export */}
<div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-tertiary to-secondary-container"></div>
<div className="flex items-center justify-between mb-space-md pt-space-xs">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold">Authenticated Credential</span>
<span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
</div>
{/* Shiny Metallic Gradient Card Preview */}
<div className="relative rounded-2xl p-space-lg bg-gradient-to-br from-[#0b1c30] via-[#005049] to-[#008378] text-white shadow-xl overflow-hidden group">
{/* Shimmer Effect */}
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center">
<span className="material-symbols-outlined text-primary-fixed text-[24px]">workspace_premium</span>
</div>
<span className="font-badge text-badge px-space-xs py-space-2xs rounded bg-white/20 uppercase tracking-widest text-primary-fixed-dim">Tier-1 Level</span>
</div>
<div className="space-y-space-2xs">
<span className="font-label-md text-label-md text-primary-fixed-dim tracking-wide">VERIFIED TALENT CREDENTIAL</span>
<h4 className="font-headline-sm text-headline-sm font-extrabold text-white tracking-tight">Tier-1 Verified Full-Stack</h4>
<p className="font-body-sm text-body-sm text-white/80">Issued to <strong className="text-white">{fullName}</strong> • Token #VT-9482</p>
</div>
{/* Inline Trust Graphic */}
<div className="mt-space-md pt-space-sm border-t border-white/15 flex items-center justify-between text-white/70 font-label-md text-label-md">
<span className="flex items-center gap-1 font-mono text-[11px]"><span className="w-2 h-2 rounded-full bg-primary-fixed"></span> Cryptographically Signed</span>
<span className="font-badge text-badge">Oct 2025</span>
</div>
</div>
{/* Action Buttons */}
<div className="mt-space-md space-y-space-xs">
<button className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-colors" id="embedBadgeBtn" type="button">
<span className="material-symbols-outlined text-[18px]">share</span>
<span>Embed in Resume / LinkedIn</span>
</button>
<div className="hidden text-center font-body-sm text-body-sm text-primary font-semibold py-1" id="embedToast">
              Copied markdown embed code &amp; badge badge link!
            </div>
</div>
</div>

</aside>
</div>
</div>
</div>
</main>
      <footer className="w-full bg-surface-container-low"><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-2xl"><div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl"><div className="flex flex-col items-center md:items-start gap-space-2xs"><div className="flex items-center gap-space-xs"><span className="font-title-md text-title-md text-on-surface font-bold">Verified Talent</span><span className="font-badge text-badge text-primary bg-surface-container px-space-xs py-space-2xs rounded-full">India Edition</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Built for ambitious builders across India</p></div><nav className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">About Verified Talent</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">For Employers</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Student Success Stories</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">College Partnerships</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy &amp; Terms</a></nav></div><div className="pt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant">© 2025 Verified Talent. Democratizing career credibility through proof-of-work.</div></div></footer>
    </>
  );
}
