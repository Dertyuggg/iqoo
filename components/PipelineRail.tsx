'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

const stages = [
  {
    num: 1,
    color: '#f472b6',
    title: 'Show up',
    desc: 'A daily streak of small, timed problems. Consistency is the first signal — it is also the one nobody can buy.',
    tag: '41-day median streak',
  },
  {
    num: 2,
    color: '#34d399',
    title: 'Prove the basics',
    desc: 'Assessments where pasting is blocked, tab switches are logged, and typing rhythm is recorded alongside your answer.',
    tag: 'Paste-proof · proctored',
  },
  {
    num: 3,
    color: '#60a5fa',
    title: 'Ship something',
    desc: 'Submit a project with its repo. Screenshots and a demo link are optional; the commit history is not.',
    tag: 'Repo required',
  },
  {
    num: 4,
    color: '#fbbf24',
    title: 'Get reviewed',
    desc: 'We check who actually wrote the commits, how the work was spread over time, then read the code for depth.',
    tag: 'Authorship + AI review',
  },
  {
    num: 5,
    color: '#f87171',
    title: 'Defend it live',
    desc: 'Nine minutes, questions generated from your own diff. Explain a choice you made and a bug you fixed.',
    tag: 'The part that counts',
  },
];

export default function PipelineRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const hasEnteredRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || hasEnteredRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          hasEnteredRef.current = true;
          observer.unobserve(rail);
          setIsVisible(true);
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={railRef} className={`pipeline-rail ${isVisible ? 'is-visible' : ''}`}>
      <div className="pipeline-rail__markers" aria-label="Verification stages">
        <div className="pipeline-rail__track" aria-hidden="true" />
        {stages.map((stage, index) => {
          const style = {
            '--stage-color': stage.color,
            '--stage-delay': `${index * 140}ms`,
          } as CSSProperties;

          return (
            <div key={stage.num} className="pipeline-marker" style={style}>
              <span className="pipeline-marker__number">{stage.num}</span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stages.map((stage) => {
          const style = { '--stage-color': stage.color } as CSSProperties;

          return (
            <div key={stage.num} className="pipeline-stage-card rounded-2xl p-5 flex flex-col gap-3" style={style}>
              <h3 className="text-on-surface text-[16px] font-bold">{stage.title}</h3>
              <p className="text-on-surface-variant text-[14px] leading-relaxed flex-1">{stage.desc}</p>
              <span className="text-[13px] font-semibold" style={{ color: stage.color }}>{stage.tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
