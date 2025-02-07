/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/passeport-digital",
  basePath: "/passeport-digital",
}

module.exports = nextConfig

