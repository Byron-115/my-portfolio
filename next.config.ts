import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === "development" || !process.env.VERCEL,
  }
};

export default nextConfig;
