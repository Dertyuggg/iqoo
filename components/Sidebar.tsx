'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

const sidebarLinks = [
  {
    name: 'Overview',
    icon: '◆',
    href: '/dashboard',
    subItems: [
      { name: 'Practice', icon: '⚡', href: '/dashboard/practice' },
      { name: 'Defence', icon: '◇', href: '/dashboard/defence', badge: '1' },
      { name: 'Rank', icon: '▲', href: '/dashboard/rank' },
    ]
  },
  { name: 'Assessments', icon: '✎', href: '/assessment' },
  { name: 'Submit Project', icon: '■', href: '/projects/submit' },
  { name: 'My Projects', icon: '▤', href: '/projects/my-projects' },
  { name: 'Roadmap', icon: '◖', href: '/roadmap', badge: 'New' },
  { name: 'Profile', icon: '✱', href: '/profile/edit' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  // Auto-expand parent if we are on a child route
  useEffect(() => {
    sidebarLinks.forEach(link => {
      if (link.subItems) {
        const isChildActive = link.subItems.some(sub => pathname === sub.href);
        if (isChildActive || pathname === link.href) {
          setExpandedItems(prev => ({ ...prev, [link.name]: true }));
        }
      }
    });
  }, [pathname]);

  const toggleExpand = (name: string) => {
    setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <aside className="hidden lg:flex flex-col w-[200px] shrink-0 sticky top-0 h-screen border-r border-outline/30 bg-surface-dim p-5 pt-8">
      {/* Nav links */}
      <nav className="flex flex-col gap-1 flex-1 relative">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          const hasSubItems = Boolean(link.subItems && link.subItems.length > 0);
          const isExpanded = expandedItems[link.name];

          return (
            <div key={link.name} className="flex flex-col gap-1">
              {hasSubItems ? (
                <button
                  onClick={() => toggleExpand(link.name)}
                  className={`relative flex items-center justify-between w-full gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                    isActive || (link.subItems && link.subItems.some(sub => pathname === sub.href))
                      ? 'bg-surface-container-high text-on-surface font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[14px] w-5 text-center">{link.icon}</span>
                    <span className="flex-1 text-left">{link.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <Link
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
              )}

              {/* Sub-items */}
              <AnimatePresence>
                {hasSubItems && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden flex flex-col gap-1 ml-[18px] pl-3 border-l-2 border-outline/20"
                  >
                    {/* Link to the overview page itself if they want to see all */}
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors mt-1 ${
                        pathname === link.href
                          ? 'text-primary font-semibold'
                          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                      }`}
                    >
                      All Overview
                    </Link>
                    
                    {link.subItems?.map(sub => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                            isSubActive
                              ? 'text-primary font-semibold'
                              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                          }`}
                        >
                          <span className="text-[12px] w-4 text-center">{sub.icon}</span>
                          <span className="flex-1">{sub.name}</span>
                          {sub.badge && (
                            <span className="w-4 h-4 rounded-full bg-error text-white text-[10px] font-bold flex items-center justify-center">
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Verification CTA */}
      <div className="mt-auto p-3 rounded-xl bg-surface-container border border-outline/30 mb-2">
        <p className="text-on-surface text-[13px] font-semibold mb-1">Profile is 68% verified.</p>
        <p className="text-on-surface-muted text-[12px] leading-snug">Finish the defence round to unlock the shareable link.</p>
      </div>

      {/* Log out button */}
      <button 
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-error hover:text-error hover:bg-error/10 transition-colors w-full text-left"
      >
        <LogOut className="w-4 h-4 ml-0.5" />
        <span className="flex-1">Log out</span>
      </button>
    </aside>
  );
}
