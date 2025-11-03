import clsx from "clsx";
import Image from "next/image";

type JourneyItemProps = {
	icon: string;
	title: string;
	description: string;
	items: string[];
	index: number;
	isLast: boolean;
};

const JourneyItem = ({
	icon,
	title,
	description,
	items,
	index,
	isLast,
}: JourneyItemProps) => {
	return (
		<div
			data-aos="fade-up"
			key={index}
			className="relative flex gap-4 md:gap-6 lg:gap-8"
		>
			{/* Timeline line */}
			<div className="relative flex flex-col items-center">
				<div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-neon flex items-center justify-center z-10 shrink-0">
					<Image
						src={icon}
						alt={`logo-${title?.toLowerCase()}`}
						width={26}
						height={0}
						priority
					/>
				</div>
				<div className="w-0.5 bg-neon/30 flex-1 absolute top-10 md:top-12 lg:top-14 bottom-0" />
			</div>

			{/* Content card */}
			<div className={clsx("flex-1 self-start", !isLast && "pb-8 md:pb-12")}>
				<div className="bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100% border border-gray-800 rounded-xl p-4 md:p-6 lg:p-8 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10">
					<h3 className="text-neon text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3">
						{title}
					</h3>
					<p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4 md:mb-6">
						{description}
					</p>
					<ul className="space-y-2 md:space-y-3">
						{items.map((item, idx) => (
							<li key={idx} className="flex items-center gap-2 md:gap-3">
								<span className="text-neon shrink-0 text-lg md:text-xl">•</span>
								<span className="text-gray-400 text-sm md:text-base">{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

const Journey = () => {
	const journeyData = [
		{
			icon: "/images/flutter-logo.png",
			title: "Flutter",
			description: "Started my journey with Google's Flutter framework",
			items: [
				"Cross-platform mobile development",
				"Dart programming language mastery",
				"Material Design implementation",
			],
		},
		{
			icon: "/images/swift-logo.png",
			title: "Swift",
			description: "Dive deep into native iOS development",
			items: [
				"Native iOS app development",
				"SwiftUI and UIKit expertise",
				"App Store Publishing",
			],
		},
		{
			icon: "/images/rn-logo.png",
			title: "React Native",
			description: "Embraced JavaScript-based mobile development",
			items: [
				"JavaScript/TypeScript proficiency",
				"Cross-platform efficiency",
				"Component-based architecture",
			],
		},
	];

	return (
		<div className="py-8 md:py-12 lg:py-16">
			<div className="relative">
				{journeyData.map((item, index) => (
					<JourneyItem
						key={index}
						index={index}
						icon={item.icon}
						title={item.title}
						description={item.description}
						items={item.items}
						isLast={index === journeyData.length - 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Journey;
