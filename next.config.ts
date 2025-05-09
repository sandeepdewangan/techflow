import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
