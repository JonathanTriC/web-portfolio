import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {
	const testimonials = [
		{
			quote:
				"I had the opportunity to work with Jonathan for two years while I was in the role of QA. Jonathan is a skilled, communicative, and highly collaborative mobile developer. He is always open to feedback, quick to address issues, and consistently delivers quality work. Working with him has always been a professional and enjoyable experience.",
			author: "Danu Mulya",
			position: "Quality Assurance at Kelas Pintar",
		},
		{
			quote:
				"Working with Jonathan has been a really enjoyable experience during my time as QA. He’s a proactive and communicative mobile developer who’s always open to feedback and fast in fixing issues. I also appreciate how he likes to research new methods or ideas to make our work better. His consistency and clarity truly support a smoother collaboration between dev and QA.",
			author: "Hanifah Sholihat",
			position: "Quality Assurance at bookingtogo",
		},
		{
			quote:
				"Working with Jonathan always feels effortless. He communicates clearly, understands needs quickly, and delivers fast without ever compromising quality. Even when the requirements get complicated, he stays calm and consistently finds the best solution.",
			author: "Destha Mukti",
			position: "UI/UX Designer at bookingtogo",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			nextTestimonial();
		}, 3000);

		return () => clearInterval(interval);
	}, [currentIndex, isPaused]);

	const current = testimonials[currentIndex];

	return (
		<div className="flex items-center justify-center p-8">
			<div className="max-w-7xl w-full">
				<div
					className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					{/* Left Column */}
					<div data-aos="zoom-in-right" className="text-center md:text-left">
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-300 mb-6">
							What They Say About Me
						</h2>
						<p className="text-neon text-lg mb-8">
							Hear from my colleagues about our work together and the impact we’ve made
							as a team.
						</p>

						{/* Progress Indicators */}
						<div className="flex gap-2 mb-6">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`h-1 rounded-full transition-all ${
										index === currentIndex
											? "bg-neon w-8"
											: "bg-gray-600 w-4 hover:bg-gray-500"
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>

						{/* Navigation Arrows */}
						<div className="flex gap-3">
							<button
								onClick={prevTestimonial}
								className="w-12 h-12 rounded-full bg-indigo-100 hover:scale-110 flex items-center justify-center transition"
								aria-label="Previous testimonial"
							>
								<ChevronLeft className="w-6 h-6 text-zinc-800" />
							</button>
							<button
								onClick={nextTestimonial}
								className="w-12 h-12 rounded-full bg-neon hover:scale-110 flex items-center justify-center transition"
								aria-label="Next testimonial"
							>
								<ChevronRight className="w-6 h-6 text-zinc-800" />
							</button>
						</div>
					</div>

					{/* Right Column - Testimonial */}
					<div data-aos="zoom-in-left">
						{/* Quote Icon */}
						<div className="mb-6">
							<svg
								className="w-12 h-12 text-neon"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
							</svg>
						</div>

						<div className="h-102 md:h-98 overflow-y-auto">
							{/* Testimonial Text */}
							<blockquote className="text-lg md:text-2xl text-center md:text-right font-medium text-gray-300 mb-8 leading-relaxed">
								{current.quote}
							</blockquote>

							{/* Author Info */}
							<div className="flex justify-end items-center gap-4">
								<div className="text-base text-right">
									<div className="font-semibold text-neon">{current.author}</div>
									<div className="text-neon">{current.position}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
