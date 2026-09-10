'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export async function submitProject(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  const repoUrl = formData.get('repoUrl') as string;
  const domain = formData.get('domain') as string;
  const description = formData.get('description') as string;

  if (!repoUrl || !domain) {
    throw new Error('Repository URL and Domain are required');
  }

  // 1. Create project submission row
  const { data: submission, error: submitError } = await supabase
    .from('project_submissions')
    .insert({
      student_id: user.id,
      repo_url: repoUrl,
      domain: domain,
      description: description,
      status: 'submitted',
    })
    .select()
    .single();

  if (submitError) {
    console.error('Error submitting project:', submitError);
    throw new Error('Failed to submit project');
  }

  // 2. Trigger authenticity check (fire and forget for now, or we can await it if it's fast)
  // We'll await it for the stub so it finishes before redirect, 
  // but Dhyanesh might want to make it a background job later.
  
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  try {
    fetch(`${baseUrl}/api/submissions/authenticity-check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submissionId: submission.id,
        repoUrl: submission.repo_url,
      }),
    });
  } catch (err) {
    console.error('Failed to trigger authenticity check:', err);
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}
