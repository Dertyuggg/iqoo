export default function CompanyShortlist() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Verified Talent Shortlist</h1>
        <select className="border border-gray-300 rounded px-3 py-2 bg-white shadow-sm text-sm">
          <option>Domain: Web Development</option>
          <option>Domain: Backend / DSA</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trust Score Breakdown</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="text-xl font-bold text-gray-900 w-8">#1</div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Student A (Anonymous)</div>
                    <div className="text-sm text-gray-500">Tier-2 College</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Total: 92/100</div>
                <div className="text-xs text-gray-500">Consistency: 40 | Proj Depth: 35 | Defense: 17</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Fully Verified
                </span>
                <div className="text-xs text-gray-500 mt-1">Audit: Passed</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 font-semibold">View Profile Summary</button>
              </td>
            </tr>
            {/* Empty state or additional rows */}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-500">
        Companies pay for a trustworthy rank. You are currently on the Pilot (Success-Fee) plan.
      </div>
    </div>
  );
}
