import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/AlianzaDeOro',
  assetPrefix: '/AlianzaDeOro',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
