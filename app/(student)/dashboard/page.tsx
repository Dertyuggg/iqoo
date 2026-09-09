import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function StudentDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: student } = await supabase
    .from('students')
    .select('*')
    .eq('id', user.id)
    .single();

  const { data: latestSubmission } = await supabase
    .from('project_submissions')
    .select('*')
    .eq('student_id', user.id)
    .order('submission_timestamp', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!student || !student.college) {
    redirect('/profile/setup');
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <span className={`px-3 py-1 rounded text-sm font-medium border ${
          latestSubmission?.status === 'verified' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-gray-100 text-gray-700 border-gray-200'
        }`}>
          Status: {latestSubmission?.status === 'verified' ? 'Verified' : 'Unverified'}
        </span>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
        <h2 className="text-lg font-semibold mb-4">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium text-gray-900">{student.full_name || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">College</p>
            <p className="font-medium text-gray-900">{student.college}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Domain Interest</p>
            <p className="font-medium text-gray-900">
              {student.domain_interests?.join(', ') || 'None'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">GitHub Connection</p>
            <div className="flex items-center gap-2 mt-1">
              {student.github_connected ? (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                  Connected
                </span>
              ) : (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                  Not Connected
                </span>
              )}
            </div>
          </div>
        </div>
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
                <span className="text-sm text-green-700">
                  {student.github_connected ? 'Connected (GitHub)' : 'Pending Connection'}
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">2</div>
                  <span className="font-medium text-blue-900">Project Submission</span>
                </div>
                {latestSubmission ? (
                  <span className="text-sm text-blue-700 font-medium px-3 py-1 bg-blue-100 rounded capitalize">
                    {latestSubmission.status.replace('_', ' ')}
                  </span>
                ) : (
                  <Link href="/projects/submit" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Submit Project
                  </Link>
                )}
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
