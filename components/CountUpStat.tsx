'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

type CountUpStatProps = {
  value: number;
  suffix?: string;
  rootRef?: React.RefObject<Element | null>;
};

export default function CountUpStat({ value, suffix = '', rootRef }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // If a rootRef is provided, we use it to determine visibility. 
  // Otherwise, we use the span's own ref.
  const isInView = useInView(rootRef?.current ? rootRef : ref, { once: true, amount: 0.25 });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => {
          setDisplayValue(Math.round(v));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} aria-label={`${value.toLocaleString('en-IN')}${suffix}`}>
      {displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
}
