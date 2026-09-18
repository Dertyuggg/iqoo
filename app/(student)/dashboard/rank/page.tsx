import DashboardScoreRing from '@/components/DashboardScoreRing';
import DashboardSkillBars from '@/components/DashboardSkillBars';

/* ── Score breakdown ── */
const scores = [
  { label: 'Consistency', value: 94, color: '#f472b6' },
  { label: 'Fundamentals', value: 81, color: '#fbbf24' },
  { label: 'Shipped work', value: 72, color: '#34d399' },
  { label: 'Code review', value: 66, color: '#60a5fa' },
  { label: 'Defence', value: null, color: '#6b6784' },
];

export default function RankPage() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-on-surface">
            Rank
          </h1>
          <p className="text-on-surface-variant text-[15px] mt-1">
            See where you stand among verified talent.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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

        {/* Rank Card */}
        <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow flex flex-col items-center justify-center text-center h-full">
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
    </>
  );
}
