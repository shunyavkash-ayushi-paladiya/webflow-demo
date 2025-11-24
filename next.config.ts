import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/test',
};

export default nextConfig;

// Cloudflare dev setup
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
