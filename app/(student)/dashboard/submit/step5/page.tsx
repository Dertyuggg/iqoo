'use client';

import React, { useState } from 'react';

type Step5Result = {
  trust_score: number;
  verification_status: string;
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

export default function Step5Page() {
  const [githubUrl, setGithubUrl] = useState('');
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
      // Fake status updates to match design requirements
      setStatusText('Analyzing GitHub repository...');
      setTimeout(() => setStatusText('Analyzing project files...'), 1500);
      setTimeout(() => setStatusText('Running Gemini project review...'), 3500);
      setTimeout(() => setStatusText('Calculating AI evidence score...'), 7000);

      const response = await fetch('/api/step5-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    <div className="w-full bg-surface min-h-[calc(100vh-80px)] font-sans text-on-surface p-space-xl">
      <div className="max-w-[800px] mx-auto bg-surface-container-lowest shadow-sm rounded-xl p-space-xl flex flex-col gap-space-lg">
        
        {/* Progress Indicator equivalent */}
        <div className="flex items-center gap-space-xs text-sm font-semibold text-outline mb-4 overflow-x-auto">
           <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Basics</span>
           <span>&gt;</span>
           <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Repo</span>
           <span>&gt;</span>
           <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Stack</span>
           <span>&gt;</span>
           <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] text-primary">check</span> Demo</span>
           <span>&gt;</span>
           <span className="text-primary font-bold">5 AI Verification</span>
        </div>

        <div>
          <h1 className="font-headline-md text-headline-md font-bold mb-2">AI Verification</h1>
          <p className="text-on-surface-variant font-body-lg">
            AI analyzes your project and GitHub evidence to generate a trust score.
          </p>
        </div>

        {!result && (
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-col gap-2">
              <label className="font-label-lg font-bold">GitHub Repository URL</label>
              <input 
                type="text" 
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/your-username/repo-name"
                className="w-full h-11 px-4 bg-surface-container-low rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-lg font-bold">Project Folder Path</label>
              <input 
                type="text" 
                value={projectPath}
                onChange={(e) => setProjectPath(e.target.value)}
                placeholder="/absolute/path/to/project"
                className="w-full h-11 px-4 bg-surface-container-low rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {error && (
              <div className="p-4 bg-error-container text-on-error-container rounded-lg">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}

            <button 
              onClick={handleAnalyze} 
              disabled={loading}
              className="mt-4 w-full h-12 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center disabled:opacity-50 transition-all hover:bg-primary-container"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined animate-spin text-[20px]">sync</span>
                  {statusText}
                </span>
              ) : (
                "Analyze Project"
              )}
            </button>
          </div>
        )}

        {result && (
          <div className="flex flex-col gap-space-xl animate-fade-in">
            {/* Final Trust Score Card */}
            <div className="bg-primary-container/20 border border-primary/20 p-space-xl rounded-2xl flex flex-col items-center justify-center text-center">
               <h2 className="font-label-lg text-primary uppercase tracking-wider font-bold mb-2">AI EVIDENCE TRUST SCORE</h2>
               <div className="text-6xl font-black text-on-surface mb-2">
                 {result.trust_score} <span className="text-2xl text-outline font-medium">/ 100</span>
               </div>
               
               <div className={`mt-2 px-4 py-1 rounded-full font-bold text-sm ${result.verification_status === 'VERIFIED' ? 'bg-primary text-on-primary' : 'bg-error text-on-error'}`}>
                 {result.verification_status}
               </div>

               <p className="mt-4 text-xs text-on-surface-variant max-w-md">
                 Score is generated from available GitHub and project evidence. Assessment and defense evidence are not yet included.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
              
              {/* GitHub Scores */}
              <div className="bg-surface-container-low p-space-lg rounded-xl">
                <h3 className="font-title-md font-bold mb-4 border-b border-surface-container pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  GitHub Evidence
                </h3>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Coding Consistency</span>
                    <span className="font-bold">{result.github.coding_consistency} / 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">GitHub Authenticity</span>
                    <span className="font-bold">{result.github.github_authenticity} / 100</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-surface-container flex justify-between gap-2 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">{result.github.commits}</div>
                      <div className="text-xs text-outline">Commits</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">{result.github.active_days}</div>
                      <div className="text-xs text-outline">Active Days</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">{result.github.projects_completed}</div>
                      <div className="text-xs text-outline">Projects</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Scores */}
              <div className="bg-surface-container-low p-space-lg rounded-xl">
                <h3 className="font-title-md font-bold mb-4 border-b border-surface-container pb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">folder</span>
                  Project Evidence
                </h3>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Code Quality</span>
                    <span className="font-bold">{result.project.code_quality} / 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Project Depth</span>
                    <span className="font-bold">{result.project.project_depth} / 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Project Structure</span>
                    <span className="font-bold">{result.project.project_structure} / 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Documentation</span>
                    <span className="font-bold">{result.project.documentation} / 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Technical Complexity</span>
                    <span className="font-bold">{result.project.technical_complexity} / 100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Originality Signal</span>
                    <span className="font-bold">{result.project.originality_signal} / 100</span>
                  </div>
                </div>
              </div>

              {/* Missing Evidence Indicators */}
              <div className="md:col-span-2 bg-surface-container-low p-space-lg rounded-xl flex items-center justify-around text-sm">
                 <div className="flex items-center gap-2 text-outline">
                    <span className="material-symbols-outlined text-[16px]">pending</span>
                    <span>Assessment: Not Available</span>
                 </div>
                 <div className="flex items-center gap-2 text-outline">
                    <span className="material-symbols-outlined text-[16px]">pending</span>
                    <span>Defense: Not Available</span>
                 </div>
              </div>

            </div>

            <button 
              onClick={() => setResult(null)} 
              className="mt-4 self-center px-6 py-2 text-primary font-bold hover:bg-surface-container rounded-lg transition-colors"
            >
              Analyze Another Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
