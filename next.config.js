/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // Configure Turbopack root directory
  turbopack: {
    root: __dirname,
  },

  // Allow external ngrok domains for development mode
  allowedDevOrigins: ['tenuously-mackinawed-eliz.ngrok-free.dev'],

  // GitHub Pages base path configuration:
  // If your repo is `username.github.io` (root domain), leave basePath commented out.
  // If your repo is `username.github.io/repo-name`, uncomment and set:
  // basePath: '/repo-name',
};

module.exports = nextConfig;
