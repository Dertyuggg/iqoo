import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function run() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  console.log('1. Setting up test student...');
  const studentId = '00000000-0000-0000-0000-000000000001'; 
  
  await supabase.from('students').delete().eq('id', studentId);
  
  await supabase.auth.admin.createUser({
    id: studentId,
    email: 'test_integration@example.com',
    password: 'password123',
    email_confirm: true
  }).catch(() => {});

  await supabase.from('students').upsert({
    id: studentId,
    full_name: 'Integration Test Student',
    college: 'Test College',
    domain_interests: ['Web Development']
  });

  console.log('2. Creating project submission...');
  const { data: submission } = await supabase
    .from('project_submissions')
    .insert({
      student_id: studentId,
      domain: 'Web Development',
      repo_url: 'https://github.com/dhyanesh-test/mock-repo', // mock
      description: 'A test project',
      status: 'submitted'
    })
    .select()
    .single();

  console.log('Submission ID:', submission.id);

  console.log('3. Triggering authenticity check via HTTP...');
  const baseUrl = 'http://localhost:3000';
  
  const authCheckRes = await fetch(`${baseUrl}/api/submissions/authenticity-check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      submissionId: submission.id,
      repoUrl: submission.repo_url,
    })
  });
  
  const authCheckData = await authCheckRes.json();
  console.log('Authenticity Check response:', authCheckData);
  
  // Wait a bit for AI review to run in background
  console.log('Waiting for AI review to finish (background task)...');
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  const { data: subAfterAI } = await supabase
    .from('project_submissions')
    .select('status')
    .eq('id', submission.id)
    .single();
    
  console.log('Status after AI review trigger:', subAfterAI?.status);

  // Stop here for now to check output
}
run();
