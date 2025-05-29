import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'eub-bucket.s3.ap-south-1.amazonaws.com',
			},
			{
				protocol: 'http',
				hostname: '103.147.163.46',
				port: '4040',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'backend.eub.edu.bd',
			},
		],
	},
};

export default nextConfig;
