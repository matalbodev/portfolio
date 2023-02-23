/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		appDir: true,
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		apiHost: process.env.API_HOST || "http://localhost:1337",
	},
	images: {
		domains: ["localhost"],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});
		return config;
	},
};

module.exports = nextConfig;
