import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LandingPage() {
  return (
    <>
      <Navbar activePath="/" />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
{/* Top Ambient Glow & Hero Section */}
<section className="relative w-full overflow-hidden bg-surface pb-space-3xl">
{/* Subtle Ambient Circles contained */}
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-primary-fixed/25 via-surface-container-high/40 to-transparent blur-3xl pointer-events-none rounded-full"></div>
<div className="absolute top-48 -right-24 w-96 h-96 bg-secondary-fixed/30 blur-3xl pointer-events-none rounded-full"></div>
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop pt-space-xl">
{/* Top Micro Pill Notification */}
<div className="flex items-center justify-center mb-space-lg">
<div className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-space-2xs rounded-full shadow-sm">
<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="w-2 h-2 rounded-full bg-primary -ml-2.5"></span>
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wide">Winter 2025 Hiring Cohort Open</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">• ₹12 LPA Top Grant Offered</span>
</div>
</div>
{/* Asymmetric Hero Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
{/* Left Column: Copy & CTAs */}
<div className="lg:col-span-7 flex flex-col gap-space-md text-left z-10">
<div className="inline-flex items-center gap-space-xs">
<span className="font-badge text-badge text-secondary bg-secondary-fixed px-space-xs py-space-2xs rounded-full uppercase tracking-wider">Proof-of-Work First</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">Zero campus tier bias</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
            Get hired for what you can <span className="text-primary underline decoration-secondary-container decoration-wavy decoration-2">actually build</span>.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Build real-world projects, verify your skills, and get direct interview invites from top tech teams.
          </p>
{/* CTAs */}
<div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all group" data-path="submit-project" href="#">
<span>Start Free Profile</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors" href="#success-stories">
<span className="material-symbols-outlined text-lg text-primary">play_circle</span>
<span>Explore Hired Projects</span>
</a>
</div>
{/* Micro Trust indicators */}
<div className="flex items-center gap-space-md pt-space-sm">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full object-cover shadow-sm" alt="Close-up portrait of successful student developer smiling from a technical institute in India, natural lighting, teal tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeyijJuSnRTV8hmQoTkRiR_7FCV_oZz7vvXvoR23MJ4ZFguGBqRGkHhV8ZIwdxlLvKcqnawhEmlMuV89lpl4DjB4jT9kVShxucsTUmgkGpPx-_TNWdfiqWgpTWP4mfILbemtRfbC7TMNWRdKDxct09lHWOHgw42-D5eXtNCCMhldZYSJTuQ1JuBTDa_OuPplQuerMPc2PKPDvs3Jxzmv_9tMJlmbdoRSB7NKxVXDsoL1iOaQu7a5LVNg"/>
<img className="w-8 h-8 rounded-full object-cover shadow-sm" alt="Portrait of young Indian female software engineer with glasses, vibrant modern tech workspace background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7dC1i4H9Nx-EgXloEEy3RAwGTrPCBTz_6plP34lJpKb8LOZJK3HN6T94CB1HOyHRsOaMCdASuDj_02snOiizGaij9guJt7oP8O4oKde7b80KXsgrTRagQbIVkEnlqK6gomDVX-_QdclE_i5TVyXoWs6n1IIKwDbPkFKaHm90DB2mBC-FOaD7lP18URreIX6goUFEQw4c515zWlEUsCdhTDdQ13T0-KAlm1kc3q-LB7moGXJKXOX9V0g"/>
<img className="w-8 h-8 rounded-full object-cover shadow-sm" alt="Young college builder smiling confidently in modern engineering lab in Pune India, warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6z1yYyqQd2UXuoJee01K9JjfRxO-X5LllGZLTDrHmKYLznuX40gyeGSVov4837YeVjYppTyADtNsqpJIrL-Rjtg2T_d4WU0C02lbtB-zuzK_zpx76w8-hqLdWBm7kTZAsMZtIU3I64s0lnjS3lYCUK4fO-Yu5cmjM3QyRsTxIRVku7-GBZhzthgaOv_LA3ImQ1AVtJBqBdlqZVByEpgMxC3X2ZDmAokPy9QeO3ckqy0xSAQDt3-GpjQ"/>
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-badge text-badge font-bold">
                +4k
              </div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Trusted by <strong>15,000+</strong> builders from 240+ regional colleges
            </p>
</div>
</div>
{/* Right Column: Interactive Hero Mockup Card & Accents */}
<div className="lg:col-span-5 relative">
{/* Backing glowing backdrop */}
<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary-container/10 rounded-2xl filter blur-xl"></div>
{/* Floating Badge 1: Instant Invite */}
<div className="absolute -top-6 -left-4 z-20 bg-surface-container-lowest p-space-sm rounded-xl shadow-xl flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-base">bolt</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold">Direct Interview Ping</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Razorpay recruiter viewed code</p>
</div>
</div>
{/* Main Student Showcase Card */}
<div className="relative z-10 bg-surface-container-lowest rounded-2xl p-space-lg shadow-xl flex flex-col gap-space-md">
{/* Top Gradient Accent Strip */}
<div className="w-full h-1.5 bg-gradient-to-r from-primary via-tertiary to-secondary-container rounded-full"></div>
{/* Student Profile Header */}
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="relative">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" alt="Confident student builder from Jaipur technical college in a smart casual polo smiling in tech hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiXrgL6hdBpDAiz58sI84i_x7yi37xdtGWvegfnA2PtusgKxU4coGQx5Kll4LPpi9pxZLquNgVZgSI3SPLWfEKltp3MyqQAigtLqWGVYo_zj6gIw00czyPzMWgTNmfSBuisNM6aCf3Kvp91Ddrl-m-YON5XeyvXNtx9_Z6zbNvHpjdekbIiV6LjSOPbrgtYcBoExouy6B4GGtH9V7ty44zUJeXbqj7xcGoQ6lZfzoIoDH1J3dbzPiXGg"/>
<span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary rounded-full ring-2 ring-surface-container-lowest"></span>
</div>
<div>
<div className="flex items-center gap-space-2xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Aman Sharma</h3>
<span className="material-symbols-outlined text-primary text-base" title="Verified Proof-of-Work">verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">JECRC Foundation, Jaipur • B.Tech '24</p>
</div>
</div>
<span className="px-space-xs py-space-2xs rounded-full bg-surface-container-low text-primary font-badge text-badge font-bold uppercase">
                Top 3% Builder
              </span>
</div>
{/* Primary Verified Credential Pill */}
<div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">verified_user</span>
<div>
<span className="font-label-lg text-label-lg text-on-surface font-semibold block">Full-Stack Distributed Systems</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Verified by 3 Tech Leads • 94/100 Benchmark</span>
</div>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
</div>
{/* Working Project Proof Container */}
<div className="bg-surface-bright p-space-sm rounded-xl flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Production Submission</span>
<span className="inline-flex items-center gap-1 font-badge text-badge text-secondary bg-secondary-fixed px-space-xs py-space-2xs rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Live Demo
                </span>
</div>
<h4 className="font-title-md text-title-md text-on-surface font-semibold">Distributed Event Queue with Raft Consensus</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Built from scratch in Go and Redis with sub-millisecond p99 latency benchmarks. Zero tutorial copy-paste.
              </p>
<div className="flex flex-wrap items-center gap-space-2xs pt-space-2xs">
<span className="px-space-xs py-space-2xs rounded-lg bg-surface-container font-label-md text-label-md text-on-surface-variant">Go (Golang)</span>
<span className="px-space-xs py-space-2xs rounded-lg bg-surface-container font-label-md text-label-md text-on-surface-variant">Raft Protocol</span>
<span className="px-space-xs py-space-2xs rounded-lg bg-surface-container font-label-md text-label-md text-on-surface-variant">Docker</span>
<span className="px-space-xs py-space-2xs rounded-lg bg-surface-container font-label-md text-label-md text-on-surface-variant">CI/CD</span>
</div>
</div>
{/* Direct Offer Tag */}
<div className="bg-primary text-on-primary p-space-sm rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-2xl text-secondary-fixed">work</span>
<div>
<p className="font-label-lg text-label-lg font-bold">Hired as Backend Engineer</p>
<p className="font-body-sm text-body-sm text-primary-fixed">Fintech Unicorn, Bengaluru • ₹14 LPA</p>
</div>
</div>
<span className="material-symbols-outlined text-primary-fixed">arrow_outward</span>
</div>
</div>
{/* Floating Badge 2: Verified Code */}
<div className="absolute -bottom-6 -right-2 z-20 bg-surface-container-lowest p-space-sm rounded-xl shadow-xl flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-xl">terminal</span>
<div>
<p className="font-label-md text-label-md text-on-surface font-bold">Clean Architecture</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Zero Plagiarism Verified</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Trust Stats Strip */}
<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center md:text-left">
<div className="flex flex-col gap-space-2xs">
<span className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">4,200+</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Students Placed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Direct hires</span>
</div>
<div className="flex flex-col gap-space-2xs">
<span className="font-headline-lg text-headline-lg text-secondary font-bold tracking-tight">180+</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Hiring Partners</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Top startups</span>
</div>
<div className="flex flex-col gap-space-2xs">
<span className="font-headline-lg text-headline-lg text-tertiary font-bold tracking-tight">₹8.5 LPA</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Average Package</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Industry standard</span>
</div>
<div className="flex flex-col gap-space-2xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">240+</span>
<span className="font-label-lg text-label-lg text-on-surface font-semibold">Tier-2 &amp; 3 Colleges</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Across India</span>
</div>
</div>
</div>
</section>
{/* Value Proposition Grid */}
<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
{/* Section Header */}
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-2xl gap-space-xs">
<span className="font-badge text-badge text-primary bg-surface-container-high px-space-xs py-space-2xs rounded-full uppercase tracking-wider">The Proof Engine</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          Engineered to showcase pure talent over pedigrees
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Campus placement tests filter you out using GPA cutoffs and puzzle quizzes. We replace that broken gatekeeping with authentic builder validation.
        </p>
</div>
{/* Bento Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/* Value 1 */}
<div className="group relative bg-surface-container-lowest/60 backdrop-blur-xl border border-white/20 rounded-3xl p-space-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,104,95,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col gap-space-lg">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-sm transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<span className="material-symbols-outlined text-[28px]">code</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight group-hover:text-primary transition-colors duration-300">Show Real Code, Not Just Resumes</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Connect GitHub, showcase working deployments, and let your production code speak louder than pedigree.
              </p>
</div>
</div>
<div className="relative z-10 mt-space-xl inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container/50 border border-white/40 rounded-full group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300 shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary font-semibold tracking-wide">Auto-scans git commit history</span>
</div>
</div>
{/* Value 2 */}
<div className="group relative bg-surface-container-lowest/60 backdrop-blur-xl border border-white/20 rounded-3xl p-space-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(253,118,26,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col gap-space-lg">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 flex items-center justify-center text-secondary shadow-sm transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<span className="material-symbols-outlined text-[28px]">speed</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight group-hover:text-secondary transition-colors duration-300">Level-Playing Field Verification</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Practical 45-minute code benchmarks assessed on clean architecture and problem-solving, not rote memory.
              </p>
</div>
</div>
<div className="relative z-10 mt-space-xl inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container/50 border border-white/40 rounded-full group-hover:bg-secondary/5 group-hover:border-secondary/20 transition-all duration-300 shadow-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-secondary font-semibold tracking-wide">No trick algorithms</span>
</div>
</div>
{/* Value 3 */}
<div className="group relative bg-surface-container-lowest/60 backdrop-blur-xl border border-white/20 rounded-3xl p-space-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,128,150,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col gap-space-lg">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tertiary/10 to-tertiary/5 border border-tertiary/20 flex items-center justify-center text-tertiary shadow-sm transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<span className="material-symbols-outlined text-[28px]">hub</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight group-hover:text-tertiary transition-colors duration-300">Direct Company Discovery</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Skip the cold emails. Top startups and product firms search our talent pool by verified project stacks.
              </p>
</div>
</div>
<div className="relative z-10 mt-space-xl inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container/50 border border-white/40 rounded-full group-hover:bg-tertiary/5 group-hover:border-tertiary/20 transition-all duration-300 shadow-sm">
<span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-tertiary font-semibold tracking-wide">Direct recruiter DM inbox</span>
</div>
</div>
{/* Value 4 */}
<div className="group relative bg-surface-container-lowest/60 backdrop-blur-xl border border-white/20 rounded-3xl p-space-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,104,95,0.12)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col gap-space-lg">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-sm transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<span className="material-symbols-outlined text-[28px]">groups</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight group-hover:text-primary transition-colors duration-300">Free Community Mentorship</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Access project blueprints, code review checklists, and senior peer guidance from engineers already placed.
              </p>
</div>
</div>
<div className="relative z-10 mt-space-xl inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container/50 border border-white/40 rounded-full group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300 shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary font-semibold tracking-wide">Live weekly review circles</span>
</div>
</div>
</div>
</div>
</section>
{/* Interactive Project Spotlight Strip */}
<section className="w-full bg-surface-container-low py-space-2xl overflow-hidden">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
<div>
<span className="font-badge text-badge text-secondary bg-secondary-fixed px-space-xs py-space-2xs rounded-full uppercase tracking-wider">Live Proof Gallery</span>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-space-2xs">
            Projects that bypassed tier gatekeeping this month
          </h2>
</div>
<a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold" data-path="explore" href="#">
<span>View all 800+ live verified repositories</span>
<span className="material-symbols-outlined text-base">arrow_forward</span>
</a>
</div>
{/* Projects Carousel / Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/* Project Card 1 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-space-2xs rounded-full bg-surface-container font-badge text-badge text-primary font-bold">Full-Stack AI</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">NIT Raipur • '24</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">DocuSynthesizer: RAG-based Legal Parser</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Processes 500-page contracts with source citations and custom embedding rerankers. Deployed with Terraform.
            </p>
<div className="flex items-center gap-space-xs pt-space-xs">
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">FastAPI</span>
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">pgvector</span>
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">Next.js</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<img className="w-7 h-7 rounded-full object-cover" alt="Student developer headshot smiling, engineering student at NIT Raipur India" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaND69Ez0nQrgTWZDFb9jwgvOollatgI68Nx9FkxEmnJB3qG2wKIBCmuNE9atOtn2js6uM16rhCLQWhwsDO1JnQALkU7RQszWL9ATctA3PxwL3G0URE10nddK33WxQkDQyDUQmAMEzHUa-nZkOwdI9cXzHHWlVmrp4ch5dI8yDaIy0bOOv6FOpTDJcQ7fCcYneq3wiWdeeiv7Bb6Hhl6wR2G8sXwrGYxhuPYg9pBBr2zIup7bTQT2hKw"/>
<span className="font-label-md text-label-md text-on-surface font-medium">Siddharth Rao</span>
</div>
<span className="font-label-md text-label-md text-secondary font-bold">Offer: ₹16 LPA</span>
</div>
</div>
{/* Project Card 2 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-space-2xs rounded-full bg-surface-container font-badge text-badge text-primary font-bold">DevOps &amp; Infra</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">SGSITS Indore • '24</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Multi-Cluster Kubernetes Observability Hub</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Lightweight Prometheus &amp; OpenTelemetry dashboard with automated synthetic canary testing alerts.
            </p>
<div className="flex items-center gap-space-xs pt-space-xs">
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">Go</span>
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">Kubernetes</span>
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">eBPF</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<img className="w-7 h-7 rounded-full object-cover" alt="Young female tech graduate from Indore India with headphones in modern co-working station" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBurqz7MTok7_vQ3lefu3v53R0VhJDq4c52HxRiuI3Xmu43kK_oReE196m9-nwxUHnw-U3ykc_4FFWdDKrX61DXojGQWs5i9ObLKAsH_xO7d1-nNxwBw11ttv_NG-Swov3xFQYFn3k22X6Na-0fqKyft6LmSnHOVs4rfNdPBb-GDJQtS-KLIDLQZR21oCgbeLZxLpVDdR-sBgsY6T3fZb4tGltEaGPhEUw4OvJtH9O3mrdEZt59v0wqyQ"/>
<span className="font-label-md text-label-md text-on-surface font-medium">Pooja Chouhan</span>
</div>
<span className="font-label-md text-label-md text-secondary font-bold">Offer: ₹11 LPA</span>
</div>
</div>
{/* Project Card 3 */}
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-xs py-space-2xs rounded-full bg-surface-container font-badge text-badge text-primary font-bold">Frontend Engine</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">KIET Ghaziabad • '25</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-bold">Collaborative Canvas with Conflict-Free CRDTs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Real-time infinite canvas powered by WebGL, WebSockets, and Yjs with offline reconciliation.
            </p>
<div className="flex items-center gap-space-xs pt-space-xs">
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">TypeScript</span>
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">WebGL</span>
<span className="font-badge text-badge bg-surface-container-low text-on-surface-variant px-space-xs py-space-2xs rounded-md">WebSockets</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<img className="w-7 h-7 rounded-full object-cover" alt="Young Indian student software engineer coding in cozy study area with laptop and dual screens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb6EZ_uNEiQ0BkqesL3NCXk2bvyUA8GMxaa2ztMWNAZy3m_UcbxBihdXgIO7A9nkeBHdCVJB69YNb1oxaml0XzXBrmszSdJi7pbghlziCOP6i2n4BxEI_WGjbjOkktPsjVmWWIw5pw8Zayv4ahygQZD05h_b5kLswbo_Dnhbdn68HsuPvgZENi51jqZLQ4tsOgVSUPCvBRgR1JfTxhOvQEtZcb7IPFZlWfOzmkCDOCjqgTXSeGICBi3w"/>
<span className="font-label-md text-label-md text-on-surface font-medium">Kunal Verma</span>
</div>
<span className="font-label-md text-label-md text-secondary font-bold">Offer: ₹13.5 LPA</span>
</div>
</div>
</div>
</div>
</section>
{/* Social Proof & Testimonials */}
<section className="w-full bg-surface py-space-3xl" id="success-stories">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-2xl gap-space-xs">
<span className="font-badge text-badge text-primary bg-surface-container-high px-space-xs py-space-2xs rounded-full uppercase tracking-wider">Student Voices</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          From overlooked resumes to 3 simultaneous offers
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Hear how students from non-metro engineering colleges bypassed traditional campus gatekeeping.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/* Testimonial 1 */}
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “My college didn't have any tier-1 product companies visiting campus. We only had mass recruiters offering ₹3.5 LPA. Through Verified Talent, I submitted my distributed caching engine, cleared the 45-minute architectural review, and got an interview request directly from an e-commerce unicorn in Bengaluru within 4 days.”
            </p>
