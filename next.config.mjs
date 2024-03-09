/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hobbyconsolas.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.blogs.es',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.latercera.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tainthemeat.files.wordpress.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'disney.images.edge.bamgrid.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
