export default function DefencePage() {
  return (
    <>
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-on-surface">
            Defence
          </h1>
          <p className="text-on-surface-variant text-[15px] mt-1">
            Prove your skills in a live session.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
      </div>
    </>
  );
}
