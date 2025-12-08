"use client";
import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

type ParallaxProjectProps = {
	i: number;
	title: string;
	description: string;
	src: string;
	url: string;
	color?: string;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale?: number;
};

export default function ParallaxProject({
	i,
	title,
	description,
	src,
	url,
	progress,
	range,
	targetScale = 0.8,
}: ParallaxProjectProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="min-h-screen flex items-center justify-center sticky top-0 mx-6"
		>
			<motion.div
				style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
				className="
          flex flex-col relative mx-auto h-auto md:h-[600px] w-full md:w-[1200px] origin-top
          rounded-2xl transition-all duration-300
          bg-gray-900 bg-linear-to-tl from-transparent/20 to-background
          border border-gray-800
          p-4 md:p-6 lg:p-8
          hover:border-neon hover:shadow-lg hover:shadow-neon/10
        "
			>
				<h2 className="text-2xl text-center font-bold m-0">{title}</h2>

				<div
					className="
      flex flex-col md:flex-row
      h-full mt-6 md:mt-12 gap-8 md:gap-12
    "
				>
					{/* Image (mobile first) */}
					<a
						href={url}
						className="relative w-full md:w-[60%] h-[300px] md:h-full rounded-2xl overflow-hidden order-1 md:order-2"
					>
						<motion.div className="w-full h-full" style={{ scale: imageScale }}>
							<Image fill src={src} alt="image" className="object-cover" />
						</motion.div>
					</a>

					{/* Description */}
					<div className="w-full md:w-[40%] relative md:top-[10%] order-2 md:order-1">
						<p
							className="text-base text-gray-300 first-letter:text-2xl first-letter:font-title"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
