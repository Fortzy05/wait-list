// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*", // The path where you want to intercept the request
//         destination: "http://test.kindlegatefoundation.org/api/v1/:path*", // The actual API endpoint
//       },
//     ];
//   },
// };

// export default nextConfig;
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://test.kindlegatefoundation.org/api/:path*", // Proxy to Backend
      },
    ];
  },
};
