/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["eran-ai-images.s3.us-east-2.amazonaws.com", "randomuser.me"],
  },
};

module.exports = nextConfig;
