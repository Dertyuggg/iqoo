import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 w-full px-margin-screen flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg shrink-0"><div className="flex items-center gap-space-sm cursor-pointer"><img alt="Verified Talent Enterprise Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XrceQ0HNYxstspvn9SssTKMfknl_hTdwNNROdupTbXNmQ088VoG4E-Q9yu5eoS6IdaHAFOCALRUC_P2KnyP76lQunWOKK5v_MbVuin3DbkWHojLsRUOuMkL8ra7Zun7sdh2hcqBN8zy_sNAOCkAvcJohuEyFRHmOPQZ0GybHZBKLuZyVq1KDU22AmPEEJn0am5hYvnZ2CeGbN8X2FelK5Xl39e_djFW1rOiyufmTvldTQRR4JIYXM5ObQ"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">Verified Talent</span><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-space-2xs">Enterprise Sourcing Portal</span></div></div><nav className="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-surface-container-high text-on-surface font-semibold"><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="solutions-overview" href="#">Product &amp; Solutions</a><div className="flex items-center"><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="verified-talent-pool" href="#">Talent Pool</a><span className="ml-space-2xs px-space-xs py-space-2xs rounded-full bg-surface-container text-on-tertiary-container font-data-mono text-data-mono font-semibold">4,850+ Verified</span></div><div className="flex items-center"><a aria-current="page" className="px-space-sm py-space-xs rounded-lg transition-colors bg-surface-container-high text-on-surface font-semibold" data-path="candidate-pipeline" href="#">Shortlist &amp; Pipeline</a><span className="ml-space-2xs px-space-xs py-space-2xs rounded-full bg-secondary text-on-secondary font-data-mono text-data-mono font-bold">12</span></div><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="campus-partnerships" href="#">Campus Partnerships</a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="enterprise-pricing" href="#">Pricing &amp; Plans</a></nav></div><div className="flex items-center gap-space-md shrink-0"><div className="relative hidden lg:block w-72"><span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span><input className="w-full h-9 pl-8 pr-space-sm bg-surface-container-low hover:bg-surface-container focus:bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none transition-colors" placeholder="Quick search candidates, skills, colleges..." type="text"/></div><a className="hidden sm:inline-flex items-center justify-center h-9 px-space-base bg-secondary text-on-secondary hover:bg-secondary-container rounded-lg font-label-md text-label-md transition-colors shadow-sm" data-path="book-enterprise-demo" href="#">Book Demo</a><button aria-label="Notifications" className="relative p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span></button><div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYSVFJ50Xmp7PTUFofY4n7Z8LfH59VEVZH1noLt0K7-wvzWLzodKbkRTzlzkRGYuf2Ysm4WRFZ2xd_2Id5qzgiNaIjUzrHyNC62B-BhszRm3c2OzEfbaKTE7eQyqREgIhs-cXbB-bo0eTgiUYDcb_4Tf0olohtL6ltNkvJZaKor5lncXsjJk3MDaf-qh_GzcsebkDWzNjgIhKtRrRUGVCDw0iZbPLx6YvutDNTn81dkXmPg5Hs5OK8yQ"/><div className="hidden md:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface leading-tight group-hover:text-secondary transition-colors">Priya Nair</span><span className="font-label-sm text-label-sm text-outline leading-tight">VP Talent @ Zepto</span></div><span className="material-symbols-outlined text-outline text-[16px] group-hover:text-on-surface transition-colors">expand_more</span></div></div></div></header><main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">
{/* Top Ambient Glow & Metric Grid Header */}
<section className="relative w-full px-margin-screen pt-space-xl pb-space-lg overflow-hidden bg-surface-container-low">
<div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-secondary-fixed opacity-40 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 right-10 w-72 h-72 rounded-full bg-surface-container-highest opacity-60 blur-2xl pointer-events-none"></div>
<div className="relative flex flex-col gap-space-lg">
{/* Breadcrumb & Status Pill */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="hover:text-on-surface cursor-pointer">Sourcing Workspace</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Active Shortlists</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="px-space-xs py-space-2xs bg-surface-container rounded-full text-secondary font-data-mono text-data-mono font-semibold">SDE-1 Cohort 2025</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest shadow-sm px-space-sm py-space-xs rounded-full">
<span className="inline-block w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
<span className="font-data-mono text-data-mono text-on-surface font-semibold">ATS Webhook: Synchronized (2m ago)</span>
<span className="material-symbols-outlined text-outline text-[14px] cursor-pointer hover:text-on-surface">sync</span>
</div>
</div>
{/* Page Head Title & Primary CTA Suite */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex items-center gap-space-sm">
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Saved Candidate Shortlist</h1>
<span className="px-space-xs py-space-2xs rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-bold tracking-wider">Enterprise Pool</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Track, evaluate, and collaborate with your engineering hiring team on pre-vetted campus engineering profiles with verified system architecture benchmarks.
          </p>
</div>
{/* Global Pipeline Action Suite */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="h-9 px-space-base bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg shadow-sm font-label-md text-label-md flex items-center gap-space-xs transition-colors" id="export-csv-btn">
<span className="material-symbols-outlined text-[18px] text-outline">file_download</span>
<span>Export Pipeline to CSV</span>
</button>
<button className="h-9 px-space-base bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg shadow-sm font-label-md text-label-md flex items-center gap-space-xs transition-colors" id="sync-ats-btn">
<span className="material-symbols-outlined text-[18px] text-secondary">swap_horiz</span>
<span>Sync ATS (Greenhouse/Lever)</span>
</button>
<button className="h-9 px-space-base bg-secondary text-on-secondary hover:bg-secondary-container rounded-lg shadow-sm font-label-md text-label-md flex items-center gap-space-xs transition-colors" id="create-pipeline-btn">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Create Custom Role Pipeline</span>
</button>
</div>
</div>
{/* Pipeline Stage Counters Bar (Interactive Segment Filter) */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm pt-space-xs">
{/* Filter Card 1: All */}
<div className="stage-card active-stage p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-2xs cursor-pointer hover:shadow-md transition-all" role="button" tabIndex={0}>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Pool</span>
<span className="material-symbols-outlined text-secondary text-[16px]">folder_special</span>
</div>
<div className="flex items-baseline justify-between mt-space-2xs">
<span className="font-display-sm text-display-sm text-on-surface font-bold">12</span>
<span className="font-data-mono text-data-mono text-secondary font-semibold">100% active</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">All Saved</span>
</div>
{/* Filter Card 2: Intro Requested */}
<div className="stage-card p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-2xs cursor-pointer hover:shadow-md transition-all" role="button" tabIndex={0}>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Outreach</span>
<span className="material-symbols-outlined text-surface-tint text-[16px]">outgoing_mail</span>
</div>
<div className="flex items-baseline justify-between mt-space-2xs">
<span className="font-display-sm text-display-sm text-on-surface font-bold">5</span>
<span className="font-data-mono text-data-mono text-outline">41.6%</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Intro Requested</span>
</div>
{/* Filter Card 3: Interview Scheduled */}
<div className="stage-card p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-2xs cursor-pointer hover:shadow-md transition-all" role="button" tabIndex={0}>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Evaluations</span>
<span className="material-symbols-outlined text-secondary text-[16px]">calendar_today</span>
</div>
<div className="flex items-baseline justify-between mt-space-2xs">
<span className="font-display-sm text-display-sm text-on-surface font-bold">3</span>
<span className="font-data-mono text-data-mono text-secondary font-semibold">High Priority</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Interview Scheduled</span>
</div>
{/* Filter Card 4: Offers Extended */}
<div className="stage-card p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-2xs cursor-pointer hover:shadow-md transition-all" role="button" tabIndex={0}>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Closing</span>
<span className="material-symbols-outlined text-surface-tint text-[16px]">workspace_premium</span>
</div>
<div className="flex items-baseline justify-between mt-space-2xs">
<span className="font-display-sm text-display-sm text-on-surface font-bold">2</span>
<span className="font-data-mono text-data-mono text-on-tertiary-container font-semibold">Avg 3.2d TAT</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Offers Extended</span>
</div>
{/* Filter Card 5: Hired */}
<div className="stage-card p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-2xs cursor-pointer hover:shadow-md transition-all" role="button" tabIndex={0}>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Closed-Won</span>
<span className="material-symbols-outlined text-on-tertiary-container text-[16px]">verified</span>
</div>
<div className="flex items-baseline justify-between mt-space-2xs">
<span className="font-display-sm text-display-sm text-on-surface font-bold">2</span>
<span className="font-data-mono text-data-mono text-on-tertiary-container font-semibold">Accepted</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant font-medium">Hired</span>
</div>
</div>
</div>
</section>
{/* Filter Rail & View Controls */}
<div className="w-full px-margin-screen py-space-sm bg-surface-container-lowest shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
<div className="flex flex-wrap items-center justify-between gap-space-md">
{/* Search, Tag Filter, and Quick Slices */}
<div className="flex flex-wrap items-center gap-space-sm flex-1 min-w-[280px]">
<div className="relative w-full max-w-xs">
<span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-outline text-[18px]">filter_alt</span>
<input className="w-full h-9 pl-9 pr-space-sm bg-surface-container-low focus:bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none transition-all shadow-inner" placeholder="Filter by candidate, college, or skill..." type="text"/>
</div>
<div className="hidden sm:flex items-center gap-space-2xs">
<button className="h-9 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-space-xs transition-colors">
<span>Specialization: All</span>
<span className="material-symbols-outlined text-[14px] text-outline">expand_more</span>
</button>
<button className="h-9 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-space-xs transition-colors">
<span>Score: Top 5% Only</span>
<span className="px-space-2xs bg-secondary text-on-secondary rounded-full font-data-mono text-[10px]">90+</span>
</button>
<button className="h-9 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-space-xs transition-colors">
<span>Assigned: Any</span>
<span className="material-symbols-outlined text-[14px] text-outline">expand_more</span>
</button>
</div>
</div>
{/* View Selector & Side Comparison Toggle */}
<div className="flex items-center gap-space-sm">
<div className="flex items-center p-space-2xs rounded-lg bg-surface-container-low">
<button className="px-space-sm py-space-2xs rounded-md bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-[16px]">view_list</span>
<span>Dense Table</span>
</button>
<button className="px-space-sm py-space-2xs rounded-md text-outline hover:text-on-surface font-label-sm text-label-sm flex items-center gap-space-2xs transition-colors">
<span className="material-symbols-outlined text-[16px]">view_kanban</span>
<span>Kanban Board</span>
</button>
</div>
<button className="h-9 px-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-space-xs transition-colors" id="toggle-compare-drawer">
<span className="material-symbols-outlined text-secondary text-[18px]">compare_arrows</span>
<span>Matrix Compare (2)</span>
</button>
</div>
</div>
</div>
{/* Main Layout Split: Table + Realtime Side Comparison Matrix Drawer */}
<div className="w-full px-margin-screen py-space-lg flex flex-col xl:flex-row items-start gap-space-lg">
{/* Candidates Table Section */}
<div className="w-full xl:flex-1 min-w-0 flex flex-col gap-space-md">
{/* Data Table Container */}
<div className="w-full overflow-x-auto rounded-xl bg-surface-container-lowest shadow-sm">
<table className="w-full text-left font-body-sm text-body-sm border-collapse">
<thead>
<tr className="bg-surface-container-low h-10 font-label-sm text-label-sm uppercase tracking-wider text-outline select-none">
<th className="w-10 pl-space-base text-center">
<input className="w-4 h-4 rounded text-secondary bg-surface-container-lowest focus:ring-0 cursor-pointer" id="select-all-candidates" type="checkbox"/>
</th>
<th className="py-space-xs px-space-sm">Candidate &amp; University</th>
<th className="py-space-xs px-space-sm">Trust Score</th>
<th className="py-space-xs px-space-sm">Verified Tech Stack</th>
<th className="py-space-xs px-space-sm">Pipeline Status</th>
<th className="py-space-xs px-space-sm">Assigned Lead</th>
<th className="py-space-xs pr-space-base text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/* Row 1: Ananya Sharma (Selected for Compare) */}
<tr className="h-16 hover:bg-surface-container-low/70 transition-colors group bg-secondary-fixed/10">
<td className="w-10 pl-space-base text-center">
<input defaultChecked className="candidate-row-select w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" data-candidate-id="1" type="checkbox"/>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Professional studio portrait of Ananya Sharma, an Indian female software engineer with glasses smiling warmly against a clean modern office backdrop, bathed in soft daylight, clean cinematic corporate aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA46JpwVqXbk00ItZVGmgaScwTFA-IFHJOts11NhYPi-I-lA8zDnw_c7g04Nr_1BwWlB3vCllKDhJGAs1FU5jj_EqEG8l8lnxX2CFoydnxqCZacO8voH6l6dM7s8OlkQAkNnlsWtNFZ07-V06QFk6C09MQVmNX85GIxVNVeXxzZRGhLZ8-dx172jXxQQcK6UwB7Zk20EBwknPik8Ezn3e8xlssl10DZEwKhu3qe_zBvOdmfb_m24Ob8Mg"/>
<span className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[12px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors cursor-pointer truncate">Ananya Sharma</span>
<span className="px-space-2xs py-0.5 rounded text-[10px] font-data-mono font-bold bg-surface-container text-on-surface">Top 1%</span>
</div>
<span className="font-body-sm text-body-sm text-outline truncate">Govt Engg College Bilaspur • Full-Stack Backend</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
{/* Visual radial-style circular score indicator */}
<div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low shrink-0">
<svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="96, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-data-mono text-[10px] font-bold text-on-surface">96</span>
</div>
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-surface leading-tight">96/100</span>
<span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold">Tier-1 Deterministic</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-2xs max-w-xs">
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Go</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Redis</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">gRPC</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                  Interview Scheduled (Tomorrow 3:00 PM)
                </span>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-bold text-on-surface">AL</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Avinash</span>
<span className="font-label-sm text-label-sm text-outline leading-tight">Eng Lead</span>
</div>
</div>
</td>
<td className="py-space-sm pr-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors">
                    Profile
                  </button>
<button className="h-8 px-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container font-label-sm text-label-sm transition-colors shadow-xs">
                    Schedule
                  </button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container-low text-outline hover:text-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 2: Aman Sharma (Selected for Compare) */}
<tr className="h-16 hover:bg-surface-container-low/70 transition-colors group bg-secondary-fixed/10">
<td className="w-10 pl-space-base text-center">
<input defaultChecked className="candidate-row-select w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" data-candidate-id="2" type="checkbox"/>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of Aman Sharma, a young South Asian male software developer in smart casual navy polo against modern server rack architecture glow, calm confident demeanor, sharp analytical lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3MUHHYGDz2yqPCrCEXfR6ihYZwYJHt8hotgMEQpqBijmKZOczQjUgdW5pihcky3GlVaF5cBIjfXZRnrSuc6Q1gE89Gt6pRbXw1obFOEYaTqALwSxkFplwCutUrwAYAYz_cxphGPpHyH5MhBiqMIIJxxakj25mA5h8K_qaE3xwpktcRb5yZ9F91lo-CRX02NN5XfsIX3M8x4FMGPL2nxkBpicPxScLwSvZKVj-dUFWRv6d9CPuWXTUg"/>
<span className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[12px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors cursor-pointer truncate">Aman Sharma</span>
<span className="px-space-2xs py-0.5 rounded text-[10px] font-data-mono font-bold bg-surface-container text-on-surface">Top 3%</span>
</div>
<span className="font-body-sm text-body-sm text-outline truncate">JECRC Jaipur • Distributed Systems</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low shrink-0">
<svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="94, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-data-mono text-[10px] font-bold text-on-surface">94</span>
</div>
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-surface leading-tight">94/100</span>
<span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold">Tier-1 Consensus</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-2xs max-w-xs">
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Go</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Raft</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Docker</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Intro Requested (Awaiting Candidate)
                </span>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-bold text-on-surface">PN</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Priya</span>
<span className="font-label-sm text-label-sm text-outline leading-tight">Talent Lead</span>
</div>
</div>
</td>
<td className="py-space-sm pr-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors">
                    Profile
                  </button>
<button className="h-8 px-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors">
                    Move Stage
                  </button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container-low text-outline hover:text-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 3: Siddharth Rao */}
<tr className="h-16 hover:bg-surface-container-low/70 transition-colors group">
<td className="w-10 pl-space-base text-center">
<input className="candidate-row-select w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" data-candidate-id="3" type="checkbox"/>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of Siddharth Rao, a thoughtful Indian engineer in dark charcoal crew neck, looking attentively ahead in a clean minimalist lab interior with cold tone overhead illumination, professional executive aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwT3Det-57R5m4r10MwKmmF_0nzOO_wZABWVqd4cNwx-xiTauXLNzHxvD6RvcNxe_VMf2wvn93ma4kVa4479_ioLKfAaV1hhIiImqjCnxOotndo3A1eYHVOo3nKtvqDa93KHyo0jfyS8JTyqRdTh94kF0GZwAlcIP0n9cH0rDQnT1OMYMWsgZM6vKhH82wFXwFnAFq7_AUO5gkPIWrDxdraRojj4qQ8vd78PCG5hVExBCXSLmpuaPUDA"/>
<span className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[12px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors cursor-pointer truncate">Siddharth Rao</span>
<span className="px-space-2xs py-0.5 rounded text-[10px] font-data-mono font-bold bg-surface-container text-on-surface">Top 2%</span>
</div>
<span className="font-body-sm text-body-sm text-outline truncate">NIT Raipur • AI / RAG Infra</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low shrink-0">
<svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="95, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-data-mono text-[10px] font-bold text-on-surface">95</span>
</div>
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-surface leading-tight">95/100</span>
<span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold">Tier-1 Vector Ops</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-2xs max-w-xs">
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Python</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">FastAPI</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">pgvector</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Dossier Reviewed (Ready for Tech Screen)
                </span>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-bold text-on-surface">VS</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Vikram</span>
<span className="font-label-sm text-label-sm text-outline leading-tight">Staff Eng</span>
</div>
</div>
</td>
<td className="py-space-sm pr-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors">
                    Profile
                  </button>
<button className="h-8 px-space-sm rounded-lg bg-secondary text-on-secondary hover:bg-secondary-container font-label-sm text-label-sm transition-colors shadow-xs">
                    Schedule
                  </button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container-low text-outline hover:text-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 4: Pooja Chouhan */}
<tr className="h-16 hover:bg-surface-container-low/70 transition-colors group">
<td className="w-10 pl-space-base text-center">
<input className="candidate-row-select w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" data-candidate-id="4" type="checkbox"/>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of Pooja Chouhan, an Indian female cloud architect with tied-back hair in a grey blazer, smiling in front of multi-screen telemetry monitors, crisp modern technical clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYNkJb6pjQNonL2uaL60Vv-Dnoo35vTAEqvlDlMhiBnvUZQ_s4xVMclZ7vmgNKI_Q1XCmxGuvcl9Nln_8dN8igZZu-aNoapk1Ynr60WVJDXgVkjrXlaNEHaRWcFJ4lfvZ02R9K3e0bBJpxPgDMTu9zL4l1wVuqG6ZraEScv_HoBXWH2byxTXQ0VxMWSyg7y2ULNmTEugSizEfyWHHyKVKf6gAfV_ZwplDhANJxGRbWOrCe35CDJ-uxWQ"/>
<span className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[12px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors cursor-pointer truncate">Pooja Chouhan</span>
<span className="px-space-2xs py-0.5 rounded text-[10px] font-data-mono font-bold bg-surface-container text-on-surface">Top 5%</span>
</div>
<span className="font-body-sm text-body-sm text-outline truncate">SGSITS Indore • DevOps / Cloud SRE</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low shrink-0">
<svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="92, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-data-mono text-[10px] font-bold text-on-surface">92</span>
</div>
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-surface leading-tight">92/100</span>
<span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold">Tier-1 Resiliency</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-2xs max-w-xs">
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">K8s</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Go</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">eBPF</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Shortlisted (Pending HM Review)
                </span>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-bold text-on-surface">AL</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Avinash</span>
<span className="font-label-sm text-label-sm text-outline leading-tight">Eng Lead</span>
</div>
</div>
</td>
<td className="py-space-sm pr-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors">
                    Profile
                  </button>
<button className="h-8 px-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors">
                    Move Stage
                  </button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container-low text-outline hover:text-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/* Row 5: Rhea Sengupta */}
<tr className="h-16 hover:bg-surface-container-low/70 transition-colors group">
<td className="w-10 pl-space-base text-center">
<input className="candidate-row-select w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer" data-candidate-id="5" type="checkbox"/>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait of Rhea Sengupta, a bright young female software engineer with glasses, confident smile in modern tech campus setting with warm atmospheric lighting, corporate high-definition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcjr7GMGoJ-d-n9iHp_CdtTJ3hcIt0-1PRulyqzZldGm4JnMFJ0OUezXzMq3GtgJ5To4DgBKZgwfyPSoGXl1Oo-CWaSaYi164zN2mBgR-sQJzIvc7qLE03q8Q0dH62FB45Es9zHWt1Oe7Xg-P9mwZZhbJ37zqoVmv_sZSOGCCnXSoiRMclNF42il8-K3ybEju9MMiZ20prUJ-Li95vCURc23_ir7Vfnaf6VRb9xCBiIhYZE79_eGE6fA"/>
<span className="absolute -bottom-1 -right-1 w-4 h-4 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[12px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-space-xs">
<span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary transition-colors cursor-pointer truncate">Rhea Sengupta</span>
<span className="px-space-2xs py-0.5 rounded text-[10px] font-data-mono font-bold bg-surface-container text-on-surface">Top 6%</span>
</div>
<span className="font-body-sm text-body-sm text-outline truncate">NIT Silchar • WebRTC / Video Systems</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-sm">
<div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low shrink-0">
<svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="91, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<span className="absolute font-data-mono text-[10px] font-bold text-on-surface">91</span>
</div>
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-surface leading-tight">91/100</span>
<span className="font-label-sm text-[10px] text-on-tertiary-container font-semibold">Tier-1 Realtime</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex flex-wrap items-center gap-space-2xs max-w-xs">
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">WebRTC</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">Go</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm">PostgreSQL</span>
</div>
</td>
<td className="py-space-sm px-space-sm">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                  Offer Accepted
                </span>
</td>
<td className="py-space-sm px-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-bold text-on-surface">VS</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface leading-tight">Vikram</span>
<span className="font-label-sm text-label-sm text-outline leading-tight">Staff Eng</span>
</div>
</div>
</td>
<td className="py-space-sm pr-space-base text-right">
<div className="flex items-center justify-end gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors">
                    Profile
                  </button>
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors">
                    Archive
                  </button>
<button className="h-8 w-8 rounded-lg hover:bg-surface-container-low text-outline hover:text-on-surface flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination & Sourcing Health Micro-Metrics */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-space-md text-outline font-label-sm text-label-sm">
<span>Showing <strong className="text-on-surface">1–5</strong> of <strong className="text-on-surface">12</strong> candidates</span>
<span className="hidden sm:inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="hidden sm:inline-flex items-center gap-space-2xs text-on-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
            100% Background &amp; Proctored Code Check Complete
          </span>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low text-outline hover:text-on-surface font-label-sm text-label-sm disabled:opacity-50 transition-colors" disabled>
            Previous
          </button>
<div className="flex items-center gap-1">
<button className="h-8 w-8 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm font-bold">1</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm">2</button>
<button className="h-8 w-8 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm">3</button>
</div>
<button className="h-8 px-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors">
            Next
          </button>
</div>
</div>
</div>
{/* Candidate Direct Comparison Drawer / Dossier Preview Pane */}
<aside className="w-full xl:w-96 shrink-0 flex flex-col gap-space-md" id="compare-pane">
<div className="p-space-base bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
{/* Direct Comparison Drawer Header */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">balance</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Direct Comparison Mode</h2>
</div>
<span className="px-space-xs py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-data-mono text-[11px] font-bold">Side-by-Side</span>
</div>
<p className="font-body-sm text-body-sm text-outline">
          Benchmarking live code runtime metrics, verified through automated compiler sandbox tests.
        </p>
{/* Candidate Comparison Column Headers */}
<div className="grid grid-cols-2 gap-space-sm pt-space-2xs">
{/* Candidate A Card */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shadow-xs" data-alt="Ananya Sharma thumbnail avatar in high clarity circle crop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdZbcgy-jZ5IJJJ6ApSwOYr_4QfzrorOilYbGYeRAyr4myYgfaKBNWRC3ujkwB33T16dYwze6HhluQE37sXPLZ0Oheq0flv5qEK7RDMJztxWl3aGh_lrQBnCtrEi7yIteAX38PbGNN7cDsBdv5McGJT_WUxwfXwdUHn-TKN1xU4R98d8D_kzSCjtYoaRbgq5strp9e7KFRmn4nUrywWmFOaBHkJOgfKAOCrinoEMSIe15b8LKbV-nSUQ"/>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Ananya S.</span>
<span className="font-data-mono text-[10px] text-secondary font-bold">Score 96</span>
</div>
</div>
<span className="font-label-sm text-[11px] text-outline truncate">GEC Bilaspur</span>
</div>
{/* Candidate B Card */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<img className="w-8 h-8 rounded-full object-cover shadow-xs" data-alt="Aman Sharma thumbnail avatar in high clarity circle crop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBaY0vezRsk1Pehvexf7unUmW0YE6TTIsOTwXGmYKoXRyHIJeiglVYtcpM6IwPZJEZ74hQtgJoZCQj0PNKaOkH_lnoPI3-Pc_75TXY55nd1R1wGXRXgE38vXQf3JeuBQ-Q_2FBZFZP1W0LLSCss4RSGmkhX7E5A-kopYu7eA0QJRkt2PFdxa9fMTBsNY0yUoLJWbUI96a35q7SUGPX16mlgf8diTuYomuewnC9TBqERoZhPnLuFwnyeg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Aman S.</span>
<span className="font-data-mono text-[10px] text-secondary font-bold">Score 94</span>
</div>
</div>
<span className="font-label-sm text-[11px] text-outline truncate">JECRC Jaipur</span>
</div>
</div>
{/* Matrix Breakdown Rows */}
<div className="flex flex-col gap-space-sm pt-space-xs">
{/* Metric 1: Trust Score Rank */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Overall Trust Percentile</span>
<div className="grid grid-cols-2 gap-space-sm items-center">
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-tertiary-container">Top 1% (96/100)</span>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-1 overflow-hidden">
<div className="bg-on-tertiary-container h-full rounded-full" style={{width:"96%"}}></div>
</div>
</div>
<div className="flex flex-col">
<span className="font-data-mono text-data-mono font-bold text-on-surface">Top 3% (94/100)</span>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-1 overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width:"94%"}}></div>
</div>
</div>
</div>
</div>
{/* Metric 2: Peak Benchmark Throughput */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Peak Throughput Benchmark</span>
<div className="grid grid-cols-2 gap-space-sm items-baseline">
<div>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">12k</span>
<span className="font-data-mono text-[11px] text-outline">req/s (Go/gRPC)</span>
<span className="block text-[10px] font-label-sm text-on-tertiary-container font-semibold mt-0.5">+20% higher</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">10k</span>
<span className="font-data-mono text-[11px] text-outline">req/s (Go/Raft)</span>
<span className="block text-[10px] font-label-sm text-outline mt-0.5">High Stability</span>
</div>
</div>
</div>
{/* Metric 3: Notice Period & Availability */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Notice Period / Join Date</span>
<div className="grid grid-cols-2 gap-space-sm text-body-sm">
<div className="font-label-md text-label-md text-on-surface">
                Immediate (Campus 2025)
              </div>
<div className="font-label-md text-label-md text-on-surface">
                15 Days (Pre-offered)
              </div>
</div>
</div>
{/* Metric 4: System Design Architecture Score */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Deterministic Vetting Rating</span>
<div className="grid grid-cols-2 gap-space-sm font-data-mono text-data-mono">
<div className="text-on-surface">
<span className="font-bold text-secondary">A+</span> (Cache Invalidation)
              </div>
<div className="text-on-surface">
<span className="font-bold text-secondary">A</span> (State Machine Sync)
              </div>
</div>
</div>
</div>
{/* Comparative Action Bar */}
<div className="pt-space-xs flex flex-col gap-space-xs">
<button className="w-full h-9 bg-secondary text-on-secondary hover:bg-secondary-container rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs shadow-xs transition-colors">
<span className="material-symbols-outlined text-[16px]">groups</span>
<span>Schedule Joint Tech Panel</span>
</button>
<button className="w-full h-8 bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[16px] text-outline">download</span>
<span>Export Side-by-Side PDF</span>
</button>
</div>
</div>
{/* Quick Collaboration Team Note Widget */}
<div className="p-space-base bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-outline">Hiring Team Feedback</span>
<span className="font-data-mono text-data-mono text-outline">3 notes</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Avinash (Eng Lead)</span>
<span className="font-label-sm text-label-sm text-outline">1h ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            “Ananya's Redis replication PR benchmarks show deep concurrency intuition. Recommend prioritizing her tomorrow afternoon.”
          </p>
</div>
</div>
</aside>
</div>
{/* Persistent Floating Batch Action Toolbar */}
<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-surface-container-lowest/95 backdrop-blur-xl shadow-xl rounded-full px-space-base py-space-sm flex items-center gap-space-md transition-all duration-300" id="batch-toolbar">
<div className="flex items-center gap-space-xs pr-space-sm border-r border-transparent">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">2</span>
<span className="font-label-md text-label-md text-on-surface-variant">candidates selected</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-9 px-space-base bg-secondary text-on-secondary hover:bg-secondary-container rounded-full font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-xs">
<span className="material-symbols-outlined text-[18px]">outgoing_mail</span>
<span>Schedule Batch Intro</span>
</button>
<button className="h-9 px-space-base bg-surface-container-low hover:bg-surface-container text-on-surface rounded-full font-label-md text-label-md flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px] text-outline">download_for_offline</span>
<span>Export Dossiers</span>
</button>
<button className="h-9 px-space-base bg-surface-container-low hover:bg-surface-container text-error rounded-full font-label-md text-label-md flex items-center gap-space-xs transition-colors">
<span className="material-symbols-outlined text-[18px]">archive</span>
<span>Archive</span>
</button>
</div>
<button aria-label="Deselect all" className="w-7 h-7 rounded-full bg-surface-container hover:bg-surface-container-high text-outline hover:text-on-surface flex items-center justify-center transition-colors" id="close-batch-toolbar">
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
</div>
</main><footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)]"><div className="w-full px-margin-screen py-space-2xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl"><div className="lg:col-span-2 flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><img alt="Verified Talent Enterprise Logo" className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XrceQ0HNYxstspvn9SssTKMfknl_hTdwNNROdupTbXNmQ088VoG4E-Q9yu5eoS6IdaHAFOCALRUC_P2KnyP76lQunWOKK5v_MbVuin3DbkWHojLsRUOuMkL8ra7Zun7sdh2hcqBN8zy_sNAOCkAvcJohuEyFRHmOPQZ0GybHZBKLuZyVq1KDU22AmPEEJn0am5hYvnZ2CeGbN8X2FelK5Xl39e_djFW1rOiyufmTvldTQRR4JIYXM5ObQ"/><span className="font-headline-sm text-headline-sm text-on-surface">Verified Talent Enterprise</span></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Deterministic talent intelligence, background-verified candidate profiles, and direct university pipeline orchestration for tier-one engineering teams.</p><div className="flex flex-wrap items-center gap-space-sm pt-space-xs"><div className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg bg-surface-container-low"><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">verified_user</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">SOC-2 Type II Certified</span></div><div className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg bg-surface-container-low"><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">lock</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">ISO 27001</span></div><div className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg bg-surface-container-low"><span className="material-symbols-outlined text-secondary text-[16px]">speed</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">99.9% Enterprise SLA</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-outline">ATS Integrations</span><ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-secondary transition-colors" data-path="greenhouse-integration" href="#">Greenhouse Partner Sync</a></li><li><a className="hover:text-secondary transition-colors" data-path="lever-integration" href="#">Lever ATS Direct</a></li><li><a className="hover:text-secondary transition-colors" data-path="ashby-integration" href="#">Ashby Real-time Ingestion</a></li><li><a className="hover:text-secondary transition-colors" data-path="workday-integration" href="#">Workday HCM Connector</a></li><li><a className="hover:text-secondary transition-colors" data-path="api-documentation" href="#">Custom Webhook API</a></li></ul></div><div className="flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-outline">Intelligence &amp; ROI</span><ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-secondary transition-colors" data-path="hiring-roi-calculator" href="#">Hiring ROI Calculator</a></li><li><a className="hover:text-secondary transition-colors" data-path="employer-case-studies" href="#">Employer Case Studies</a></li><li><a className="hover:text-secondary transition-colors" data-path="market-compensation-index" href="#">Compensation Index 2025</a></li><li><a className="hover:text-secondary transition-colors" data-path="vetting-methodology" href="#">Vetting Methodology Whitepaper</a></li></ul></div><div className="flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-outline">Legal &amp; Trust</span><ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-secondary transition-colors" data-path="terms-of-service" href="#">Enterprise Terms of Service</a></li><li><a className="hover:text-secondary transition-colors" data-path="privacy-security" href="#">Candidate Privacy &amp; Security</a></li><li><a className="hover:text-secondary transition-colors" data-path="data-subprocessors" href="#">Subprocessors &amp; DPA</a></li><li><a className="hover:text-secondary transition-colors" data-path="compliance-portal" href="#">Trust &amp; Compliance Center</a></li></ul></div></div><div className="mt-space-2xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-low px-space-base py-space-sm rounded-lg"><span className="font-label-sm text-label-sm text-outline">© 2025 Verified Talent Enterprise Systems Inc. High-velocity hiring infrastructure.</span><div className="flex items-center gap-space-lg font-label-sm text-label-sm text-outline"><span className="flex items-center gap-space-2xs"><span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>All Systems Operational</span><span className="font-data-mono text-data-mono">Build v4.19.2</span></div></div></div></footer>
    </>
  );
}
