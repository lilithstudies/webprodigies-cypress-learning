/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['vwrjiupnanygmmkzjnub.supabase.co'],
  },
};

module.exports = nextConfig;
// console.log('Environment Variable Check:', process.env.VARIABLE_NAME);
