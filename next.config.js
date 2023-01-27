/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['quizzo-app-1b7a.vercel.app'],
  },
}

module.exports = nextConfig
