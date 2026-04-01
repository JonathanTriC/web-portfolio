"use client";

import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Journey from "@/components/Journey";
import ProjectCard from "@/components/ProjectCard";
import ScrollTextGsap from "@/components/ScrollTextGSAP";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { homeProjects } from "../data/home/HomeData";

export default function HomePage() {
	return (
		<div>
			<Header />

			<section className="relative flex flex-col items-center justify-center overflow-hidden min-h-screen bg-linear-to-b from-gray-600 to-gray-900 text-white px-6">
				{/* Background Glow */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="mt-20 w-[600px] md:w-[900px] h-[600px] md:h-[800px] bg-emerald-400/20 blur-[160px] rounded-full"></div>
				</div>

				{/* Centered Content */}
				<div className="relative flex flex-col items-center mt-32 md:mt-48 w-full max-w-5xl">
					{/* Header Text */}
					<div
						data-aos="fade-down"
						className="absolute md:relative z-10 mt-20 md:mt-0 text-center md:text-left md:w-auto"
					>
						<p className="text-sm md:text-base mb-2 text-gray-300">
							Hey 👋, I’m a{" "}
							<span className="text-neon font-medium">React Native &amp; Mobile App Developer</span>
						</p>
						<h1 className="text-[1.25rem] sm:text-[1.5rem] md:text-[2rem] font-semibold text-gray-200 leading-tight mb-1">
							Senior React Native Developer
						</h1>
						<p aria-hidden="true" className="text-[2.5rem] sm:text-[3rem] md:text-[6rem] lg:text-[8rem] font-extrabold text-neon leading-tight">
							JONATHAN TRI
						</p>
					</div>

					{/* Image */}
					<div
						data-aos="zoom-in-up"
						className="relative w-full h-[610px] sm:w-[300px] sm:h-[420px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px] mt-50 md:mt-18"
					>
						<Image
							src="/images/self-image.png"
							alt="Jonathan Tri - Mobile Apps Developer"
							fill
							className="object-fit md:object-cover object-top"
							priority
						/>
					</div>

					{/* Contact and Description */}
					<div className="absolute z-10 mt-[600px] md:mt-[680px] flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-8 text-center">
						{/* Email */}
						<div data-aos="zoom-in-right" className="text-sm space-y-1">
							<a
								href="mailto:hello@jonathantri.com"
								className="flex w-full items-center justify-center md:justify-start gap-2 hover:text-neon transition"
							>
								📧 <span>hello@jonathantri.com</span>
							</a>
						</div>

						{/* Description and Links */}
						<div data-aos="zoom-in-left" className="max-w-lg">
							<p className="text-xs sm:text-sm text-center md:text-right text-gray-300 leading-relaxed">
								I build high-performance React Native apps that scale. With 4+ years
								shipping production apps for Kelas Pintar &amp; bookingtogo, I specialize
								in TypeScript, clean architecture, and cross-platform solutions.
								Based in Jakarta — available globally.
							</p>

							<div className="flex justify-center md:justify-end gap-6 mt-6 text-sm">
								<a
									href="https://www.linkedin.com/in/jonathan-tri-christianto"
									className="hover:text-neon transition"
									target="_blank"
									rel="noopener noreferrer me"
								>
									LinkedIn
								</a>
								<a
									href="https://github.com/JonathanTriC?tab=repositories"
									className="hover:text-neon transition"
									target="_blank"
									rel="noopener noreferrer me"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="about"
				className="relative flex flex-col items-center min-h-screen"
			>
				<ScrollTextGsap text="ABOUT ME ✺  " direction="right" />
				<div className="w-screen px-5 md:px-52">
					<div className="flex flex-col md:flex-row md:justify-between mt-8 gap-5">
						{/* About Left */}
						<div className="w-full md:sticky md:top-34 md:self-start">
							<div
								data-aos="zoom-in-up"
								className="flex flex-col gap-2 w-full md:w-3/4 text-lg"
							>
								<div>
									Mobile Developer with{" "}
									<span className="font-bold text-neon">4+ years</span> of experience
									crafting exceptional mobile applications across multiple platforms.
								</div>
								<div>
									I’m passionate about creating intuitive, performant, and scalable
									mobile solutions that deliver outstanding user experiences. My journey
									in mobile development has taken me through various technologies and
									frameworks, allowing me to adapt and excel in the ever-evolving mobile
									landscape.
								</div>
								<div>
									From concept to deployment, I bring ideas to life with clean code,
									thoughtful architecture, and attention to detail that makes the
									difference between good and exceptional applications.
								</div>
							</div>
						</div>
						{/* About Right */}
						<div className="w-full">
							<div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
								<div data-aos="fade-up">
									My <span className="text-neon">Journey</span>
								</div>
							</div>
							<Journey />
						</div>
					</div>

					{/* My Philosopy */}
					<div
						data-aos="fade-up"
						className="flex flex-col justify-center my-8 bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100%
            border border-gray-800 rounded-xl p-4 md:p-6 lg:p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
					>
						<div className="flex justify-center mb-4">
							<div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-neon flex items-center justify-center z-10 shrink-0">
								<Image
									src="/images/bulb.png"
									alt="bulb"
									width={26}
									height={0}
									priority
								/>
							</div>
						</div>
						<div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-7 md:mb-8 text-center">
							My <span className="text-neon">Philosophy</span>
						</div>
						<div className="flex justify-center">
							<div className="md:text-lg text-center md:w-5xl">
								{
									"Technology is constantly evolving, and so am I. Each framework and language I've mastered has taught me something unique about problem-solving and user experience. My journey from Flutter to Swift and into React Native reflects my commitment to staying at the forefront of innovation."
								}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id="projects"
				className="relative flex flex-col items-center min-h-screen"
			>
				<ScrollTextGsap text="LATEST PROJECTS ✺  " direction="right" />

				<div className="my-8 w-screen px-5 md:px-52">
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
						{homeProjects?.map((item) => (
							<ProjectCard
								key={item?.index}
								index={item?.index}
								href={item?.href}
								image={item?.image}
								projectName={item?.projectName}
							/>
						))}
					</div>
					{/* <TypewriterAnimation
						strings={["and more groundbreaking projects are on the way"]}
					/> */}

					<div className="mt-20">
						<div className="text-3xl md:text-4xl lg:text-5xl text-right font-bold mb-3 md:mb-4">
							<Testimonial />
						</div>
					</div>
				</div>
			</section>

			<section
				id="contact-me"
				className="relative flex flex-col items-center min-h-screen"
			>
				<ScrollTextGsap text="CONTACT ME ✺  " direction="right" />

				<ContactForm />
				<ScrollTextGsap text="JONATHAN TRI ✺  " direction="right" />
			</section>
		</div>
	);
}
