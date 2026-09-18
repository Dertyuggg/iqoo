'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  activePath?: string;
}

export default function Navbar({ activePath = '/' }: NavbarProps) {
  const [user, setUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Submit Project', path: '/projects/submit' },
    { name: 'Assessment', path: '/assessment' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-surface-container-low">
      <div className="h-16 max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              alt="Verified Talent Logo" 
              className="h-7 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5WlsNqutCHNv5XNLaiNNDieidH4pQqzdDuD9F4QXZsyPPh7tnFzowqP7z47Xc2WiQwRZYkM8HSgFAaKw814eWNETxbuMNg_qz748XSXUMBi7UKWNGZ3IN52dCw-JOqFRZqlX5vdSuuZ37Abdv7XuSG_DlODxbGclyAWgl09wAGWCu_01jmCA0IIrwU6V1XPORkTCLL8CXck_nTWwZWXrO6eLGLNpGlFydCKvLgF257TirapeVF65hw" 
            />
            <span className="font-headline-sm text-[18px] text-on-surface font-extrabold tracking-tight">
              Verified Talent
            </span>
          </Link>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase border border-primary/20">
            Beta
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activePath === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-full font-label-md text-[14px] whitespace-nowrap transition-all duration-200 ${
                  isActive 
                    ? 'bg-surface-container-high text-primary font-bold shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-medium'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <Link 
            href="/projects/submit" 
            className="hidden sm:inline-flex items-center px-5 py-2 bg-primary text-white hover:bg-primary-container hover:text-primary rounded-full font-label-md text-[14px] font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Verify Skills
          </Link>
          
          <div className="flex items-center gap-2 border-l border-surface-container-high pl-4">
            {user ? (
              <>
                <button 
                  aria-label="Notifications" 
                  className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors group" 
                  type="button"
                >
                  <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">notifications</span>
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#fd761a] border-2 border-white"></span>
                </button>

                <div className="relative">
                  <div 
                    className="relative group cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <img 
                      alt="Profile" 
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary/20 transition-all" 
                      src={user?.user_metadata?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuAW3-9fqTZ98W61Z_Op-WXUHNscW_846wSe72SzOb9vFDaddtb04FrBBOoqbnSec84KyrdGT63zntEioS3_HIcPHIAvlpXZ9DeHcXLT_7NcNOl0ZIp0qDW5PeFjkq0xSID6mnJOfe7z7Hpgw4Ns9dwcAsXo8PdNgok4djd-7LJmkJg4eaUoanyurHknFr18OHTz284m_1o4wShIK5wN-XyKY0pK8gZhwg2FFxmbKwYIiIAVGDM2rhji9g"} 
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary border-2 border-white"></span>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-surface-container-low py-2 overflow-hidden flex flex-col z-50">
                      <Link 
                        href="/profile/edit"
                        className="px-4 py-2 text-[14px] text-on-surface hover:bg-surface-container-low transition-colors text-left"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <button 
                        onClick={() => {
                          setIsDropdownOpen(false);
                          handleSignOut();
                        }}
                        className="px-4 py-2 text-[14px] text-error hover:bg-error/10 transition-colors text-left font-medium"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 font-label-md text-[14px] font-semibold text-primary hover:bg-primary/5 rounded-full transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
