import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function LandingPage() {
  return (
    <>
      <Navbar activePath="/" />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-surface py-space-3xl">
            <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop text-center">
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight max-w-4xl mx-auto">
                Get hired for what you can <span className="text-primary underline decoration-secondary-container decoration-wavy decoration-2">actually build</span>.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-space-md">
                Build real-world projects, verify your skills, and get direct interview invites from top tech teams. No tier bias.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xl">
                <Link href="/login" className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all group">
                  <span>Start Free Profile</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-xl bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-lg text-primary">play_circle</span>
                  <span>Explore Projects</span>
                </Link>
              </div>

              <div className="mt-space-xl text-on-surface-variant font-body-sm text-body-sm">
                Trusted by <strong>15,000+</strong> builders from 240+ regional colleges
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="w-full bg-surface-container-low py-space-3xl">
            <div className="max-w-[1080px] mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg text-center">
                <div className="flex flex-col items-center gap-space-sm p-space-lg">
                  <span className="material-symbols-outlined text-[40px] text-primary">code</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold">Show Real Code</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Connect GitHub and let your deployed production code speak louder than pedigree.</p>
                </div>
                <div className="flex flex-col items-center gap-space-sm p-space-lg">
                  <span className="material-symbols-outlined text-[40px] text-secondary">speed</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold">Fair Verification</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">45-minute live architecture reviews based on real engineering, not puzzle quizzes.</p>
                </div>
                <div className="flex flex-col items-center gap-space-sm p-space-lg">
                  <span className="material-symbols-outlined text-[40px] text-tertiary">work</span>
                  <h3 className="font-headline-sm text-headline-sm font-bold">Direct Discovery</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Skip the cold emails. Top tech teams search our verified talent pool directly.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Simple CTA */}
          <section className="w-full bg-surface py-space-3xl">
            <div className="max-w-[800px] mx-auto px-gutter-mobile lg:px-gutter-desktop text-center">
              <div className="bg-primary rounded-3xl p-space-2xl text-on-primary shadow-xl">
                <h2 className="font-headline-lg text-headline-lg font-extrabold tracking-tight mb-space-md">
                  Ready to let your code unlock your future?
                </h2>
                <Link href="/login" className="inline-flex items-center gap-space-xs px-space-xl py-space-sm rounded-xl bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-md hover:bg-surface-bright transition-all group">
                  <span>Join Verified Talent</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className="w-full bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-gutter-mobile lg:px-gutter-desktop py-space-xl text-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 Verified Talent. Built for ambitious builders across India.
          </p>
        </div>
      </footer>
    </>
  );
}
