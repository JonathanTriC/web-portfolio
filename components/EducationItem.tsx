type EducationItemProps = {
	index: number;
	title: string;
	school: string;
	duration: string;
};

export default function EducationItem({
	index,
	title,
	school,
	duration,
}: EducationItemProps) {
	return (
		<div
			data-aos="fade-up"
			data-aos-delay={index * 300}
			className="bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100% border border-gray-800 rounded-xl p-4 md:p-6 lg:p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
		>
			<h4 className="font-bold text-white mb-1">{title}</h4>
			<p className="text-neon text-sm mb-1">{school}</p>
			<p className="text-gray-500 text-sm">{duration}</p>
		</div>
	);
}
