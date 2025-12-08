type ExperienceItemProps = {
	index: number;
	title: string;
	company: string;
	duration: string;
	desc: string;
	tools: string[];
};

export default function ExperienceItem({
	index,
	title,
	company,
	duration,
	desc,
	tools,
}: ExperienceItemProps) {
	return (
		<div
			data-aos="fade-up"
			data-aos-delay={index * 300}
			className="bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100% border border-gray-800 rounded-xl p-4 md:p-6 lg:p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
		>
			<div className="flex flex-wrap justify-between items-start mb-4">
				<div>
					<h3 className="text-xl font-bold text-gray-300 mb-1">{title}</h3>
					<p className="text-neon">{company}</p>
				</div>
				<span className="bg-gray-800 px-4 py-1 rounded text-sm">{duration}</span>
			</div>
			<p className="text-gray-400 mb-4">{desc}</p>
			<div className="flex flex-wrap gap-2">
				{tools?.map((item, index) => (
					<span
						key={index}
						className="bg-neon/20 text-neon px-3 py-1 rounded text-sm"
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}
