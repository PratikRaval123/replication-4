/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.tildacdn.one",
      },
      {
        protocol: "https",
        hostname: "optim.tildacdn.one",
      },
      {
        protocol: "https",
        hostname: "dl.dropboxusercontent.com",
      },
    ],
  },
};

export default nextConfig;
