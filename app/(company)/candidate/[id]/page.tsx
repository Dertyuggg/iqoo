import Link from 'next/link';

export default function CandidateProfileView() {
  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 w-full px-margin-screen flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg shrink-0"><div className="flex items-center gap-space-sm cursor-pointer"><img alt="Verified Talent Enterprise Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XrceQ0HNYxstspvn9SssTKMfknl_hTdwNNROdupTbXNmQ088VoG4E-Q9yu5eoS6IdaHAFOCALRUC_P2KnyP76lQunWOKK5v_MbVuin3DbkWHojLsRUOuMkL8ra7Zun7sdh2hcqBN8zy_sNAOCkAvcJohuEyFRHmOPQZ0GybHZBKLuZyVq1KDU22AmPEEJn0am5hYvnZ2CeGbN8X2FelK5Xl39e_djFW1rOiyufmTvldTQRR4JIYXM5ObQ"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">Verified Talent</span><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-space-2xs">Enterprise Sourcing Portal</span></div></div><nav className="hidden xl:flex items-center gap-space-xs" data-active-classes="bg-surface-container-high text-on-surface font-semibold"><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="solutions-overview" href="#">Product &amp; Solutions</a><div className="flex items-center"><a aria-current="page" className="px-space-sm py-space-xs rounded-lg transition-colors bg-surface-container-high text-on-surface font-semibold" data-path="verified-talent-pool" href="#">Talent Pool</a><span className="ml-space-2xs px-space-xs py-space-2xs rounded-full bg-surface-container text-on-tertiary-container font-data-mono text-data-mono font-semibold">4,850+ Verified</span></div><div className="flex items-center"><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="candidate-pipeline" href="#">Shortlist &amp; Pipeline</a><span className="ml-space-2xs px-space-xs py-space-2xs rounded-full bg-secondary text-on-secondary font-data-mono text-data-mono font-bold">12</span></div><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="campus-partnerships" href="#">Campus Partnerships</a><a className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-sm py-space-xs rounded-lg transition-colors font-label-md text-label-md" data-path="enterprise-pricing" href="#">Pricing &amp; Plans</a></nav></div><div className="flex items-center gap-space-md shrink-0"><div className="relative hidden lg:block w-72"><span className="material-symbols-outlined absolute left-space-sm top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span><input className="w-full h-9 pl-8 pr-space-sm bg-surface-container-low hover:bg-surface-container focus:bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none transition-colors" placeholder="Quick search candidates, skills, colleges..." type="text"/></div><a className="hidden sm:inline-flex items-center justify-center h-9 px-space-base bg-secondary text-on-secondary hover:bg-secondary-container rounded-lg font-label-md text-label-md transition-colors shadow-sm" data-path="book-enterprise-demo" href="#">Book Demo</a><button aria-label="Notifications" className="relative p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span></button><div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYSVFJ50Xmp7PTUFofY4n7Z8LfH59VEVZH1noLt0K7-wvzWLzodKbkRTzlzkRGYuf2Ysm4WRFZ2xd_2Id5qzgiNaIjUzrHyNC62B-BhszRm3c2OzEfbaKTE7eQyqREgIhs-cXbB-bo0eTgiUYDcb_4Tf0olohtL6ltNkvJZaKor5lncXsjJk3MDaf-qh_GzcsebkDWzNjgIhKtRrRUGVCDw0iZbPLx6YvutDNTn81dkXmPg5Hs5OK8yQ"/><div className="hidden md:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface leading-tight group-hover:text-secondary transition-colors">Priya Nair</span><span className="font-label-sm text-label-sm text-outline leading-tight">VP Talent @ Zepto</span></div><span className="material-symbols-outlined text-outline text-[16px] group-hover:text-on-surface transition-colors">expand_more</span></div></div></div></header>
      <main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full pb-space-2xl">
{/* Interactive Toast Notification Element */}
<div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-space-sm bg-primary-container text-surface-container-lowest px-space-base py-space-md rounded-xl shadow-xl" id="toast-notify">
<span className="material-symbols-outlined text-tertiary-fixed text-[20px]">check_circle</span>
<span className="font-body-md text-body-md text-surface-container-lowest font-medium" id="toast-text">Candidate dossier updated</span>
</div>
{/* Breadcrumb & Workflow Status Utility Bar */}
<div className="w-full px-margin-screen py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md">
<a className="text-outline hover:text-secondary transition-colors" href="#">Talent Pool</a>
<span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
<a className="text-outline hover:text-secondary transition-colors" href="#">Backend Engineering</a>
<span className="material-symbols-outlined text-outline text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Ananya Sharma</span>
<span className="ml-space-sm px-space-xs py-space-2xs bg-surface-container rounded font-data-mono text-data-mono text-outline">CAND-ID: #VT-9042-B</span>
</div>
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-space-2xs font-data-mono text-data-mono text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span>
        Audit Hash: <span className="text-on-surface font-semibold">0x7F9B...88A2</span>
</div>
<div className="h-3 w-[1px] bg-outline-variant"></div>
<span className="font-label-sm text-label-sm text-outline">Last Re-Verified: 2 hours ago</span>
</div>
</div>
{/* Candidate Executive Header Banner */}
<div className="w-full px-margin-screen py-space-xl bg-surface-container-lowest shadow-sm">
<div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-xl">
{/* Left Info Stack */}
<div className="flex flex-col sm:flex-row items-start gap-space-lg max-w-4xl">
<div className="relative shrink-0">
<img className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover shadow-md" alt="Professional studio portrait of Ananya Sharma, a 22-year-old female software engineer with thoughtful analytical expression, dark hair tied neatly, wearing minimal dark slate tech blazer, clean neutral studio lighting with soft institutional blue undertones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnNpinAN5wERsUeaZ1tVWVjX5kfSX-pwJJ5PEzhMwvbdjZvEWHXZUincQ-VEIUqo-8ONlYkFSoZi9U4GjM5K6rIMS9wjoRGbXKNRn5sVy3EIzS6Tp86fP-bY9i5Rdcswn-fIBklRLVcgoEYMjD4l9jMs8Z0FG_aZIY3uhTTm2wyax7KYc7ImAi1iK2cSWhprM_A35xhnBqqtnZb4V8oKkaBkTN6ujBWp9v3sjzHucmcf0T04cmO-iPJw"/>
<div className="absolute -bottom-2 -right-2 p-space-2xs bg-surface-container-lowest rounded-full shadow-md">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px] bg-tertiary-fixed-dim/20 rounded-full p-0.5" style={{fontVariationSettings:'"FILL" 1'}}>verified</span>
</div>
</div>
<div className="flex flex-col gap-space-xs min-w-0">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Ananya Sharma</h1>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-tertiary-fixed/30 text-on-tertiary-container font-label-sm text-label-sm font-bold tracking-wide uppercase">
<span className="material-symbols-outlined text-[14px]">military_tech</span>
              VERIFIED BUILDER — TIER-1 EQUIVALENT SCORE
            </span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface-variant font-medium">
            Full-Stack Software Engineer • Backend Systems Specialist
          </p>
