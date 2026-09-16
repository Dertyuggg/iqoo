'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const CELL_COUNT = 154;

function getIntensity(index: number) {
  const seed = (index * 7 + 13) % 23;
  return seed < 5 ? 0 : seed < 9 ? 1 : seed < 14 ? 2 : seed < 18 ? 3 : 4;
}

export default function DashboardStreakHeatmap() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasStarted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`streak-heatmap ${hasStarted ? 'go' : ''}`} aria-label="Practice activity over the last 22 weeks">
      {Array.from({ length: CELL_COUNT }).map((_, index) => {
        const intensity = getIntensity(index);
        const style = { '--cell-delay': `${index * 5}ms` } as CSSProperties;

        return <span key={index} className={`streak-heatmap-cell intensity-${intensity}`} style={style} aria-hidden="true" />;
      })}
    </div>
  );
}
