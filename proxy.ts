import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DESTINATION = "/vendor/fssai";

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL(DESTINATION, request.url));
}

export const config = {
  matcher: [
    "/((?!vendor/fssai|_next/static|_next/image|api|favicon.ico|fssai\\.svg|robots\\.txt|sitemap\\.xml).*)",
  ],
};
