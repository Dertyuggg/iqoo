'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CompanyLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<React.ReactNode>('');
  const supabase = createClient();
  const router = useRouter();

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
            Account not found or incorrect password. <Link href="/company-signup" className="underline font-bold">Register instead</Link>
          </span>
        );
      } else {
        setMessage(error.message);
      }
    } else {
      router.push('/shortlist');
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
            Enterprise Partners
          </span>
          <h1 className="font-display-hero-mobile text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-tight">
            Hire top 1% verified engineering talent.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Skip the resume filtering. Directly source candidates with verified code, audited projects, and benchmarked skills.
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
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Enterprise Login</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Log in to your company account to source talent.
            </p>
          </div>

          {message && (
            <div className="p-space-sm rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm text-center shadow-sm" role="alert">
              {message}
            </div>
          )}

          <div className="space-y-space-lg">
            <form onSubmit={handleEmailLogin} className="space-y-space-md">
              <div className="space-y-space-xs">
                <label htmlFor="email-address" className="font-label-md text-label-md text-on-surface block">
                  Work Email
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
                  placeholder="name@company.com"
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
            Don't have a company account? <Link href="/company-signup" className="text-primary hover:underline font-semibold">Sign up here</Link>
          </p>
          <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-space-sm">
            Are you a student builder? <Link href="/student-login" className="text-primary hover:underline font-semibold">Log in here</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
