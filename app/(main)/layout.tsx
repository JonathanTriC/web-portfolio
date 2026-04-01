import "../styles/globals.css";
import { type ReactNode } from "react";
import { AOSInit } from "@/components/AOSinit";
import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://jonathantri.com"),
	title: {
		default:
			"Hire Jonathan Tri — Senior React Native Developer | 4+ Years Experience",
		template: "%s | Jonathan Tri — React Native Developer",
	},
	description:
		"Senior React Native Developer with 4+ years of experience building high-performance apps for Kelas Pintar, bookingtogo, and more. Available for hiring. View portfolio & get in touch.",
	keywords: [
		"hire react native developer",
		"senior react native developer",
		"react native developer for hire",
		"freelance react native developer",
		"react native developer jakarta",
		"react native developer indonesia",
		"mobile app developer for hire",
		"react native typescript developer",
		"cross-platform mobile developer",
		"react native expert",
	],
	authors: [{ name: "Jonathan Tri", url: "https://jonathantri.com" }],
	creator: "Jonathan Tri",
	openGraph: {
		title: "Hire Jonathan Tri — Senior React Native Developer",
		description:
			"Senior React Native Developer with 4+ years of experience building high-performance mobile apps. Available for full-time, freelance & contract roles.",
		url: "https://jonathantri.com",
		siteName: "Jonathan Tri — React Native Developer Portfolio",
		images: [
			{
				url: "https://jonathantri.com/images/about-image.png",
				width: 1200,
				height: 630,
				alt: "Jonathan Tri — Senior React Native Developer",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hire Jonathan Tri — Senior React Native Developer",
		description:
			"Senior React Native Developer with 4+ years of experience. Available for hire. View portfolio at jonathantri.com",
		images: ["https://jonathantri.com/images/about-image.png"],
		creator: "@jonathantri",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "https://jonathantri.com",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Jonathan Tri",
	url: "https://jonathantri.com",
	jobTitle: "Senior React Native Developer",
	description:
		"Senior React Native Developer with 4+ years of experience building high-performance mobile applications for leading Indonesian tech companies.",
	image: "https://jonathantri.com/images/about-image.png",
	email: "hello@jonathantri.com",
	sameAs: [
		"https://www.linkedin.com/in/jonathan-tri-christianto",
		"https://github.com/JonathanTriC",
	],
	knowsAbout: [
		"React Native",
		"TypeScript",
		"Mobile App Development",
		"iOS Development",
		"Android Development",
		"Flutter",
		"Swift",
	],
	worksFor: [
		{
			"@type": "Organization",
			name: "bookingtogo",
		},
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Bina Nusantara University",
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="min-h-screen flex flex-col">
				<AOSInit />
				<main className="min-h-screen" data-taos-offset="200">
					{children}
				</main>

				<footer className="text-center py-8 text-sm border-t border-gray-800">
					<div className="max-w-5xl mx-auto px-6">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
							<nav className="flex gap-4 text-gray-400">
								<a href="/" className="hover:text-white transition">
									Home
								</a>
								<a href="/about" className="hover:text-white transition">
									About
								</a>
								<a href="/projects" className="hover:text-white transition">
									Projects
								</a>
								<a href="/#contact-me" className="hover:text-white transition">
									Contact
								</a>
							</nav>
							<div className="flex gap-4 text-gray-400">
								<a
									href="https://www.linkedin.com/in/jonathan-tri-christianto"
									target="_blank"
									rel="noopener noreferrer me"
									className="hover:text-white transition"
								>
									LinkedIn
								</a>
								<a
									href="https://github.com/JonathanTriC"
									target="_blank"
									rel="noopener noreferrer me"
									className="hover:text-white transition"
								>
									GitHub
								</a>
								<a
									href="mailto:hello@jonathantri.com"
									className="hover:text-white transition"
								>
									Email
								</a>
							</div>
						</div>
						<p className="text-gray-500">
							© {new Date().getFullYear()} Jonathan Tri — Senior React Native
							Developer. All rights reserved.
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
