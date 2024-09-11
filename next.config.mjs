/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**",
      },
    ],
    domains: [
      "images.unsplash.com",
      "images2.minutemediacdn.com",
      "iaftm.tmgrup.com.tr",
      "iaahbr.tmgrup.com.tr",
      "i.ytimg.com",
      "image.hurimg.com",
    ],
  },
};

export default nextConfig;
