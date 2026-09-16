'use client';

import { useEffect, useState, type CSSProperties } from 'react';

type SkillScore = {
  label: string;
  value: number | null;
  color: string;
};

type DashboardSkillBarsProps = {
  scores: SkillScore[];
};

export default function DashboardSkillBars({ scores }: DashboardSkillBarsProps) {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasStarted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`dashboard-skill-bars flex flex-col gap-2 flex-1 justify-center ${hasStarted ? 'go' : ''}`}>
      {scores.map((score) => {
        const progress = (score.value ?? 0) / 100;
        const style = {
          '--p': progress,
          '--bar-color': score.color,
        } as CSSProperties;

        return (
          <div key={score.label} className="flex items-center gap-2">
            <span className="text-on-surface-variant text-[12px] w-24 shrink-0">{score.label}</span>
            <div className="flex-1 h-1.5 rounded-full bg-outline/30 overflow-hidden">
              <div className="dashboard-skill-bar-fill h-full rounded-full" style={style} />
            </div>
            <span className="text-on-surface text-[12px] font-semibold w-6 text-right">
              {score.value ?? '—'}
            </span>
          </div>
        );
      })}
    </div>
  );
}
