'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { roadmaps } from '@/lib/data/roadmaps';
import { Loader2, Sparkles, ArrowRight } from 'lucide-react';

export default function RoadmapSelectionPage() {
  const [analyzing, setAnalyzing] = useState(true);

  // Simulate AI analysis time
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      {analyzing ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            <Loader2 className="w-12 h-12 text-primary animate-spin relative z-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-on-surface mb-2">Analyzing your profile...</h2>
            <p className="text-on-surface-variant max-w-sm">
              We're evaluating your GitHub commits and project history to build the perfect roadmap.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Analysis Complete
            </div>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold text-on-surface leading-tight">
              Choose your path
            </h1>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl mx-auto">
              Based on your existing skills, we recommend these focused tracks to get you job-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmaps.map((roadmap) => (
              <div key={roadmap.id} className="bg-surface-container border border-outline/30 rounded-3xl p-8 card-glow flex flex-col h-full relative overflow-hidden group">
                
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <h3 className="text-2xl font-bold text-on-surface mb-3 relative z-10">{roadmap.title}</h3>
                <p className="text-on-surface-variant leading-relaxed flex-1 relative z-10">
                  {roadmap.description}
                </p>
                
                <div className="mt-8 relative z-10">
                  <div className="text-sm font-semibold text-on-surface-muted mb-4 uppercase tracking-wider">
                    Path includes
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {roadmap.milestones.length} Milestones
                    </li>
                    <li className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Curated Video Lectures
                    </li>
                    <li className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Verified Capstone Project
                    </li>
                  </ul>
                  
                  <Link 
                    href={`/roadmap/${roadmap.id}`}
                    className="flex items-center justify-between w-full py-4 px-6 rounded-2xl bg-on-surface text-surface font-semibold hover:opacity-90 transition-opacity"
                  >
                    Start this roadmap
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
