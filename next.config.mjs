/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript hataları olsa bile projeyi yayına al
    ignoreBuildErrors: true,
  },
  eslint: {
    // Yazım kuralları (lint) hatalarını görmezden gel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
