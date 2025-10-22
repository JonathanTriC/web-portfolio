import Link from "next/link";

export default function HomePage() {
	return (
		<section className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-6">
			<h1 className="text-5xl font-bold text-gray-900">Hi, I’m Jonathan 👋</h1>
			<p className="text-lg text-gray-600 max-w-xl">
				I’m a passionate developer who loves crafting beautiful web experiences.
				Check out my projects or learn more about me below!
			</p>

			<div className="flex gap-4">
				<Link
					href="/about"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
				>
					About Me
				</Link>
				<Link
					href="/projects"
					className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
				>
					View Projects
				</Link>
			</div>
		</section>
	);
}
