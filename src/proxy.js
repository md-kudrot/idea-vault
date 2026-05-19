import { NextResponse } from 'next/server'
import { authClient } from './lib/auth-client';
import { headers } from 'next/headers';
import { auth } from './lib/auth';
// This function can be marked `async` if using `await` inside
export async function proxy(request) {

  const session = await auth.api.getSession({
    headers
  });

  if (!session) {
    console.log('hello');
    
  }

    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: '/about/:path*',
}