"use client";

import {
	StoryData,
	ExperienceData,
	EducationData,
	CertificationData,
} from "@/app/data/about/AboutData";
import EducationItem from "@/components/EducationItem";
import ExperienceItem from "@/components/ExperienceItem";
import Header from "@/components/Header";
import StoryItem from "@/components/StoryItem";
import { faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div>
			<Header />

			<div className="min-h-screen text-gray-300 pt-20">
				{/* Hero Section */}
				<section className="container mx-auto px-4 py-12 md:py-20">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div data-aos="zoom-in-left">
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								About <span className="text-neon">Me</span>
							</h1>
							<p className="text-gray-300 mb-6 leading-relaxed">
								I’m a mobile developer driven by a passion for solving real-world
								problems through clean, functional, and meaningful design. I craft
								digital experiences that don’t just look good — they work beautifully.
								Every line of code I write is focused on creating seamless, intuitive
								solutions that make a difference for users.
							</p>
							<div className="flex flex-wrap gap-4 mb-6">
								<button className="bg-neon text-black px-6 py-3 rounded-lg font-semibold hover:bg-neon/90 transition">
									Download CV
								</button>
							</div>
						</div>
						<div data-aos="zoom-in-right" className="relative">
							<div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
								<Image
									src="/images/about-image.png"
									alt="self-image-2"
									fill
									className="w-full h-full object-contain rounded-lg"
								/>
							</div>
							<div className="absolute -bottom-4 -right-4 bg-neon text-black px-6 py-3 rounded-lg font-semibold">
								4+ <br />
								Years of
								<br />
								Experience
							</div>
						</div>
					</div>
				</section>

				{/* My Story Section */}
				<div className="bg-[#090D15]">
					<section className="container mx-auto px-4 py-12 md:py-20">
						<div data-aos="fade-up" className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								My <span className="text-neon">Story</span>
							</h2>
							<p className="text-gray-400 max-w-2xl mx-auto">
								Every great journey begins with curiosity. Here’s how my passion for
								technology and creativity shaped my path as a mobile developer.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{StoryData?.map((item, index) => (
								<StoryItem
									key={index}
									index={item?.index}
									icon={item?.icon}
									title={item?.title}
									description={item?.description}
								/>
							))}
						</div>
					</section>
				</div>

				{/* Professional Experience */}
				<section className="container mx-auto px-4 py-12 md:py-20">
					<div data-aos="fade-up" className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Professional Experience
						</h2>
						<p className="text-gray-400 max-w-2xl mx-auto">
							Building innovative solutions and leading teams through complex projects.
						</p>
					</div>

					<div className="space-y-6 max-w-4xl mx-auto">
						{ExperienceData?.map((item, index) => (
							<ExperienceItem
								key={index}
								index={item?.index}
								title={item?.title}
								company={item?.company}
								duration={item?.duration}
								desc={item?.desc}
								tools={item?.tools}
							/>
						))}
					</div>
				</section>

				{/* Certifications & Education */}
				<div className="bg-[#090D15]">
					<section className="container mx-auto px-4 py-12 md:py-20">
						<div data-aos="fade-up" className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Education & Certifications
							</h2>
							<p className="text-gray-400 max-w-2xl mx-auto">
								Continuous learning and professional development.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
							<div>
								<div data-aos="fade-up" className="flex items-center gap-2 mb-6">
									<div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center">
										<FontAwesomeIcon icon={faGraduationCap} color="#b6f500" />
									</div>
									<h3 className="text-xl font-bold text-white">Education</h3>
								</div>

								<div className="space-y-4">
									{EducationData?.map((item, index) => (
										<EducationItem
											key={index}
											index={item?.index}
											title={item?.title}
											school={item?.school}
											duration={item?.duration}
										/>
									))}
								</div>
							</div>

							<div>
								<div data-aos="fade-up" className="flex items-center gap-2 mb-6">
									<div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center">
										<FontAwesomeIcon icon={faBookOpen} color="#b6f500" />
									</div>
									<h3 className="text-xl font-bold text-white">Certifications</h3>
								</div>

								<div className="space-y-4">
									{CertificationData?.map((item, index) => (
										<EducationItem
											key={index}
											index={item?.index}
											title={item?.title}
											school={item?.school}
											duration={item?.duration}
										/>
									))}
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* CTA Section */}
				<div className="relative flex w-full md:w-[1200px] mx-auto justify-center">
					<section
						data-aos="fade-up"
						className="container mx-auto px-4 py-12 md:py-20"
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
								<Link
									href="/projects"
									className="border border-gray-700 px-8 py-3 rounded-lg hover:border-neon transition text-white"
								>
									View Projects
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
