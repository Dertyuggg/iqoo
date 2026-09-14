'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

interface ProfileData {
  full_name: string;
  college: string;
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
      college: data.college,
      domain_interests: data.domain_interests,
    });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/profile/setup');
  revalidatePath('/dashboard');
  
  return { success: true };
}
