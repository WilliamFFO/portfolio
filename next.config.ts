import type { NextConfig } from 'next';

// Static export: deploys to GitHub Pages, Vercel, Netlify or any static host.
// For GitHub Pages project sites, set NEXT_PUBLIC_BASE_PATH=/repository-name at build time.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
