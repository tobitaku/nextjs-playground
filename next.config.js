/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
            default-src 'self';
            object-src 'self';
            script-src 'self' 'unsafe-eval' https://netlify-cdp-loader.netlify.app/;
            frame-src https://app.netlify.com/;
            style-src 'self' 'unsafe-inline';
            font-src 'self';
            base-uri 'none';
          `
              .replace(/\s{2,}/g, ' ')
              .trim(),
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
