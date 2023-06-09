import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import ProcessENV from '@/lib/process';


// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {


    const response = NextResponse.next();
    const cookies = response.cookies;
    // cookies.set('x-url', req.url);

    // const sectionSession = !!(req.nextUrl.pathname.startsWith('/session'));
    // if (sectionSession) {
    //     // si es la seccion de session, deja pasar sin el control de login.
    //     return response;
    // }

    const session = await getToken({ req, secret: ProcessENV('NEXTAUTH_SECRET') });
    if (!session) return NextResponse.redirect(new URL('/session', req.url));
    cookies.set('userSession', JSON.stringify(session));
    return response;

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/home', '/profile']
};