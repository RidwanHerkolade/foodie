/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.brandfetch.io',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
        },
      ],
    },
  };
export default nextConfig;