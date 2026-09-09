import { NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error && session) {
      // Check if this is a GitHub login and extract token/username
      if (session.provider_token && session.user.app_metadata.provider === 'github') {
        const githubToken = session.provider_token;
        const githubUsername = session.user.user_metadata.preferred_username;
        const userId = session.user.id;

        // Upsert the GitHub connection securely via admin client (service role)
        const adminSupabase = await createAdminClient();
        
        // Ensure student record exists
        await adminSupabase.from('students').upsert({
          id: userId,
          github_connected: true,
          full_name: session.user.user_metadata.full_name || session.user.user_metadata.name || ''
        }, { onConflict: 'id' }).select();
        
        // Store the secret
        await adminSupabase.from('student_secrets').upsert({
          student_id: userId,
          github_token: githubToken,
          github_username: githubUsername,
          updated_at: new Date().toISOString()
        }, { onConflict: 'student_id' });
      }

      // Check if profile is complete (e.g. has college and domain_interests)
      const { data: student } = await supabase
        .from('students')
        .select('college, domain_interests')
        .eq('id', session.user.id)
        .single();
        
      if (!student || !student.college || !student.domain_interests || student.domain_interests.length === 0) {
        return NextResponse.redirect(`${origin}/profile/setup`)
      }

      const forwardedHost = request.headers.get('x-forwarded-host')
      const isLocalEnv = process.env.NODE_ENV === 'development'
      
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`)
}
