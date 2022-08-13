/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	images: {
		domains: ['assets.chucknorris.host'],
	}



}

module.exports = nextConfig
