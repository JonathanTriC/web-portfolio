export const metadata = {
	title: "About Me | MyPortfolio",
	description: "Learn more about me and what I do.",
};

export default function AboutPage() {
	return (
		<section className="max-w-2xl mx-auto space-y-6">
			<h1 className="text-4xl font-bold text-gray-900">About Me</h1>
			<p className="text-gray-600">
				Hello! I’m Jonathan, a full-stack developer who enjoys building user-focused
				digital products. My background includes working with technologies like
				React, Next.js, Tailwind CSS, and Node.js.
			</p>
			<p className="text-gray-600">
				I’m always learning and experimenting with new tools to improve my craft and
				deliver better experiences.
			</p>
		</section>
	);
}
