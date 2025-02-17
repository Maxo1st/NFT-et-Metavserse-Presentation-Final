/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/NFT-et-Metavserse-Presentation-Final",
  assetPrefix: "/NFT-et-Metavserse-Presentation-Final",
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": ".",
    }
    return config
  },
}

module.exports = nextConfig

