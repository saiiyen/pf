import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["saiiyen-macbook.local"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-b9f1ea6eba4648bc86b786e948113865.r2.dev",
        //"https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/tabhead.png",
        
        port: "",
         pathname: "/Assets/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog/:slug.md",
        destination: "/blog.md/:slug",
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           // Prevents MIME type sniffing, reducing the risk of malicious file uploads
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
  //           key: "X-Frame-Options",
  //           value: "DENY",
  //         },
  //         {
  //           // Controls how much referrer information is included with requests, balancing security and functionality.
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
  eslint: {
    // Disable ESLint errors from blocking `next build`
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
