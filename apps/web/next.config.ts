import type { NextConfig } from "next";

// Determine if we are running in GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = "";

if (isGithubActions) {
  // Extract repository name (e.g., 'soumay-shopify' from 'SoumaySoni/soumay-shopify')
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, "") || "soumay-shopify";
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  basePath: basePath,
  output: "export",
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
