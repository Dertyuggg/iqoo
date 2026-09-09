'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function DefendProjectPage() {
  const params = useParams();
  const projectId = params?.id as string;

  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [started, setStarted] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  // Anti-cheat: No-paste assessment UI constraint (VERIFICATION_PIPELINE.md)
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    alert('Pasting is disabled for the project defense round.');
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto p-8 mt-12 bg-white shadow rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Defend Your Project</h1>
        <p className="text-gray-600 mb-6">
          This is a synchronous, timed Q&A round on your submitted project. 
          This is required to achieve <strong>Verified</strong> status.
          You will have 15 minutes to explain architectural decisions and code structure.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
          <p className="text-sm text-yellow-800 font-semibold">
            Note: Pasting is disabled during this session. This raises the bar against copy-paste cheating, though we acknowledge it is not fully cheat-proof.
          </p>
        </div>
        <button 
          onClick={() => setStarted(true)}
          className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition"
        >
          Start Defense Session
        </button>
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-3xl mx-auto p-8 mt-12 bg-white shadow rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Live Defense Session</h1>
        <div className={`text-xl font-mono font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-800'}`}>
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h2 className="font-semibold mb-2">Question 1:</h2>
          <p>Explain the state management approach you used in this project and why you chose it over alternatives.</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Answer:</label>
          <textarea 
            className="w-full h-48 p-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your explanation here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onPaste={handlePaste}
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700 transition">
            Submit Defense
          </button>
        </div>
      </div>
    </div>
  );
}
