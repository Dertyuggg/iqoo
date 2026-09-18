import Link from 'next/link';

export default function LoginSelectionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-surface p-space-md">
      <div className="w-full max-w-[640px] bg-surface-container-lowest p-space-xl sm:p-space-2xl rounded-2xl shadow-sm border border-outline-variant/30 text-center space-y-space-xl">
        <div className="flex flex-col items-center gap-space-sm">
          <img 
            alt="Verified Talent Logo" 
            className="h-12 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5WlsNqutCHNv5XNLaiNNDieidH4pQqzdDuD9F4QXZsyPPh7tnFzowqP7z47Xc2WiQwRZYkM8HSgFAaKw814eWNETxbuMNg_qz748XSXUMBi7UKWNGZ3IN52dCw-JOqFRZqlX5vdSuuZ37Abdv7XuSG_DlODxbGclyAWgl09wAGWCu_01jmCA0IIrwU6V1XPORkTCLL8CXck_nTWwZWXrO6eLGLNpGlFydCKvLgF257TirapeVF65hw"
          />
          <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface">Welcome to Verified Talent</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Select your account type to continue.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <Link 
            href="/student-login"
            className="flex flex-col items-center p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant transition-colors group"
          >
            <span className="material-symbols-outlined text-[32px] text-primary mb-space-xs group-hover:scale-110 transition-transform">school</span>
            <span className="font-label-lg text-label-lg font-bold text-on-surface">Student Builder</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Showcase your verified skills</span>
          </Link>

          <Link 
            href="/company-login"
            className="flex flex-col items-center p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container border border-outline-variant transition-colors group"
          >
            <span className="material-symbols-outlined text-[32px] text-secondary mb-space-xs group-hover:scale-110 transition-transform">business_center</span>
            <span className="font-label-lg text-label-lg font-bold text-on-surface">Enterprise Partner</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">Hire top 1% verified talent</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
