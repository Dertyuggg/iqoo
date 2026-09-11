import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function StudentProfilePage() {
  return (
    <>
      <Navbar activePath="/profile/setup" />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
{/* Interactive Toast Notification Element */}
<div className="fixed bottom-6 right-6 z-50 transform translate-y-20 opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-space-xs bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-xl" id="copy-toast">
<span className="material-symbols-outlined text-primary-fixed" style={{fontVariationSettings:'"FILL" 1'}}>check_circle</span>
<span className="font-label-lg text-label-lg">Profile link copied to clipboard!</span>
</div>
{/* Ambient Decorative Canvas Gradient Accents (Contained) */}
<div className="relative w-full max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-xl">
<div className="absolute -top-12 left-1/4 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-48 right-10 w-80 h-80 rounded-full bg-secondary-fixed/25 blur-3xl pointer-events-none -z-10"></div>
{/* HEADER / PROFILE BANNER HERO CARD */}
<section className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg lg:p-space-xl relative overflow-hidden mb-space-2xl">
{/* Subtle Brand Wave Backdrop Pattern */}
<div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-highest opacity-70"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-space-lg md:gap-space-xl items-start pt-6">
{/* Portrait Container with Elevated Ring */}
<div className="relative shrink-0">
<div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full p-1 bg-surface-container-lowest shadow-md ring-4 ring-primary/10">
<img alt="Ananya Sharma" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW3-9fqTZ98W61Z_Op-WXUHNscW_846wSe72SzOb9vFDaddtb04FrBBOoqbnSec84KyrdGT63zntEioS3_HIcPHIAvlpXZ9DeHcXLT_7NcNOl0ZIp0qDW5PeFjkq0xSID6mnJOfe7z7Hpgw4Ns9dwcAsXo8PdNgok4djd-7LJmkJg4eaUoanyurHknFr18OHTz284m_1o4wShIK5wN-XyKY0pK8gZhwg2FFxmbKwYIiIAVGDM2rhji9g"/>
</div>
{/* Verified Shield Floating Marker */}
<div className="absolute bottom-1 right-1 bg-primary text-on-primary rounded-full p-1.5 shadow-md flex items-center justify-center">
<span className="material-symbols-outlined text-title-md" style={{fontVariationSettings:'"FILL" 1'}}>verified</span>
</div>
</div>
{/* Student Details & Core Narrative */}
<div className="flex-1 flex flex-col gap-space-xs">
{/* Tier & Status Pill Tag */}
<div className="flex flex-wrap items-center gap-space-xs mb-space-2xs">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-badge text-badge tracking-wider uppercase shadow-sm">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings:'"FILL" 1'}}>military_tech</span>
              Ranked Top 5% Backend Builder in India
            </span>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-primary"></span>
              Identity &amp; College Verified
            </span>
</div>
{/* Name & Verification Badge */}
<div className="flex flex-wrap items-center gap-space-xs">
<h1 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">Ananya Sharma</h1>
<span className="material-symbols-outlined text-primary text-headline-sm" style={{fontVariationSettings:'"FILL" 1'}} title="Verified Proof-of-Work Credential">publish</span>
</div>
{/* Headline / Tagline */}
<p className="font-title-md text-title-md text-on-surface font-semibold max-w-3xl">
            Full-Stack Software Engineer • Open Source Enthusiast • Building high-throughput web systems
          </p>
{/* Education & Location Metadata */}
<div className="flex flex-wrap items-center gap-y-1 gap-x-space-md text-on-surface-variant font-body-sm text-body-sm pt-1">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-base text-primary">school</span>
              B.Tech in Computer Science '25 • Government Engineering College, Bilaspur (Tier-3 College)
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-base text-secondary">location_on</span>
              Bilaspur, Chhattisgarh, India
            </span>
</div>
{/* Quick Links & Contact Bar */}
<div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
<a className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base">code</span>
              GitHub (@ananya-sharma)
            </a>
<a className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-base">hub</span>
              LinkedIn
            </a>
<a className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-base">public</span>
              Live Portfolio
            </a>
</div>
</div>
{/* Recruiter Action Module (Sticky CTA Box) */}
<div className="w-full md:w-auto flex md:flex-col items-stretch gap-space-xs shrink-0 pt-space-xs">
<button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-secondary-container hover:bg-secondary text-on-secondary rounded-xl font-label-lg text-label-lg shadow-sm transition-all transform hover:-translate-y-0.5" type="button">
<span className="material-symbols-outlined text-lg">calendar_month</span>
            Request Interview / Resume
          </button>
<button className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg transition-colors" id="share-profile-btn" type="button">
<span className="material-symbols-outlined text-lg text-primary">share</span>
            Share Profile
          </button>
</div>
</div>
</section>
{/* MAIN BODY ASYMMETRIC GRID (8 Cols / 4 Cols) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* LEFT COLUMN (2/3 width - 8 Columns): Proof of Work & Showcase Projects */}
<div className="lg:col-span-8 flex flex-col gap-space-xl">
{/* SECTION 1: Featured Showcase Projects */}
<section className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-2.5 h-6 bg-primary rounded-full"></div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Featured Showcase Projects</h2>
</div>
<span className="font-label-md text-label-md text-primary font-semibold">2 Verified Repositories</span>
</div>
{/* PROJECT 1: Distributed Cache */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex flex-col gap-space-sm">
<div className="flex flex-wrap items-start justify-between gap-space-xs">
<div>
<span className="text-secondary font-label-md text-label-md uppercase tracking-wider font-bold">System Architecture • High Performance</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                    Distributed Cache with LRU &amp; Redis Fallback
                  </h3>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 bg-surface-container text-primary rounded-full font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-sm text-primary" style={{fontVariationSettings:'"FILL" 1'}}>verified</span>
                  Score: 9.6/10
                </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Engineered an in-memory distributed cache processing <strong className="text-on-surface font-semibold">12,000 requests/second</strong> with custom consistent hashing topology. Features sub-millisecond LRU eviction and automatic failover sync with secondary Redis clusters.
              </p>
{/* Technical Metric Highlight Strip */}
<div className="grid grid-cols-3 gap-space-xs p-space-sm bg-surface-container-low rounded-xl text-center">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">12k</span>
<span className="font-label-md text-label-md text-on-surface-variant">Req / Sec Peak</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">&lt; 0.8ms</span>
<span className="font-label-md text-label-md text-on-surface-variant">p99 Latency</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary font-bold">99.98%</span>
<span className="font-label-md text-label-md text-on-surface-variant">Cache Hit Rate</span>
</div>
</div>
{/* Tech Stack Pills */}
<div className="flex flex-wrap items-center gap-space-2xs pt-1">
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Go (Golang)</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Redis</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Docker</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Prometheus</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">gRPC</span>
</div>
{/* Action links */}
<div className="flex items-center gap-space-md pt-space-xs text-primary font-label-lg text-label-lg">
<a className="inline-flex items-center gap-1 hover:underline" href="#">
<span className="material-symbols-outlined text-lg">open_in_new</span>
                  Live Benchmark Demo
                </a>
<a className="inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface" href="#">
<span className="material-symbols-outlined text-lg">terminal</span>
                  Verified GitHub Repo
                </a>
</div>
</div>
</article>
{/* PROJECT 2: CampuZilla */}
<article className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex flex-col gap-space-sm">
<div className="flex flex-wrap items-start justify-between gap-space-xs">
<div>
<span className="text-tertiary font-label-md text-label-md uppercase tracking-wider font-bold">Full Stack • Live Production System</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
                    CampuZilla — Realtime Campus Resource Booking
                  </h3>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 bg-surface-container-high text-tertiary-container rounded-full font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings:'"FILL" 1'}}>check_circle</span>
                  Live In Production
                </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Conceived, designed, and deployed a robust reservation engine currently utilized by <strong className="text-on-surface font-semibold">2,400+ students and 45 faculty members</strong> across campus labs, seminar halls, and equipment banks with zero recorded downtime.
              </p>
{/* Social Proof / Adoption Tag */}
<div className="flex items-center gap-space-xs p-space-xs bg-surface-container-low rounded-xl">
<span className="material-symbols-outlined text-secondary ml-1">groups</span>
<span className="font-body-sm text-body-sm text-on-surface">
                  Adopted by <strong>Government Engineering College Bilaspur</strong> Dean of Student Affairs.
                </span>
</div>
{/* Tech Stack Pills */}
<div className="flex flex-wrap items-center gap-space-2xs pt-1">
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Next.js 14</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Node.js</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">PostgreSQL</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">TailwindCSS</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Prisma ORM</span>
<span className="px-space-xs py-1 rounded-md bg-surface-container text-on-surface font-label-md text-label-md">Socket.io</span>
</div>
{/* Action links */}
<div className="flex items-center gap-space-md pt-space-xs text-primary font-label-lg text-label-lg">
<a className="inline-flex items-center gap-1 hover:underline" href="#">
<span className="material-symbols-outlined text-lg">launch</span>
                  Visit Production App
                </a>
<a className="inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface" href="#">
<span className="material-symbols-outlined text-lg">code_blocks</span>
                  Architecture Specs
                </a>
</div>
</div>
</article>
</section>
{/* SECTION 2: Verified Senior Engineer Code Reviews */}
<section className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<div className="w-2.5 h-6 bg-secondary rounded-full"></div>
<h2 className="font-headline-md text-headline-md text-on-surface font-bold">Verified Code Reviews &amp; Industry Endorsements</h2>
</div>
<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm relative overflow-hidden">
<div className="flex flex-col gap-space-md">
<div className="flex items-start gap-space-md">
<span className="material-symbols-outlined text-secondary text-headline-lg shrink-0">format_quote</span>
<div className="flex-1 flex flex-col gap-space-xs">
<blockquote className="font-body-lg text-body-lg text-on-surface font-medium italic">
                    “Ananya writes remarkably clean modular TypeScript and Go with exceptional error boundary handling. Her distributed cache implementation showed production-grade awareness of concurrency race conditions. Top tier engineering instincts.”
                  </blockquote>
<div className="flex flex-wrap items-center justify-between gap-space-xs pt-space-xs">
<div>
<div className="font-label-lg text-label-lg text-on-surface font-bold">Rajesh Venkataraman</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Staff Platform Engineer @ FinTech Scaleup • Verified Reviewer #419</div>
</div>
<span className="inline-flex items-center gap-1 px-space-xs py-1 bg-surface-container-high rounded-md text-primary font-badge text-badge">
<span className="material-symbols-outlined text-xs">verified</span>
                      AUDITED REPO: /distributed-cache
                    </span>
</div>
</div>
</div>
{/* Sub review / secondary feedback */}
<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-headline-sm shrink-0">sentiment_very_satisfied</span>
<div className="flex flex-col gap-0.5">
<p className="font-body-md text-body-md text-on-surface">
                    “CampuZilla’s database indexing plan handled high-concurrency booking collisions seamlessly during college festival registrations.”
                  </p>
<span className="font-label-md text-label-md text-on-surface-variant font-semibold">
                    Prof. A. K. Mishra • Head of Computer Science Dept, GEC Bilaspur
                  </span>
</div>
</div>
</div>
</div>
</section>
</div>
{/* RIGHT COLUMN (1/3 width - 4 Columns): Verified Skills, Badges & Activity Streak */}
<div className="lg:col-span-4 flex flex-col gap-space-xl">
{/* MODULE 1: Verified Skill Badges (Interactive cards) */}
<section className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Verified Skills</h3>
<span className="font-badge text-badge text-primary uppercase bg-surface-container px-2 py-0.5 rounded-full">Proctored</span>
</div>
<div className="flex flex-col gap-space-sm">
{/* Skill 1 */}
<div className="p-space-sm bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-title-md text-title-md text-on-surface font-bold">React &amp; Frontend</span>
<span className="font-badge text-badge text-primary bg-surface-container-highest px-2 py-0.5 rounded-full">Top 4%</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant mb-2">
<span>Verified Master</span>
<span className="font-bold text-primary">96th Percentile</span>
</div>
<div className="w-full bg-surface-dim h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: '96%' }}></div>
</div>
</div>
{/* Skill 2 */}
<div className="p-space-sm bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-title-md text-title-md text-on-surface font-bold">Node.js &amp; REST APIs</span>
<span className="font-badge text-badge text-primary bg-surface-container-highest px-2 py-0.5 rounded-full">Top 8%</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant mb-2">
<span>Verified Advanced</span>
<span className="font-bold text-primary">92nd Percentile</span>
</div>
<div className="w-full bg-surface-dim h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
</div>
</div>
{/* Skill 3 */}
<div className="p-space-sm bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="font-title-md text-title-md text-on-surface font-bold">System Design &amp; DBs</span>
<span className="font-badge text-badge text-secondary bg-surface-container-highest px-2 py-0.5 rounded-full">Top 12%</span>
</div>
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant mb-2">
<span>Verified Intermediate</span>
<span className="font-bold text-secondary">88th Percentile</span>
</div>
<div className="w-full bg-surface-dim h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
</div>
</div>
</div>
<div className="pt-space-2xs text-center">
<span className="font-body-sm text-body-sm text-on-surface-variant">All percentiles calibrated against 48,000+ engineering undergraduates in India.</span>
</div>
</section>
{/* MODULE 2: Commit Activity & Heatmap Proof of Work */}
<section className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Proof of Work</h3>
<span className="flex items-center gap-1 font-label-md text-label-md text-primary font-bold">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              180 Days Active Streak
            </span>
</div>
{/* Commit Activity Grid Visualization */}
<div className="flex flex-col gap-space-2xs">
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant mb-1">
<span>942 Contributions in 2024–2025</span>
<span>Mon – Sun</span>
</div>
{/* CSS Grid Mock of Continuous Commits */}
<div className="grid grid-flow-col grid-rows-7 gap-1.5 p-2 bg-surface-container-low rounded-xl overflow-hidden justify-between">
{/* Column 1 */}
<div className="w-3.5 h-3.5 rounded-sm bg-surface-dim"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/40"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/30"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-surface-dim"></div>
{/* Column 2 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/80"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/60"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/40"></div>
{/* Column 3 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/50"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/90"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-surface-dim"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/20"></div>
{/* Column 4 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/80"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/60"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/40"></div>
{/* Column 5 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/40"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/80"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/50"></div>
{/* Column 6 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/90"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-surface-dim"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/30"></div>
{/* Column 7 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/60"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/90"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/80"></div>
{/* Column 8 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/80"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/50"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/50"></div>
{/* Column 9 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary/50"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/90"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/60"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/40"></div>
{/* Column 10 */}
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/80"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/90"></div>
<div className="w-3.5 h-3.5 rounded-sm bg-primary/70"></div>
</div>
{/* Heatmap legend */}
<div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md pt-2">
<span className="text-xs">Less</span>
<div className="flex items-center gap-1">
<div className="w-2.5 h-2.5 rounded-sm bg-surface-dim"></div>
<div className="w-2.5 h-2.5 rounded-sm bg-primary/30"></div>
<div className="w-2.5 h-2.5 rounded-sm bg-primary/60"></div>
<div className="w-2.5 h-2.5 rounded-sm bg-primary"></div>
</div>
<span className="text-xs">More active</span>
</div>
</div>
{/* Availability Callout Card */}
<div className="mt-space-xs p-space-md rounded-xl bg-gradient-to-br from-primary-fixed/30 to-surface-container border-0">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-headline-sm shrink-0">check_box</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-bold">Hiring Availability</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Available for <strong className="text-on-surface">Full-time SDE-1 / Software Engineering Internships</strong>.
                </p>
<span className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-bold mt-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  Immediate Joiner (Notice: 0 days)
                </span>
</div>
</div>
</div>
</section>
{/* MODULE 3: Tier-3 College Pride & Verification Guarantee */}
<section className="p-space-md bg-surface-container-low rounded-2xl flex items-center gap-space-sm">
<div className="p-space-xs bg-surface-container-highest rounded-xl text-primary shrink-0">
<span className="material-symbols-outlined text-headline-sm" style={{fontVariationSettings:'"FILL" 1'}}>workspace_premium</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface font-bold">Proof Over Pedigree</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
              Every score, repository review, and streak is cryptographically sealed by the Verified Talent Network.
            </span>
</div>
</section>
</div>
</div>
</div>

</div></main>
      <footer className="w-full bg-surface-container-low"><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-2xl"><div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl"><div className="flex flex-col items-center md:items-start gap-space-2xs"><div className="flex items-center gap-space-xs"><span className="font-title-md text-title-md text-on-surface font-bold">Verified Talent</span><span className="font-badge text-badge text-primary bg-surface-container px-space-xs py-space-2xs rounded-full">India Edition</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Built for ambitious builders across India</p></div><nav className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">About Verified Talent</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">For Employers</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Student Success Stories</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">College Partnerships</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy &amp; Terms</a></nav></div><div className="pt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant">© 2025 Verified Talent. Democratizing career credibility through proof-of-work.</div></div></footer>
    </>
  );
}
