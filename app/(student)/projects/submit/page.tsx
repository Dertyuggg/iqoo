'use client';

import Sidebar from '@/components/Sidebar';
import { useState } from 'react';

export default function SubmitProjectPage() {
  const [projectName, setProjectName] = useState('kisan-mandi-price');
  const [description, setDescription] = useState('Farmers in Tiruchirappalli call a number and hear today\'s mandi price for their crop in Tamil.');

  return (
    <>
      <main className="w-full bg-surface min-h-screen pb-24">
        <div className="flex">
          {/* Left Sidebar */}
          <Sidebar activePath="/projects/submit" />

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
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 rounded-full bg-step-4 text-white text-[13px] font-bold flex items-center justify-center shrink-0">1</span>
                      <span className="text-on-surface text-[14px] font-semibold whitespace-nowrap">Basics</span>
                      <div className="h-px bg-outline/20 flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3 flex-1 opacity-50">
                      <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant text-[13px] font-bold flex items-center justify-center shrink-0">2</span>
                      <span className="text-on-surface-variant text-[14px] font-semibold whitespace-nowrap">Repo</span>
                      <div className="h-px bg-outline/20 flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3 flex-1 opacity-50">
                      <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant text-[13px] font-bold flex items-center justify-center shrink-0">3</span>
                      <span className="text-on-surface-variant text-[14px] font-semibold whitespace-nowrap">Stack</span>
                      <div className="h-px bg-outline/20 flex-1 hidden md:block"></div>
                    </div>
                    <div className="flex items-center gap-3 opacity-50 hidden md:flex">
                      <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant text-[13px] font-bold flex items-center justify-center shrink-0">4</span>
                      <span className="text-on-surface-variant text-[14px] font-semibold whitespace-nowrap">Demo</span>
                    </div>
                  </div>

                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    {/* Project Name */}
                    <div className="space-y-2">
                      <label className="text-on-surface text-[14px] font-bold">Project name</label>
                      <input 
                        type="text" 
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="w-full bg-surface-container-high border border-outline/30 text-on-surface text-[15px] p-3 rounded-xl focus:outline-none focus:border-step-4 transition-colors"
                      />
                      <p className="text-on-surface-muted text-[12px]">Use the name people would search for, not the repo slug.</p>
                    </div>

                    {/* What does it do? */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-on-surface text-[14px] font-bold">What does it do?</label>
                        <span className="text-on-surface-muted text-[12px]">0 / 180</span>
                      </div>
                      <textarea 
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-surface-container-high border border-outline/30 text-on-surface text-[15px] p-3 rounded-xl focus:outline-none focus:border-step-4 transition-colors resize-none"
                      />
                      <p className="text-on-surface-muted text-[12px]">One sentence. Write it for someone who has never heard of the problem.</p>
                    </div>

                    {/* Who was it for? */}
                    <div className="space-y-3">
                      <label className="text-on-surface text-[14px] font-bold">Who was it for?</label>
                      <div className="flex flex-wrap gap-3">
                        <button type="button" className="px-5 py-2 rounded-full bg-step-2 text-[#022c22] text-[14px] font-bold shadow-sm transition-all hover:scale-105">
                          Real users
                        </button>
                        <button type="button" className="px-5 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-medium hover:bg-surface-container-high transition-colors">
                          A hackathon
                        </button>
                        <button type="button" className="px-5 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-medium hover:bg-surface-container-high transition-colors">
                          Coursework
                        </button>
                        <button type="button" className="px-5 py-2 rounded-full border border-outline/40 text-on-surface text-[14px] font-medium hover:bg-surface-container-high transition-colors">
                          Learning
                        </button>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-outline/20">
                      <button type="button" className="px-8 py-2.5 rounded-full bg-on-surface text-surface text-[15px] font-bold hover:bg-on-surface/90 transition-colors">
                        Continue
                      </button>
                      <span className="text-on-surface-muted text-[13px]">Step 1 of 4</span>
                    </div>
                  </form>
                </div>

                {/* Preview Card Side */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-surface-container border border-outline/30 rounded-3xl p-6 shadow-sm card-glow">
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
                      <h2 className="text-on-surface text-[22px] font-bold mb-2">
                        {projectName || 'Untitled project'}
                      </h2>
                      <p className="text-on-surface-variant text-[14px] leading-relaxed">
                        {description || 'Your one-line description will show up here as you type it.'}
                      </p>
                    </div>

                    {/* Tech Badges (Placeholder) */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-3 py-1 rounded-full bg-surface-container-high text-step-3 text-[12px] font-semibold border border-step-3/20">Next.js</span>
                      <span className="px-3 py-1 rounded-full bg-surface-container-high text-step-3 text-[12px] font-semibold border border-step-3/20">Supabase</span>
                      <span className="px-3 py-1 rounded-full bg-surface-container-high text-step-3 text-[12px] font-semibold border border-step-3/20">Twilio</span>
                      <span className="px-3 py-1 rounded-full bg-surface-container-high text-step-3 text-[12px] font-semibold border border-step-3/20">Bhashini ASR</span>
                    </div>

                    {/* Status List */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-surface-container-high/50 p-3 rounded-xl">
                        <span className="text-on-surface-variant text-[13px] font-medium">Commit check</span>
                        <span className="text-step-3 text-[13px] font-semibold">not run</span>
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
