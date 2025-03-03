/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false, 
  // Disable SWC minification
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
