import DashboardStreakHeatmap from '@/components/DashboardStreakHeatmap';

export default function PracticePage() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-on-surface">
            Practice
          </h1>
          <p className="text-on-surface-variant text-[15px] mt-1">
            Build your proof of work one problem at a time.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {/* Practice History Heatmap */}
        <div className="bg-surface-container border border-outline/30 rounded-2xl p-5 card-glow">
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
      </div>
    </>
  );
}
