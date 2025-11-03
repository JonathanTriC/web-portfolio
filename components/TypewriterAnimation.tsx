"use client";

import Typewriter from "typewriter-effect";

type TypewriterAnimationProps = {
	strings: string[];
};

export default function TypewriterAnimation({
	strings,
}: TypewriterAnimationProps) {
	return (
		<div data-aos="zoom-in" data-aos-delay="300" className="text-center mt-6">
			<div className="relative inline-block text-md md:text-lg font-semibold">
				{/* Gradient text */}
				<div className="text-transparent bg-clip-text bg-linear-to-r from-[#b6f500] via-[#d4ff75] to-[#b6f500] drop-shadow-[0_0_10px_#b6f500]">
					<Typewriter
						options={{
							strings,
							autoStart: true,
							loop: true,
							delay: 50,
							deleteSpeed: 30,
							cursor: "|",
						}}
					/>
				</div>

				{/* Custom visible cursor */}
				<span className="absolute right-0 top-0 text-gray-300 animate-pulse">
					|
				</span>
			</div>
		</div>
	);
}
