import "../styles/globals.css";
import { type ReactNode } from "react";
import { AOSInit } from "@/components/AOSinit";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Jonathan Tri | Mobile Apps Developer",
	description:
		"With 4+ years of hands-on experience in Mobile Development, I build high-performance mobile applications that combine sleek design with robust functionality. My focus is on creating reliable, maintainable, and delightful user experiences across platforms.",
	openGraph: {
		title: "Jonathan Tri | Mobile Apps Developer",
		description:
			"Mobile Developer specializing in high-performance cross-platform and native apps.",
		url: "https://jonathantri.com",
		siteName: "Jonathan Tri Portfolio",
		images: [
			{
				url: "/images/self-image.png",
				width: 1200,
				height: 630,
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<AOSInit />
				<main className="min-h-screen" data-taos-offset="200">
					{children}
				</main>

				<footer className="text-center py-4 text-sm">
					© {new Date().getFullYear()} Jonathan Tri. All rights reserved.
				</footer>
			</body>
		</html>
	);
}
