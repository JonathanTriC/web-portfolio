import { notFound } from "next/navigation";

const projects = [
	{
		title: "Portfolio Website",
		slug: "portfolio-website",
		description:
			"A modern, fast portfolio built using Next.js 15, Tailwind CSS, and TypeScript.",
		content:
			"This project showcases my skills in frontend development and responsive UI design. It’s fully optimized for SEO and performance.",
	},
	{
		title: "E-Commerce Dashboard",
		slug: "ecommerce-dashboard",
		description:
			"A React-based admin dashboard for managing products and orders.",
		content:
			"Built using Next.js and Recharts, this dashboard provides real-time insights with clean UI and secure APIs.",
	},
];

export async function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const project = projects.find((p) => p.slug === slug);
	if (!project) return notFound();

	return (
		<article className="max-w-3xl mx-auto space-y-6">
			<h1 className="text-4xl font-bold text-blue-600">{project.title}</h1>
			<p className="text-gray-600">{project.description}</p>
			<div className="pt-4 border-t border-gray-200">
				<p className="text-gray-700 leading-relaxed">{project.content}</p>
			</div>
		</article>
	);
}
