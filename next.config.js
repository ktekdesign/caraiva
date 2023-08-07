/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: '**.gravatar.com',
          },
        ],
        formats: ['image/avif', 'image/webp'],
      },
}

module.exports = nextConfig
