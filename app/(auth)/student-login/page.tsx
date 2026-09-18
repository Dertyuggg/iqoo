'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<React.ReactNode>('');
  const supabase = createClient();
  const router = useRouter();

  const handleOAuthLogin = async (provider: 'github' | 'google') => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
        scopes: provider === 'github' ? 'read:user repo' : undefined,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        setMessage(
          <span>
            Account not found or incorrect password. <Link href="/student-signup" className="underline font-bold">Register instead</Link>
          </span>
        );
      } else {
        setMessage(error.message);
      }
    } else {
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex w-full bg-surface">
      {/* Left Column: Branding / Marketing (Hidden on mobile) */}
      <section className="hidden lg:flex flex-col w-1/2 bg-surface-container-low p-space-3xl relative overflow-hidden justify-between">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary-container/10 filter blur-xl"></div>
        <div className="absolute top-20 -left-24 w-[500px] h-[500px] bg-primary-fixed/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 -right-24 w-[400px] h-[400px] bg-secondary-fixed/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-space-xs">
          <img 
            alt="Verified Talent Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5WlsNqutCHNv5XNLaiNNDieidH4pQqzdDuD9F4QXZsyPPh7tnFzowqP7z47Xc2WiQwRZYkM8HSgFAaKw814eWNETxbuMNg_qz748XSXUMBi7UKWNGZ3IN52dCw-JOqFRZqlX5vdSuuZ37Abdv7XuSG_DlODxbGclyAWgl09wAGWCu_01jmCA0IIrwU6V1XPORkTCLL8CXck_nTWwZWXrO6eLGLNpGlFydCKvLgF257TirapeVF65hw"
          />
          <span className="font-title-md text-title-md text-on-surface font-bold tracking-tight">Verified Talent</span>
        </div>

        <div className="relative z-10 max-w-md mt-auto mb-auto space-y-space-md">
          <span className="font-badge text-badge text-primary bg-surface-container-high px-space-xs py-space-2xs rounded-full uppercase tracking-wider">
            Start Your Journey
          </span>
          <h1 className="font-display-hero-mobile text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-tight">
            Proof of work over pedigrees.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Join 15,000+ builders from tier-2 and tier-3 colleges showcasing their real-world skills to top product companies.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/30">
          <div className="flex -space-x-2 shrink-0">
            <img alt="Student Builder" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeyijJuSnRTV8hmQoTkRiR_7FCV_oZz7vvXvoR23MJ4ZFguGBqRGkHhV8ZIwdxlLvKcqnawhEmlMuV89lpl4DjB4jT9kVShxucsTUmgkGpPx-_TNWdfiqWgpTWP4mfILbemtRfbC7TMNWRdKDxct09lHWOHgw42-D5eXtNCCMhldZYSJTuQ1JuBTDa_OuPplQuerMPc2PKPDvs3Jxzmv_9tMJlmbdoRSB7NKxVXDsoL1iOaQu7a5LVNg"/>
            <img alt="Student Builder" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7dC1i4H9Nx-EgXloEEy3RAwGTrPCBTz_6plP34lJpKb8LOZJK3HN6T94CB1HOyHRsOaMCdASuDj_02snOiizGaij9guJt7oP8O4oKde7b80KXsgrTRagQbIVkEnlqK6gomDVX-_QdclE_i5TVyXoWs6n1IIKwDbPkFKaHm90DB2mBC-FOaD7lP18URreIX6goUFEQw4c515zWlEUsCdhTDdQ13T0-KAlm1kc3q-LB7moGXJKXOX9V0g"/>
            <img alt="Student Builder" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6z1yYyqQd2UXuoJee01K9JjfRxO-X5LllGZLTDrHmKYLznuX40gyeGSVov4837YeVjYppTyADtNsqpJIrL-Rjtg2T_d4WU0C02lbtB-zuzK_zpx76w8-hqLdWBm7kTZAsMZtIU3I64s0lnjS3lYCUK4fO-Yu5cmjM3QyRsTxIRVku7-GBZhzthgaOv_LA3ImQ1AVtJBqBdlqZVByEpgMxC3X2ZDmAokPy9QeO3ckqy0xSAQDt3-GpjQ"/>
          </div>
          <div>
            <p className="font-label-lg text-label-lg text-on-surface font-semibold">180+ Hiring Partners</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Actively recruiting on the platform</p>
          </div>
        </div>
      </section>

      {/* Right Column: Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-space-xl lg:p-space-3xl">
        <div className="w-full max-w-[440px] space-y-space-xl">
          {/* Mobile Logo Header */}
          <div className="lg:hidden flex items-center gap-space-xs mb-space-2xl justify-center">
            <img 
              alt="Verified Talent Logo" 
              className="h-8 w-auto object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5WlsNqutCHNv5XNLaiNNDieidH4pQqzdDuD9F4QXZsyPPh7tnFzowqP7z47Xc2WiQwRZYkM8HSgFAaKw814eWNETxbuMNg_qz748XSXUMBi7UKWNGZ3IN52dCw-JOqFRZqlX5vdSuuZ37Abdv7XuSG_DlODxbGclyAWgl09wAGWCu_01jmCA0IIrwU6V1XPORkTCLL8CXck_nTWwZWXrO6eLGLNpGlFydCKvLgF257TirapeVF65hw"
            />
            <span className="font-title-md text-title-md text-on-surface font-bold tracking-tight">Verified Talent</span>
          </div>

          <div className="space-y-space-xs text-center lg:text-left">
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Welcome back</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Log in to your student account.
            </p>
          </div>

          {message && (
            <div className="p-space-sm rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm text-center shadow-sm" role="alert">
              {message}
            </div>
          )}

          <div className="space-y-space-lg">
            <div className="space-y-space-sm">
              <button
                onClick={() => handleOAuthLogin('google')}
                disabled={loading}
                aria-label="Continue with Google"
                className="w-full flex items-center justify-center gap-space-sm py-space-sm px-space-md rounded-xl bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Google SVG Icon */}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                onClick={() => handleOAuthLogin('github')}
                disabled={loading}
                aria-label="Continue with GitHub"
                className="w-full flex items-center justify-center gap-space-sm py-space-sm px-space-md rounded-xl bg-surface-container-lowest border border-outline-variant hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* GitHub SVG Icon */}
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Continue with GitHub</span>
              </button>
            </div>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-outline-variant/50"></div>
              <span className="shrink-0 px-space-sm text-on-surface-variant font-body-sm text-body-sm">
                Or sign in with email
              </span>
              <div className="flex-grow border-t border-outline-variant/50"></div>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-space-md">
              <div className="space-y-space-xs">
                <label htmlFor="email-address" className="font-label-md text-label-md text-on-surface block">
                  Email Address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-on-surface-variant/50"
                  placeholder="name@university.edu"
                  aria-required="true"
                />
              </div>

              <div className="space-y-space-xs">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-label-md text-label-md text-on-surface block">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-primary font-body-sm text-body-sm hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-on-surface-variant/50 pr-12"
                    placeholder="••••••••"
                    aria-required="true"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 py-space-sm px-space-md rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">progress_activity</span>
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>
          
          <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-space-lg">
            Don't have an account? <Link href="/student-signup" className="text-primary hover:underline font-semibold">Sign up here</Link>
          </p>
          <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-space-sm">
            Hiring partner? <Link href="/company-login" className="text-primary hover:underline font-semibold">Log in here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