</div>
<div className="flex items-center gap-space-sm pt-space-sm">
<img className="w-12 h-12 rounded-full object-cover" alt="Professional avatar portrait of Rahul Meena smiling, alumni of Madhav Institute of Technology and Science Gwalior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNJnHP9Dzn0zDea_dj35mv-vUCJ09BtAUPKz5AN5L-oOD4zfsoS7eqXI-feZ-tdMC0PqD17f8mdGfIeGy-OJO6kdEZKYpHxhxJhd_oG86_43h6JTfdT4a_noTWjU24FWPG7HOeoRyrA1gass7g3HO_N_kmlmFfNVqE8rw6k61_YdZ-e3EScoImfj1YyeUZ97Av3SYKi1keGcrTMJrCClDRzsCdJfsr6hmpnl-LEiOI9uSN4U4WzlaLg"/>
<div>
<p className="font-title-md text-title-md text-on-surface font-bold">Rahul Meena</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">MITS Gwalior • Now SDE-1 @ Zepto</p>
</div>
</div>
</div>
{/* Testimonial 2 */}
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “Every job application on LinkedIn felt like a black hole. When your college isn't famous, recruiters filter out resumes before looking at your GitHub. Verified Talent replaced that entire guessing game with a score based on real code quality. In my final interview, we only talked about my verified system architecture.”
            </p>
