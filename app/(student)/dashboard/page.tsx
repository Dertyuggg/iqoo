import Link from 'next/link';
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

  // For demonstration, if no student record exists or if specifically marked, show empty state
  const isNewStudent = false; // Could be derived from student data (e.g. !student || student.streak === 0)

  return (
    <>
      {isNewStudent ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-surface-container border border-outline/30 rounded-2xl mt-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Flame className="w-8 h-8 text-primary opacity-50" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-on-surface mb-2">Welcome to Praman, {firstName}!</h2>
                  <p className="text-on-surface-variant max-w-md mb-6">You're right at the start. Build your proof of work by consistently submitting projects and passing assessments.</p>
                  <Link href="/projects/submit" className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-semibold hover:bg-primary-container transition-colors">
                    Start Your First Project
                  </Link>
                </div>
              ) : (
                <>
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

              {/* ── Bottom row: Activity feed ── */}
              <div className="grid grid-cols-1 gap-4">
                {/* What Changed (Activity Feed) */}
                <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
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

                </>
              )}
    </>
  );
}
