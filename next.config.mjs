/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: "anonymous",

  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