</div>
<div className="flex items-center gap-space-sm pt-space-sm">
<img className="w-12 h-12 rounded-full object-cover" alt="Portrait of Ananya Sengupta, young software engineer from Bhubaneswar smiling with corporate badge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWdUEidy3N3ZHyP1BZKDYYPLiF9scnJlnZ9Di-gQg9cCpKQwKcq3eJ8BDGGxWdM1BxplDCNPk_JSfAHiRic2cmOTygkVNnMR118FTf_9E1FABWPZtI0L5Y_8LrDPGCETpzN_H5XosisDsOnzehwValGNlURn-sXtModRix0E9g7yVNu_KchWj0igSVHVseEf7NJfvlbwPqksenIbNGs3Ukl709N4-swGriymHZ4Nj2R4u9CcnDRF7huw"/>
<div>
<p className="font-title-md text-title-md text-on-surface font-bold">Ananya Sengupta</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">ITER Bhubaneswar • Now Frontend Eng @ Postman</p>
</div>
</div>
</div>
{/* Testimonial 3 */}
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
<span className="material-symbols-outlined text-base fill-1" style={{fontVariationSettings:'"FILL" 1'}}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
              “The best part is that it is genuinely 100% free for students. No paid courseupsell, no hidden placement fee cuts. The community feedback on my PR helped me refactor my database queries and that single project landed me an offer with ₹10.5 LPA base.”
            </p>
