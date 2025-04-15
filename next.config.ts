/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Advertencia: solo deshabilita durante desarrollo
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig;
