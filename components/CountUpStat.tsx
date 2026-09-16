'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpStatProps = {
  value: number;
  suffix?: string;
};

const DURATION_MS = 1400;

export default function CountUpStat({ value, suffix = '' }: CountUpStatProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimatedRef.current) return;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / DURATION_MS, 1);
        const easedProgress = 1 - (1 - progress) ** 4;
        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(tick);
        }
      };

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          observer.unobserve(element);
          startAnimation();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value]);

  return (
    <span ref={elementRef} aria-label={`${value.toLocaleString('en-IN')}${suffix}`}>
      {displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
}
