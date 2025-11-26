import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/<your-repo-name>" : "",
  assetPrefix: isProd ? "/<your-repo-name>/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

