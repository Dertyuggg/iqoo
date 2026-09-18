'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

interface ProfileData {
  full_name: string;
  contact_number: string;
  linkedin_link: string;
  github_link: string;
  email_address: string;
  domain_interests: string[];
}

export async function updateProfile(data: ProfileData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: 'Not authenticated' };
  }

  // Update in users database
  const { error } = await supabase
    .from('students')
    .upsert({ 
      id: user.id,
      full_name: data.full_name,
      contact_number: data.contact_number,
      linkedin_link: data.linkedin_link,
      github_link: data.github_link,
      email_address: data.email_address,
      domain_interests: data.domain_interests,
    });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/profile/setup');
  revalidatePath('/dashboard');
  
  return { success: true };
}
