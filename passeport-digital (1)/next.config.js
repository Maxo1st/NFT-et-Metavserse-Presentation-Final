/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/passeport-digital",
  assetPrefix: "/passeport-digital",
}

module.exports = nextConfig
