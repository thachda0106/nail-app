/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [480, 768, 1024, 1280, 1440],
  },
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export default nextConfig;
