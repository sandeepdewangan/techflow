import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // dont keep these external packages into main where all packages reside. Keep them separate.
  serverExternalPackages: ['pino', 'pino-pretty'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'images.ctfassets.net',
        port: '',
      },
      {
        protocol: "https",
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
      {
        protocol: "https",
        hostname: 'img.freepik.com',
        port: '',
      }
    ]
  },
};

export default nextConfig;
