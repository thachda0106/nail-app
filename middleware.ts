import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { device } = userAgent(request);

  device.type && url.searchParams.set("device", device.type);
  return NextResponse.rewrite(url);
}
