const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/Archive",
    reactStrictMode: true,
    swcMinify: false,
};

module.exports = withContentlayer(nextConfig);
