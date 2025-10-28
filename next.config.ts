import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Advertencia: solo deshabilita durante desarrollo
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
