export default function ShortlistLoading() {
  return (
    <main className="w-full pt-16 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        {/* Header Skeleton */}
        <section className="relative w-full px-margin-screen pt-space-xl pb-space-lg overflow-hidden bg-surface-container-low animate-pulse">
          <div className="flex flex-col gap-space-lg">
            <div className="h-6 w-1/3 bg-surface-container-high rounded-md"></div>
            <div className="flex flex-col gap-2">
              <div className="h-10 w-1/2 bg-surface-container-high rounded-lg"></div>
              <div className="h-4 w-2/3 bg-surface-container-high rounded-md"></div>
            </div>
            
            {/* Filter Cards Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-sm pt-space-xs">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-24 rounded-xl bg-surface-container-highest opacity-50"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Skeleton */}
        <div className="w-full px-margin-screen py-space-lg flex flex-col xl:flex-row items-start gap-space-lg animate-pulse">
          <div className="w-full xl:flex-1 min-w-0 flex flex-col gap-space-md">
            <div className="h-[500px] w-full rounded-xl bg-surface-container-lowest shadow-sm border border-outline/10"></div>
          </div>
          <aside className="w-full xl:w-96 shrink-0 flex flex-col gap-space-md">
            <div className="h-[500px] w-full bg-surface-container-lowest rounded-xl shadow-sm border border-outline/10"></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
