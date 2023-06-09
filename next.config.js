/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["bcryptjs"],
  },
  // images: {
  //   domains: [
  //     'source.unsplash.com',
  //   ]
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  env: {
    URL_SERVER: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
