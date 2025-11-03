import Image from "next/image";

type ProjectCardProps = {
	index: number;
	href: string;
	image: string;
	projectName: string;
};

export default function ProjectCard({
	index,
	href,
	image,
	projectName,
}: ProjectCardProps) {
	return (
		<a
			href={href}
			data-aos="fade-up"
			data-aos-delay={index * 300}
			className="relative w-full aspect-4/3 rounded-2xl overflow-hidden group block border border-gray-800 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
		>
			{/* Image */}
			<Image
				src={image}
				alt={`project-${projectName}`}
				fill
				className="object-top object-cover rounded-2xl transition-transform duration-500 transform group-hover:scale-110"
				priority
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 rounded-2xl" />

			{/* Project Name */}
			{/* Desktop: Hover overlay (hidden on mobile) */}
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<div className="text-gray-300 text-xl md:text-2xl font-semibold opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
					{projectName}
				</div>
				<div className="text-neon text-md md:text-2md font-semibold opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
					View Project
				</div>
			</div>

			{/* Mobile: Always visible overlay at bottom */}
			<div className="md:hidden absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent pt-12 pb-4 px-4 rounded-b-2xl">
				<div className="text-gray-300 text-lg font-semibold">{projectName}</div>
				<div className="text-neon text-sm font-semibold">View Project</div>
			</div>
		</a>
	);
}
