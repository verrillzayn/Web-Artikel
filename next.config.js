/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  transpilePackages: ["swiper"],
  // reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
    ],
  },
};

module.exports = nextConfig;
