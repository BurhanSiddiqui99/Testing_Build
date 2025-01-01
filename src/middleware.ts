// this middleware is used to protect routes - modify accordingly.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

const authRoutes = ["/auth"]; // eg. /auth/login, /auth/register
const userRoutes = ["/user"]; // eg. /user/profile, /user/transactions
const adminRoutes = ["/admin"]; // e.g. /admin/user, /admin/users

// guestRoutes = everything else - no need to specify 

export default async function middleware(
    req: NextRequest
): Promise<NextResponse> {
    const isAdmin = false // for demo purposes only - add yours here
    let token: string | null = null;
    const pathname = req.nextUrl.pathname
    const myCookie = await cookies();

    if (myCookie.get("token")) {
        token = myCookie.get("token")!.value;
    }

    token = null // for testing only

    // if any of checked routes
    if ([...authRoutes, ...userRoutes, ...adminRoutes].some(path => pathname.startsWith(path))) {
        // if logged in
        // if (token) {
        //     // redirect to login
        //     if (authRoutes.some((path) => pathname.startsWith(path))) {
        //         return NextResponse.redirect(isAdmin ? "http://localhost:3000/" : "http://localhost:3000/");
        //     } else if (userRoutes.some((path) => pathname.startsWith(path))) {
        //         if (isAdmin) return NextResponse.redirect("http://localhost:3000/admin")
        //     } else if (adminRoutes.some((path) => pathname.startsWith(path))) {
        //         if (!isAdmin) return NextResponse.redirect("http://localhost:3000/user")
        //     }

        //     // if not logged in
        // } else {
        //     if ([...userRoutes, ...adminRoutes].some((path) => pathname.startsWith(path))) {
        //         return NextResponse.redirect("http://localhost:3000/auth/login");
        //     }
        // }
    }

    // after all checks are done and not redirected
    return NextResponse.next();
}