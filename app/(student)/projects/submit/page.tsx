'use client';

import Sidebar from '@/components/Sidebar';
import { useState, useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Step definitions ──
const STEPS = [
  { id: 1, label: 'Basics' },
  { id: 2, label: 'Repo' },
  { id: 3, label: 'Stack' },
  { id: 4, label: 'Demo' },
  { id: 5, label: 'AI Verification' },
] as const;

// ── Commit Authenticity Scan ──
type ScanPhase = 'idle' | 'scanning' | 'done';
type CheckStatus = 'pending' | 'pass' | 'warn';

interface ScanCheck {
  label: string;
  result: string;
  status: CheckStatus; // final status once revealed
  revealMs: number;    // when this row flips to opacity 1
}

const SCAN_CHECKS: ScanCheck[] = [
  { label: 'Commit authorship',       result: '92% commits match identity',  status: 'pass', revealMs: 600  },
  { label: 'Temporal distribution',    result: 'Spread across 18 days',       status: 'pass', revealMs: 1500 },
  { label: 'Force-push history',       result: 'No force pushes detected',    status: 'pass', revealMs: 2400 },
  { label: 'Bulk-commit detection',    result: '1 large commit flagged',      status: 'warn', revealMs: 3300 },
  { label: 'Co-author attribution',    result: 'All co-authors declared',     status: 'pass', revealMs: 4200 },
];

const SCAN_DONE_MS = 4900;

// easeOutExpo as a cubic-bezier approximation
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CONFETTI_COUNT = 70;
const CONFETTI_COLORS = [
  '#a78bfa',
  '#f472b6',
  '#34d399',
  '#60a5fa',
  '#fbbf24',
  '#22d3ee',
] as const;

type ConfettiPiece = {
  id: number;
  color: (typeof CONFETTI_COLORS)[number];
  left: number;
  dx: number;
  rotation: number;
  delay: number;
};

// ── Pane slide-in variant ──
const paneVariants = {
  enter: {
    opacity: 0,
    x: 22,
  },
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT_EXPO,
    },
  },
  exit: {
    opacity: 0,
    x: -22,
    transition: {
      duration: 0.2,
      ease: 'easeIn' as const,
    },
  },
};

