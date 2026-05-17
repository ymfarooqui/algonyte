import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const isPreview = host.endsWith(".vercel.app");
  const res = NextResponse.next();

  if (isPreview) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  } else {
    // HSTS only on production hostnames — never on *.vercel.app, where a
    // 2-year max-age would lock all future preview-deploy visitors into
    // HTTPS for any vercel.app subdomain.
    res.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  return res;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon|.*\\..*).*)",
};
