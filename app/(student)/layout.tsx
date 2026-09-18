import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: company } = await supabase
    .from('companies')
    .select('id')
    .eq('id', user.id)
    .single();

  if (company) {
    // If they are a company, redirect to company shortlist
    redirect('/shortlist');
  }

  return <>{children}</>;
}
