import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/2553311' : '',
  assetPrefix: isProd ? '/2553311/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