<div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm pt-space-2xs">
<span className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-outline text-[16px]">school</span>
              Government Engineering College, Bilaspur <span className="text-outline font-data-mono">(Tier-3 College)</span> • Batch of 2025
            </span>
<span className="flex items-center gap-space-2xs">
<span className="material-symbols-outlined text-outline text-[16px]">location_on</span>
              Bilaspur • Relocating to Bengaluru
            </span>
</div>
</div>
</div>
{/* Right Recruiter Action CTAs */}
<div className="flex flex-wrap sm:flex-nowrap xl:flex-col items-stretch sm:items-center xl:items-end gap-space-sm shrink-0">
<button className="w-full sm:w-auto min-w-[240px] h-10 px-space-lg bg-secondary text-on-secondary hover:bg-secondary-container rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors shadow-sm cursor-pointer" id="btn-request-intro" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Request Direct Intro / Interview</span>
</button>
<div className="flex items-center gap-space-xs w-full sm:w-auto">
<button className="flex-1 sm:flex-none h-9 px-space-base bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-2xs transition-colors cursor-pointer" id="btn-shortlist" type="button">
<span className="material-symbols-outlined text-[16px] text-secondary" id="star-icon" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span id="shortlist-label">Shortlisted Candidate</span>
</button>
<button className="h-9 px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center transition-colors cursor-pointer" id="btn-download" title="Download Verified Dossier (PDF)" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<button className="h-9 px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-2xs transition-colors cursor-pointer" id="btn-export-ats" title="Export to Greenhouse / Lever" type="button">
<span className="material-symbols-outlined text-[18px]">sync_alt</span>
<span className="hidden md:inline font-data-mono text-data-mono uppercase">Greenhouse</span>
</button>
</div>
</div>
</div>
{/* Prominent Overall Executive Trust Score Bar */}
<div className="mt-space-lg pt-space-lg bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
<div className="flex items-center gap-space-lg">
{/* Massive Crisp Score Display */}
<div className="flex items-baseline gap-space-2xs bg-surface-container-lowest px-space-lg py-space-sm rounded-lg shadow-sm">
<span className="font-display-lg text-[44px] leading-none font-bold text-on-tertiary-container tracking-tight">96</span>
<span className="font-headline-md text-headline-md text-outline font-medium">/100</span>
</div>
<div className="flex flex-col gap-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">verified</span>
<span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">
              ELITE VERIFIED BUILDER • Top 1% Nationwide Backend Benchmark
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Audited execution profile calculated across algorithmic concurrency stress tests, automated memory profiling, and architecture code verification.
          </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<span className="inline-flex items-center gap-space-2xs px-space-base py-space-xs rounded-full bg-surface-container-lowest text-on-surface font-data-mono text-data-mono font-semibold shadow-sm">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
          0% Fluff • Production Audited
        </span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">
          Deterministic Signal
        </span>
