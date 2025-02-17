/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/NFT-et-Metavserse-Presentation-Final",
  assetPrefix: "/NFT-et-Metavserse-Presentation-Final",
  trailingSlash: true,
}

module.exports = nextConfig

