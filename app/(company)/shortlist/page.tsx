import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function CompanyShortlist() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  // Ensure user is a company
  const { data: companyProfile } = await supabase
    .from('companies')
    .select('*')
    .eq('id', session.user.id)
    .single();

  if (!companyProfile) {
    // If not a company, redirect to student dashboard or login
    redirect('/login?error=Not a company account');
  }

  // Fetch ranked shortlist for the domains the company is hiring for
  // Supabase RLS on verified_ranks ensures they only see domains in companies.domains_hiring
  const { data: ranks, error } = await supabase
    .from('verified_ranks')
    .select(`
      id,
      domain,
      consistency_score,
      project_depth_score,
      defense_performance_score,
      audit_adjustment,
      total_trust_score,
      snapshot_timestamp,
      students (
        full_name,
        college
      )
    `)
    .order('total_trust_score', { ascending: false });

  if (error) {
    console.error('Error fetching shortlist:', error);
  }

  type RankWithStudent = {
    id: string;
    domain: string;
    consistency_score: number;
    project_depth_score: number;
    defense_performance_score: number;
    audit_adjustment: number | null;
    total_trust_score: number | null;
    snapshot_timestamp: string | null;
    students: { full_name?: string | null, college?: string | null } | { full_name?: string | null, college?: string | null }[] | null;
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Verified Talent Shortlist</h1>
          <p className="text-sm text-gray-500 mt-1">Company: {companyProfile.name} • Phase: {companyProfile.billing_phase}</p>
        </div>
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
            {ranks && ranks.length > 0 ? (
              ranks.map((rankData, index: number) => {
                const rank = rankData as unknown as RankWithStudent;
                const studentData = rank.students;
                const student = Array.isArray(studentData) ? studentData[0] : studentData;
                return (
                  <tr key={rank.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-xl font-bold text-gray-900 w-12">#{index + 1}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {student?.full_name || 'Anonymous Student'}
                          </div>
                          <div className="text-sm text-gray-500">{student?.college || 'Unknown College'}</div>
                          <div className="text-xs text-gray-400 mt-1">Domain: {rank.domain}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-gray-900 mb-1">Total: {rank.total_trust_score}/100</div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Consistency Streak: {rank.consistency_score}</div>
                        <div>Project Depth: {rank.project_depth_score}</div>
                        <div>Defense Performance: {rank.defense_performance_score}</div>
                        {rank.audit_adjustment !== 0 && (
                          <div className={rank.audit_adjustment > 0 ? 'text-green-600' : 'text-red-600'}>
                            Audit Adj: {rank.audit_adjustment > 0 ? '+' : ''}{rank.audit_adjustment}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Verified
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        {rank.audit_adjustment !== null && rank.audit_adjustment !== 0 ? 'Audit: Complete' : 'Audit: Pending'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <form action={async () => {
                        'use server';
                        // Just a stub action for the demo
                        console.log('Shortlisted candidate rank id:', rank.id);
                      }}>
                        <button type="submit" className="text-blue-600 hover:text-blue-900 font-semibold border border-blue-600 rounded px-3 py-1 hover:bg-blue-50 transition">
                          Shortlist Candidate
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  No verified candidates found for your domains yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-500">
        Companies pay for a trustworthy rank. You are currently on the Pilot (Success-Fee) plan.
      </div>
    </div>
  );
}
