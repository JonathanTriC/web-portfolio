import Link from "next/link";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-50 text-gray-900">
				<header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
					<Link href="/" className="text-xl font-bold text-blue-600">
						MyPortfolio
					</Link>
					<nav className="space-x-4">
						<Link href="/about" className="hover:text-blue-500 transition">
							About
						</Link>
						<Link href="/projects" className="hover:text-blue-500 transition">
							Projects
						</Link>
					</nav>
				</header>

				<main className="min-h-screen px-6 py-10">{children}</main>

				<footer className="text-center py-4 text-sm text-gray-500 border-t">
					© {new Date().getFullYear()} MyPortfolio. All rights reserved.
				</footer>
			</body>
		</html>
	);
}
