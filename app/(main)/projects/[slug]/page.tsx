import { slugProjects } from "@/app/data/projects/ProjectsData";
import Header from "@/components/Header";
import {
	faCheck,
	faForward,
	faImages,
	faLayerGroup,
	faLightbulb,
	faRoad,
	faStar,
	faTriangleExclamation,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return slugProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const project = slugProjects.find((p) => p.slug === slug);
	if (!project) return notFound();

	return (
		<div>
			<Header />

			<div className="min-h-screen text-gray-300 pt-20">
				{/* Hero Section */}
				<section className="container mx-auto mt-20 px-4 py-6 md:py-8">
					<div className="flex flex-col md:flex-row gap-8 items-center">
						{/* LEFT */}
						<div data-aos="zoom-in-left" className="flex flex-col md:w-1/2 gap-8">
							<h1 className="text-4xl md:text-5xl text-left font-bold text-neon">
								{project.title}
							</h1>

							<p
								className="text-gray-300 text-left"
								dangerouslySetInnerHTML={{ __html: project.description }}
							/>

							<div className="flex flex-col md:flex-row gap-4">
								{project?.links
									?.filter((items) => items.show)
									.map((items) => (
										<a
											key={items.index}
											href={items.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`flex gap-3 justify-center items-center font-semibold py-3 sm:py-4 px-6 rounded-lg transition duration-300 hover:scale-105
		${
			items.type === "git"
				? "bg-neon hover:bg-neon/80 text-black"
				: "border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300"
		}`}
										>
											<FontAwesomeIcon
												icon={items.icon}
												color={items.type === "git" ? "#000000" : "#d1d5dc"}
												width={24}
												height={24}
											/>
											{items.text}
										</a>
									))}
							</div>
						</div>

						{/* RIGHT */}
						<div
							data-aos="zoom-in-right"
							className="md:w-1/2 flex justify-end items-center"
						>
							<div className="relative w-full max-w-xl">
								<Image
									src={project?.homeImage as string}
									alt="home-icon"
									width={800}
									height={800}
									className="object-contain w-full h-auto rounded-lg"
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="container mx-auto px-4 py-6 md:py-8">
					<div data-aos="fade-up" className="flex items-center gap-2 mb-8">
						<FontAwesomeIcon
							icon={faLayerGroup}
							color="#b6f500"
							width={30}
							height={30}
						/>
						<h1 className="text-3xl md:text-4xl text-left font-bold text-neon">
							Tech Stack & Tools
						</h1>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
						{project?.listStack?.map((items, index) => (
							<div
								key={index}
								data-aos="fade-up"
								data-aos-delay={items?.index * 300}
								className="flex flex-col items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition"
							>
								{items?.type === "fontawesome" ? (
									<FontAwesomeIcon
										icon={items?.icon as IconDefinition}
										color="#b6f500"
										width={40}
										height={40}
									/>
								) : (
									<Image src={items?.icon as string} alt="icon" width={40} height={40} />
								)}
								<p
									className="text-sm text-gray-300 text-center font-medium"
									dangerouslySetInnerHTML={{ __html: items?.name }}
								/>
							</div>
						))}
					</div>
				</section>

				<section className="container mx-auto px-4 py-6 md:py-8">
					<div data-aos="fade-up" className="flex items-center gap-2 mb-8">
						<FontAwesomeIcon icon={faStar} color="#b6f500" width={30} height={30} />
						<h1 className="text-3xl md:text-4xl text-left font-bold text-neon">
							Key Features
						</h1>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{project?.keyFeatures?.map((items, index) => (
							<div
								key={index}
								data-aos="fade-up"
								data-aos-delay={items?.index * 300}
								className="flex flex-row gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
							>
								<div className="w-12 h-12 aspect-square bg-neon/20 rounded-lg flex items-center justify-center shrink-0">
									{items?.type === "fontawesome" ? (
										<FontAwesomeIcon
											icon={items?.icon as IconDefinition}
											className="w-6 h-6 text-neon"
										/>
									) : (
										<Image
											src={items?.icon as string}
											alt="icon"
											className="w-6 h-6 aspect-square object-contain"
											width={24}
											height={24}
											color="#b6f500"
										/>
									)}
								</div>
								<div>
									<h1 className="text-lg text-gray-300 font-bold">{items?.name}</h1>
									<p
										className="text-gray-400"
										dangerouslySetInnerHTML={{ __html: items?.description }}
									/>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="container mx-auto px-4 py-6 md:py-8">
					<div data-aos="fade-up" className="flex items-center gap-2 mb-8">
						<FontAwesomeIcon icon={faRoad} color="#b6f500" width={30} height={30} />
						<h1 className="text-3xl md:text-4xl text-left font-bold text-neon">
							Development Journey
						</h1>
					</div>

					<div className="flex flex-col gap-6">
						<div
							data-aos="fade-up"
							className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
						>
							<div className="flex flex-col gap-6">
								<h1 className="text-xl md:text-2xl text-left font-bold text-neon">
									Project Vision & Motivation
								</h1>
								{project?.projectVision?.map((items, index) => (
									<p key={index} className="text-gray-400">
										{items}
									</p>
								))}
							</div>
						</div>

						{(project?.challenge ?? [])?.length > 0 ||
						(project?.solution ?? [])?.length > 0 ? (
							<div data-aos="fade-up" className="flex flex-col md:flex-row gap-4">
								<div className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
									<div className="flex flex-col gap-6">
										<h1 className="text-xl md:text-2xl text-left font-bold text-neon">
											Challenges Faced
										</h1>
										{project?.challenge?.map((items, index) => (
											<div key={index} className="flex flex-row gap-3">
												<div className="w-10 h-10 aspect-square bg-neon/20 rounded-lg flex items-center justify-center shrink-0">
													<FontAwesomeIcon
														icon={faTriangleExclamation}
														className="w-4 h-4 text-neon"
													/>
												</div>
												<div>
													<h1 className="text-lg text-gray-300 font-bold">{items?.name}</h1>
													<p className="text-gray-400">{items?.description}</p>
												</div>
											</div>
										))}
									</div>
								</div>
								<div
									data-aos="fade-up"
									data-aos-delay={300}
									className="px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
								>
									<div className="flex flex-col gap-6">
										<h1 className="text-xl md:text-2xl text-left font-bold text-neon">
											Solutions Implemented
										</h1>
										{project?.solution?.map((items, index) => (
											<div key={index} className="flex flex-row gap-3">
												<div className="w-10 h-10 aspect-square bg-neon rounded-lg flex items-center justify-center shrink-0">
													<FontAwesomeIcon
														icon={faCheck}
														className="w-4 h-4 text-background"
													/>
												</div>
												<div>
													<h1 className="text-lg text-gray-300 font-bold">{items?.name}</h1>
													<p className="text-gray-400">{items?.description}</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						) : null}
					</div>
				</section>

				<section className="container mx-auto px-4 py-6 md:py-8">
					<div data-aos="fade-up" className="flex items-center gap-2 mb-8">
						<FontAwesomeIcon icon={faImages} color="#b6f500" width={30} height={30} />
						<h1 className="text-3xl md:text-4xl text-left font-bold text-neon">
							Projects Showcase
						</h1>
					</div>
					<div
						data-aos="fade-up"
						className="relative w-full aspect-video rounded-2xl overflow-hidden group block border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
					>
						<Image
							src={project?.projectShowcase}
							alt={`project-${project?.slug}`}
							fill
							className="object-top object-cover rounded-2xl transition-transform duration-500 transform group-hover:scale-110"
							priority
						/>

						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 rounded-2xl" />
					</div>
				</section>

				{(project?.keyLearning ?? [])?.length > 0 ? (
					<section className="container mx-auto px-4 py-6 md:py-8">
						<div data-aos="fade-up" className="flex items-center gap-2 mb-8">
							<FontAwesomeIcon
								icon={faLightbulb}
								color="#b6f500"
								width={30}
								height={30}
							/>
							<h1 className="text-3xl md:text-4xl text-left font-bold text-neon">
								Key Learnings & Takeaways
							</h1>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{(project?.keyLearning ?? [])?.map((items, index) => (
								<div
									key={index}
									data-aos="fade-up"
									data-aos-delay={items?.index * 300}
									className="flex flex-row gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
								>
									<div className="w-12 h-12 aspect-square bg-neon/20 rounded-lg flex items-center justify-center shrink-0">
										{items?.type === "fontawesome" ? (
											<FontAwesomeIcon
												icon={items?.icon as IconDefinition}
												className="w-6 h-6 text-neon"
											/>
										) : (
											<Image
												src={items?.icon as string}
												alt="icon"
												className="w-6 h-6 aspect-square object-contain"
												width={24}
												height={24}
											/>
										)}
									</div>
									<div>
										<h1 className="text-lg text-gray-300 font-bold">{items?.name}</h1>
										{Array.isArray(items?.description)
											? items.description.map((desc, index) => (
													<div key={index} className="flex flex-row gap-2">
														<span className="text-neon font-bold">{`>`}</span>
														<p className="text-gray-400">{desc}</p>
													</div>
											  ))
											: items?.description && (
													<p className="text-gray-400">{items.description}</p>
											  )}
									</div>
								</div>
							))}
						</div>
					</section>
				) : null}

				{(project?.futureImprovements ?? [])?.length > 0 ? (
					<section className="container mx-auto px-4 py-6 md:py-8">
						<div data-aos="fade-up" className="flex items-center gap-2 mb-8">
							<FontAwesomeIcon
								icon={faForward}
								color="#b6f500"
								width={30}
								height={30}
							/>
							<h1 className="text-3xl md:text-4xl text-left font-bold text-neon">
								Future Improvements
							</h1>
						</div>

						<div className="flex flex-col gap-6">
							{project?.futureImprovements?.map((items, index) => (
								<div
									key={index}
									data-aos="fade-up"
									data-aos-delay={items?.index * 300}
									className="flex flex-row gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
								>
									<div className="w-12 h-12 aspect-square bg-neon/20 rounded-lg flex items-center justify-center shrink-0">
										{/* {items?.type === "fontawesome" ? (
											<FontAwesomeIcon
												icon={items?.icon as IconDefinition}
												className="w-6 h-6 text-neon"
											/>
											) : (
												<Image
												src={items?.icon as string}
												alt="icon"
												className="w-6 h-6 aspect-square object-contain"
												width={24}
												height={24}
												/>
										)} */}

										<FontAwesomeIcon
											icon={items?.icon as IconDefinition}
											className="w-6 h-6 text-neon"
										/>
									</div>
									<div>
										<h1 className="text-lg text-gray-300 font-bold">{items?.name}</h1>
										<p className="text-gray-400">{items?.description}</p>
									</div>
								</div>
							))}
						</div>
					</section>
				) : null}

				<section className="container mx-auto">
					<div className="relative flex w-full mx-auto justify-center">
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
								</div>
							</div>
						</section>
					</div>
				</section>
			</div>
		</div>
	);
}
