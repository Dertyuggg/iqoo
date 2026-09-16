import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import DashboardScoreRing from '@/components/DashboardScoreRing';
import DashboardSkillBars from '@/components/DashboardSkillBars';
import DashboardStreakHeatmap from '@/components/DashboardStreakHeatmap';
import { Flame } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';

/* ── Pipeline stages ── */
const stages = [
  { title: 'Show up', sub: '41-day streak', status: 'cleared', color: '#f472b6' },
  { title: 'Prove the basics', sub: '6/6 problems, 0 flags', status: 'cleared', color: '#34d399' },
  { title: 'Ship something', sub: '2 projects submitted', status: 'cleared', color: '#60a5fa' },
  { title: 'Get reviewed', sub: 'Commit check running', status: 'in progress', color: '#fbbf24' },
  { title: 'Defend it live', sub: 'Thursday 6:40 pm', status: 'not started', color: '#f87171' },
];

/* ── Score breakdown ── */
const scores = [
  { label: 'Consistency', value: 94, color: '#f472b6' },
  { label: 'Fundamentals', value: 81, color: '#fbbf24' },
  { label: 'Shipped work', value: 72, color: '#34d399' },
  { label: 'Code review', value: 66, color: '#60a5fa' },
  { label: 'Defence', value: null, color: '#6b6784' },
];

/* ── Activity feed ── */
const activity = [
  { icon: '🔵', title: 'Commit check started', sub: 'kisan-mandi-price · 214 commits', time: '2m' },
  { icon: '✅', title: 'Project accepted', sub: 'Repo authorship matched', time: '2h' },
  { icon: '🔴', title: 'Defence slot confirmed', sub: 'Thursday, 6:40 pm IST', time: '5h' },
  { icon: '🟡', title: 'Assessment cleared', sub: '6 of 6, no paste attempts', time: '1d' },
  { icon: '🔥', title: 'Streak hit 40 days', sub: 'Top 8% consistency', time: '2d' },
];

