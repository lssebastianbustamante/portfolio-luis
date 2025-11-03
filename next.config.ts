/** @type {import('next').NextConfig} */
const nextConfig = {
  // Variables de entorno públicas
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
    // Exponer solo las variables necesarias en el cliente
    NEXT_PUBLIC_LOG_LEVEL: process.env.LOG_LEVEL || 'info',
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_APP_ENV: process.env.APP_ENV || 'development',
  },
  
  // Habilitar source maps en desarrollo
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  
  // Configuración de logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    // Evita que ESLint bloquee el build en producción (los errores seguirán en dev)
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    const expressUrl = process.env.NEXT_PUBLIC_API_EXPRESS_URL || "";
    const nestUrl = process.env.NEXT_PUBLIC_API_NEST_URL || "";
    const gatewayUrl = process.env.NEXT_PUBLIC_GATEWAY_URL || "";

    const rules = [] as { source: string; destination: string }[];
    if (expressUrl) rules.push({ source: "/api/express/:path*", destination: `${expressUrl}/:path*` });
    if (nestUrl) rules.push({ source: "/api/nest/:path*", destination: `${nestUrl}/:path*` });
    if (gatewayUrl) rules.push({ source: "/api/gateway/:path*", destination: `${gatewayUrl}/:path*` });

    return rules;
  },
}

export default nextConfig;
