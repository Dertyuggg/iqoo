'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const verificationSteps = [
  { title: 'Shows up daily', sub: '41-day practice streak', color: '#f472b6' },
  { title: 'Proves the basics', sub: 'Paste-proof assessment, 6 problems', color: '#34d399' },
  { title: 'Ships something real', sub: 'Project + repo submitted', color: '#60a5fa' },
  { title: 'Commits get checked', sub: 'Authorship, cadence, AI review', color: '#fbbf24' },
  { title: 'Defends it live', sub: '9-minute call on her own code', color: '#f87171' },
];

export default function LiveVerificationChain() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;

    const advance = () => {
      const nextIndex = currentIndex + 1;
      if (nextIndex > verificationSteps.length) {
        currentIndex = 0;
        setActiveIndex(0);
        return;
      }

      currentIndex = nextIndex;
      setActiveIndex(nextIndex);
    };

    const interval = window.setInterval(advance, 1400);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {verificationSteps.map((step, index) => {
          const state = index < activeIndex ? 'done' : index === activeIndex ? 'live' : 'queued';
          const status = state === 'done' ? 'cleared' : state === 'live' ? 'checking…' : 'queued';
          const style = { '--stage-color': step.color } as CSSProperties;

          return (
            <div
              key={step.title}
              className={`verification-row verification-row-${state} flex items-center gap-3 p-3 rounded-xl`}
              style={style}
            >
              <div className={`verification-icon ${state}`} style={style}>
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-on-surface text-[15px] font-semibold">{step.title}</p>
                <p className="text-on-surface-muted text-[13px] truncate">{step.sub}</p>
              </div>
              <span className={`text-[13px] font-semibold shrink-0 verification-status-${state}`}>
                {status}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-2 p-3 rounded-xl bg-surface-container-low border border-outline/30">
        <span className="text-success text-[18px]">✓</span>
        <div className="flex-1 min-w-0">
          <p className="text-on-surface text-[28px] font-extrabold leading-none">84</p>
        </div>
        <p className="text-on-surface-muted text-[13px] text-right">
          Verification score — shared with 38 hiring teams
        </p>
      </div>
    </>
  );
}
