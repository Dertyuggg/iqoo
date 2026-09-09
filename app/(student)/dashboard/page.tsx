import { createClient } from '@/lib/supabase/server';
import { scheduleDefenseSession } from '@/app/actions/defense';
import Link from 'next/link';

export default async function StudentDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  // Fetch student's project submission
  const { data: submissions } = await supabase
    .from('project_submissions')
    .select('*')
    .eq('student_id', user.id)
    .order('created_at', { ascending: false });

  const submission = submissions?.[0]; // Assume one active domain/submission for demo

  // If pending_defense, fetch the session details
  let defenseSession = null;
  if (submission && ['pending_defense', 'defended', 'verified', 'rejected'].includes(submission.status)) {
    const { data: session } = await supabase
      .from('defense_sessions')
      .select('*')
      .eq('submission_id', submission.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    defenseSession = session;
  }

  const isAiReviewed = submission?.status === 'ai_reviewed';
  const isPendingDefense = submission?.status === 'pending_defense';
  const isVerified = submission?.status === 'verified';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <span className={`px-3 py-1 rounded text-sm font-medium border ${isVerified ? 'bg-green-100 text-green-800 border-green-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}>
          Status: {isVerified ? 'Verified' : (submission?.status || 'Unverified').replace('_', ' ')}
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
              
              <div className={`flex items-center justify-between p-3 rounded border ${submission ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-xs ${submission ? 'bg-green-500' : 'bg-blue-500'}`}>
                    {submission ? '✓' : '2'}
                  </div>
                  <span className={`font-medium ${submission ? 'text-green-900' : 'text-blue-900'}`}>Project Submission</span>
                </div>
                {!submission ? (
                  <Link href="/projects/submit" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Submit Project
                  </Link>
                ) : (
                  <span className="text-sm text-green-700">{submission.domain} ({submission.status.replace('_', ' ')})</span>
                )}
              </div>

              <div className={`flex flex-col p-3 rounded border ${
                isAiReviewed || isPendingDefense || isVerified 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'bg-gray-50 border-gray-200 opacity-75'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      isVerified ? 'bg-green-500 text-white' : 
                      (isAiReviewed || isPendingDefense) ? 'bg-blue-500 text-white' : 
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {isVerified ? '✓' : '3'}
                    </div>
                    <span className={`font-medium ${
                      isVerified ? 'text-green-900' : 
                      (isAiReviewed || isPendingDefense) ? 'text-blue-900' : 
                      'text-gray-700'
                    }`}>Defend Your Project</span>
                  </div>
                  
                  {isAiReviewed && (
                    <form action={async () => {
                      'use server';
                      await scheduleDefenseSession(submission.id);
                    }}>
                      <button type="submit" className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 font-medium">
                        Schedule Defense
                      </button>
                    </form>
                  )}
                  {isPendingDefense && (
                    <span className="text-sm font-medium text-blue-700 animate-pulse">Session Scheduled</span>
                  )}
                  {(!isAiReviewed && !isPendingDefense && !isVerified) && (
                    <span className="text-sm text-gray-500">Locked</span>
                  )}
                </div>
                
                {isPendingDefense && defenseSession && (
                  <div className="mt-4 pt-4 border-t border-blue-100 pl-9">
                    <p className="text-sm text-blue-800 mb-2">
                      Your synchronous defense session is ready. A live reviewer will ask you questions about your code to verify your understanding.
                    </p>
                    <div className="bg-white p-3 rounded border border-blue-100 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-gray-600">{defenseSession.session_notes}</span>
                        <a 
                          href={defenseSession.session_notes.split(': ')[1]} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                        >
                          Join Call
                        </a>
                      </div>
                      <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded">Hackathon Demo Action</span>
                        <Link 
                          href={`/defense-review/${defenseSession.id}`}
                          className="text-sm text-orange-600 hover:text-orange-800 hover:underline font-medium"
                        >
                          → Open Reviewer Form
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
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
