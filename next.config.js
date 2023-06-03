/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.externals = [...config.externals, "canvas", "jsdom"];

    return config;
  },
  transpilePackages: [
    "swiper",
    "@radix-ui/react-dialog",
    "@radix-ui/react-popover",
    "@radix-ui/react-slot",
    "@tanstack/react-table",
  ],
  reactStrictMode: true,
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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "demos.creative-tim.com",
      },
    ],
  },
};

module.exports = nextConfig;
