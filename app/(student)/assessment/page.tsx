'use client';

import { useState, useEffect, useCallback, ClipboardEvent } from 'react';
import { submitAssessmentAction } from '@/app/actions/assessment';
import { useRouter } from 'next/navigation';
import { Shield, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function AssessmentPage() {
  const router = useRouter();
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [pasteAttempts, setPasteAttempts] = useState(0);
  const [showPasteWarning, setShowPasteWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Demo domain hardcoded per MVP constraints
  const demoDomain = 'Web Development';
  const question = `Explain the difference between client-side rendering (CSR) and server-side rendering (SSR) in Next.js. What are the performance and SEO implications of each? (Please write your answer manually)`;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePaste = useCallback((e: ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setPasteAttempts((prev) => prev + 1);
    setShowPasteWarning(true);
    setTimeout(() => setShowPasteWarning(false), 3000);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;

    setIsSubmitting(true);
    try {
      await submitAssessmentAction({
        domain: demoDomain,
        answer,
        pasteAttempts,
        timeSpentSeconds: timeSpent,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit assessment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto mt-12 p-8 bg-white border rounded-xl shadow-sm text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Assessment Completed</h2>
        <p className="text-gray-600 mb-6">
          Your response has been recorded. This activity will contribute to your verification streak.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6">
      <div className="mb-6 border-b pb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Domain Assessment: {demoDomain}</h1>
          <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-mono text-sm">
            <Clock className="w-4 h-4 mr-2" />
            {formatTime(timeSpent)}
          </div>
        </div>
        
        <div className="flex items-start bg-blue-50 text-blue-800 p-4 rounded-lg text-sm">
          <Shield className="w-5 h-5 mr-3 mt-0.5 shrink-0 text-blue-600" />
          <div>
            <p className="font-semibold mb-1">Protected Assessment Environment</p>
            <p className="text-blue-700/80">
              This is a timed assessment. Clipboard pasting is disabled to encourage original answers. 
              Attempts to paste from external sources are logged.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block font-medium text-gray-900">
            {question}
          </label>
          <div className="relative">
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onPaste={handlePaste}
              className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              placeholder="Type your answer here..."
              disabled={isSubmitting}
            />
            {showPasteWarning && (
              <div className="absolute top-4 right-4 bg-red-100 text-red-700 px-3 py-1.5 rounded text-sm flex items-center shadow-sm border border-red-200 animate-in fade-in slide-in-from-top-2">
                <AlertTriangle className="w-4 h-4 mr-1.5" />
                Pasting is not allowed
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Word count: {answer.trim() ? answer.trim().split(/\s+/).length : 0}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !answer.trim()}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Answer'}
          </button>
        </div>
      </form>
    </div>
  );
}
