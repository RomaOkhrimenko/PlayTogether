/** @type {import('next').NextConfig} */

const nextConfig = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  }
};

module.exports = nextConfig;
