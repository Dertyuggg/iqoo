import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MDAwMDAwMDAsImV4cCI6MjAwMDAwMDAwMH0.placeholder'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
            cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    const {
      data: { user },
    } = await supabase.auth.getUser()

    const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/student-login') || request.nextUrl.pathname.startsWith('/student-signup') || request.nextUrl.pathname.startsWith('/company-login') || request.nextUrl.pathname.startsWith('/company-signup')
    const isLandingPage = request.nextUrl.pathname === '/'

    // List of paths that require authentication.
    // We'll protect everything inside /(student) such as /dashboard, /projects, /assessment, /profile
    const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard') || 
                             request.nextUrl.pathname.startsWith('/projects') || 
                             request.nextUrl.pathname.startsWith('/assessment') ||
                             request.nextUrl.pathname.startsWith('/profile') ||
                             request.nextUrl.pathname.startsWith('/shortlist') ||
                             request.nextUrl.pathname.startsWith('/candidate')

    if (!user && isProtectedRoute) {
      // no user, potentially respond by redirecting the user to the landing page
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }

    if (user && (isAuthPage || isLandingPage)) {
      // user is already logged in, redirect to dashboard
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard'
      return NextResponse.redirect(url)
    }
  } catch (err) {
    // Graceful fallback if Supabase is unavailable locally
  }

  return supabaseResponse
}
