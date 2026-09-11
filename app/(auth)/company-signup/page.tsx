'use client';

import { useState } from 'react';
import { signUpCompanyAction } from '@/app/actions/company';
import Link from 'next/link';

export default function CompanySignup() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.currentTarget);
    try {
      await signUpCompanyAction(formData);
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex w-full bg-surface">
      {/* Left Column: Branding / Marketing (Hidden on mobile) */}
      <section className="hidden lg:flex flex-col w-1/2 bg-surface-container-low p-space-3xl relative overflow-hidden justify-between border-r border-outline-variant/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/10 to-primary/10 filter blur-xl"></div>
        <div className="absolute top-20 -left-24 w-[500px] h-[500px] bg-secondary-fixed/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 -right-24 w-[400px] h-[400px] bg-primary-fixed/20 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center gap-space-xs">
          <img 
            alt="Verified Talent Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5WlsNqutCHNv5XNLaiNNDieidH4pQqzdDuD9F4QXZsyPPh7tnFzowqP7z47Xc2WiQwRZYkM8HSgFAaKw814eWNETxbuMNg_qz748XSXUMBi7UKWNGZ3IN52dCw-JOqFRZqlX5vdSuuZ37Abdv7XuSG_DlODxbGclyAWgl09wAGWCu_01jmCA0IIrwU6V1XPORkTCLL8CXck_nTWwZWXrO6eLGLNpGlFydCKvLgF257TirapeVF65hw"
          />
          <span className="font-title-md text-title-md text-on-surface font-bold tracking-tight">Verified Talent</span>
        </div>

        <div className="relative z-10 max-w-md mt-auto mb-auto space-y-space-md">
          <span className="font-badge text-badge text-secondary bg-surface-container-high px-space-xs py-space-2xs rounded-full uppercase tracking-wider">
            For Employers
          </span>
          <h1 className="font-display-hero-mobile text-display-hero-mobile lg:text-display-hero font-extrabold text-on-surface tracking-tight leading-tight">
            Hire verified builders directly.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Skip the noise. Access a pool of engineering talent pre-vetted on real-world architecture, APIs, and systems design.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-outline-variant/30">
          <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[26px]">verified_user</span>
          </div>
          <div>
            <p className="font-label-lg text-label-lg text-on-surface font-semibold">100% Blind Evaluation</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Assessed purely on code quality</p>
          </div>
        </div>
      </section>

      {/* Right Column: Form */}
      <section className="w-full lg:w-1/2 flex items-center justify-center p-space-xl lg:p-space-3xl relative">
        <div className="w-full max-w-[440px] space-y-space-xl relative z-10">
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
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Company Partner Signup</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Create an account to access the verified talent pool.
            </p>
          </div>

          {error && (
            <div className="p-space-sm rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm text-center shadow-sm" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-space-md">
            <div className="space-y-space-xs">
              <label htmlFor="company-name" className="font-label-md text-label-md text-on-surface block">
                Company Name
              </label>
              <input
                id="company-name"
                name="name"
                type="text"
                required
                className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-on-surface-variant/50"
                placeholder="e.g. Acme Corp"
                aria-required="true"
              />
            </div>
            
            <div className="space-y-space-xs">
              <label htmlFor="company-email" className="font-label-md text-label-md text-on-surface block">
                Work Email
              </label>
              <input
                id="company-email"
                name="email"
                type="email"
                required
                className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-on-surface-variant/50"
                placeholder="you@company.com"
                aria-required="true"
              />
            </div>
            
            <div className="space-y-space-xs">
              <label htmlFor="company-password" className="font-label-md text-label-md text-on-surface block">
                Password
              </label>
              <input
                id="company-password"
                name="password"
                type="password"
                required
                className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="••••••••"
                aria-required="true"
              />
            </div>
            
            <div className="space-y-space-xs">
              <label htmlFor="primary-domain" className="font-label-md text-label-md text-on-surface block">
                Primary Domain Hiring For
              </label>
              <select
                id="primary-domain"
                name="domain"
                className="w-full px-space-md py-space-sm rounded-xl bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                aria-label="Select primary hiring domain"
              >
                <option value="Web Development">Web Development</option>
                <option value="Backend">Backend / DSA</option>
                <option value="Data Science">Data Science</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-space-sm px-space-md mt-space-lg rounded-xl bg-on-surface hover:bg-on-surface-variant text-surface font-label-lg text-label-lg transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Company Account'}
            </button>
          </form>
          
          <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-space-lg">
            Already have an account? <Link href="/login" className="text-primary hover:underline font-semibold">Log in</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
