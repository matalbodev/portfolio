/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		appDir: true,
	},
	publicRuntimeConfig: {
		// Will be available on both server and client
		apiHost: process.env.API_HOST || "http://localhost:1337",
		apiToken: process.env.API_TOKEN || "strapi-token",
		imagesHost: process.env.IMAGES_HOST || "http://localhost:1337",
	},
	images: {
		domains: ["localhost", "strapi-uploads-matalbo.s3.amazonaws.com"],
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
