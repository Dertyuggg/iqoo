import { createClient } from '@/lib/supabase/server';
import { scheduleDefenseSession } from '@/app/actions/defense';
import Link from 'next/link';

export default async function StudentDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  // Fetch student profile
  const { data: profile } = await supabase
    .from('students')
    .select('*')
    .eq('id', user.id)
    .single();

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

  // Determine Next Steps for the Roadmap stub
  let nextStepTitle = "Connect GitHub";
  let nextStepDesc = "Link your account to start tracking consistency.";
  let nextStepLink = "#";
  let nextStepAction = "Connect";

  if (profile?.github_connected) {
    if (!submission) {
      nextStepTitle = "Submit your first project";
      nextStepDesc = "Prove your applied skills in your chosen domain.";
      nextStepLink = "/projects/submit";
      nextStepAction = "Submit Project";
    } else if (submission.status === 'submitted' || submission.status === 'authenticity_checked') {
      nextStepTitle = "Complete no-paste assessment";
      nextStepDesc = "Take a short quiz in a protected environment while your project is reviewed.";
      nextStepLink = "/assessment";
      nextStepAction = "Start Assessment";
    } else if (isAiReviewed) {
      nextStepTitle = "Schedule Defense Session";
      nextStepDesc = "Your code was reviewed. Defend your project with a live evaluator.";
      nextStepLink = "#pipeline";
      nextStepAction = "Schedule Now";
    } else if (isPendingDefense) {
      nextStepTitle = "Attend Defense Session";
      nextStepDesc = "Join the live call at the scheduled time.";
      nextStepLink = "#pipeline";
      nextStepAction = "View Details";
    } else if (isVerified) {
      nextStepTitle = "You are Verified!";
      nextStepDesc = "Your profile is now visible to hiring companies.";
      nextStepLink = "/profile";
      nextStepAction = "View Profile";
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Welcome, {user.email?.split('@')[0]}</h1>
          <p className="text-gray-600 text-sm">
            {profile?.college || 'No College Selected'} • {profile?.domain_interests?.join(', ') || 'Web Development'}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${isVerified ? 'bg-green-100 text-green-800 border-green-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}>
            Status: {isVerified ? 'Verified Talent' : (submission?.status || 'Unverified').replace('_', ' ').toUpperCase()}
          </span>
          <div className="text-xs text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded border">
            {profile?.github_connected ? '✓ GitHub Connected' : 'GitHub Not Connected'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          {/* Pipeline */}
          <div id="pipeline" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Verification Pipeline</h2>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              <div className="relative flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm z-10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-sm">✓</div>
                  <div>
                    <span className="block font-semibold text-green-900">Consistency Tracking</span>
                    <span className="text-xs text-green-700">GitHub identity verified</span>
                  </div>
                </div>
              </div>
              
              <div className={`relative flex items-center justify-between p-4 rounded-lg shadow-sm border z-10 ${submission ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm ${submission ? 'bg-green-500 text-white' : 'bg-blue-100 text-blue-700'}`}>
                    {submission ? '✓' : '2'}
                  </div>
                  <div>
                    <span className={`block font-semibold ${submission ? 'text-green-900' : 'text-gray-900'}`}>Project Submission</span>
                    {submission && <span className="text-xs text-green-700">{submission.domain} ({submission.status.replace('_', ' ')})</span>}
                  </div>
                </div>
                {!submission && (
                  <Link href="/projects/submit" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                    Submit Code
                  </Link>
                )}
              </div>

              <div className={`relative flex flex-col p-4 rounded-lg shadow-sm border z-10 ${
                isVerified ? 'bg-green-50 border-green-200' :
                (isAiReviewed || isPendingDefense) ? 'bg-blue-50 border-blue-300 ring-1 ring-blue-100' : 
                'bg-gray-50 border-gray-200 opacity-60'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm ${
                      isVerified ? 'bg-green-500 text-white' : 
                      (isAiReviewed || isPendingDefense) ? 'bg-blue-600 text-white' : 
                      'bg-gray-200 text-gray-500'
                    }`}>
                      {isVerified ? '✓' : '3'}
                    </div>
                    <div>
                      <span className={`block font-semibold ${
                        isVerified ? 'text-green-900' : 
                        (isAiReviewed || isPendingDefense) ? 'text-blue-900' : 
                        'text-gray-700'
                      }`}>Defend Your Project</span>
                      {isVerified && <span className="text-xs text-green-700">Passed synchronous review</span>}
                    </div>
                  </div>
                  
                  {isAiReviewed && (
                    <form action={async () => {
                      'use server';
                      await scheduleDefenseSession(submission.id);
                    }}>
                      <button type="submit" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium shadow-sm">
                        Schedule Defense
                      </button>
                    </form>
                  )}
                  {isPendingDefense && (
                    <span className="text-sm font-semibold text-blue-700 animate-pulse bg-blue-100 px-3 py-1 rounded-full">Session Scheduled</span>
                  )}
                  {(!isAiReviewed && !isPendingDefense && !isVerified) && (
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider text-xs">Locked</span>
                  )}
                </div>
                
                {isPendingDefense && defenseSession && (
                  <div className="mt-4 pt-4 border-t border-blue-200 pl-12">
                    <p className="text-sm text-blue-800 mb-3 font-medium">
                      Your synchronous defense session is ready. A live reviewer will ask you questions about your code to verify your understanding.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-gray-700 bg-gray-50 px-2 py-1 rounded border">{defenseSession.session_notes}</span>
                        <a 
                          href={defenseSession.session_notes.split(': ')[1]} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-medium shadow-sm transition-colors"
                        >
                          Join Live Call
                        </a>
                      </div>
                      <div className="mt-2 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded border border-orange-100 uppercase tracking-wide">Hackathon Demo Action</span>
                        <Link 
                          href={`/defense-review/${defenseSession.id}`}
                          className="text-sm text-orange-600 hover:text-orange-800 hover:underline font-semibold"
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
          {/* Roadmap Stub */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100 ring-1 ring-indigo-50">
            <h2 className="text-lg font-semibold mb-2 text-indigo-950">Next Steps</h2>
            {/* Note: In a real deployment (Step 5 of BUILD_ORDER), this would be a dynamic learning roadmap engine. For the hackathon, a simple static/state-based stub is sufficient. */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-900 mb-1">{nextStepTitle}</h3>
              <p className="text-sm text-indigo-800/80 mb-4">{nextStepDesc}</p>
              {nextStepLink.startsWith('#') ? (
                <a href={nextStepLink} className="inline-block text-sm bg-white text-indigo-600 border border-indigo-200 font-medium px-4 py-2 rounded shadow-sm hover:bg-indigo-50 transition-colors w-full text-center">
                  {nextStepAction}
                </a>
              ) : (
                <Link href={nextStepLink} className="inline-block text-sm bg-white text-indigo-600 border border-indigo-200 font-medium px-4 py-2 rounded shadow-sm hover:bg-indigo-50 transition-colors w-full text-center">
                  {nextStepAction}
                </Link>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">
              The verification pipeline is 100% free for students, always.
            </p>
          </div>

          {/* Activity Streak */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Activity Streak</h2>
            <div className="h-32 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-400">
              [Activity Chart Placeholder]
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              Consistency is measured over time to reduce bias toward students with more free time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
