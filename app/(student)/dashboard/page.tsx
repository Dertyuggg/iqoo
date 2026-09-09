export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium border">
          Status: Unverified
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Verification Pipeline</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</div>
                  <span className="font-medium text-green-900">Consistency Tracking</span>
                </div>
                <span className="text-sm text-green-700">Connected (GitHub)</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">2</div>
                  <span className="font-medium text-blue-900">Project Submission</span>
                </div>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Submit Project</button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded opacity-75">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-xs">3</div>
                  <span className="font-medium text-gray-700">Defend Your Project</span>
                </div>
                <span className="text-sm text-gray-500">Locked</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Activity Streak</h2>
            <div className="h-32 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400">
              [Activity Chart Placeholder]
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Consistency is measured over time to reduce bias toward students with more free time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
