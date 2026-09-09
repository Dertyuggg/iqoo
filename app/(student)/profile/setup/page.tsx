'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function ProfileSetupPage() {
  const [fullName, setFullName] = useState('');
  const [college, setCollege] = useState('');
  const [domain, setDomain] = useState('Frontend Development');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Pre-fill name from auth metadata if available
        setFullName(user.user_metadata.full_name || user.user_metadata.name || '');
        
        // Check if already setup
        const { data: student } = await supabase
          .from('students')
          .select('full_name, college, domain_interests')
          .eq('id', user.id)
          .single();
          
        if (student && student.college) {
          setCollege(student.college);
        }
        if (student && student.full_name) {
          setFullName(student.full_name);
        }
        if (student && student.domain_interests && student.domain_interests.length > 0) {
          setDomain(student.domain_interests[0]);
        }
      }
    };
    fetchProfile();
  }, [supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      setError('Not authenticated');
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase
      .from('students')
      .upsert({
        id: user.id,
        full_name: fullName,
        college,
        domain_interests: [domain], // Single domain for MVP
      }, { onConflict: 'id' });

    if (updateError) {
      setError(updateError.message);
    } else {
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h1>
        <p className="text-gray-600 mb-8">
          Tell us about yourself to get started on your verification journey.
        </p>

        {error && (
          <div className="mb-4 bg-red-50 text-red-700 p-3 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
            />
          </div>

          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
              College / University
            </label>
            <input
              type="text"
              id="college"
              required
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
              placeholder="e.g. Government Engineering College"
            />
          </div>

          <div>
            <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
              Primary Domain of Interest
            </label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
            >
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Fullstack Development">Fullstack Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option>
            </select>
            <p className="mt-2 text-xs text-gray-500">
              For this phase, please select one primary domain to get verified in.
            </p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save and Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
