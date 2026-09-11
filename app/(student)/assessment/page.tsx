import Link from 'next/link';
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

            {/* Main Split Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* LEFT: Spec & Acceptance Criteria */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-2xl p-space-md lg:p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <div className="w-8 h-8 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">terminal</span>
                      </div>
                      <span className="font-title-md text-title-md text-on-surface font-bold">Practical Challenge</span>
                    </div>
                    <span className="px-space-xs py-space-2xs rounded-full bg-surface-container text-primary font-badge text-badge">300 XP Earnable</span>
                  </div>
                  <div className="space-y-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Optimistic State Queue with Exponential Retry Backoff
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Tier-2/3 network environments experience volatile connection drops. Your objective is to build a reliable custom React hook <code className="bg-surface-container px-1.5 py-0.5 rounded font-mono text-primary font-semibold">useTaskQueue</code> that keeps UI updates snappy using optimistic rendering, queuing failed writes, and executing exponential backoff retries on transient <code className="bg-surface-container px-1 py-0.5 rounded font-mono text-secondary">503 Service Unavailable</code> responses.
                    </p>
                  </div>
                  {/* Requirements Checklist */}
                  <div className="space-y-space-xs bg-surface-container-low p-space-md rounded-xl">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold">Acceptance Criteria</h3>
                      <span className="font-badge text-badge text-primary bg-surface-container px-space-xs py-space-2xs rounded-full">1 of 3 Passed</span>
                    </div>
                    <ul className="space-y-space-xs pt-space-2xs">
                      <li className="flex items-start gap-space-xs p-space-2xs rounded-lg transition-colors hover:bg-surface-container">
                        <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{fontVariationSettings:"\"FILL\" 1"}}>check_circle</span>
                        <div className="flex-1">
                          <p className="font-body-sm text-body-sm text-on-surface font-medium">Maintain optimistic local state queue</p>
                          <p className="font-label-md text-label-md text-on-surface-variant">Instantly append items to queue before network dispatch resolves.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-xs p-space-2xs rounded-lg transition-colors hover:bg-surface-container">
                        <span className="material-symbols-outlined text-outline text-[20px] shrink-0">radio_button_unchecked</span>
                        <div className="flex-1">
                          <p className="font-body-sm text-body-sm text-on-surface font-medium">Exponential retry on HTTP 503 errors</p>
                          <p className="font-label-md text-label-md text-on-surface-variant">Calculate delay formula: <code className="bg-surface-container-high px-1 rounded font-mono">baseDelay * 2^attempt</code> up to 3 retries.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-space-xs p-space-2xs rounded-lg transition-colors hover:bg-surface-container">
                        <span className="material-symbols-outlined text-outline text-[20px] shrink-0">radio_button_unchecked</span>
                        <div className="flex-1">
                          <p className="font-body-sm text-body-sm text-on-surface font-medium">Trigger rollback event on terminal failure</p>
                          <p className="font-label-md text-label-md text-on-surface-variant">Dispatch <code className="bg-surface-container-high px-1 rounded font-mono">onRollback</code> and eject optimistic item if 3 attempts fail.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Code Signature */}
                  <div className="space-y-space-xs">
                    <span className="font-badge text-badge text-on-surface-variant uppercase tracking-wider">Example Signature &amp; Event Contract</span>
                    <div className="bg-inverse-surface rounded-xl p-space-md text-inverse-on-surface font-mono text-body-sm overflow-x-auto shadow-inner">
                      <pre className="leading-relaxed"><code>{`// Signature
interface QueueTask<T> {
  id: string;
  payload: T;
  retryCount: number;
}

// Invocation Sample
const { queue, dispatch, status } = useTaskQueue({
  maxRetries: 3,
  baseBackoffMs: 250,
  onRollback: (taskId) => toast.error(\`Task \${taskId} reversed\`)
});`}</code></pre>
                    </div>
                  </div>
                  {/* Verified Credential Marker */}
                  <div className="flex items-center gap-space-xs p-space-xs rounded-xl bg-surface-container-low">
                    <span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings:"\"FILL\" 1"}}>verified</span>
                    <p className="font-label-md text-label-md text-on-surface">
                      Successful solution issues proof badge: <strong>State Architecture L2 (React 18 Concurrent)</strong>.
                    </p>
                  </div>
                </div>
                {/* Peer Community Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm">
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-title-md text-title-md text-on-surface font-semibold">Real-world Application</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">E-Commerce &amp; FinTech</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
                    Over 4,200 student builders from 240+ institutions solved this pattern to showcase resilient client-side offline systems to product engineering teams.
                  </p>
                  <div className="flex items-center gap-space-md">
                    <div className="flex -space-x-2 overflow-hidden">
                      <img className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container-lowest object-cover" alt="Student developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEvKiVMdz-1ILENig7Xk_54MvS5CMa29472aR-tsRgLqt4NnvgJ25ijc-bCalK6ui0EjR2R1SP61Yyx-soxcxrSOJEkFzk65E47g0AI5X_dEj9q7GwMOzj_XGL4vtqS-OEvGs15WMS8XDoVZg6jRZ6QIR8lQN_SLYQcBMPa0Jd4p3-6372jhRBfprfJ4hiMyDrv9Y8crxEJsGrLSg-LmcNxs7RuXOi9Jh2b_m3-k12AU7xBAPRSMbA-g"/>
                      <img className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container-lowest object-cover" alt="Student developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa3SmWB4Z--O4prLOd7tuymbyIhA1Y0I1Fd9X4RwrCgGnjkwF3fImM9Z9XIOVGLr3viSjQPA6ZA9sQlmocsKfHiPhsVGTyxmyQC719hRIZf7VIAZEpSnVtlWK_MTDlaWm9y2nOymSX4kKszljj0yqzcgodwNcFQHpVLvah6Byeu6-t6VMViRAdeWizRX9E8M7BCHJWeqR4F5xcarx0iXLZfYgxNIb-M3uuxNK5LFuX88K2yKrxa4dGNA"/>
                      <img className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container-lowest object-cover" alt="Student developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIHEDAs5msTJX2C2ZL4Bt3IlDPr3wN5hvsjvaGzrLRmJMNowpb3pjvJWyZut2qmyOtrShvROHatS-4j6tqdYCrYixhx2fJTe1bVAofLCTWM57wSa2BUIAMq_EouP7fCz9P1bArgaDBRUZAgQZJTp9mN2uJJ107cmlDg12gVMqf_9oYa39JMHcM1rat1etFyMqOHpfREZW6BrEMFSjFDs6zh0y0FcaLFyiz4nJGrLCcjaqvm3rwfmE-ZQ"/>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface-variant font-medium">89% passing rate on 2nd run</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: IDE & Test Runner Suite */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden flex flex-col">
                  {/* Editor Header */}
                  <div className="bg-surface-container-low px-space-md py-space-xs flex flex-wrap items-center justify-between gap-space-xs">
                    <div className="flex items-center gap-space-2xs">
                      <div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container-lowest text-primary shadow-xs">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">code</span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">TaskQueue.tsx</span>
                        <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                      </div>
                      <button className="px-space-xs py-1 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md text-label-md transition-colors" type="button">
                        TaskQueue.test.tsx
                      </button>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="inline-flex items-center gap-1 text-on-surface-variant font-label-md text-label-md px-space-xs py-0.5 rounded bg-surface-container">
                        <span className="material-symbols-outlined text-[14px]">psychology</span> TS 5.2 Strict
                      </span>
                      <button className="inline-flex items-center gap-1 px-space-xs py-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" title="Reset to initial boilerplate" type="button">
                        <span className="material-symbols-outlined text-[16px]">restart_alt</span> Reset
                      </button>
                      <button className="inline-flex items-center gap-1 px-space-xs py-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" title="Format code (Prettier)" type="button">
                        <span className="material-symbols-outlined text-[16px]">format_align_left</span> Format
                      </button>
                    </div>
                  </div>
                  {/* Code Canvas */}
                  <div className="bg-inverse-surface p-space-md text-inverse-on-surface font-mono text-body-sm overflow-x-auto min-h-[380px] max-h-[460px] flex gap-space-md select-text">
                    <div className="select-none text-outline-variant/60 text-right pr-space-xs space-y-1 text-label-md">
                      {Array.from({length: 21}, (_, i) => <div key={i}>{String(i + 1).padStart(2, '0')}</div>)}
                    </div>
                    <div className="flex-1 space-y-1 text-label-lg whitespace-pre leading-relaxed">
                      <pre className="text-inverse-on-surface">{`import { useState, useCallback, useRef } from 'react';

export function useTaskQueue<T>({ maxRetries = 3, baseBackoffMs = 300, onRollback }) {
  const [queue, setQueue] = useState<QueueTask<T>[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // TODO: Implement optimistic enqueue step
  const enqueue = useCallback((task: T) => {
    const newTask = { id: crypto.randomUUID(), payload: task, retryCount: 0 };
    setQueue((prev) => [...prev, newTask]);
    dispatchNext(newTask);
  }, []);

  const dispatchNext = useCallback(async (currentTask) => {
    try {
      await networkSyncWorker(currentTask);
    } catch (error: any) {
      // Exponential backoff calculation missing here
      const delay = baseBackoffMs * Math.pow(2, currentTask.retryCount);
      setTimeout(() => dispatchNext(currentTask), delay);
    }
  }, [baseBackoffMs]);`}</pre>
                    </div>
                  </div>
                  {/* Test Results */}
                  <div className="bg-surface-container-low p-space-md">
                    <div className="flex items-center justify-between pb-space-xs mb-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <span className="flex items-center gap-1.5 font-title-md text-title-md text-on-surface font-semibold">
                          <span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
                          Test Results
                        </span>
                        <span className="px-space-xs py-0.5 rounded-full bg-surface-container text-primary font-badge text-badge">2 / 3 Passed</span>
                      </div>
                      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span> Live Sandbox V8
                      </span>
                    </div>
                    <div className="space-y-space-2xs">
                      <div className="flex items-center justify-between p-space-xs rounded-xl bg-surface-container-lowest">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-primary text-[18px]" style={{fontVariationSettings:"\"FILL\" 1"}}>check_circle</span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">handles immediate HTTP 200 write response</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface-variant font-mono">12ms</span>
                      </div>
                      <div className="flex items-center justify-between p-space-xs rounded-xl bg-surface-container-lowest">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-primary text-[18px]" style={{fontVariationSettings:"\"FILL\" 1"}}>check_circle</span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">enqueues optimistic state before dispatch</span>
                        </div>
                        <span className="font-label-md text-label-md text-on-surface-variant font-mono">4ms</span>
                      </div>
                      <div className="flex items-center justify-between p-space-xs rounded-xl bg-surface-container-highest">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary-container text-[18px] animate-spin">sync</span>
                          <span className="font-body-sm text-body-sm text-on-surface font-medium">validates exponential backoff delay intervals (3 attempts)</span>
                        </div>
                        <span className="font-label-md text-label-md text-secondary font-mono font-semibold">running...</span>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Command Bar */}
                  <div className="bg-surface-container-lowest p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary">cloud_done</span>
                      <span className="font-label-md text-label-md">Local draft automatically cached</span>
                    </div>
                    <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                      <button className="px-space-md py-space-xs bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg rounded-xl transition-all flex items-center gap-1.5 shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[18px] text-primary">play_arrow</span>
                        Run Test Cases
                      </button>
                      <button className="px-space-md py-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center gap-1.5" type="button">
                        <span>Submit Challenge &amp; Proceed</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Confidence Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[22px]">shield_person</span>
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md text-on-surface font-semibold">Zero Penalties for Exploratory Runs</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Run tests as many times as needed. Verified Talent values clean refactoring and architectural resilience.
                      </p>
                    </div>
                  </div>
                  <a className="font-label-md text-label-md text-primary hover:underline whitespace-nowrap shrink-0" href="#">
                    Scoring rubric &amp; insights →
                  </a>
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
