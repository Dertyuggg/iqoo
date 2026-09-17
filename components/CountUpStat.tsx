'use client';

import { useEffect, useRef, useState } from 'react';
import { registerCountUp, unregisterCountUp, useCountUpObserver } from '@/lib/count-up-observer';

type CountUpStatProps = {
  value: number;
  suffix?: string;
  rootRef?: React.RefObject<Element | null>;
};

const DURATION_MS = 1400;

export default function CountUpStat({ value, suffix = '', rootRef }: CountUpStatProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const registrationIdRef = useRef<number | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useCountUpObserver(rootRef ?? { current: null });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    registrationIdRef.current = registerCountUp(value, suffix, element, setDisplayValue);

    return () => {
      if (registrationIdRef.current !== null) {
        unregisterCountUp(registrationIdRef.current);
      }
    };
  }, [value, suffix]);

  return (
    <span ref={elementRef} aria-label={`${value.toLocaleString('en-IN')}${suffix}`}>
      {displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
}