// ── Step Circle component ──
function StepCircle({
  step,
  currentStep,
}: {
  step: (typeof STEPS)[number];
  currentStep: number;
}) {
  const isCompleted = currentStep > step.id;
  const isActive = currentStep === step.id;

  return (
    <motion.span
      className={`w-8 h-8 rounded-full text-[13px] font-bold flex items-center justify-center shrink-0 relative ${
        isActive
          ? 'bg-step-4 text-white'
          : isCompleted
            ? 'bg-success text-white'
            : 'bg-surface-container-highest text-on-surface-variant'
      }`}
      animate={
        isCompleted
          ? {
              scale: [1, 1.15, 1],
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }
          : { scale: 1 }
      }
    >
      {/* 6px ring for completed steps */}
      {isCompleted && (
        <motion.span
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: '0 0 0 6px rgba(52, 211, 153, 0.25)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        />
      )}
      <AnimatePresence mode="wait">
        {isCompleted ? (
          <motion.span
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="text-[14px]"
          >
            ✓
          </motion.span>
        ) : (
          <motion.span
            key="number"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {step.id}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.span>
  );
}

// ── Step Connector Line ──
function StepConnector({
  fromStep,
  currentStep,
}: {
  fromStep: number;
  currentStep: number;
}) {
  const isFilled = currentStep > fromStep;

  return (
    <div className="h-px flex-1 bg-outline/20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-success origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFilled ? 1 : 0 }}
        transition={{
          duration: 0.6,
          ease: EASE_OUT_EXPO,
        }}
      />
    </div>
  );
}

// ── Step Indicator Bar ──
function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div 
      className="flex items-center gap-2 md:gap-3 mb-8 overflow-x-auto pb-1"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .step-scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex items-center min-w-max w-full step-scroll-container">
        {STEPS.map((step, i) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 ${
              i < STEPS.length - 1 ? 'flex-1 mr-2 md:mr-3' : ''
            } ${
              step.id > currentStep ? 'opacity-50' : ''
            }`}
          >
            <StepCircle step={step} currentStep={currentStep} />
            <span
              className={`text-[13px] md:text-[14px] font-semibold whitespace-nowrap ${
                step.id <= currentStep
                  ? 'text-on-surface'
                  : 'text-on-surface-variant'
              }`}
            >
              {step.label}
            </span>
            {i < STEPS.length - 1 && (
              <div className="ml-2 md:ml-3 flex-1 flex">
                <StepConnector fromStep={step.id} currentStep={currentStep} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Individual Pane Components ──

function PaneBasics({
  projectName,
  setProjectName,
  description,
  setDescription,
}: {
  projectName: string;
  setProjectName: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Project Name */}
      <div className="space-y-2">
        <label className="text-on-surface text-[14px] font-bold">Project name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter your project name"
          className="w-full bg-surface-container-high border border-outline/30 text-on-surface text-[15px] p-3 rounded-xl focus:outline-none focus:border-step-4 transition-colors"
        />
        <p className="text-on-surface-muted text-[12px]">
          Use the name people would search for, not the repo slug.
        </p>
      </div>

      {/* What does it do? */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-on-surface text-[14px] font-bold">What does it do?</label>
          <span className="text-on-surface-muted text-[12px]">{description.length} / 180</span>
        </div>
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value.slice(0, 180))}
          placeholder="Enter your project description"
          className="w-full bg-surface-container-high border border-outline/30 text-on-surface text-[15px] p-3 rounded-xl focus:outline-none focus:border-step-4 transition-colors resize-none"
        />
        <p className="text-on-surface-muted text-[12px]">
          One sentence. Write it for someone who has never heard of the problem.
        </p>
      </div>

      {/* Who was it for? */}
      <div className="space-y-3">
        <label className="text-on-surface text-[14px] font-bold">Who was it for?</label>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="px-5 py-2 rounded-full bg-step-2 text-[#022c22] text-[14px] font-bold shadow-sm transition-all hover:scale-105"
          >
            Real users
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-medium hover:bg-surface-container-high transition-colors"
          >
            A hackathon
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-medium hover:bg-surface-container-high transition-colors"
          >
            Coursework
          </button>
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-medium hover:bg-surface-container-high transition-colors"
          >
            Learning
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Commit Authenticity Scan Panel ──
function CommitScanPanel({
  scanPhase,
  revealedSet,
  scanLabel,
}: {
  scanPhase: ScanPhase;
  revealedSet: Set<number>;
  scanLabel: string;
}) {
  if (scanPhase === 'idle') return null;

  const hasWarnings = SCAN_CHECKS.some(
    (c, i) => revealedSet.has(i) && c.status === 'warn'
  );

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
      className="mt-6 rounded-xl border border-outline/30 bg-surface-container-high/40 overflow-hidden"
    >
      <div className="p-5 space-y-4">
        {/* Header with spinner / checkmark */}
        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait">
            {scanPhase === 'scanning' ? (
              <motion.span
                key="spinner"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.9, repeat: Infinity, ease: 'linear' },
                }}
                className="w-4 h-4 rounded-full border-2 border-tertiary border-t-transparent shrink-0"
              />
            ) : (
              <motion.span
                key="done-check"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
                  hasWarnings
                    ? 'bg-warning text-[#422006]'
                    : 'bg-success text-[#022c22]'
                }`}
              >
                ✓
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-on-surface text-[14px] font-bold">{scanLabel}</span>
        </div>

        {/* Check rows */}
        <div className="space-y-2">
          {SCAN_CHECKS.map((check, i) => {
            const isRevealed = revealedSet.has(i);
            const isMint = check.status === 'pass';

            return (
              <motion.div
                key={check.label}
                animate={{ opacity: isRevealed ? 1 : 0.35 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 py-2 px-3 rounded-lg"
              >
                {/* Checkbox indicator */}
                <motion.span
                  animate={
                    isRevealed
                      ? {
                          scale: [1, 1.12, 1],
                          backgroundColor: isMint
                            ? 'rgba(52, 211, 153, 1)'
                            : 'rgba(251, 191, 36, 1)',
                        }
                      : {
                          scale: 1,
                          backgroundColor: 'rgba(46, 43, 71, 1)',
                        }
                  }
                  transition={
                    isRevealed
                      ? {
                          scale: { duration: 0.3, ease: 'easeInOut' },
                          backgroundColor: { duration: 0.2 },
                        }
                      : { duration: 0.2 }
                  }
                  className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                >
                  {isRevealed && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 600, damping: 18 }}
                      className={`text-[11px] font-bold ${
                        isMint ? 'text-[#022c22]' : 'text-[#422006]'
                      }`}
                    >
                      {isMint ? '✓' : '!'}
                    </motion.span>
                  )}
                </motion.span>

                {/* Label + result */}
                <div className="flex-1 min-w-0">
                  <span className="text-on-surface text-[13px] font-medium">
                    {check.label}
                  </span>
                  {isRevealed && (
                    <motion.span
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                      className={`ml-2 text-[12px] font-semibold ${
                        isMint ? 'text-success' : 'text-warning'
                      }`}
                    >
                      — {check.result}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function PaneRepo({
  repoUrl,
  setRepoUrl,
  scanPhase,
  revealedSet,
  scanLabel,
  onStartScan,
}: {
  repoUrl: string;
  setRepoUrl: (v: string) => void;
  scanPhase: ScanPhase;
  revealedSet: Set<number>;
  scanLabel: string;
  onStartScan: () => void;
}) {
  return (
    <div className="space-y-8">
      {/* Repository URL */}
      <div className="space-y-3">
        <label className="text-on-surface text-[14px] font-bold">Repository URL</label>
        <input
          type="url"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          placeholder="github.com/ananyar/kisan-mandi-price"
          className="w-full bg-[#111122] border border-outline/30 text-on-surface text-[15px] p-4 rounded-xl focus:outline-none focus:border-step-4 transition-colors"
        />
        <p className="text-on-surface-muted text-[13px]">
          Public repos only. We read commit metadata, never your private code.
        </p>
      </div>

      {/* Scan trigger */}
      <button
        type="button"
        onClick={onStartScan}
        disabled={scanPhase !== 'idle'}
        className={`px-6 py-3 rounded-full text-[15px] font-bold transition-all ${
          scanPhase === 'idle'
            ? 'border border-tertiary text-white bg-[#1A1A3A] hover:bg-[#25254D] cursor-pointer'
            : 'border border-outline/20 text-on-surface-muted bg-surface-container-high cursor-default'
        }`}
      >
        {scanPhase === 'idle'
          ? 'Run commit authenticity scan'
          : scanPhase === 'scanning'
            ? 'Scanning…'
            : 'Scan complete'}
      </button>

      {/* Animated scan panel */}
      <CommitScanPanel
        scanPhase={scanPhase}
        revealedSet={revealedSet}
        scanLabel={scanLabel}
      />
    </div>
  );
}

function PaneStack({
  selected,
  setSelected,
}: {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const techOptions = [
    'Next.js', 'Supabase', 'Python', 'Twilio', 'FastAPI', 'Postgres',
    'Redis', 'Bhashini ASR', 'Flutter', 'Tailwind'
  ];

  const [contribution, setContribution] = useState('I wrote the IVR flow and the price-scraping job. My teammate did the dashboard.');

  const toggleTech = (tech: string) => {
    setSelected((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  return (
    <div className="space-y-8">
      {/* Technologies */}
      <div className="space-y-4">
        <label className="text-on-surface text-[14px] font-bold">
          What did you build it with?
        </label>
        <div className="flex flex-wrap gap-3">
          {techOptions.map((tech) => {
            const isSelected = selected.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all ${
                  isSelected
                    ? 'bg-step-3 text-black shadow-sm border border-transparent'
                    : 'bg-[#111122] border border-outline/40 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
        <p className="text-on-surface-muted text-[13px]">
          Pick what you wrote code against. Reviewers ask about the ones you select.
        </p>
      </div>

      {/* Contribution */}
      <div className="space-y-3">
        <label className="text-on-surface text-[14px] font-bold">
          What was yours?
        </label>
        <textarea
          rows={4}
          value={contribution}
          onChange={(e) => setContribution(e.target.value)}
          className="w-full bg-[#111122] border border-outline/30 text-on-surface text-[15px] p-4 rounded-xl focus:outline-none focus:border-step-4 transition-colors resize-none"
        />
        <p className="text-on-surface-muted text-[13px]">
          Being specific here helps you. Claiming the whole thing does not.
        </p>
      </div>
    </div>
  );
}

function PaneDemo() {
  return (
    <div className="space-y-8">
      {/* Demo link */}
      <div className="space-y-3">
        <label className="text-on-surface text-[14px] font-bold">
          Demo link <span className="text-on-surface-muted font-normal">— optional</span>
        </label>
        <input
          type="url"
          placeholder="https://"
          className="w-full bg-[#111122] border border-outline/30 text-on-surface text-[15px] p-4 rounded-xl focus:outline-none focus:border-step-4 transition-colors"
        />
      </div>

      {/* Screenshots */}
      <div className="space-y-3">
        <label className="text-on-surface text-[14px] font-bold">
          Screenshots or a short video
        </label>
        <div className="group relative flex flex-col items-center justify-center py-12 px-6 rounded-2xl border-2 border-dashed border-outline/30 hover:border-step-4/50 bg-[#111122]/50 transition-colors cursor-pointer text-center">
          <input className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" type="file" accept="image/png,image/jpeg,video/mp4" multiple />
          <div className="text-white mb-4 group-hover:-translate-y-1 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 16M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-on-surface text-[16px] font-bold mb-1">
            Drop files here, or click to choose
          </p>
          <p className="text-on-surface-muted text-[13px]">
            PNG, JPG or MP4 up to 25 MB — three files max
          </p>
        </div>
      </div>

      {/* Notice */}
      <div className="p-5 rounded-2xl border border-dashed border-[#F59E0B]/50 bg-[#F59E0B]/10">
        <p className="text-[#F59E0B] text-[14px] leading-relaxed">
          Once you submit, your defence round is scheduled within 48 hours. Questions are
          generated from this repo's diff, so submit the version you know best.
        </p>
      </div>
    </div>
  );
}

// ── Pane AI Verification ──
type Step5Result = {
  trust_score: number;
  verification_status: string;
  score_method?: string;
  github: {
    coding_consistency: number;
    github_authenticity: number;
    projects_completed: number;
    commits: number;
    active_days: number;
  };
  project: {
    code_quality: number;
    project_depth: number;
    project_structure: number;
    documentation: number;
    technical_complexity: number;
    originality_signal: number;
  };
  ml_features: {
    assessment_score: null;
    defense_score: null;
  };
  evidence_status: {
    github: boolean;
    project_analysis: boolean;
    assessment: boolean;
    defense: boolean;
  };
};

function PaneAIVerification({ repoUrl }: { repoUrl: string }) {
  const [githubUrl, setGithubUrl] = useState(repoUrl);
  const [projectPath, setProjectPath] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusText, setStatusText] = useState('');
  const [result, setResult] = useState<Step5Result | null>(null);

  const handleAnalyze = async () => {
    if (!githubUrl || !projectPath) {
      setError('Please provide both GitHub URL and Project Path');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      setStatusText('Analyzing GitHub repository...');
      setTimeout(() => setStatusText('Analyzing project files...'), 1500);
      setTimeout(() => setStatusText('Running Gemini project review...'), 3500);
      setTimeout(() => setStatusText('Calculating AI evidence score...'), 7000);

      const response = await fetch('/api/step5-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ githubUrl, projectPath }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'AI analysis temporarily unavailable');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || 'AI analysis temporarily unavailable');
    } finally {
      setLoading(false);
      setStatusText('');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-on-surface text-[18px] font-bold mb-2">AI Verification</h2>
        <p className="text-on-surface-muted text-[14px]">
          AI analyzes your project and GitHub evidence to generate a trust score.
        </p>
      </div>

      {!result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5">
          <div className="space-y-2">
            <label className="text-on-surface text-[14px] font-bold">GitHub Repository URL</label>
            <input 
              type="text" 
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/your-username/repo-name"
              className="w-full bg-[#111122] border border-outline/30 text-on-surface text-[15px] p-4 rounded-xl focus:outline-none focus:border-step-4 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-on-surface text-[14px] font-bold">Project Folder Path</label>
            <input 
              type="text" 
              value={projectPath}
              onChange={(e) => setProjectPath(e.target.value)}
              placeholder="/absolute/path/to/project"
              className="w-full bg-[#111122] border border-outline/30 text-on-surface text-[15px] p-4 rounded-xl focus:outline-none focus:border-step-4 transition-colors"
            />
          </div>

          {error && (
            <div className="p-4 bg-error/10 border border-error/50 text-error rounded-lg text-[14px] font-semibold">
              <p>{error}</p>
            </div>
          )}

          <button 
            type="button"
            onClick={handleAnalyze} 
            disabled={loading}
            className={`mt-2 w-full py-4 rounded-xl text-[15px] font-bold flex items-center justify-center transition-all ${
              loading ? 'bg-surface-container-highest text-on-surface-muted' : 'bg-step-4 text-white hover:bg-step-4/90 cursor-pointer'
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">hourglass_empty</span>
                {statusText}
              </span>
            ) : (
              "Analyze Project"
            )}
          </button>
        </motion.div>
      )}

      {result && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col gap-6">
          <div className="bg-step-4/10 border border-step-4/30 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
             <h2 className="text-[12px] text-step-4 uppercase tracking-wider font-bold mb-2">AI EVIDENCE TRUST SCORE</h2>
             <div className="text-5xl font-black text-on-surface mb-2">
               {result.trust_score} <span className="text-xl text-on-surface-muted font-medium">/ 100</span>
             </div>
             
             <div className={`mt-2 px-4 py-1 rounded-full font-bold text-[12px] ${result.verification_status.includes('NOT VERIFIED') ? 'bg-warning/20 text-warning border border-warning/50' : 'bg-success/20 text-success border border-success/50'}`}>
               {result.verification_status}
             </div>

             <p className="mt-4 text-[12px] text-on-surface-muted max-w-sm">
               Score is generated from available GitHub and project evidence. Assessment and defense evidence are not yet included.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-4 rounded-xl border border-outline/20">
              <h3 className="text-[13px] font-bold mb-3 border-b border-outline/10 pb-2 text-step-4">GitHub Evidence</h3>
              <div className="flex flex-col gap-2 text-[13px]">
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Coding Consistency</span><span className="font-semibold">{result.github.coding_consistency} / 100</span></div>
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">GitHub Authenticity</span><span className="font-semibold">{result.github.github_authenticity} / 100</span></div>
                <div className="mt-2 pt-2 border-t border-outline/10 flex justify-between gap-2">
                  <div className="text-center"><div className="font-bold">{result.github.commits}</div><div className="text-[10px] text-on-surface-muted">Commits</div></div>
                  <div className="text-center"><div className="font-bold">{result.github.active_days}</div><div className="text-[10px] text-on-surface-muted">Days</div></div>
                  <div className="text-center"><div className="font-bold">{result.github.projects_completed}</div><div className="text-[10px] text-on-surface-muted">Projects</div></div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high p-4 rounded-xl border border-outline/20">
              <h3 className="text-[13px] font-bold mb-3 border-b border-outline/10 pb-2 text-step-3">Project Evidence</h3>
              <div className="flex flex-col gap-2 text-[13px]">
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Code Quality</span><span className="font-semibold">{result.project.code_quality} / 100</span></div>
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Project Depth</span><span className="font-semibold">{result.project.project_depth} / 100</span></div>
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Structure</span><span className="font-semibold">{result.project.project_structure} / 100</span></div>
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Documentation</span><span className="font-semibold">{result.project.documentation} / 100</span></div>
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Complexity</span><span className="font-semibold">{result.project.technical_complexity} / 100</span></div>
                <div className="flex justify-between items-center"><span className="text-on-surface-muted">Originality</span><span className="font-semibold">{result.project.originality_signal} / 100</span></div>
              </div>
            </div>
          </div>
          
          <button 
            type="button"
            onClick={() => setResult(null)} 
            className="mt-2 self-center px-4 py-2 text-step-4 text-[13px] font-semibold hover:bg-surface-container-highest rounded-lg transition-colors"
          >
            Re-analyze Project
          </button>
        </motion.div>
      )}
    </div>
  );
}

// ── Main Page ──
export default function SubmitProjectPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>(['Next.js', 'Supabase', 'Twilio', 'Bhashini ASR']);

  // ── Scan orchestration ──
  const [scanPhase, setScanPhase] = useState<ScanPhase>('idle');
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set());
  const [scanLabel, setScanLabel] = useState('Commit authenticity scan');
  const scanTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const confettiCleanupTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearScanTimers = useCallback(() => {
    scanTimers.current.forEach(clearTimeout);
    scanTimers.current = [];
  }, []);

  // Cleanup on unmount
  useEffect(() => () => {
    clearScanTimers();
    if (confettiCleanupTimer.current) clearTimeout(confettiCleanupTimer.current);
  }, [clearScanTimers]);

  const celebrateSubmission = useCallback(() => {
    if (confettiCleanupTimer.current) clearTimeout(confettiCleanupTimer.current);

    setShowSuccessToast(true);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
      setConfetti(
        Array.from({ length: CONFETTI_COUNT }, (_, id) => ({
          id,
          color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          left: 35 + Math.random() * 30,
          dx: -45 + Math.random() * 90,
          rotation: -540 + Math.random() * 1080,
          delay: Math.random() * 350,
        })),
      );
    } else {
      setConfetti([]);
    }

    confettiCleanupTimer.current = setTimeout(() => {
      setConfetti([]);
      setShowSuccessToast(false);
      confettiCleanupTimer.current = null;
    }, 3000);
  }, []);

  const startScan = useCallback(() => {
    if (scanPhase !== 'idle') return;

    setScanPhase('scanning');
    setScanLabel('Scanning commit history…');
    setRevealedSet(new Set());
    clearScanTimers();

    // Reveal each check row at the specified delay
    SCAN_CHECKS.forEach((check, i) => {
      const t = setTimeout(() => {
        setRevealedSet((prev) => new Set(prev).add(i));
      }, check.revealMs);
      scanTimers.current.push(t);
    });

    // Finalize at 4900ms — replace spinner with ✓, rewrite label
    const tDone = setTimeout(() => {
      const hasWarnings = SCAN_CHECKS.some((c) => c.status === 'warn');
      setScanPhase('done');
      setScanLabel(
        hasWarnings
          ? '4 passed · 1 warning — review flagged items'
          : 'All 5 checks passed'
      );
    }, SCAN_DONE_MS);
    scanTimers.current.push(tDone);
  }, [scanPhase, clearScanTimers]);

  const canAdvance = currentStep < STEPS.length;
  const canGoBack = currentStep > 1;
  const isLastStep = currentStep === STEPS.length;

  const advance = useCallback(() => {
    if (canAdvance) setCurrentStep((s) => s + 1);
  }, [canAdvance]);

  const goBack = useCallback(() => {
    if (canGoBack) setCurrentStep((s) => s - 1);
  }, [canGoBack]);

  return (
    <>
      {confetti.length > 0 && (
        <div className="confetti-layer" aria-hidden="true">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="confetti-piece"
              style={{
                '--confetti-color': piece.color,
                '--confetti-left': `${piece.left}vw`,
                '--dx': `${piece.dx}vw`,
                '--rot': `${piece.rotation}deg`,
                '--confetti-delay': `${piece.delay}ms`,
              } as CSSProperties}
            />
          ))}
        </div>
      )}
      {showSuccessToast && (
        <div className="submit-success-toast" role="status" aria-live="polite">
          <span className="text-success text-lg" aria-hidden="true">✓</span>
          <span>Project submitted successfully</span>
        </div>
      )}
      <main className="w-full bg-surface min-h-screen pb-24">
        <div className="flex">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-10 space-y-8">

              {/* Header */}
              <div>
                <h1 className="font-display text-[32px] font-extrabold text-on-surface tracking-tight">
                  Submit a project
                </h1>
                <p className="text-on-surface-variant text-[15px] mt-1">
                  Four minutes. The repo does most of the talking.
                </p>
              </div>

              {/* Layout: Form + Preview Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Form Side */}
                <div className="lg:col-span-7 bg-surface-container border border-outline/30 rounded-2xl p-6 shadow-sm">

                  {/* Step Indicator */}
                  <StepIndicator currentStep={currentStep} />

                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* ── WIZARD PANES — only active pane in DOM flow ── */}
                    <div key={currentStep} className="animate-pane-in">
                      {currentStep === 1 && (
                        <PaneBasics
                          projectName={projectName}
                          setProjectName={setProjectName}
                          description={description}
                          setDescription={setDescription}
                        />
                      )}
                      {currentStep === 2 && (
                        <PaneRepo
                          repoUrl={repoUrl}
                          setRepoUrl={setRepoUrl}
                          scanPhase={scanPhase}
                          revealedSet={revealedSet}
                          scanLabel={scanLabel}
                          onStartScan={startScan}
                        />
                      )}
                      {currentStep === 3 && (
                        <PaneStack
                          selected={selectedTech}
                          setSelected={setSelectedTech}
                        />
                      )}
                      {currentStep === 4 && <PaneDemo />}
                      {currentStep === 5 && <PaneAIVerification repoUrl={repoUrl} />}
                    </div>

                    {/* Navigation footer */}
                    <div className="pt-6 mt-4 flex items-center justify-between border-t border-outline/20">
                      <div className="flex items-center gap-4">
                        {canGoBack && (
                          <button
                            type="button"
                            onClick={goBack}
                            className="px-6 py-2.5 rounded-full border border-outline/40 text-on-surface text-[15px] font-semibold hover:bg-surface-container-high transition-colors"
                          >
                            Back
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={isLastStep ? celebrateSubmission : advance}
                          className="px-8 py-2.5 rounded-full text-[15px] font-bold transition-colors bg-white text-black hover:bg-gray-100"
                        >
                          {isLastStep ? 'Submit' : 'Continue'}
                        </button>
                      </div>
                      <span className="text-on-surface-muted text-[13px]">
                        Step {currentStep} of {STEPS.length}
                      </span>
                    </div>
                  </form>
                </div>

                {/* Preview Card Side */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-surface-container conic-border-card rounded-3xl p-6 shadow-sm card-glow">
                    {/* User Info */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-step-4 text-white text-[16px] font-bold flex items-center justify-center shadow-sm">
                        AR
                      </div>
                      <div>
                        <h3 className="text-on-surface text-[15px] font-bold">Ananya R</h3>
                        <p className="text-on-surface-muted text-[13px]">Backend · Trichy</p>
                      </div>
                    </div>

                    {/* Project Title & Desc */}
                    <div className="mb-6">
                      <h2 className="text-on-surface text-[22px] font-bold mb-2 break-words">
                        {projectName || 'Untitled project'}
                      </h2>
                      <p className="text-on-surface-variant text-[14px] leading-relaxed break-words">
                        {description || 'Your one-line description will show up here as you type it.'}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8 min-h-[28px]">
                      <AnimatePresence mode="popLayout">
                        {selectedTech.map((tech, i) => (
                          <motion.span
                            layout
                            key={tech}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{
                              type: 'spring',
                              stiffness: 500,
                              damping: 25,
                              delay: i * 0.05,
                            }}
                            className="px-3 py-1 rounded-full bg-surface-container-high text-step-3 text-[12px] font-semibold border border-step-3/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </AnimatePresence>
                    </div>

                    {/* Status List */}
                    <div className="space-y-3">
                      <div className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                        scanPhase === 'done'
                          ? SCAN_CHECKS.some((c) => c.status === 'warn')
                            ? 'bg-warning/10 border border-warning/20'
                            : 'bg-success/10 border border-success/20'
                          : 'bg-surface-container-high/50'
                      }`}>
                        <span className="text-on-surface-variant text-[13px] font-medium">Commit check</span>
                        <span className="flex items-center gap-2">
                          {scanPhase === 'scanning' && (
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                              className="w-3.5 h-3.5 rounded-full border-2 border-tertiary border-t-transparent shrink-0"
                            />
                          )}
                          <span className={`text-[13px] font-semibold ${
                            scanPhase === 'idle'
                              ? 'text-step-3'
                              : scanPhase === 'scanning'
                                ? 'text-tertiary'
                                : SCAN_CHECKS.some((c) => c.status === 'warn')
                                  ? 'text-warning'
                                  : 'text-success'
                          }`}>
                            {scanPhase === 'idle'
                              ? 'not run'
                              : scanPhase === 'scanning'
                                ? 'scanning…'
                                : SCAN_CHECKS.some((c) => c.status === 'warn')
                                  ? '4/5 passed · 1 warning'
                                  : '5/5 passed'}
                          </span>
                        </span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-container-high/50 p-3 rounded-xl">
                        <span className="text-on-surface-variant text-[13px] font-medium">Repo</span>
                        <span className="text-success text-[13px] font-semibold">linked</span>
                      </div>
                      <div className="flex items-center justify-between bg-surface-container-high/50 p-3 rounded-xl border border-error/20">
                        <span className="text-on-surface-variant text-[13px] font-medium">Defence</span>
                        <span className="text-error text-[13px] font-semibold">scheduled after submit</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-on-surface-muted text-[12px] leading-relaxed px-2">
                    This is exactly what a hiring team sees. Nothing hidden, nothing extra.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
