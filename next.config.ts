// next.config.ts or next.config.mjs/next.config.js
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? "/sindia-site" : "",
  assetPrefix: isProd ? "/sindia-site/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;