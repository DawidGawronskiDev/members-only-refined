"use server";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decodeJwt } from "jose";

export const middleware = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("firebaseAuthToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const decodedToken = decodeJwt(token);

  console.log(token, decodedToken);

  if (
    !decodedToken.member &&
    request.nextUrl.pathname.startsWith("/messages")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export const config = {
  matcher: ["/messages/:path*"],
};
