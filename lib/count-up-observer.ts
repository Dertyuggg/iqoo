'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const DURATION_MS = 1400;

interface CountUpRegistration {
  id: number;
  value: number;
  suffix: string;
  element: HTMLSpanElement;
  setDisplayValue: (val: number) => void;
  hasAnimated: boolean;
}

const registrations = new Map<number, CountUpRegistration>();
let observer: IntersectionObserver | null = null;
let nextId = 0;
let observerRoot: Element | null = null;

function easeOutQuart(t: number) {
  return 1 - (1 - t) ** 4;
}

function animateValue(reg: CountUpRegistration) {
  const startTime = performance.now();
  const { value, setDisplayValue } = reg;

  const tick = (now: number) => {
    const progress = Math.min((now - startTime) / DURATION_MS, 1);
    const easedProgress = easeOutQuart(progress);
    setDisplayValue(Math.round(value * easedProgress));

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
}

function initObserver(root: Element | null) {
  if (observer || observerRoot === root) return;
  observerRoot = root;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        observer?.disconnect();
        observer = null;
        registrations.forEach((reg) => {
          if (!reg.hasAnimated) {
            reg.hasAnimated = true;
            animateValue(reg);
          }
        });
      }
    },
    { threshold: 0.25 }
  );

  if (root) {
    observer.observe(root);
  }
}

export function useCountUpObserver(rootRef: React.RefObject<Element | null>) {
  useEffect(() => {
    if (rootRef.current) {
      initObserver(rootRef.current);
    }
  }, [rootRef]);
}

export function registerCountUp(
  value: number,
  suffix: string,
  element: HTMLSpanElement,
  setDisplayValue: (val: number) => void
): number {
  const id = nextId++;
  registrations.set(id, {
    id,
    value,
    suffix,
    element,
    setDisplayValue,
    hasAnimated: false,
  });
  return id;
}

export function unregisterCountUp(id: number) {
  registrations.delete(id);
}