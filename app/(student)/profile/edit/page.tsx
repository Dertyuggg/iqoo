import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import EditProfileForm from './EditProfileForm';

export default async function EditProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: student } = await supabase
    .from('students')
    .select('*')
    .eq('id', user.id)
    .single();

  return (
    <>
      <main className="w-full bg-surface min-h-screen pb-24">
        <div className="max-w-2xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-space-lg">
            Edit Profile
          </h1>
          <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg border border-surface-container-low">
            <EditProfileForm 
              initialData={{
                full_name: student?.full_name || user.user_metadata?.full_name || '',
                college: student?.college || '',
                domain_interests: student?.domain_interests || [],
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
