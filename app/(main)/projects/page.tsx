import Link from "next/link";

const projects = [
	{
		title: "Portfolio Website",
		slug: "portfolio-website",
		description: "A modern portfolio built with Next.js and Tailwind CSS.",
	},
	{
		title: "E-Commerce Dashboard",
		slug: "ecommerce-dashboard",
		description: "Admin dashboard with charts and product management tools.",
	},
];

export const metadata = {
	title: "Projects | MyPortfolio",
	description: "View all my latest projects and works.",
};

export default function ProjectsPage() {
	return (
		<section className="max-w-3xl mx-auto space-y-6">
			<h1 className="text-4xl font-bold text-gray-900">Projects</h1>
			<p className="text-gray-600">Here are some of my recent works:</p>

			<div className="grid gap-6">
				{projects.map((p) => (
					<Link
						key={p.slug}
						href={`/projects/${p.slug}`}
						className="block border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
					>
						<h2 className="text-2xl font-semibold text-blue-600">{p.title}</h2>
						<p className="text-gray-600 mt-2">{p.description}</p>
					</Link>
				))}
			</div>
		</section>
	);
}
