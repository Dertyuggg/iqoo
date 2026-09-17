'use client';

import { useEffect, useState, type CSSProperties, useRef } from 'react';
import Link from 'next/link';
import CountUpStat from './CountUpStat';

export default function HeroEntrance({ heroRef }: { heroRef: React.RefObject<HTMLDivElement | null> }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div ref={heroRef} className="flex flex-col gap-space-lg">
      <div className={`hero-entrance-item flex items-center gap-2 ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '0ms' } as CSSProperties}>
        <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
        <span className="text-on-surface-variant text-[14px]">2,140 defence rounds run this month</span>
      </div>

      <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight">
        <span className="hero-line"><span className={`hero-line-inner ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '0ms' } as CSSProperties}>Your repo says</span></span>
        <span className="hero-line"><span className={`hero-line-inner ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '100ms' } as CSSProperties}>you built it.</span></span>
        <span className="hero-line"><span className={`hero-line-inner text-gradient-hero hero-gradient-animated ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '200ms' } as CSSProperties}>Praman proves it.</span></span>
      </h1>

      <p className={`hero-entrance-item text-on-surface-variant text-[16px] leading-relaxed max-w-lg ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '420ms' } as CSSProperties}>
        A skill profile recruiters can trust — built from daily practice,
        paste-proof assessments, real commit history, and a live round
        where you defend what you shipped. Made for the colleges
        hiring teams never visit.
      </p>

      <div className={`hero-entrance-item flex flex-wrap items-center gap-3 pt-space-sm ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '540ms' } as CSSProperties}>
        <Link
          href="/login"
          className="px-6 py-3 rounded-full bg-on-surface text-surface text-[15px] font-semibold hover:bg-on-surface/90 transition-all hover:shadow-lg hover:shadow-primary/10"
        >
          Start your profile — free
        </Link>
        <Link
          href="#for-companies"
          className="px-6 py-3 rounded-full border border-outline-variant text-on-surface-variant text-[15px] font-medium hover:border-on-surface-variant hover:text-on-surface transition-colors"
        >
          Hire verified talent →
        </Link>
      </div>
    </div>
  );
}

export function HeroStats({ heroRef }: { heroRef: React.RefObject<HTMLDivElement | null> }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`hero-entrance-item grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 mt-space-4xl pt-space-3xl border-t border-outline/30 ${hasMounted ? 'is-visible' : ''}`} style={{ '--hero-delay': '660ms' } as CSSProperties}>
      <div>
        <p className="text-on-surface text-[28px] font-extrabold"><CountUpStat value={12400} rootRef={heroRef} /></p>
        <p className="text-on-surface-muted text-[14px]">students verified</p>
      </div>
      <div>
        <p className="text-on-surface text-[28px] font-extrabold"><CountUpStat value={386} rootRef={heroRef} /></p>
        <p className="text-on-surface-muted text-[14px]">colleges, 71% Tier-2/3</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-on-surface text-[28px] font-extrabold"><CountUpStat value={9} suffix=" min" rootRef={heroRef} /></p>
        <p className="text-on-surface-muted text-[14px]">median defence round</p>
      </div>
    </div>
  );
}
