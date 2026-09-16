'use client';

import Navbar from '@/components/Navbar';

export default function SubmitProjectPage() {
  return (
    <>
      <Navbar activePath="/projects/submit" />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
        <div className="w-full max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-xl">
          {/* Top Uplifting Intro Block */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg lg:p-space-2xl mb-space-xl shadow-sm">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute right-1/4 -top-12 w-48 h-48 bg-secondary-fixed/40 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-space-lg">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-full bg-surface-container-highest text-primary font-badge text-badge tracking-wider uppercase mb-space-sm">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>Proof of Work Submission</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Showcase a project you&apos;re proud of ✨
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs leading-relaxed">
                  We don&apos;t grade you on perfection — we evaluate architecture, real problem-solving, and your unique engineering decisions.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm border-none">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings:'"FILL" 1'}}>workspace_premium</span>
                </div>
                <div>
                  <div className="font-title-md text-title-md text-on-surface font-bold">Fast Review SLA</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Human peer review in &lt; 48 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Primary Submission Form */}
            <form className="lg:col-span-8 flex flex-col gap-space-xl" onSubmit={(e) => e.preventDefault()}>
              {/* Step 1: Project Identity */}
              <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center text-xs">1</span>
                    <label className="font-title-md text-title-md text-on-surface font-bold" htmlFor="project-name">What is your project called?</label>
                  </div>
                  <span className="font-badge text-badge text-outline uppercase tracking-wider">Required</span>
                </div>
                <input className="w-full h-11 px-space-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all" id="project-name" placeholder="e.g. DevPulse — Automated PR Review Bot" type="text" defaultValue="DevPulse — Automated PR Review Bot"/>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  A clear title that hints at what your project actually accomplishes or tests.
                </p>
              </div>

              {/* Step 2: Codebase & Deployment */}
              <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-xs">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center text-xs">2</span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">Repository &amp; Live Demo Links</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="repo-url">GitHub Repository URL</label>
                    <div className="inline-flex items-center gap-space-2xs px-space-xs py-space-2xs rounded-full bg-surface-container-high text-primary font-badge text-badge">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span>Repository is public and ready!</span>
                    </div>
                  </div>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-space-sm text-outline">code</span>
                    <input className="w-full h-11 pl-11 pr-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all" id="repo-url" placeholder="https://github.com/your-username/repo-name" type="url" defaultValue="https://github.com/ananya-dev/devpulse"/>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="demo-url">Live Deployment URL <span className="font-body-sm text-body-sm text-outline">(Optional but strongly encouraged)</span></label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-space-sm text-outline">language</span>
                    <input className="w-full h-11 pl-11 pr-space-md bg-surface-container-low text-on-surface rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all" id="demo-url" placeholder="https://devpulse.vercel.app" type="url" defaultValue="https://devpulse.vercel.app"/>
                  </div>
                </div>
              </div>

              {/* Step 3: Domain & Tech Stack */}
              <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-xs">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center text-xs">3</span>
                  <span className="font-title-md text-title-md text-on-surface font-bold">Primary Domain &amp; Technical Stack</span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-lg text-label-lg text-on-surface">Select Primary Engineering Domain</span>
                  <div className="flex flex-wrap gap-space-xs mt-space-2xs">
                    <button className="px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all bg-primary text-on-primary shadow-sm" type="button">Full Stack</button>
                    <button className="px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">Backend &amp; APIs</button>
                    <button className="px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">Frontend &amp; Mobile</button>
                    <button className="px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">Machine Learning / Data</button>
                    <button className="px-space-md py-space-xs rounded-full font-label-lg text-label-lg transition-all bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">Systems &amp; Infra</button>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-lg text-label-lg text-on-surface">Technologies &amp; Libraries Used</span>
                  <div className="p-space-xs bg-surface-container-low rounded-lg flex flex-wrap items-center gap-space-xs min-h-[52px]">
                    {['React', 'FastAPI', 'PostgreSQL', 'Docker'].map(tag => (
                      <span key={tag} className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded-md bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm">
                        {tag}
                        <button className="hover:text-error transition-colors flex items-center" type="button"><span className="material-symbols-outlined text-[14px]">close</span></button>
                      </span>
                    ))}
                    <input className="bg-transparent text-on-surface placeholder:text-outline font-body-md text-body-md px-space-xs flex-1 min-w-[140px] focus:outline-none" placeholder="Type and press Enter (e.g., Redis, Tailwind)..." type="text"/>
                  </div>
                </div>
              </div>

              {/* Step 4: The Story */}
              <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg">
                <div className="flex items-center gap-space-xs">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center text-xs">4</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface font-bold">The Story Behind the Project</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Reviewers care far more about your thought process than clean boilerplate.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="problem-solved">What real-world problem does this solve?</label>
                    <span className="font-badge text-badge text-outline">Be candid</span>
                  </div>
                  <div className="p-space-sm bg-surface-container-low rounded-lg mb-space-2xs flex items-start gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">lightbulb</span>
                    <span><strong>Helpful prompt:</strong> Think beyond tutorial apps. E.g. &quot;Helped our college club manage 500+ attendees without server crashes during festival registration.&quot;</span>
                  </div>
                  <textarea className="w-full p-space-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all resize-y" id="problem-solved" placeholder="Explain the real motivation, user friction, or bottleneck you addressed..." rows={3} defaultValue="Our campus open-source coding club had no reliable way to run automated lint checks and security audits on student PRs during our annual hackathon. Peer reviewers were spending 60% of their time pointing out style flaws instead of logic flaws."/>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="hurdle-solved">What was the hardest technical hurdle you overcame?</label>
                    <span className="font-badge text-badge text-primary bg-surface-container-high px-space-2xs rounded">Evaluates Depth</span>
                  </div>
                  <textarea className="w-full p-space-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all resize-y" id="hurdle-solved" placeholder="Describe a concurrency bug, API rate-limit, database indexing challenge, or tough design decision..." rows={3} defaultValue="Handling GitHub webhook event bursts without exhausting our free tier dyno. Implemented an asynchronous message worker queue with Redis &amp; Celery, debouncing consecutive commits so repetitive builds didn't choke API rate limits."/>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="vision-next">What would you build next if you had 2 more weeks?</label>
                    <span className="font-badge text-badge text-secondary bg-secondary-fixed px-space-2xs rounded">Product Vision</span>
                  </div>
                  <textarea className="w-full p-space-md bg-surface-container-low text-on-surface placeholder:text-outline rounded-lg font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all resize-y" id="vision-next" placeholder="Add caching? Migrate to microservices? Train a local LLM fine-tune? Tell us where you'd steer the ship..." rows={2} defaultValue="I would hook into tree-sitter AST parsing to suggest inline code patches directly rather than just emitting comment text warnings."/>
                </div>
              </div>

              {/* Step 5: Supporting Media */}
              <div className="p-space-lg lg:p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center text-xs">5</span>
                  <div>
                    <span className="font-title-md text-title-md text-on-surface font-bold">Supporting Media &amp; Architecture</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Add preview images or flowcharts to make your profile stand out.</p>
                  </div>
                </div>
                <div className="group relative flex flex-col items-center justify-center p-space-xl rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all cursor-pointer text-center">
                  <input className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" multiple={true} type="file"/>
                  <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-primary mb-space-sm group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">cloud_upload</span>
                  </div>
                  <div className="font-title-md text-title-md text-on-surface font-semibold">
                    Drop architecture diagrams, screenshots, or demo GIF
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
                    SVG, PNG, JPG, or GIF up to 15MB each
                  </div>
                  <button className="mt-space-md px-space-md py-space-xs rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors pointer-events-none" type="button">
                    Browse Local Files
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                  <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                    <div className="w-12 h-12 rounded-md overflow-hidden shrink-0 bg-surface-container-high">
                      <img className="w-full h-full object-cover" alt="System architecture diagram" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0RprAs7HxtYGLyKxZJIQxDX1TK_FmKs1cclLW5-GNRglCzqIqnfPbyRERF0na5_Mj21g62TEjg1xwvCGvg2cM3q4Rd0HKxdRssR4uwdke8T0FHQn3noKIsISPgtuVdVawXik0rU7sBCAmN2pOw9xwP1y9Lt7jCuhxwvENrNZYVsGYjQcVNWp2N61mMKl_yBxDXQt_gLQbKEKfOS1m_Rz4hBDzfClUcF8NvY_WRSW3nw8_s9imLXXLw"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-title-md text-title-md text-on-surface text-sm truncate font-medium">architecture_v2_draft.png</div>
                      <div className="font-body-sm text-body-sm text-outline">1.4 MB • Uploaded</div>
                    </div>
                    <button className="text-outline hover:text-error p-space-2xs transition-colors" title="Remove" type="button">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                    <div className="w-12 h-12 rounded-md overflow-hidden shrink-0 bg-surface-container-high">
                      <img className="w-full h-full object-cover" alt="Dashboard preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCuUQYJziyJnvOvQe5ImWSEEpAaXPnrtl1esn5JIl3Kf1XxbsFblzAwb1DsvvedpC9e5DqrjRIVa4WI0-gntNPcZjuXufYVNKlY4PH8Z7-mVcGyUzSASf_fBmN_zNxCtNXQA6p1hgk1ZW4oPxbI652cAuO0Nq5P89QSZmHDOoMFlrcyTVg4TLheiOM-xydmg1YmWcpoDI_GOKFoo81Rjkc1BVXhnZKMAVKT0e9jsujHkWQ0_gEyRkKQ"/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-title-md text-title-md text-on-surface text-sm truncate font-medium">demo_review_dashboard.jpg</div>
                      <div className="font-body-sm text-body-sm text-outline">840 KB • Uploaded</div>
                    </div>
                    <button className="text-outline hover:text-error p-space-2xs transition-colors" title="Remove" type="button">
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md pt-space-xs pb-space-2xl">
                <button className="w-full sm:w-auto px-space-xl py-space-md rounded-xl font-label-lg text-label-lg text-on-surface bg-surface-container hover:bg-surface-container-high transition-all flex items-center justify-center gap-space-xs" type="button">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  <span>Save Draft</span>
                </button>
                <button className="w-full sm:w-auto px-space-2xl py-space-md rounded-xl font-label-lg text-label-lg text-on-primary bg-primary hover:bg-primary-container shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-space-xs" type="submit">
                  <span>Submit for Verification &amp; Add to Profile</span>
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                </button>
              </div>
            </form>

            {/* Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
              {/* What happens next? */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">timeline</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">What happens next?</h2>
                </div>
                <div className="relative pl-6 space-y-space-lg before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-high">
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary font-badge text-[10px]">1</span>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold">Automated Repo Static Scan</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">We test test suites, commits history, and verify dependencies within 5 minutes.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-tertiary flex items-center justify-center text-on-primary font-badge text-[10px]">2</span>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold">Senior Peer Review (48 hrs)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">A verified senior tech lead inspects code modularity, your git etiquette, and technical hurdles.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary font-badge text-[10px]">3</span>
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold">Skill Badges &amp; Recruiter Visibility</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Your profile unlocks verified capability tags (e.g., <span className="text-primary font-semibold">#FastAPI-Production</span>) visible to hiring partners.</p>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm mt-space-xs flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>No standardized MCQs. Your code acts as your resume.</span>
                </div>
              </div>

              {/* Student Showcase */}
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-badge text-badge uppercase tracking-wider text-outline">Recently Verified Builder</span>
                  <span className="font-badge text-badge text-primary bg-surface-container-high px-space-xs py-space-2xs rounded-full">Tier-2 College Hire</span>
                </div>
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <img className="w-12 h-12 rounded-full object-cover" alt="Student developer Rhea Sengupta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCh5yL7ZjhuBjJ4nG-K0PywB0ySNZ3fZAmcQygTFlIFj1qqsJc5mnVsEXhkMgQ_IEO7U23K25seQ1sQ5V2hSLobiCGb2XxIoxc1ZHpGKuBoaz8cp0DuN0Dq8dtXgQQ_L5PB3Kw8XxclaN0nA6TMxErGyr7m0ypYjQSeJvedcAYyci7Rh_LY0St3VQ4s7HCsZVU_SwtN6xokISDCIYhK3txfqedwFliSLB-sI_9bExNxF0BFqcHdqLXUA"/>
                  <div>
                    <div className="font-title-md text-title-md text-on-surface font-bold">Rhea Sengupta</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">NIT Silchar &apos;24 • Verified in Golang</div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-lg mt-space-xs">
                  <p className="font-body-sm text-body-sm text-on-surface italic">
                    &ldquo;Submitting my custom WebRTC video pipeline here got me directly past HR filters for my dream fintech internship.&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-sm border-none text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-space-2xs text-primary font-semibold">
                    <span className="material-symbols-outlined text-[18px]">military_tech</span>
                    <span>+350 Credibility Points</span>
                  </div>
                  <span className="text-outline font-label-md text-label-md">Earned on submission</span>
                </div>
              </div>

              {/* Tips Card */}
              <div className="p-space-md rounded-xl bg-surface-container text-on-surface flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary-container shrink-0 mt-0.5">tips_and_updates</span>
                <div className="font-body-sm text-body-sm">
                  <span className="font-semibold block text-on-surface">Don&apos;t have a live link?</span>
                  Include a 60-second Loom link or architecture diagrams in the media upload box to get full points!
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div></main>
      <footer className="w-full bg-surface-container-low"><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-2xl"><div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl"><div className="flex flex-col items-center md:items-start gap-space-2xs"><div className="flex items-center gap-space-xs"><span className="font-title-md text-title-md text-on-surface font-bold">Verified Talent</span><span className="font-badge text-badge text-primary bg-surface-container px-space-xs py-space-2xs rounded-full">India Edition</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Built for ambitious builders across India</p></div><nav className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">About Verified Talent</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">For Employers</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Student Success Stories</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">College Partnerships</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy &amp; Terms</a></nav></div><div className="pt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant">© 2025 Verified Talent. Democratizing career credibility through proof-of-work.</div></div></footer>
    </>
  );
}
