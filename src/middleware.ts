import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Debugging logs to verify environment variables:
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Supabase Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  // Ensure that the required environment variables are present
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Supabase environment variables are missing');
    return new NextResponse('Supabase configuration error', { status: 500 });
  }

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Redirect to login if trying to access the dashboard without a session
    if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Handle specific error from authentication flow
    const emailLinkError = 'Email link is invalid or has expired';
    if (req.nextUrl.searchParams.get('error_description') === emailLinkError && req.nextUrl.pathname !== '/signup') {
      return NextResponse.redirect(new URL(`/signup?error_description=${encodeURIComponent(req.nextUrl.searchParams.get('error_description'))}`, req.url));
    }

    // Redirect to dashboard if already logged in and trying to access login or signup pages
    if (['/login', '/signup'].includes(req.nextUrl.pathname) && session) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
  } catch (error) {
    console.error('Error handling middleware:', error);
    return res;
  }

  return res;
}
