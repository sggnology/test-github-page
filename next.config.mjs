/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Temporarily disable basePath for testing
//   basePath: process.env.NODE_ENV === 'production' ? '/test-github-page' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/test-github-page' : '',
  basePath: '/test-github-page',
  assetPrefix: '/test-github-page',
};

export default nextConfig;