</div>
</div>
</div>
{/* Main Profile Body (Split 65% / 35% Layout) */}
<div className="w-full px-margin-screen mt-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* LEFT COLUMN: Engineering Dossier (65% width = 8 cols on 12-col grid) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg min-w-0">
{/* SECTION 1: Primary Domain & Engineering Competence */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">terminal</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Primary Domain &amp; Engineering Competence</h2>
</div>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            98% Match for your SDE-1 Backend opening
          </span>
</div>
<div className="bg-surface-container-low p-space-base rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Specialization Domain</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Distributed Systems &amp; Backend APIs</span>
</div>
<div className="flex items-center gap-space-md">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">System Vetting Index</span>
<span className="font-data-mono text-data-mono font-bold text-on-tertiary-container">99.4th Percentile</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Language Primary</span>
<span className="font-data-mono text-data-mono font-bold text-on-surface">Go (1.23+)</span>
</div>
</div>
</div>
{/* Core Stack Chips & Verified Benchmarks */}
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block mb-space-xs">Audited Technology Stack</span>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              Go (Golang) • <strong className="font-data-mono font-bold">98%</strong>
</span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              Redis • <strong className="font-data-mono font-bold">94%</strong>
</span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              Docker • <strong className="font-data-mono font-bold">92%</strong>
</span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              gRPC • <strong className="font-data-mono font-bold">95%</strong>
</span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              PostgreSQL • <strong className="font-data-mono font-bold">91%</strong>
</span>
<span className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded bg-surface-container-low text-on-surface font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
              Prometheus • <strong className="font-data-mono font-bold">89%</strong>
</span>
</div>
</div>
{/* Inline Visual: Core Competency Matrix */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm text-outline">Concurrency &amp; Mutexes</span>
<div className="flex items-center justify-between font-data-mono text-data-mono font-bold">
<span className="text-on-surface">Goroutines / Channels</span>
<span className="text-on-tertiary-container">Pass (0 Race)</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-on-tertiary-container h-full w-[96%]"></div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm text-outline">API Architecture</span>
<div className="flex items-center justify-between font-data-mono text-data-mono font-bold">
<span className="text-on-surface">Protobuf / gRPC</span>
<span className="text-on-tertiary-container">98.2 / 100</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full w-[98%]"></div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-2xs">
<span className="font-label-sm text-label-sm text-outline">Database Indexing &amp; Query Plans</span>
<div className="flex items-center justify-between font-data-mono text-data-mono font-bold">
<span className="text-on-surface">B-Tree / EXPLAIN ANALYZE</span>
<span className="text-on-tertiary-container">Optimal</span>
</div>
<div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
<div className="bg-on-tertiary-container h-full w-[92%]"></div>
</div>
</div>
</div>
</section>
{/* SECTION 2: Showcased Production Proofs (Audited Repositories) */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">developer_board</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Showcased Production Proofs (Audited Repositories)</h2>
</div>
<span className="font-data-mono text-data-mono text-outline">2 Repositories Sandboxed &amp; Benchmarked</span>
</div>
{/* Project Card 1: Distributed Cache */}
<div className="bg-surface-container-low rounded-xl p-space-base flex flex-col gap-space-base">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex flex-col gap-space-2xs">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">Distributed Cache with LRU &amp; Redis Fallback</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-highest font-data-mono text-data-mono text-on-surface font-semibold">go-dist-cache-v2</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">In-memory 2-tier cache with write-through replication, custom consistent hashing algorithm, and zero-allocation serialization.</span>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<a className="px-space-sm py-space-xs rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-space-2xs shadow-sm transition-colors" href="#">
<span className="material-symbols-outlined text-[14px]">code</span>
                View Audit Diff
              </a>
<a className="px-space-sm py-space-xs rounded-lg bg-surface-container-lowest hover:bg-surface-container text-secondary font-label-sm text-label-sm flex items-center gap-space-2xs shadow-sm transition-colors" href="#">
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
                Live Harness
              </a>
</div>
</div>
{/* Benchmarks Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">Peak Throughput</span>
<span className="font-data-mono text-headline-sm text-on-surface font-bold">12,000 req/s</span>
<span className="font-data-mono text-[11px] text-on-tertiary-container block">Load Test: Vegeta / k6</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">p99 Latency</span>
<span className="font-data-mono text-headline-sm text-on-tertiary-container font-bold">&lt; 0.8ms</span>
<span className="font-data-mono text-[11px] text-outline block">Under 8k concurrent</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">Cache Hit Rate</span>
<span className="font-data-mono text-headline-sm text-on-surface font-bold">99.98%</span>
<span className="font-data-mono text-[11px] text-outline block">Synthetic Zipfian load</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">Memory Profiling</span>
<span className="font-data-mono text-headline-sm text-secondary font-bold">Zero Leaks</span>
<span className="font-data-mono text-[11px] text-outline block">pprof goroutine audit</span>
</div>
</div>
{/* Code Quality Verdict & Test Harness */}
<div className="space-y-space-xs pt-space-xs">
<div className="flex items-start gap-space-sm bg-surface-container-lowest p-space-sm rounded-lg">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0 mt-0.5">task_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Automated Architecture Verdict:</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                  Clean modular concurrency, automated race condition detection passed (<span className="font-data-mono text-data-mono font-semibold">go test -race -count=100</span>), zero leaked goroutines, deterministic eviction semantics verified under memory pressure.
                </p>
</div>
</div>
<div className="flex items-center justify-between gap-space-sm px-space-sm py-space-xs bg-surface-container-highest/40 rounded-lg text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-space-2xs font-data-mono text-data-mono">
<span className="material-symbols-outlined text-secondary text-[16px]">cloud_done</span>
                Live Test Harness: Verified endpoint tested on AWS us-east-1 container cluster.
              </span>
<span className="font-data-mono text-data-mono text-outline">Latency probe: 14ms ping</span>
</div>
</div>
{/* Senior Peer Review Quote */}
<div className="bg-surface-container-lowest p-space-base rounded-lg shadow-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<img className="w-8 h-8 rounded-full object-cover" alt="Staff Platform Engineer Rajesh Venkataraman, Indian tech leader with glasses and collared shirt in warm office lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44ZlDBPK2TMpZuoOUw9zTYvhBGLNy_1kiwvqHAJzOZjYNBmLBRCfniSwkivIErY-9NM0KK_oc7aXPf4t9uGgYVZ1kt8L12g5xZsGqIT1759gFX8MiroqgFJzp-JRefJyqlMfRvlj7vnDEt-2xcpLhdGCa88JV3hg5sIl2q1KcrrJpXwclio_wL2GV0FnKNLxOvdMxZx8AFjUBG7x5S3DXQgXYOXG1bGbGBv58RAn1fzVQ5cLb4QgyNA"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Rajesh Venkataraman</span>
<span className="font-label-sm text-label-sm text-outline">Staff Platform Engineer @ Fintech Unicorn (Verified Scribe)</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-space-2xs bg-surface-container text-on-surface-variant rounded">Peer Audit</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic pl-space-lg">
              “Exceptional error handling and clean interfaces. Ananya's handling of channel timeouts and graceful context cancellation prevents cascading thread locks under backpressure. Easily mid-level production ready.”
            </p>
</div>
</div>
{/* Project Card 2: CompuZilla */}
<div className="bg-surface-container-low rounded-xl p-space-base flex flex-col gap-space-base">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm">
<div className="flex flex-col gap-space-2xs">
<div className="flex items-center gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">CompuZilla — Realtime Campus Resource Booking</span>
<span className="px-space-xs py-space-2xs rounded bg-surface-container-highest font-data-mono text-data-mono text-on-surface font-semibold">production-live</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Distributed lab workstation reservation protocol preventing double-bookings via atomic Redis mutex locks and WebSocket push notifications.</span>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="inline-flex items-center gap-space-2xs px-space-sm py-space-xs rounded-full bg-tertiary-fixed/30 text-on-tertiary-container font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>
                LIVE IN CAMPUS PRODUCTION
              </span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">Active Student Users</span>
<span className="font-data-mono text-headline-sm text-on-surface font-bold">2,400+ Users</span>
<span className="font-data-mono text-[11px] text-on-tertiary-container block">Active daily roster</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">Conflict Rate</span>
<span className="font-data-mono text-headline-sm text-on-tertiary-container font-bold">0.00%</span>
<span className="font-data-mono text-[11px] text-outline block">Redis Redlock verified</span>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
<span className="font-label-sm text-label-sm text-outline block">Infrastructure</span>
<span className="font-data-mono text-headline-sm text-secondary font-bold">Docker / K8s</span>
<span className="font-data-mono text-[11px] text-outline block">Automated CI/CD deploy</span>
</div>
</div>
</div>
</section>
{/* SECTION 3: GitHub Proof of Work & Commit Discipline */}
<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[22px]">commit</span>
<h2 className="font-headline-md text-headline-md text-on-surface">GitHub Proof of Work &amp; Commit Discipline</h2>
</div>
<span className="font-data-mono text-data-mono text-on-tertiary-container font-semibold">180-Day Active Streak</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-low p-space-base rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Verified Commits</span>
<span className="font-data-mono text-[32px] leading-tight font-bold text-on-surface">942</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Across 2024 – 2025 development cycle</span>
</div>
<div className="bg-surface-container-low p-space-base rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Authenticity Audit</span>
<span className="font-data-mono text-[32px] leading-tight font-bold text-on-tertiary-container">100%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Original code • 0% AI copy-paste detected</span>
</div>
<div className="bg-surface-container-low p-space-base rounded-lg flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">PR Acceptance Velocity</span>
<span className="font-data-mono text-[32px] leading-tight font-bold text-secondary">4.2 hrs</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Average revision resolution turnaround</span>
</div>
</div>
{/* Visual Sparkline / Commit Density Representation */}
<div className="bg-surface-container-low p-space-base rounded-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline font-semibold uppercase">Daily Contribution Density (Past 30 Weeks)</span>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span>Less</span>
<span className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></span>
<span className="w-2.5 h-2.5 rounded-sm bg-tertiary-fixed-dim"></span>
<span className="w-2.5 h-2.5 rounded-sm bg-on-tertiary-container"></span>
<span>More</span>
</div>
</div>
{/* Heatmap Visualization (SVG Inline Grid) */}
<div className="w-full overflow-x-auto py-space-xs">
<svg className="w-full min-w-[580px] h-20 text-surface-container-highest" fill="none" viewBox="0 0 580 80" xmlns="http://www.w3.org/2000/svg">
{/* Repeating squares with varying intensity */}
{/* Group 1 */}
<g className="fill-current text-on-tertiary-container">
<rect height="10" rx="2" width="10" x="0" y="0"></rect>
<rect height="10" rx="2" width="10" x="0" y="14"></rect>
<rect height="10" opacity="0.3" rx="2" width="10" x="0" y="28"></rect>
<rect height="10" rx="2" width="10" x="0" y="42"></rect>
<rect height="10" opacity="0.6" rx="2" width="10" x="0" y="56"></rect>
<rect height="10" opacity="0.8" rx="2" width="10" x="14" y="0"></rect>
<rect height="10" rx="2" width="10" x="14" y="14"></rect>
<rect height="10" rx="2" width="10" x="14" y="28"></rect>
<rect height="10" rx="2" width="10" x="14" y="42"></rect>
<rect height="10" opacity="0.2" rx="2" width="10" x="14" y="56"></rect>
<rect height="10" rx="2" width="10" x="28" y="0"></rect>
<rect height="10" opacity="0.4" rx="2" width="10" x="28" y="14"></rect>
<rect height="10" rx="2" width="10" x="28" y="28"></rect>
<rect height="10" rx="2" width="10" x="28" y="42"></rect>
<rect height="10" rx="2" width="10" x="28" y="56"></rect>
</g>
{/* Extended pattern */}
<g className="fill-current text-on-tertiary-container">
<rect height="10" opacity="0.9" rx="2" width="10" x="42" y="0"></rect>
<rect height="10" rx="2" width="10" x="42" y="14"></rect>
<rect height="10" rx="2" width="10" x="42" y="28"></rect>
<rect height="10" opacity="0.5" rx="2" width="10" x="42" y="42"></rect>
<rect height="10" rx="2" width="10" x="42" y="56"></rect>
<rect height="10" rx="2" width="10" x="56" y="0"></rect>
<rect height="10" opacity="0.7" rx="2" width="10" x="56" y="14"></rect>
<rect height="10" rx="2" width="10" x="56" y="28"></rect>
<rect height="10" rx="2" width="10" x="56" y="42"></rect>
<rect height="10" rx="2" width="10" x="56" y="56"></rect>
<rect height="10" rx="2" width="10" x="70" y="0"></rect>
<rect height="10" rx="2" width="10" x="70" y="14"></rect>
<rect height="10" opacity="0.4" rx="2" width="10" x="70" y="28"></rect>
<rect height="10" rx="2" width="10" x="70" y="42"></rect>
<rect height="10" rx="2" width="10" x="70" y="56"></rect>
</g>
{/* Sparkline path overlay for commit velocity */}
<path d="M 0 70 Q 70 50 140 30 T 280 20 T 420 15 T 560 5" fill="none" opacity="0.8" stroke="#0051d5" stroke-width="2"></path>
</svg>
</div>
<div className="flex items-center justify-between text-outline font-data-mono text-[11px] pt-space-xs">
<span>Aug 2024 • Baseline</span>
<span>Dec 2024 • Distributed Systems Sprint</span>
<span>Mar 2025 • Current Peak Velocity</span>
</div>
</div>
</section>
</div>
{/* RIGHT COLUMN: Recruiter Hiring Fast-Facts & Collaboration (35% width = 4 cols) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg min-w-0">
{/* HIRING FAST-FACTS CARD */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">fact_check</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Hiring Fast-Facts</h3>
</div>
<span className="material-symbols-outlined text-outline text-[18px]">info</span>
</div>
<div className="flex flex-col gap-space-sm divide-y divide-surface-container">
{/* Availability */}
<div className="flex flex-col gap-space-2xs pt-space-xs first:pt-0">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Availability</span>
<div className="flex items-center gap-space-xs font-headline-sm text-headline-sm text-on-surface font-semibold">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px]">check_circle</span>
              Immediate Joiner <span className="text-on-tertiary-container font-data-mono">(Notice: 0 days)</span>
</div>
</div>
{/* Target Role */}
<div className="flex flex-col gap-space-2xs pt-space-sm">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Target Role</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Full-Time SDE-1 / Software Engineer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Focus on Go, Rust, or Distributed Microservices</span>
</div>
{/* Preferred Locations */}
<div className="flex flex-col gap-space-2xs pt-space-sm">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Preferred Locations</span>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="px-space-xs py-1 rounded bg-surface-container font-body-sm text-body-sm font-medium text-on-surface">Bengaluru</span>
<span className="px-space-xs py-1 rounded bg-surface-container font-body-sm text-body-sm font-medium text-on-surface">Hyderabad</span>
<span className="px-space-xs py-1 rounded bg-secondary-fixed font-body-sm text-body-sm font-medium text-on-secondary-fixed-variant">Remote India</span>
</div>
</div>
{/* Expected CTC Band */}
<div className="flex flex-col gap-space-2xs pt-space-sm">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Expected CTC Band</span>
<div className="flex items-baseline gap-space-2xs font-headline-sm text-headline-sm text-on-surface font-bold">
<span>₹12 – 18 LPA</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">
              Competitive with Tier-1 campus recruits, zero onboarding lag.
            </span>
</div>
{/* College Verification Record */}
<div className="flex flex-col gap-space-2xs pt-space-sm">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">College Verification</span>
<div className="flex items-start gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0 mt-0.5">verified_user</span>
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-on-surface">Enrollment &amp; Academic Records Verified</span>
<span className="text-outline text-[12px]">Direct Registrar Confirmation: GEC Bilaspur</span>
<span className="font-data-mono text-data-mono text-on-tertiary-container mt-1">Roll No: 21-CS-041 • CGPA: 8.82</span>
</div>
</div>
</div>
</div>
</div>
{/* INTERNAL RECRUITER NOTES & TEAM SHARING */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">sticky_note_2</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Internal Team Evaluation</h3>
</div>
<span className="font-label-sm text-label-sm text-outline">Private • Recruiter Only</span>
</div>
{/* Note from Priya Nair */}
<div className="bg-surface-container-low rounded-lg p-space-base flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-6 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center justify-center font-bold">PN</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Priya Nair</span>
<span className="font-label-sm text-label-sm text-outline">(VP Talent)</span>
</div>
<span className="font-data-mono text-[11px] text-outline">Today, 11:20 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">
            “Candidate has strong Go fundamentals, ideal replacement for Q2 campus hiring backlog. Recommending skipping round 1 coding screen directly to architecture interview.”
          </p>
</div>
{/* Quick Note Input Area */}
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-outline uppercase tracking-wider" htmlFor="recruiter-input-note">Add Internal Evaluation Note</label>
<div className="relative">
<textarea className="w-full p-space-sm bg-surface-container-low focus:bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline outline-none transition-colors resize-none" id="recruiter-input-note" placeholder="Leave private feedback for engineering hiring managers..." rows={2}></textarea>
</div>
<div className="flex justify-end">
<button className="px-space-base py-space-xs bg-surface-container-high hover:bg-secondary hover:text-on-secondary text-on-surface rounded-lg font-label-md text-label-md transition-colors cursor-pointer" id="btn-add-note" type="button">
              Post Internal Note
            </button>
</div>
</div>
{/* Team Sharing & Hiring Manager Forwarding */}
<div className="pt-space-sm bg-surface-container-low p-space-base rounded-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Team Collaboration</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Grant review access to Engineering Directors</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked={true} className="sr-only peer" id="toggle-hm-access" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-surface-container-lowest after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
<div className="flex items-center gap-space-xs pt-space-xs">
<button className="flex-1 py-space-xs px-space-sm bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded font-label-sm text-label-sm flex items-center justify-center gap-space-2xs shadow-sm transition-colors cursor-pointer" id="btn-copy-link" type="button">
<span className="material-symbols-outlined text-[16px]">link</span>
<span>Copy Direct Dossier URL</span>
</button>
<button className="py-space-xs px-space-sm bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded font-label-sm text-label-sm flex items-center justify-center gap-space-2xs shadow-sm transition-colors cursor-pointer" id="btn-share-slack" type="button">
<span className="material-symbols-outlined text-[16px]">send</span>
<span>Slack HM</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/* Client-side Interactive Script for ATS Micro-Interactions */}

</div></main>
      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_6px_rgba(0,0,0,0.02)]"><div className="w-full px-margin-screen py-space-2xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl"><div className="lg:col-span-2 flex flex-col gap-space-md"><div className="flex items-center gap-space-sm"><img alt="Verified Talent Enterprise Logo" className="h-7 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XrceQ0HNYxstspvn9SssTKMfknl_hTdwNNROdupTbXNmQ088VoG4E-Q9yu5eoS6IdaHAFOCALRUC_P2KnyP76lQunWOKK5v_MbVuin3DbkWHojLsRUOuMkL8ra7Zun7sdh2hcqBN8zy_sNAOCkAvcJohuEyFRHmOPQZ0GybHZBKLuZyVq1KDU22AmPEEJn0am5hYvnZ2CeGbN8X2FelK5Xl39e_djFW1rOiyufmTvldTQRR4JIYXM5ObQ"/><span className="font-headline-sm text-headline-sm text-on-surface">Verified Talent Enterprise</span></div><p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Deterministic talent intelligence, background-verified candidate profiles, and direct university pipeline orchestration for tier-one engineering teams.</p><div className="flex flex-wrap items-center gap-space-sm pt-space-xs"><div className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg bg-surface-container-low"><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">verified_user</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">SOC-2 Type II Certified</span></div><div className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg bg-surface-container-low"><span className="material-symbols-outlined text-on-tertiary-container text-[16px]">lock</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">ISO 27001</span></div><div className="flex items-center gap-space-2xs px-space-sm py-space-xs rounded-lg bg-surface-container-low"><span className="material-symbols-outlined text-secondary text-[16px]">speed</span><span className="font-label-sm text-label-sm text-on-surface font-semibold">99.9% Enterprise SLA</span></div></div></div><div className="flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-outline">ATS Integrations</span><ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-secondary transition-colors" data-path="greenhouse-integration" href="#">Greenhouse Partner Sync</a></li><li><a className="hover:text-secondary transition-colors" data-path="lever-integration" href="#">Lever ATS Direct</a></li><li><a className="hover:text-secondary transition-colors" data-path="ashby-integration" href="#">Ashby Real-time Ingestion</a></li><li><a className="hover:text-secondary transition-colors" data-path="workday-integration" href="#">Workday HCM Connector</a></li><li><a className="hover:text-secondary transition-colors" data-path="api-documentation" href="#">Custom Webhook API</a></li></ul></div><div className="flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-outline">Intelligence &amp; ROI</span><ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-secondary transition-colors" data-path="hiring-roi-calculator" href="#">Hiring ROI Calculator</a></li><li><a className="hover:text-secondary transition-colors" data-path="employer-case-studies" href="#">Employer Case Studies</a></li><li><a className="hover:text-secondary transition-colors" data-path="market-compensation-index" href="#">Compensation Index 2025</a></li><li><a className="hover:text-secondary transition-colors" data-path="vetting-methodology" href="#">Vetting Methodology Whitepaper</a></li></ul></div><div className="flex flex-col gap-space-sm"><span className="font-label-md text-label-md uppercase tracking-wider text-outline">Legal &amp; Trust</span><ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant"><li><a className="hover:text-secondary transition-colors" data-path="terms-of-service" href="#">Enterprise Terms of Service</a></li><li><a className="hover:text-secondary transition-colors" data-path="privacy-security" href="#">Candidate Privacy &amp; Security</a></li><li><a className="hover:text-secondary transition-colors" data-path="data-subprocessors" href="#">Subprocessors &amp; DPA</a></li><li><a className="hover:text-secondary transition-colors" data-path="compliance-portal" href="#">Trust &amp; Compliance Center</a></li></ul></div></div><div className="mt-space-2xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md bg-surface-container-low px-space-base py-space-sm rounded-lg"><span className="font-label-sm text-label-sm text-outline">© 2025 Verified Talent Enterprise Systems Inc. High-velocity hiring infrastructure.</span><div className="flex items-center gap-space-lg font-label-sm text-label-sm text-outline"><span className="flex items-center gap-space-2xs"><span className="w-2 h-2 rounded-full bg-on-tertiary-container"></span>All Systems Operational</span><span className="font-data-mono text-data-mono">Build v4.19.2</span></div></div></div></footer>
    </>
  );
}
