/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
    
        return config;
      },
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
