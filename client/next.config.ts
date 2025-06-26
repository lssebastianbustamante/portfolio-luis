/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Advertencia: solo deshabilita durante desarrollo
    ignoreDuringBuilds: true,
  },
  // Configuración para Docker
  output: 'standalone',
  // Configuración para imágenes
  images: {
    unoptimized: true,
  },
  // Variables de entorno públicas
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig;
