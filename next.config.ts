import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/test',
  // ❌ do not use assetPrefix
};

export default nextConfig;

// Cloudflare dev setup
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
