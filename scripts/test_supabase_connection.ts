import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Read .env.local manually
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

let url = '';
let key = '';

envContent.split('\n').forEach(line => {
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) url = line.split('=')[1].trim();
  if (line.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) key = line.split('=')[1].trim();
});

async function main() {
  if (!url || !key || url.includes('dummy')) {
    console.log("❌ Supabase URL or Anon Key are missing or set to dummy values in .env.local");
    return;
  }

  console.log(`Testing connection to: ${url}`);
  const supabase = createClient(url, key);

  try {
    const { data, error } = await supabase.from('students').select('id').limit(1);
    
    if (error) {
      console.log("❌ Connection failed or error querying the database:", error.message);
    } else {
      console.log("✅ Successfully connected to Supabase!");
    }
  } catch (err: any) {
    console.log("❌ Exception during connection test:", err.message);
  }
}

main();
