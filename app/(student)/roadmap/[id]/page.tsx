import { roadmaps } from '@/lib/data/roadmaps';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PlayCircle, BookOpen, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default async function RoadmapViewPage({ params }: { params: { id: string } }) {
  const roadmapId = (await params).id;
  const roadmap = roadmaps.find((r) => r.id === roadmapId);

  if (!roadmap) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/roadmap" className="text-sm font-semibold text-primary hover:underline mb-4 inline-block">
          ← Back to selection
        </Link>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-on-surface leading-tight">
          {roadmap.title}
        </h1>
        <p className="text-on-surface-variant text-lg mt-3 max-w-2xl">
          {roadmap.description}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-outline/30 ml-4 md:ml-6 space-y-12">
        {roadmap.milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-8 md:pl-12">
            
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center">
              <span className="text-primary text-xs font-bold">{index + 1}</span>
            </div>

            <div className={`bg-surface-container border border-outline/30 rounded-2xl p-6 md:p-8 card-glow ${milestone.isProject ? 'border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.1)]' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {milestone.isProject && (
                      <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Verification Stage
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-on-surface mb-2">
                    {milestone.title}
                  </h2>
                  <p className="text-on-surface-variant leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {!milestone.isProject ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Video */}
                  {milestone.videoUrl && (
                    <a 
                      href={milestone.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface hover:bg-surface-container-high transition-colors border border-outline/20 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-on-surface">Watch Lecture</p>
                        <p className="text-xs text-on-surface-muted">YouTube Video</p>
                      </div>
                    </a>
                  )}

                  {/* Materials */}
                  <div className="flex flex-col gap-2">
                    {milestone.materials.map((mat, i) => (
                      <a
                        key={i}
                        href={mat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container-high transition-colors border border-outline/20 group"
                      >
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">{mat.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-outline/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <CheckCircle className="w-5 h-5 text-success" />
                    Completing this step adds a verified certificate to your profile.
                  </div>
                  <Link
                    href="/projects/submit"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-on-surface text-surface font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto shrink-0"
                  >
                    Submit Project
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
