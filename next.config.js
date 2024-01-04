/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  sassOptions: {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  }
}

module.exports = nextConfig
