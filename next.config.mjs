/** @type {import('next').NextConfig} */
import nextPwa from 'next-pwa';

const cspHeader = `
  default-src 'self' https://www.google.com/;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' fonts.googleapis.com 'unsafe-inline';
  img-src 'self' blob: data:;
  connect-src 'self';
  media-src 'self';
  font-src 'self';
  object-src 'self';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
`;

const nextConfig = {
  headers() {
    return [
      { 
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  images: {
    deviceSizes: [375, 480, 768, 1024, 1280, 1440],
    minimumCacheTTL: 86400,
    formats: ["image/avif", "image/webp"],
    disableStaticImages: true,
  },
  swcMinify: true,
};

const withPWA = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default withPWA(nextConfig);
