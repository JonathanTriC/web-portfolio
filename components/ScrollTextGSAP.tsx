"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextProps {
	text: string;
	direction?: "left" | "right";
}

function TextSpan({ children }: { children: React.ReactNode }) {
	return (
		<span className="block pr-8 text-5xl font-bold uppercase text-zinc-800 md:text-7xl lg:text-9xl">
			{children}
		</span>
	);
}

// The main component
export default function ScrollTextGsap({
	text,
	direction = "left",
}: ScrollTextProps) {
	const stripRef = useRef(null);

	useEffect(() => {
		const el = stripRef.current;

		const moveAmount = -25;

		let anim;

		if (direction === "left") {
			anim = gsap.to(el, {
				xPercent: moveAmount,
				ease: "none",
				scrollTrigger: {
					trigger: document.documentElement,
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
				},
			});
		} else {
			gsap.set(el, { xPercent: moveAmount });
			anim = gsap.to(el, {
				xPercent: 0,
				ease: "none",
				scrollTrigger: {
					trigger: document.documentElement,
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
				},
			});
		}

		return () => {
			anim.kill();
			ScrollTrigger.killAll();
		};
	}, [direction]);

	return (
		<div className="w-full overflow-hidden py-4">
			<div ref={stripRef} className="flex whitespace-nowrap">
				<TextSpan>{text}</TextSpan>
				<TextSpan>{text}</TextSpan>
				<TextSpan>{text}</TextSpan>
				<TextSpan>{text}</TextSpan>
			</div>
		</div>
	);
}
