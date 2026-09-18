import Sidebar from '@/components/Sidebar';

export default function DashboardLoading() {
  return (
    <main className="w-full bg-surface min-h-screen pb-24">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-6 space-y-6">
            
            {/* Header Skeleton */}
            <div className="flex items-start justify-between animate-pulse">
              <div className="space-y-3">
                <div className="h-8 w-64 bg-surface-container-high rounded-lg"></div>
                <div className="h-4 w-96 bg-surface-container-high rounded-md"></div>
              </div>
              <div className="h-16 w-20 bg-surface-container-high rounded-2xl"></div>
            </div>

            {/* Top row Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-48 bg-surface-container border border-outline/30 rounded-2xl animate-pulse"></div>
              <div className="h-48 bg-surface-container border border-outline/30 rounded-2xl animate-pulse"></div>
              <div className="h-48 bg-surface-container border border-outline/30 rounded-2xl animate-pulse"></div>
            </div>

            {/* Pipeline Skeleton */}
            <div className="h-32 bg-surface-container border border-outline/30 rounded-2xl animate-pulse"></div>

            {/* Bottom row Skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-3 h-64 bg-surface-container border border-outline/30 rounded-2xl animate-pulse"></div>
              <div className="lg:col-span-2 h-64 bg-surface-container border border-outline/30 rounded-2xl animate-pulse"></div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
