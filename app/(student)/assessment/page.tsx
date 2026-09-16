'use client';

import Link from 'next/link';

export default function SkillAssessmentPage() {
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
                <div className="h-1.5 w-6 rounded-full bg-success"></div>
                <div className="h-1.5 w-6 rounded-full bg-success"></div>
                <div className="h-1.5 w-6 rounded-full bg-warning"></div>
                <div className="h-1.5 w-6 rounded-full bg-outline/20"></div>
                <div className="h-1.5 w-6 rounded-full bg-outline/20"></div>
                <div className="h-1.5 w-6 rounded-full bg-outline/20"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer circle icon placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-step-2 -rotate-90">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="63" strokeDashoffset="15" className="opacity-20" />
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="63" strokeDashoffset="15" />
            </svg>
            <div className="flex flex-col">
              <span className="text-on-surface text-[16px] font-extrabold leading-none tracking-tight">16:34</span>
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
            <div className="bg-surface-container border border-outline/30 rounded-2xl flex flex-col flex-1 shadow-sm overflow-hidden min-h-[300px]">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline/30">
                <span className="text-on-surface-muted text-[12px] font-mono">solution.py</span>
                <span className="text-warning text-[12px] font-semibold">Python 3.11</span>
              </div>
              
              {/* Editor Code (Static Mockup) */}
              <div className="flex-1 p-4 font-mono text-[13px] leading-loose overflow-y-auto">
                <div className="flex">
                  <div className="w-8 text-on-surface-muted/50 text-right pr-4 select-none flex flex-col gap-1">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                  </div>
                  <div className="flex-1 text-on-surface-variant flex flex-col gap-1">
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
            </div>

            {/* Test Actions */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex gap-3">
                <button className="px-6 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-semibold hover:bg-surface-container transition-colors shadow-sm">
                  Run tests
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
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/30 border border-outline/10">
                <div className="flex items-center gap-3">
                  <span className="text-step-2 text-[14px]">✓</span>
                  <span className="text-on-surface-variant text-[13px]">Overlapping pairs merge</span>
                </div>
                <span className="text-on-surface-muted text-[12px] font-mono">2 ms</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/30 border border-outline/10">
                <div className="flex items-center gap-3">
                  <span className="text-step-2 text-[14px]">✓</span>
                  <span className="text-on-surface-variant text-[13px]">Already disjoint stays unchanged</span>
                </div>
                <span className="text-on-surface-muted text-[12px] font-mono">1 ms</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/30 border border-outline/10">
                <div className="flex items-center gap-3">
                  <span className="text-step-2 text-[14px]">✓</span>
                  <span className="text-on-surface-variant text-[13px]">Windows touching at an endpoint</span>
                </div>
                <span className="text-on-surface-muted text-[12px] font-mono">1 ms</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/30 border border-error/20 bg-error/5">
                <div className="flex items-center gap-3">
                  <span className="text-error text-[12px] font-bold">✕</span>
                  <span className="text-on-surface text-[13px]">Empty input returns an empty list</span>
                </div>
                <span className="text-error/80 text-[12px] font-mono">TypeError</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-high/30 border border-outline/10">
                <div className="flex items-center gap-3">
                  <span className="text-step-2 text-[14px]">✓</span>
                  <span className="text-on-surface-variant text-[13px]">10,000 windows under 200 ms</span>
                </div>
                <span className="text-on-surface-muted text-[12px] font-mono">88 ms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Integrity & Stats */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            
            {/* Integrity Card */}
            <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 shadow-sm">
              <h3 className="text-on-surface text-[14px] font-bold mb-4">Integrity</h3>
              <div className="text-[48px] font-extrabold text-step-2 leading-none mb-4">100</div>
              
              {/* Gradient bar */}
              <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-step-4 via-warning to-step-2 mb-6"></div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-muted">Paste attempts</span>
                  <span className="text-on-surface font-mono">0</span>
                </div>
                <div className="flex justify-between items-center text-[12px]">
                  <span className="text-on-surface-muted">Tab switches</span>
                  <span className="text-on-surface font-mono">0</span>
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
      </main>
    </>
  );
}
