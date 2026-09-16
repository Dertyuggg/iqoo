'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sidebarLinks = [
  { name: 'Overview', icon: '◆', href: '/dashboard' },
  { name: 'Practice', icon: '⚡', href: '/dashboard' },
  { name: 'Assessments', icon: '✎', href: '/assessment' },
  { name: 'Projects', icon: '■', href: '/projects/submit' },
  { name: 'Defence', icon: '◇', href: '/dashboard', badge: '1' },
  { name: 'Rank', icon: '▲', href: '/dashboard' },
  { name: 'Settings', icon: '✱', href: '/profile/edit' },
];

export default function Sidebar({ activePath }: { activePath?: string }) {
  return (
    <aside className="hidden lg:flex flex-col w-[200px] shrink-0 sticky top-0 h-screen border-r border-outline/30 bg-surface-dim p-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="grid grid-cols-2 gap-0.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-primary" />
          <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
          <span className="w-2.5 h-2.5 rounded-sm bg-tertiary" />
          <span className="w-2.5 h-2.5 rounded-sm bg-step-4" />
        </div>
        <span className="text-on-surface text-[17px] font-extrabold tracking-tight">Praman</span>
      </Link>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 flex-1 relative">
        {sidebarLinks.map((link) => {
          const isActive = activePath === link.href || (activePath === '/dashboard' && link.name === 'Overview');
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                isActive
                  ? 'bg-surface-container-high text-on-surface font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[70%] bg-primary rounded-r-md"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="text-[14px] w-5 text-center">{link.icon}</span>
              <span className="flex-1">{link.name}</span>
              {link.badge && (
                <span className="w-5 h-5 rounded-full bg-error text-white text-[11px] font-bold flex items-center justify-center">
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Verification CTA */}
      <div className="mt-auto p-3 rounded-xl bg-surface-container border border-outline/30">
        <p className="text-on-surface text-[13px] font-semibold mb-1">Profile is 68% verified.</p>
        <p className="text-on-surface-muted text-[12px] leading-snug">Finish the defence round to unlock the shareable link.</p>
      </div>
    </aside>
  );
}
