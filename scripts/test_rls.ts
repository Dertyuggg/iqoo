import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function testRLS() {
  const supabase1 = createClient(supabaseUrl, supabaseAnonKey);
  const supabase2 = createClient(supabaseUrl, supabaseAnonKey);

  console.log("Testing RLS on students table...");

  // 1. Sign up user 1
  const email1 = `test1_${Date.now()}@example.com`;
  const { data: authData1, error: authErr1 } = await supabase1.auth.signUp({
    email: email1,
    password: 'Password123!',
  });
  if (authErr1) throw authErr1;
  console.log(`User 1 signed up: ${authData1.user?.id}`);

  // 2. Sign up user 2
  const email2 = `test2_${Date.now()}@example.com`;
  const { data: authData2, error: authErr2 } = await supabase2.auth.signUp({
    email: email2,
    password: 'Password123!',
  });
  if (authErr2) throw authErr2;
  console.log(`User 2 signed up: ${authData2.user?.id}`);

  // 3. User 1 creates profile
  const { error: insertErr1 } = await supabase1.from('students').insert({
    id: authData1.user?.id,
    college: 'College 1',
    domain_interests: ['Backend']
  });
  if (insertErr1) throw insertErr1;
  console.log(`User 1 inserted profile successfully`);

  // 4. User 2 creates profile
  const { error: insertErr2 } = await supabase2.from('students').insert({
    id: authData2.user?.id,
    college: 'College 2',
    domain_interests: ['Frontend']
  });
  if (insertErr2) throw insertErr2;
  console.log(`User 2 inserted profile successfully`);

  // 5. User 1 tries to read User 2's profile
  const { data: readData1, error: readErr1 } = await supabase1
    .from('students')
    .select('*')
    .eq('id', authData2.user?.id);
  
  if (readErr1) throw readErr1;
  
  if (readData1 && readData1.length > 0) {
    console.error("❌ RLS FAILED: User 1 could read User 2's profile:", readData1);
  } else {
    console.log("✅ RLS SUCCESS: User 1 could NOT read User 2's profile (empty result).");
  }

  // 6. User 1 tries to update User 2's profile
  const { data: updateData1, error: updateErr1 } = await supabase1
    .from('students')
    .update({ college: 'Hacked College' })
    .eq('id', authData2.user?.id)
    .select();
    
  if (updateErr1) {
    console.log("✅ RLS SUCCESS on Update (Error thrown or ignored):", updateErr1.message);
  } else if (updateData1 && updateData1.length > 0) {
    console.error("❌ RLS FAILED: User 1 updated User 2's profile:", updateData1);
  } else {
    console.log("✅ RLS SUCCESS: User 1 could NOT update User 2's profile (no rows affected).");
  }

  console.log("RLS Test Complete.");
}

testRLS().catch(console.error);
