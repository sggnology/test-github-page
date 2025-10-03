/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/test-github-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/test-github-page' : '',
};

export default nextConfig;
