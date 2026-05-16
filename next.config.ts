import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/seo",
        destination: "/web-presence",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