</div>
<div className="flex items-center gap-space-sm pt-space-sm">
<img className="w-12 h-12 rounded-full object-cover" alt="Happy young tech graduate Aditya Deshmukh from Aurangabad holding his laptop with pride" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRroP2ys11OPtvueDiaQCakYxRmSpgKHwBBFQ6dfAalLgNAlOvkGu-cx4YoPvB51ABb_crphYuqUNLc3GzdSHNdKHpVQyPp2ZTKTSmA39USNB9ox01KZyIYq5HJC53JL9SLWji2Icx7HMvqmYDdJV-4-ZZH759qqkPpdyxUtT9f_-o2ygWkjxcdJSEVpwCXFs2tTwwab2hSaatvyTNC4udaij9j03Bv_SlIOhgQKG6cDZpgxvOaZOqmQ"/>
<div>
<p className="font-title-md text-title-md text-on-surface font-bold">Aditya Deshmukh</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">GECA Aurangabad • Now DevOps Eng @ Groww</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Comparison / Why It Works Section */}
<section className="w-full bg-surface-container-low py-space-3xl">
<div className="max-w-[1080px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="text-center mb-space-2xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">The Old Campus Game vs. Verified Talent</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">Stop competing in a game rigged against regional college builders.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/* Broken Campus Way */}
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs text-error">
<span className="material-symbols-outlined text-2xl">cancel</span>
<h3 className="font-headline-sm text-headline-sm font-bold">Traditional Campus Placements</h3>
</div>
<ul className="flex flex-col gap-space-sm text-on-surface-variant font-body-md text-body-md">
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-error text-lg shrink-0 mt-0.5">close</span>
<span>Arbitrary 8.0+ CGPA cutoffs before you even get to write code.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-error text-lg shrink-0 mt-0.5">close</span>
<span>Rote memory aptitude tests and tricky math puzzles unrelated to production software.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-error text-lg shrink-0 mt-0.5">close</span>
<span>Tier-1 exclusivity: Top startups visit only 15 select colleges across India.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-error text-lg shrink-0 mt-0.5">close</span>
<span>Mass recruiter packages averaging ₹3.5–4.2 LPA with rigid service bonds.</span>
</li>
</ul>
</div>
{/* The Verified Way */}
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md ring-2 ring-primary/20">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-2xl">check_circle</span>
<h3 className="font-headline-sm text-headline-sm font-bold">The Verified Talent Way</h3>
</div>
<ul className="flex flex-col gap-space-sm text-on-surface font-body-md text-body-md">
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check</span>
<span><strong>100% Blind Evaluation:</strong> Assessed purely on code modularity and architecture.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check</span>
<span><strong>Live Working Demos:</strong> Reviewers test real deployed APIs and responsive UIs.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check</span>
<span><strong>Recruiters Come to You:</strong> 180+ teams actively filter by verified tech stacks.</span>
</li>
<li className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">check</span>
<span><strong>High-Growth Packages:</strong> Fair market offers averaging ₹8.5 LPA without bonds.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
{/* Final High-Conversion CTA Banner */}
<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
<div className="relative overflow-hidden bg-primary rounded-3xl p-space-xl lg:p-space-3xl text-on-primary shadow-xl">
{/* Subtle Glow Overlays */}
<div className="absolute -right-16 -top-16 w-80 h-80 bg-primary-fixed-dim/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -left-16 -bottom-16 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-space-md">
<span className="font-badge text-badge text-primary-fixed bg-surface-container-highest/20 px-space-xs py-space-2xs rounded-full uppercase tracking-wider">
            Zero Cost • Free Forever
          </span>
