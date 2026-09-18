import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full bg-surface min-h-screen pb-24">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <div className="max-w-[1080px] mx-auto px-4 lg:px-8 py-6 space-y-6">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
