'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

const navLinks = [
  { name: 'Landing', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Submit project', path: '/projects/submit' },
  { name: 'Assessment', path: '/assessment' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [isCompany, setIsCompany] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data: company } = await supabase
          .from('companies')
          .select('id')
          .eq('id', user.id)
          .single();
        setIsCompany(!!company);
      }
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        setIsCompany(false);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Hide BottomNav on auth pages, landing page, and for companies
  const isAuthOrLandingPage = pathname === '/' || pathname === '/landing' || pathname.startsWith('/login') || pathname.startsWith('/student-login') || pathname.startsWith('/company-login') || pathname.startsWith('/student-signup') || pathname.startsWith('/company-signup');
  if (isAuthOrLandingPage || isCompany) {
    return null;
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-surface-container-high/90 backdrop-blur-xl border border-outline-variant/40 shadow-2xl shadow-black/40">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`relative px-4 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'text-surface font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#34d399] via-[#22d3ee] to-[#60a5fa]" />
              )}
              <span className="relative z-10">{link.name}</span>
            </Link>
          );
        })}

        {/* Divider */}
        <span className="w-px h-5 bg-outline-variant/50 mx-1" />

        {/* Profile icon */}
        {user ? (
          <Link
            href="/profile/setup"
            className="relative shrink-0 group"
            aria-label="My Profile"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary/40 transition-all"
              src={user?.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.user_metadata?.full_name || 'user')}`}
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-success border-2 border-surface-container-high" />
          </Link>
        ) : (
          <Link
            href="/login"
            className="relative px-3 py-2 rounded-full text-[14px] font-medium text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
            aria-label="Sign In"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
