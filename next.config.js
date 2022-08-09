/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: {
			domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
			unoptimized: true
		}
	}
}

module.exports = nextConfig
