'use server';

import { createClient, createAdminClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function signUpCompanyAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  const domain = formData.get('domain') as string;

  if (!email || !password || !name || !domain) {
    throw new Error('All fields are required');
  }

  const supabase = await createClient();
  const supabaseAdmin = await createAdminClient();

  // 1. Sign up the user via Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError || !authData.user) {
    console.error('Auth error:', authError);
    throw new Error('Failed to create company account.');
  }

  // 2. Insert into the companies table using Admin client
  // since the user might not be fully signed in context yet depending on email confirmation settings
  // or because they need to populate their profile. Wait, RLS allows insert if auth.uid() = id?
  // Actually, companies table RLS:
  // CREATE POLICY "Companies can view own profile" ON companies FOR SELECT USING (auth.uid() = id);
  // CREATE POLICY "Companies can update own profile" ON companies FOR UPDATE USING (auth.uid() = id);
  // Wait, there is no INSERT policy for companies in the initial schema!
  
  const { error: insertError } = await supabaseAdmin.from('companies').insert({
    id: authData.user.id,
    name,
    domains_hiring: [domain],
    billing_phase: 'success_fee' // Phase 1 default
  });

  if (insertError) {
    console.error('Insert error:', insertError);
    throw new Error('Failed to create company profile.');
  }

  redirect('/shortlist'); // Redirect to company dashboard (built in Step D5)
}
