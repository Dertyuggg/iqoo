import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function testCompanyRLS() {
  if (supabaseUrl.includes('dummy') || !supabaseServiceRoleKey) {
    console.warn("⚠️ Dummy Supabase credentials detected in .env.local.");
    console.warn("Please provide a real NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY to run the RLS test.");
    return;
  }

  const supabaseStudent = createClient(supabaseUrl, supabaseAnonKey);
  const supabaseCompany = createClient(supabaseUrl, supabaseAnonKey);

  console.log("Testing Company RLS Policies...");

  // 1. Sign up a student
  const studentEmail = `student_${Date.now()}@example.com`;
  const { data: studentAuth } = await supabaseStudent.auth.signUp({
    email: studentEmail,
    password: 'Password123!',
  });
  const studentId = studentAuth.user?.id;
  console.log(`Student created: ${studentId}`);

  await supabaseStudent.from('students').insert({
    id: studentId,
    college: 'Test College',
    domain_interests: ['Backend']
  });

  // Create a verified rank for the student so the company has something to query
  // Wait, verified_ranks requires service role to insert since standard users can't write to it.
  const supabaseAdmin = createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  
  await supabaseAdmin.from('verified_ranks').insert({
    student_id: studentId,
    domain: 'Backend',
    consistency_score: 90,
    project_depth_score: 85,
    defense_performance_score: 95
  });
  console.log("Inserted verified rank for student (via admin).");

  // Create a project submission for the student (should be blocked for company)
  await supabaseStudent.from('project_submissions').insert({
    student_id: studentId,
    domain: 'Backend',
    repo_url: 'https://github.com/test/test'
  });
  console.log("Inserted project submission for student.");


  // 2. Sign up a company
  const companyEmail = `company_${Date.now()}@example.com`;
  const { data: companyAuth } = await supabaseCompany.auth.signUp({
    email: companyEmail,
    password: 'Password123!',
  });
  const companyId = companyAuth.user?.id;
  console.log(`Company created: ${companyId}`);

  await supabaseCompany.from('companies').insert({
    id: companyId,
    name: 'Tech Corp',
    domains_hiring: ['Backend']
  });
  console.log("Inserted company profile.");


  // 3. Test: Company tries to read verified_ranks for 'Backend' (Should succeed)
  console.log("\n--- Testing Allowed Access ---");
  const { data: ranks, error: rankErr } = await supabaseCompany.from('verified_ranks').select('*').eq('domain', 'Backend');
  if (rankErr) {
    console.error("❌ FAILED: Company could not read verified_ranks:", rankErr);
  } else if (ranks && ranks.length > 0) {
    console.log("✅ SUCCESS: Company successfully read verified_ranks for matching domain.");
  } else {
    console.warn("⚠️ Company read verified_ranks but got no results. (Check RLS policy logic)");
  }

  // 4. Test: Company tries to read restricted tables
  console.log("\n--- Testing Denied Access (Restricted Tables) ---");
  const restrictedTables = ['project_submissions', 'ai_reviews', 'authenticity_checks', 'activity_events'];

  for (const table of restrictedTables) {
    const { data: restrictedData, error: restrictErr } = await supabaseCompany.from(table).select('*');
    if (restrictErr) {
      console.log(`✅ SUCCESS: Access to ${table} blocked (Error):`, restrictErr.message);
    } else if (restrictedData && restrictedData.length === 0) {
      console.log(`✅ SUCCESS: Access to ${table} blocked (Empty result).`);
    } else {
      console.error(`❌ FAILED: Company was able to read data from restricted table ${table}:`, restrictedData);
    }
  }

  console.log("\nRLS Test Complete.");
}

testCompanyRLS().catch(console.error);
