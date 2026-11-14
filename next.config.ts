import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    agentFeedback: true,
    turbopackFileSystemCacheForBuild: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
