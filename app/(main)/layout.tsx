import "../styles/globals.css";
import { type ReactNode } from "react";
import { AOSInit } from "@/components/AOSinit";

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
