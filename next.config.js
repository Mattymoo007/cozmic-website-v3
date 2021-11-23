/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")

module.exports = withPWA({
  target: "serverless",
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "images.contentful.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
})
