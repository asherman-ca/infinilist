/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['images.pexels.com'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
}

module.exports = nextConfig
