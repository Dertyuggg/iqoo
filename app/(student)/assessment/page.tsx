'use client';

import Link from 'next/link';
import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const TEST_CASES = [
  { id: 0, title: "Overlapping pairs merge", time: "2 ms", passed: true },
  { id: 1, title: "Already disjoint stays unchanged", time: "1 ms", passed: true },
  { id: 2, title: "Windows touching at an endpoint", time: "1 ms", passed: true },
  { id: 3, title: "Empty input returns an empty list", time: "TypeError", passed: false },
  { id: 4, title: "10,000 windows under 200 ms", time: "88 ms", passed: true },
];

export default function SkillAssessmentPage() {
  const [pasteCount, setPasteCount] = useState(0);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  const editorControls = useAnimation();
  const numberControls = useAnimation();
  const integrityScore = Math.max(0, 100 - pasteCount * 6 - tabSwitchCount * 3);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prev) => prev + 1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Test Runner State
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'done'>('idle');
  const [revealedTests, setRevealedTests] = useState<number[]>([]);
  const [testToastVisible, setTestToastVisible] = useState(false);

  const handleRunTests = () => {
    if (testStatus === 'running') return;
    setTestStatus('running');
    setRevealedTests([]);
    setTestToastVisible(false);

    const testsCount = 5;
    for (let i = 0; i < testsCount; i++) {
      setTimeout(() => {
        setRevealedTests((prev) => [...prev, i]);
      }, i * 380);
    }

    setTimeout(() => {
      setTestStatus('done');
      setTestToastVisible(true);
      setTimeout(() => setTestToastVisible(false), 4000);
    }, 2200);
  };

  const TOTAL_TIME = 1800;
  const [timeLeft, setTimeLeft] = useState(994); // 16:34

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pct = timeLeft / TOTAL_TIME;
  const dashoffset = 126 * (1 - pct);
  
  let colorStr = '#34d399';
  if (pct < 0.15) {
    colorStr = '#ec4899';
  } else if (pct <= 0.34) {
    colorStr = '#fbbf24';
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
    };
  }, []);

  const handlePaste = useCallback((e: React.ClipboardEvent) => {
    e.preventDefault();
    setPasteCount((prev) => prev + 1);
    
    // Shake editor
    editorControls.start({
      x: [-3, 6, -6, 0],
      transition: { duration: 0.42 }
    });
    
    // Flash paste number
    numberControls.start({
      scale: [1.5, 1],
      color: ['#f87171', '#f0eef8'],
      transition: { duration: 0.3 }
    });

    // Show toast
    setToastVisible(true);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => {
      setToastVisible(false);
    }, 2600);
  }, [editorControls, numberControls]);
  return (
    <>
      <main className="w-full bg-surface min-h-screen pb-24 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-outline/30 bg-surface-dim">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <span className="w-2 h-2 rounded-[2px] bg-primary" />
                <span className="w-2 h-2 rounded-[2px] bg-secondary" />
                <span className="w-2 h-2 rounded-[2px] bg-tertiary" />
                <span className="w-2 h-2 rounded-[2px] bg-step-4" />
              </div>
              <span className="text-on-surface text-[15px] font-extrabold tracking-tight">Praman</span>
            </Link>
            
            <div className="flex items-center gap-4 border-l border-outline/30 pl-6">
              <span className="text-on-surface-variant text-[13px] font-medium">Problem 3 of 6</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5, 6].map((step) => {
                  const status = step < 3 ? 'completed' : step === 3 ? 'current' : 'upcoming';
                  return (
                    <motion.div
                      key={step}
                      initial={false}
                      animate={{ width: status === 'current' ? 40 : 26 }}
                      transition={{ duration: 0.4 }}
                      className={`h-[6px] rounded-full ${
                        status === 'completed'
                          ? 'bg-success'
                          : status === 'current'
                          ? 'bg-warning'
                          : 'bg-outline/20'
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {pct < 0.15 && (
              <style>{`
                @keyframes timer-pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.45; }
                }
              `}</style>
            )}
            <svg width="44" height="44" viewBox="0 0 44 44" className="-rotate-90 shrink-0">
              <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-20 text-outline-variant" />
              <circle 
                cx="22" cy="22" r="20" 
                fill="none" 
                stroke={colorStr}
                strokeWidth="3" 
                strokeDasharray="126" 
                strokeDashoffset={dashoffset}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 1s linear, stroke 0.6s ease',
                  animation: pct < 0.15 ? 'timer-pulse 0.9s ease-in-out infinite' : 'none'
                }}
              />
            </svg>
            <div className="flex flex-col">
              <span className="text-on-surface text-[16px] font-extrabold leading-none tracking-tight">
                {formatTime(timeLeft)}
              </span>
              <span className="text-on-surface-muted text-[10px]">left in this section</span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Problem Description */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow h-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline/30 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                <span className="text-warning text-[12px] font-semibold">Medium · 12 pts</span>
              </div>
              
              <h2 className="text-on-surface text-[22px] font-bold tracking-tight mb-3">
                Merge overlapping windows
              </h2>
              
              <p className="text-on-surface-variant text-[14px] leading-relaxed mb-6">
                A mandi publishes price windows as start-end minute pairs. They overlap. Return the merged windows in order, so a farmer sees one clean list.
              </p>

              {/* Code Snippet Example */}
              <div className="bg-surface-dim border border-outline/30 rounded-xl p-4 font-mono text-[13px] text-on-surface-variant mb-6 overflow-x-auto shadow-inner">
                <div className="flex gap-2">
                  <span className="text-step-3">in</span> 
                  <span>→</span> 
                  <span className="text-step-2">[[9,12], [10,14], [16,19], [18,21]]</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <span className="text-step-3">out</span> 
                  <span>→</span> 
                  <span className="text-step-2">[[9,14], [16,21]]</span>
                </div>
                
                {/* Scrollbar mockup */}
                <div className="mt-4 h-1.5 bg-outline/20 rounded-full w-full relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-outline/40 rounded-full"></div>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed">
                Explain your approach in a comment on line 1. The defence round may ask about it.
              </p>
            </div>
          </div>

          {/* Center Column: Editor & Tests */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Editor Area */}
            <motion.div 
              animate={editorControls}
              onPaste={handlePaste}
              className="bg-surface-container border border-outline/30 rounded-2xl flex flex-col flex-1 shadow-sm overflow-hidden min-h-[300px]"
            >
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline/30">
                <span className="text-on-surface-muted text-[12px] font-mono">solution.py</span>
                <span className="text-warning text-[12px] font-semibold">Python 3.11</span>
              </div>
              
              {/* Editor Code (Static Mockup) */}
              <div className="flex-1 p-4 font-mono text-[13px] leading-loose overflow-y-auto outline-none" tabIndex={0} suppressContentEditableWarning contentEditable>
                <div className="flex">
                  <div className="w-8 text-on-surface-muted/50 text-right pr-4 select-none flex flex-col gap-1" contentEditable={false}>
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                  </div>
                  <div className="flex-1 text-on-surface-variant flex flex-col gap-1 pointer-events-none">
                    <div className="text-on-surface-muted"># sort by start, then extend the last window while it overlaps</div>
                    <div><span className="text-step-4">def</span> <span className="text-step-3">merge</span>(windows):</div>
                    <div className="pl-6">windows.sort()</div>
                    <div className="pl-6">out = []</div>
                    <div className="pl-6"><span className="text-step-4">for</span> s, e <span className="text-step-4">in</span> windows:</div>
                    <div className="pl-12"><span className="text-step-4">if</span> out <span className="text-step-4">and</span> s &lt;= out[-1][1]:</div>
                    <div className="pl-18">out[-1][1] = max(out[-1][1], e)</div>
                    <div className="pl-12"><span className="text-step-4">else</span>:</div>
                    <div className="pl-18">out.append([s, e])</div>
                    <div className="pl-6"><span className="text-step-4">return</span> out</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Test Actions */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-3">
                <button 
                  onClick={handleRunTests}
                  disabled={testStatus === 'running'}
                  className="px-6 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-semibold hover:bg-surface-container transition-colors shadow-sm disabled:opacity-50"
                >
                  {testStatus === 'running' ? 'Running...' : 'Run tests'}
                </button>
                <button className="px-6 py-2 rounded-full bg-on-surface text-surface text-[14px] font-bold hover:bg-on-surface/90 transition-colors shadow-sm">
                  Submit and continue
                </button>
              </div>
              <span className="text-on-surface-muted text-[12px]">
                Paste is disabled · tab switches are logged
              </span>
            </div>

            {/* Test Results */}
            <div className="flex flex-col gap-2 mt-2 relative">
              {TEST_CASES.map((tc, index) => {
                const isRevealed = revealedTests.includes(index);
                
                return (
                  <motion.div
                    key={tc.id}
                    initial={false}
                    animate={{
                      opacity: isRevealed ? 1 : 0.4,
                      y: isRevealed ? 0 : 8,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                      isRevealed
                        ? tc.passed 
                          ? 'bg-surface-container-high/30 border-success/30'
                          : 'bg-surface-container-high/30 border-[#ec4899]/30 bg-[#ec4899]/5'
                        : 'bg-surface-container-high/10 border-outline/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isRevealed ? (
                        tc.passed ? (
                          <span className="text-success text-[14px]">✓</span>
                        ) : (
                          <span className="text-[#ec4899] text-[12px] font-bold">✕</span>
                        )
                      ) : (
                        <span className="text-on-surface-muted text-[14px]">-</span>
                      )}
                      <span className={isRevealed && !tc.passed ? "text-on-surface text-[13px]" : "text-on-surface-variant text-[13px]"}>
                        {tc.title}
                      </span>
                    </div>
                    {isRevealed && (
                      <span className={`${tc.passed ? 'text-on-surface-muted' : 'text-[#ec4899]/80'} text-[12px] font-mono`}>
                        {tc.time}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Integrity & Stats */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Integrity Card */}
            <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 shadow-sm">
              <h3 className="text-on-surface text-[14px] font-bold mb-4">Integrity</h3>
              <div className="text-[48px] font-extrabold text-step-2 leading-none mb-4">
                {integrityScore}
              </div>
              
              {/* Gradient bar */}
              <div className="h-1.5 w-full rounded-full bg-outline/20 mb-6 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-step-4 via-warning to-step-2 origin-left"
                  animate={{ scaleX: integrityScore / 100 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  style={{ width: '100%' }}
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-muted">Paste attempts</span>
                  <motion.span 
                    animate={numberControls}
                    className="text-on-surface font-mono inline-block origin-right"
                  >
                    {pasteCount}
                  </motion.span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-muted">Tab switches</span>
                  <span className="text-on-surface font-mono">{tabSwitchCount}</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-muted">Typing rhythm</span>
                  <span className="text-on-surface font-semibold">steady</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-muted">Session</span>
                  <span className="text-on-surface font-mono">#A4-3319</span>
                </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="border border-warning/30 border-dashed rounded-2xl p-4 bg-warning/5">
              <p className="text-on-surface-variant text-[13px] leading-relaxed">
                Try pasting into the editor — this is the check that makes the score mean something.
              </p>
            </div>

            {/* Section Summary */}
            <div className="bg-surface-container-high border border-outline/20 rounded-2xl p-5 shadow-sm mt-auto">
              <h3 className="text-on-surface text-[14px] font-bold mb-4">This section</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-on-surface-variant">Solved</span>
                  <span className="text-on-surface font-bold">2 / 6</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-on-surface-variant">Points</span>
                  <span className="text-on-surface font-bold">18</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-on-surface-variant">Avg. time</span>
                  <span className="text-on-surface font-bold">7m 12s</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Toasts */}
        <AnimatePresence>
          {toastVisible && (
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', duration: 0.45 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-error text-white px-6 py-3 rounded-xl shadow-lg font-semibold z-50 flex items-center gap-2 text-[14px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Paste blocked. Integrity score reduced.
            </motion.div>
          )}
          {testToastVisible && (
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              transition={{ type: 'spring', duration: 0.45 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl shadow-lg font-semibold z-50 flex items-center gap-3 text-[14px] border border-outline/30"
            >
              <div className="flex items-center gap-2">
                <span className="text-success">{TEST_CASES.filter(t => t.passed).length} passed</span>
                <span className="text-outline-variant">•</span>
                <span className="text-[#ec4899]">{TEST_CASES.filter(t => !t.passed).length} failed</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
