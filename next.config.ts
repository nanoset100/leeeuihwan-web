import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['contentful', 'axios', 'form-data', 'combined-stream'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
