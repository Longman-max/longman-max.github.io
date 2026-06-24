/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // GitHub Pages base path configuration:
  // If your repo is `username.github.io` (root domain), leave basePath commented out.
  // If your repo is `username.github.io/repo-name`, uncomment and set:
  // basePath: '/repo-name',
};

module.exports = nextConfig;
