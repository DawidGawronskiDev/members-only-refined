import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

export const middleware = async (request: NextRequest) => {
  // Retrieve the Firebase authentication token from cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  // If there is no authentication token, redirect the user to the home page
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Decode the JWT token to extract user claims
  const decodedToken = decodeJwt(token);

  /**
   * Role-Based Access Control (RBAC):
   * - If the user is NOT an admin and attempts to access `/admin-dashboard`,
   *   they are redirected to the home page.
   */
  if (
    !decodedToken.admin &&
    request.nextUrl.pathname.startsWith("/admin-dashboard")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  /**
   * Role-Based Access Control (RBAC):
   * - If the user is NOT a member and NOT a admin and attempts to access `/messages`,
   *   they are redirected to the home page.
   */
  if (
    !decodedToken.member &&
    !decodedToken.admin &&
    request.nextUrl.pathname.startsWith("/messages")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

/*
  This will run middlware on specified routes
*/
export const config = {
  matcher: ["/admin-dashboard/:path*", "/messages"],
};