<h2 className="font-headline-lg text-headline-lg font-extrabold tracking-tight">
            Ready to let your code unlock your future? Join 15,000+ student builders today.
          </h2>
<p className="font-body-lg text-body-lg text-primary-fixed max-w-xl">
            Create your profile in 3 minutes, link your GitHub repository, and start receiving direct interview invites for what you can actually build.
          </p>
<div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
<a className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-md hover:bg-surface-bright transition-all group" data-path="submit-project" href="#">
<span>Start Free Profile Now</span>
<span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<a className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors" data-path="skill-assessment" href="#">
<span className="material-symbols-outlined text-lg">terminal</span>
<span>Take Free 45-min Skill Benchmark</span>
</a>
</div>
<div className="flex items-center gap-space-md pt-space-xs text-primary-fixed text-body-sm font-body-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">lock_open</span> No credit card required
            </span>
<span>•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm">school</span> Open to all colleges &amp; batches
            </span>
</div>
</div>
</div>
</div>
</section>
</div></main>
      <footer className="w-full bg-surface-container-low"><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-2xl"><div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl"><div className="flex flex-col items-center md:items-start gap-space-2xs"><div className="flex items-center gap-space-xs"><span className="font-title-md text-title-md text-on-surface font-bold">Verified Talent</span><span className="font-badge text-badge text-primary bg-surface-container px-space-xs py-space-2xs rounded-full">India Edition</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Built for ambitious builders across India</p></div><nav className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">About Verified Talent</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">For Employers</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Student Success Stories</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">College Partnerships</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy &amp; Terms</a></nav></div><div className="pt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant">© 2025 Verified Talent. Democratizing career credibility through proof-of-work.</div></div></footer>
    </>
  );
}
