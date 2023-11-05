import { getToken } from "next-auth/jwt";
import type { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/login")) {
    // Add /profile specific logics
  }
  if (request.nextUrl.pathname.startsWith("/")) {
    // Add /dashboard specific logics
  }
}

export const config = {
  matcher: ["/login/:path*"],
};
