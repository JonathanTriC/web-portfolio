import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/cv",
				destination: "https://drive.google.com/file/d/1OySnrx-3O_MRu8WH9uqlOKjsh3NqckDP/view?usp=sharing",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
