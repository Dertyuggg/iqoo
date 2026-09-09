import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        Verified Talent & Hiring Bridge
      </h1>
      <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
        A platform where Tier-2/Tier-3 college students build a verified skill profile, and companies access a ranked, pre-qualified shortlist.
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/dashboard"
          className="px-8 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 shadow-sm"
        >
          I am a Student
        </Link>
        <Link 
          href="/shortlist"
          className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-md font-semibold hover:bg-gray-50 shadow-sm"
        >
          I am Hiring
        </Link>
      </div>

      <div className="mt-16 max-w-3xl text-left bg-blue-50 border border-blue-100 p-6 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Core Verification Pipeline</h3>
        <ul className="list-disc pl-5 text-blue-800 space-y-2">
          <li>Streak tracking (sustained consistency)</li>
          <li>Project submission with commit authenticity check</li>
          <li>AI project analysis (first pass)</li>
          <li><strong>Defend your project</strong> (Synchronous timed round)</li>
          <li>Verified Profile + Rank</li>
        </ul>
      </div>
    </div>
  );
}
