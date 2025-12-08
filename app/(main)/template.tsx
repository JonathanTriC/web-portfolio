// app/template.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

interface TemplateProps {
	children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
