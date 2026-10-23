/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
]

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  // The old vercel.app address served a duplicate copy of the site. Send it, and any path on it, to the real domain.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'aminganja.vercel.app' }],
        destination: 'https://www.aminganja.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
