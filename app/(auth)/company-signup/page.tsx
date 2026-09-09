'use client';

import { useState } from 'react';
import { signUpCompanyAction } from '@/app/actions/company';
import { Shield } from 'lucide-react';

export default function CompanySignup() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.currentTarget);
    try {
      await signUpCompanyAction(formData);
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
      <div className="text-center mb-8">
        <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Company Partner Signup</h1>
        <p className="text-gray-600 mt-2">Access the verified talent pool.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input name="name" type="text" required className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" placeholder="e.g. Acme Corp" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input name="email" type="email" required className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input name="password" type="password" required className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Primary Domain Hiring For</label>
          <select name="domain" className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500">
            <option value="Web Development">Web Development</option>
            <option value="Backend">Backend / DSA</option>
            <option value="Data Science">Data Science</option>
          </select>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button type="submit" disabled={loading} className="w-full bg-black text-white p-3 rounded font-medium hover:bg-gray-800 transition disabled:opacity-50">
          {loading ? 'Creating account...' : 'Create Company Account'}
        </button>
      </form>
    </div>
  );
}
