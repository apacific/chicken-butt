const BACKEND_ORIGIN = process.env.BACKEND_ORIGIN || 'http://localhost:8080';
export default {
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${BACKEND_ORIGIN}/:path*` }];
  },
};
