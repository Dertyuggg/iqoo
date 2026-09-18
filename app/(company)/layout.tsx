import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function CompanyLayout({ children }: { children: React.ReactNode }) {
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

  if (!company) {
    // If they are not a company, redirect to student dashboard
    redirect('/dashboard');
  }

  return <>{children}</>;
}
