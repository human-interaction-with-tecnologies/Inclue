/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
  sassOptions: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }
}

module.exports = nextConfig
