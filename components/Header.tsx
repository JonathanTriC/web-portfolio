"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<header className="flex justify-center items-center fixed top-0 z-50 w-full px-6 py-4">
				<div className="flex justify-between items-center mt-4 px-6 py-2 backdrop-blur-md  w-full max-w-7xl border border-gray-300 rounded-full">
					{/* Logo */}
					<Link href="/" className="block hover:opacity-80 transition">
						<Image
							src="/images/jt-logo.png"
							alt="Jonathan Tri — React Native Developer"
							width={40}
							height={40}
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex justify-center items-center space-x-6">
						<Link href="/" className="hover:text-neon transition">
							Home
						</Link>
						<Link href="/about" className="hover:text-neon transition">
							About
						</Link>
						<Link href="/projects" className="hover:text-neon transition">
							Projects
						</Link>
						<Link
							href="/#contact-me"
							className="hover:text-neon hover:border-neon hover:px-8 transition-all px-6 py-4 border rounded-full border-emerald-100"
						>
							Contact Me
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 hover:text-neon transition"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</header>

			{isMenuOpen && (
				<div className="fixed inset-0 pt-20 bg-background z-40 md:hidden">
					<nav className="flex flex-col items-center space-y-6 p-8">
						<Link
							href="/"
							className="hover:text-neon transition text-lg"
							onClick={toggleMenu}
						>
							Home
						</Link>
						<Link
							href="/about"
							className="hover:text-neon transition text-lg"
							onClick={toggleMenu}
						>
							About
						</Link>
						<Link
							href="/projects"
							className="hover:text-neon transition text-lg"
							onClick={toggleMenu}
						>
							Projects
						</Link>
						<Link
							href="/#contact-me"
							className="hover:text-neon hover:border-neon transition-all px-8 py-4 border rounded-full border-emerald-100 text-lg"
							onClick={toggleMenu}
						>
							Contact Me
						</Link>
					</nav>
				</div>
			)}
		</div>
	);
}
