/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }
}

module.exports = nextConfig
