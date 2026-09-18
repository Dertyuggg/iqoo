'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function TopNav() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [isCompany, setIsCompany] = useState(false);
  const supabase = createClient();
  const router = useRouter();


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

  // Hide TopNav on the landing page, as it has its own header
  if (pathname === '/landing' || pathname === '/') {
    return null;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-xl border-b border-outline/30 w-full">
      <div className="h-16 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between">
        
        {/* Logo */}
        <Link href={user ? (isCompany ? "/shortlist" : "/dashboard") : "/landing"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center gap-1">
            <div className="grid grid-cols-2 gap-0.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-primary" />
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              <span className="w-2.5 h-2.5 rounded-sm bg-tertiary" />
              <span className="w-2.5 h-2.5 rounded-sm bg-step-4" />
            </div>
          </div>
          <span className="font-display text-[18px] text-on-surface font-extrabold tracking-tight">
            Praman
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {isCompany ? (
                <>
                  <Link href="/shortlist" className="text-sm font-medium text-on-surface-variant hover:text-on-surface">Shortlist</Link>
                </>
              ) : (
                <>
                  <Link href="/roadmap" className="text-sm font-medium text-on-surface-variant hover:text-on-surface hidden sm:block">Roadmap</Link>
                  <Link href="/dashboard" className="text-sm font-medium text-on-surface-variant hover:text-on-surface hidden sm:block">Dashboard</Link>
                  <Link href="/projects/submit" className="text-sm font-medium text-on-surface-variant hover:text-on-surface hidden sm:block">Submit</Link>
                </>
              )}
            </>
          ) : (
            <Link href="/login" className="px-5 py-2 rounded-full bg-on-surface text-surface text-[14px] font-semibold hover:bg-on-surface/90 transition-colors">
              Sign In
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}
