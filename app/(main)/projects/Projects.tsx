"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import ParallaxProject from "@/components/ParallaxProject";
import { projects } from "@/app/data/projects/ProjectsData";

export default function Projects() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	return (
		<div>
			<Header />

			<div className="min-h-screen text-gray-300 pt-20">
				<section className="container mx-auto px-4 py-12 md:py-20">
					<div data-aos="zoom-in">
						<h1 className="text-4xl md:text-5xl text-center font-bold mb-4">
							Latest <span className="text-neon">Projects</span>
						</h1>
						<p className="text-gray-300 text-center">
							A collection of apps and products I’ve developed, designed, or helped
							build — highlighting real-world implementations and meaningful user
							experiences.
						</p>
					</div>
				</section>

				<section ref={container} className="-mt-28 md:-mt-32">
					<div data-aos="fade-up">
						{projects.map((project, i) => {
							const targetScale = 1 - (projects.length - i) * 0.05;
							return (
								<ParallaxProject
									key={`p_${i}`}
									i={i}
									{...project}
									progress={scrollYProgress}
									range={[i * 0.25, 1]}
									targetScale={targetScale}
								/>
							);
						})}
					</div>
				</section>

				<div className="relative flex w-full md:w-[1200px] mx-auto justify-center">
					<section
						data-aos="fade-up"
						className="container mx-auto px-4 py-12 md:py-20 -mt-32"
					>
						<div className="text-center bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100% border border-gray-800 rounded-xl p-4 md:p-6 lg:p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Let’s Build Something Amazing Together
							</h2>
							<p className="text-gray-400 max-w-2xl mx-auto mb-8">
								Ready to take your ideas to reality? I’m always excited to work on new
								challenges and create innovative solutions.
							</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Link
									href="/#contact-me"
									className="bg-neon text-black px-8 py-3 rounded-lg font-semibold hover:bg-neon/90 transition inline-block"
								>
									Start a Project
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
