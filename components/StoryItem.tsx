import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StoryItemProps = {
	index: number;
	icon: IconProp;
	title: string;
	description: string;
};

export default function StoryItem({
	index,
	icon,
	title,
	description,
}: StoryItemProps) {
	return (
		<div
			data-aos="fade-up"
			data-aos-delay={index * 300}
			className="bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100% border border-gray-800 rounded-xl p-4 md:p-6 lg:p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
		>
			<div className="w-12 h-12 bg-neon/20 rounded-lg flex items-center justify-center mb-4">
				<FontAwesomeIcon icon={icon} color="#b6f500" />
			</div>
			<h3 className="text-xl font-bold text-gray-300 mb-3">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</div>
	);
}
