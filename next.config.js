/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STREAMBIRD_PUBLIC_TOKEN: process.env.STREAMBIRD_PUBLIC_TOKEN,
  }
}

module.exports = nextConfig
