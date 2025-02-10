/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
  output: "export",
};

export default nextConfig;
