import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/services#process", permanent: true },
      { source: "/audience", destination: "/#who-its-for", permanent: true },
    ];
  },
};

export default nextConfig;
