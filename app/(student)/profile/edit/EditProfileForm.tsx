'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateProfile } from './actions';

interface ProfileData {
  full_name: string;
  college: string;
  domain_interests: string[];
}

export default function EditProfileForm({ initialData }: { initialData: ProfileData }) {
  const router = useRouter();
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await updateProfile(formData);
      if (result.success) {
        router.push('/profile/setup');
        router.refresh();
      } else {
        setError(result.error || 'Failed to update profile');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const domains = value.split(',').map(d => d.trim()).filter(Boolean);
    setFormData({ ...formData, domain_interests: domains });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-space-md">
      {error && (
        <div className="p-space-sm bg-error/10 text-error rounded-xl font-body-sm">
          {error}
        </div>
      )}
      
      <div className="flex flex-col gap-space-2xs">
        <label htmlFor="full_name" className="font-label-md text-on-surface font-bold">
          Full Name
        </label>
        <input
          type="text"
          id="full_name"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          className="px-space-md py-space-sm rounded-xl bg-surface-container border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface"
          required
        />
      </div>

      <div className="flex flex-col gap-space-2xs">
        <label htmlFor="college" className="font-label-md text-on-surface font-bold">
          College
        </label>
        <input
          type="text"
          id="college"
          value={formData.college}
          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
          className="px-space-md py-space-sm rounded-xl bg-surface-container border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface"
          placeholder="e.g. Government Engineering College"
        />
      </div>

      <div className="flex flex-col gap-space-2xs">
        <label htmlFor="domain_interests" className="font-label-md text-on-surface font-bold">
          Domain Interests (comma separated)
        </label>
        <input
          type="text"
          id="domain_interests"
          value={formData.domain_interests.join(', ')}
          onChange={handleDomainChange}
          className="px-space-md py-space-sm rounded-xl bg-surface-container border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary/50 text-on-surface"
          placeholder="e.g. Frontend, Backend, AI"
        />
      </div>

      <div className="pt-space-sm flex justify-end gap-space-sm">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-space-lg py-space-sm rounded-xl font-label-lg font-semibold text-on-surface-variant hover:bg-surface-container transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-space-lg py-space-sm rounded-xl bg-primary text-on-primary font-label-lg font-semibold shadow-sm hover:bg-primary-container hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : 'Save Profile'}
        </button>
      </div>
    </form>
  );
}
