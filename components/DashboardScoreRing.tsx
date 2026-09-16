'use client';

import { useEffect, useRef, useState } from 'react';

type DashboardScoreRingProps = {
  score: number;
};

const CIRCUMFERENCE = 408;
const DURATION_MS = 1900;

function easeScore(progress: number) {
  let lower = 0;
  let upper = 1;

  for (let iteration = 0; iteration < 18; iteration += 1) {
    const time = (lower + upper) / 2;
    const inverseTime = 1 - time;
    const x = 3 * inverseTime * inverseTime * time * 0.16 + 3 * inverseTime * time * time * 0.3 + time ** 3;

    if (x < progress) lower = time;
    else upper = time;
  }

  const time = (lower + upper) / 2;
  const inverseTime = 1 - time;
  return 3 * inverseTime * inverseTime * time + 3 * inverseTime * time * time + time ** 3;
}

export default function DashboardScoreRing({ score }: DashboardScoreRingProps) {
  const [dashOffset, setDashOffset] = useState(CIRCUMFERENCE);
  const [displayScore, setDisplayScore] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const clampedScore = Math.max(0, Math.min(score, 100));
    const targetDashOffset = CIRCUMFERENCE - CIRCUMFERENCE * (clampedScore / 100);

    animationFrameRef.current = requestAnimationFrame(() => {
      const startedAt = performance.now();
      setDashOffset(targetDashOffset);

      const updateScore = (now: number) => {
        const progress = Math.min((now - startedAt) / DURATION_MS, 1);
        setDisplayScore(Math.round(clampedScore * easeScore(progress)));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(updateScore);
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateScore);
    });

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [score]);

  return (
    <svg viewBox="0 0 160 160" className="w-28 h-28 shrink-0" role="img" aria-label={`Verification score ${score} out of 100`}>
      <defs>
        <linearGradient id="dashboard-score-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="65" fill="none" stroke="rgba(107, 103, 132, 0.2)" strokeWidth="13" />
      <circle
        cx="80"
        cy="80"
        r="65"
        fill="none"
        stroke="url(#dashboard-score-gradient)"
        strokeWidth="13"
        strokeLinecap="round"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 80 80)"
        style={{ transition: `stroke-dashoffset ${DURATION_MS}ms cubic-bezier(.16, 1, .3, 1)` }}
      />
      <text x="80" y="82" textAnchor="middle" fill="var(--color-on-surface)" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="36" fontWeight="800">
        {displayScore}
      </text>
      <text x="80" y="103" textAnchor="middle" fill="var(--color-on-surface-muted)" fontFamily="Inter, sans-serif" fontSize="12">
        of 100
      </text>
    </svg>
  );
}
