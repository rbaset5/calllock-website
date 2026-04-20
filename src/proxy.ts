import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

// Route branching for the marketing homepage.
// Mobile UAs fall through to src/app/page.tsx (responsive port).
// Everything else (desktop, tablets, bots) rewrites to the static HTML artifact.
// Runs exclusively on the Node.js runtime per Next.js 16.
export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname !== "/") return NextResponse.next();

  const { device } = userAgent(req);
  if (device.type === "mobile") {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL("/marketing.html", req.url));
}

export const config = {
  matcher: "/",
};
