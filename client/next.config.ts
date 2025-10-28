/** @type {import('next').NextConfig} */
const nextConfig = {
  // Variables de entorno públicas
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
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
