import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.daisyui.com"], // whitelist DaisyUI image host
  },
};

export default nextConfig;
