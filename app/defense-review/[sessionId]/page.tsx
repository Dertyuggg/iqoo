import { createAdminClient } from '@/lib/supabase/server';
import { submitDefenseReview } from '@/app/actions/defense';
import { redirect } from 'next/navigation';

export default async function DefenseReviewPage(props: { params: Promise<{ sessionId: string }> }) {
  const params = await props.params;
  const supabaseAdmin = await createAdminClient();
  const { sessionId } = params;

  const { data: session } = await supabaseAdmin
    .from('defense_sessions')
    .select(`
      *,
      project_submissions (
        id,
        domain,
        repo_url,
        students (
          college,
          id
        )
      )
    `)
    .eq('id', sessionId)
    .single();

  if (!session) {
    return <div className="p-8 text-red-600">Defense session not found.</div>;
  }

  const submission = session.project_submissions;

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6">
      <div className="mb-8 border-b pb-6">
        <h1 className="text-2xl font-bold mb-2">Defense Review Form</h1>
        <p className="text-gray-600">
          <strong>Note:</strong> In a real deployment, this would be restricted to a defined evaluator pool (human reviewers or AI). For the hackathon demo, this form allows judges to manually mark the outcome.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">Session Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <span className="text-gray-500 block">Domain</span>
            <span className="font-medium">{submission.domain}</span>
          </div>
          <div>
            <span className="text-gray-500 block">Repository</span>
            <a href={submission.repo_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              {submission.repo_url}
            </a>
          </div>
          <div>
            <span className="text-gray-500 block">Scheduled Time</span>
            <span>{new Date(session.scheduled_time).toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-500 block">Current Status</span>
            <span className="capitalize">{session.outcome || 'Pending'}</span>
          </div>
        </div>
      </div>

      {!session.outcome && (
        <form action={async (formData: FormData) => {
          'use server';
          const outcome = formData.get('outcome') as 'pass' | 'fail';
          const notes = formData.get('notes') as string;
          
          await submitDefenseReview(sessionId, submission.id, outcome, notes);
          redirect(`/defense-review/${sessionId}`);
        }} className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
          
          <div>
            <label className="block font-medium mb-2 text-gray-900">Reviewer Notes</label>
            <textarea
              name="notes"
              required
              placeholder="e.g. Student answered questions clearly and demonstrated deep understanding of the repo structure."
              className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2 text-gray-900">Outcome</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer bg-white p-3 rounded-lg border flex-1 hover:bg-gray-50">
                <input type="radio" name="outcome" value="pass" required className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-700">Pass (Grants Verified Status)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer bg-white p-3 rounded-lg border flex-1 hover:bg-gray-50">
                <input type="radio" name="outcome" value="fail" required className="w-4 h-4 text-red-600" />
                <span className="font-medium text-red-700">Fail</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            Submit Final Decision
          </button>
        </form>
      )}

      {session.outcome && (
        <div className={`p-6 rounded-lg border ${session.outcome === 'pass' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <h2 className={`text-lg font-bold mb-2 ${session.outcome === 'pass' ? 'text-green-900' : 'text-red-900'}`}>
            Review Completed: {session.outcome.toUpperCase()}
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap">{session.reviewer_notes}</p>
        </div>
      )}
    </div>
  );
}
