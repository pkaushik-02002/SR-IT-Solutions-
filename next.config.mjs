/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // ✅ Enables Standalone Mode for Netlify
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignores ESLint warnings during builds
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Allows build even with TypeScript errors
  },
  images: {
    unoptimized: true, // ✅ Ensures images load properly in Netlify
  },
  experimental: {
    workerThreads: false, // ❌ Disable conflicting Webpack settings
    cpus: 1, // ❌ Prevents excessive parallelism issues
  },
};

export default nextConfig;