export default async function StudentDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: student } = user ? await supabase.from('students').select('*').eq('id', user.id).single() : { data: null };
  const fullName = student?.full_name || user?.user_metadata?.full_name || 'Anonymous User';
  const firstName = fullName.split(' ')[0];

  /* ── Greeting based on time ── */
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';

  return (
    <>
      <main className="w-full bg-surface min-h-screen pb-24">
        <div className="flex">

          <Sidebar activePath="/dashboard" />

          {/* ╔════════════════════════════════╗
              ║        MAIN CONTENT           ║
              ╚════════════════════════════════╝ */}
          <div className="flex-1 min-w-0">
            <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-6 space-y-6">

              {/* ── Header: Greeting + Streak ── */}
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-on-surface">
                    {greeting}, {firstName}.
                  </h1>
                  <p className="text-on-surface-variant text-[15px] mt-1">
                    Two stages left. Your defence slot is on Thursday.
                  </p>
                </div>
                <div className="flex flex-col items-center bg-surface-container border border-outline/30 rounded-2xl px-4 py-3 shrink-0">
                  <Flame className="w-6 h-6 text-[#FF6B35] fill-[#FF6B35] streak-flame" />
                  <span className="text-on-surface text-[24px] font-extrabold leading-none mt-1">41</span>
                  <span className="text-on-surface-muted text-[11px]">day streak</span>
                </div>
              </div>

              {/* ── Top row: Score + Defence + Rank ── */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Verification Score Card */}
                <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-on-surface text-[15px] font-semibold">Verification score</h3>
                    <span className="text-on-surface-muted text-[12px]">updated 2h ago</span>
                  </div>
                  <div className="flex gap-6">
                    {/* Circular score */}
                    <DashboardScoreRing score={68} />
                    {/* Score breakdown */}
                    <DashboardSkillBars scores={scores} />
                  </div>
                </div>

                {/* Defence Round Card */}
                <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-on-surface text-[15px] font-semibold">Defence round</h3>
                    <span className="px-2 py-0.5 rounded-full bg-success/20 text-success text-[11px] font-semibold">booked</span>
                  </div>
                  <p className="text-on-surface text-[18px] font-bold mb-1">Thursday, 6:40 pm</p>
                  <p className="text-on-surface-variant text-[13px] leading-relaxed mb-4">
                    Nine minutes on <span className="font-mono text-on-surface">kisan-mandi-price</span>.
                    Questions come from your own diff — no prep material.
                  </p>
                  {/* Countdown */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { val: '02', label: 'days' },
                      { val: '14', label: 'hrs' },
                      { val: '08', label: 'min' },
                      { val: '49', label: 'sec' },
                    ].map((t) => (
                      <div key={t.label} className="bg-surface-container-high rounded-xl p-2 text-center">
                        <p className="text-on-surface text-[20px] font-extrabold leading-none">{t.val}</p>
                        <p className="text-on-surface-muted text-[11px] mt-1">{t.label}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-on-surface text-surface text-[14px] font-semibold hover:bg-on-surface/90 transition-colors">
                    Run a mock round
                  </button>
                </div>

                {/* Rank Card */}
                <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow flex flex-col items-center justify-center text-center">
                  <div className="flex items-center gap-2 mb-2 self-stretch justify-between">
                    <h3 className="text-on-surface text-[15px] font-semibold">Your rank</h3>
                    <span className="text-on-surface-muted text-[12px]">Backend · India</span>
                  </div>
                  <p className="text-gradient-hero text-[56px] font-extrabold leading-none my-3">#214</p>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-success/15 text-success text-[13px] font-semibold mb-2">
                    ↑ 47 this week
                  </span>
                  <p className="text-on-surface-muted text-[13px]">of 12,400 verified students</p>
                </div>
              </div>

              {/* ── Where you are: Pipeline stages ── */}
              <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-on-surface text-[17px] font-bold">Where you are</h3>
                  <span className="text-on-surface-muted text-[13px]">2 of 5 stages left</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {stages.map((s) => {
                    const statusStyle =
                      s.status === 'cleared'
                        ? 'bg-success/15 text-success'
                        : s.status === 'in progress'
                        ? 'bg-warning/15 text-warning'
                        : 'bg-outline/20 text-on-surface-muted';

                    const cardStyle =
                      s.status === 'in progress'
                        ? 'stage-card-active bg-surface-container-high'
                        : s.status === 'cleared'
                        ? 'stage-card-done'
                        : 'bg-surface-container-high';

                    return (
                      <div
                        key={s.title}
                        className={`${cardStyle} border border-outline/30 rounded-xl p-4 flex flex-col gap-2`}
                        style={{ '--stage-color': s.color } as React.CSSProperties}
                      >
                        <span className="text-[14px] font-bold" style={{ color: s.color }}>{s.title}</span>
                        <span className="text-on-surface-variant text-[12px]">{s.sub}</span>
                        <span className={`self-start px-2 py-0.5 rounded-md text-[11px] font-semibold ${statusStyle}`}>
                          {s.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── Bottom row: Practice history + Activity feed ── */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                {/* Practice History Heatmap */}
                <div className="lg:col-span-3 bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-on-surface text-[15px] font-semibold">Practice history</h3>
                    <span className="text-on-surface-muted text-[12px]">last 22 weeks</span>
                  </div>
                  {/* Heatmap grid */}
                  <div className="overflow-x-auto pb-2">
                    <DashboardStreakHeatmap />
                  </div>
                  {/* Legend */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-on-surface-muted text-[11px]">lighter</span>
                    <div className="flex gap-1">
                      <span className="w-3 h-3 rounded-sm bg-outline/20" />
                      <span className="w-3 h-3 rounded-sm bg-[#FF6B3533]" />
                      <span className="w-3 h-3 rounded-sm bg-[#FF6B3566]" />
                      <span className="w-3 h-3 rounded-sm bg-[#FF6B3599]" />
                      <span className="w-3 h-3 rounded-sm bg-[#FF6B35]" />
                    </div>
                    <span className="text-on-surface-muted text-[11px]">heavier</span>
                  </div>
                </div>

                {/* What Changed (Activity Feed) */}
                <div className="lg:col-span-2 bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-on-surface text-[15px] font-semibold">What changed</h3>
                    <span className="text-success text-[12px] font-semibold">live</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {activity.map((a) => (
                      <div key={a.title} className="flex items-start gap-3">
                        <span className="text-[16px] mt-0.5 shrink-0">{a.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-on-surface text-[14px] font-semibold">{a.title}</p>
                          <p className="text-on-surface-muted text-[12px] truncate">{a.sub}</p>
                        </div>
                        <span className="text-on-surface-muted text-[12px] shrink-0">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
