import Navbar from '@/components/Navbar';

export default function SkillAssessmentPage() {
  return (
    <>
      <Navbar activePath="/assessment" />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]"><div className="flex flex-col w-full">
        {/* Subtle Ambient Glow Orbs */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-20 -right-20 w-80 h-80 bg-secondary-container/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-md">
            {/* Top Assessment Context Bar */}
            <div className="bg-surface-container-lowest shadow-sm rounded-2xl p-space-md lg:p-space-lg mb-space-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="space-y-space-2xs">
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <span className="inline-flex items-center gap-1 px-space-xs py-space-2xs rounded-full bg-surface-container-high text-primary font-badge text-badge uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[14px]">bolt</span>
                      Proof-of-Work Benchmark
                    </span>
                    <span className="inline-flex items-center px-space-xs py-space-2xs rounded-full bg-surface-container-low text-tertiary font-label-md text-label-md">
                      Intermediate • Real-world Scenario
                    </span>
                    <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Non-proctored • Calibrated Grading
                    </span>
                  </div>
                  <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Full-Stack React &amp; Async State Management Benchmark
                  </h1>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm sm:gap-space-md shrink-0">
                  {/* Timer Widget */}
                  <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-xl">
                    <span className="material-symbols-outlined text-secondary-container text-[18px]">timelapse</span>
                    <div className="flex flex-col">
                      <span className="font-badge text-badge text-on-surface-variant uppercase tracking-wider">Remaining Time</span>
                      <span className="font-title-md text-title-md text-on-surface font-bold tracking-tight">32:45</span>
                    </div>
                    <button className="p-space-2xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors ml-space-2xs" title="Need a quick breather or technical support?" type="button">
                      <span className="material-symbols-outlined text-[18px]">help_outline</span>
                    </button>
                  </div>
                  {/* Progress */}
                  <div className="bg-surface-container-low px-space-md py-space-xs rounded-xl flex flex-col justify-center">
                    <div className="flex items-center justify-between gap-space-md mb-1">
                      <span className="font-badge text-badge text-on-surface-variant uppercase tracking-wider">Challenge 2 of 4</span>
                      <span className="font-label-md text-label-md text-primary font-bold">50% Completed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-7 h-2 rounded-full bg-primary"></span>
                      <span className="w-7 h-2 rounded-full bg-primary-container animate-pulse"></span>
                      <span className="w-7 h-2 rounded-full bg-surface-container-highest"></span>
                      <span className="w-7 h-2 rounded-full bg-surface-container-highest"></span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Senior Engineer Tip */}
              <div className="mt-space-md pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-xl">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings:"\"FILL\" 1"}}>lightbulb</span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    <strong className="font-title-md text-title-md text-primary">Senior Arch Tip:</strong> Consider structuring queue tasks with an incremental retry counter before triggering the dispatch fallback.
                  </p>
                </div>
                <button className="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md underline shrink-0" type="button">
                  View Reference Pattern (No score penalty)
                </button>
              </div>
            </div>

            {/* Main Assessment Area */}
            <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-xl shadow-sm flex flex-col items-center justify-center min-h-[400px]">
              <div className="max-w-2xl w-full flex flex-col items-center text-center gap-space-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-space-2xs">
                  <span className="material-symbols-outlined text-[32px]">task</span>
                </div>
                
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Assessment Submission
                </h2>
                
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Please review your work carefully before final submission. Make sure all requirements are met and tests pass locally. Once submitted, you cannot modify your solution.
                </p>

                <div className="w-full bg-surface-container-low p-space-md rounded-xl text-left mt-space-sm">
                  <h3 className="font-title-md text-title-md text-on-surface font-semibold mb-space-xs">Submission Guidelines</h3>
                  <ul className="space-y-space-xs">
                    <li className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings:"\"FILL\" 1"}}>check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Ensure your code follows the provided architecture guidelines.</span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings:"\"FILL\" 1"}}>check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">All mandatory test cases must pass without warnings.</span>
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings:"\"FILL\" 1"}}>check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface">Maintain clean, documented, and professional code quality.</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-space-sm w-full mt-space-lg">
                  <button className="w-full sm:w-auto px-space-xl py-space-sm bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2" type="button">
                    <span>Submit Assessment</span>
                    <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></main>
      <footer className="w-full bg-surface-container-low"><div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-2xl"><div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-xl"><div className="flex flex-col items-center md:items-start gap-space-2xs"><div className="flex items-center gap-space-xs"><span className="font-title-md text-title-md text-on-surface font-bold">Verified Talent</span><span className="font-badge text-badge text-primary bg-surface-container px-space-xs py-space-2xs rounded-full">India Edition</span></div><p className="font-body-sm text-body-sm text-on-surface-variant">Built for ambitious builders across India</p></div><nav className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs"><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">About Verified Talent</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">For Employers</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Student Success Stories</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">College Partnerships</a><a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Privacy &amp; Terms</a></nav></div><div className="pt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant">© 2025 Verified Talent. Democratizing career credibility through proof-of-work.</div></div></footer>
    </>
  );
}
