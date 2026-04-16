import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Ignore typescript and eslint during production github pages build if we just want it to deploy quickly, but keeping them active is better practice. Let's stick to standard.
  images: {
    unoptimized: true, // Needed for static export when using next/image
  },
};

export default nextConfig;
