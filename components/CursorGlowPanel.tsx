'use client';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';

type CursorGlowPanelProps = {
  children: ReactNode;
  className: string;
  hue: string;
  id?: string;
};

export default function CursorGlowPanel({ children, className, hue, id }: CursorGlowPanelProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      id={id}
      className={`cursor-glow-panel ${className}`}
      style={{ '--panel-hue': hue } as CSSProperties}
      onPointerMove={handlePointerMove}
    >
      {children}
    </div>
  );
}
