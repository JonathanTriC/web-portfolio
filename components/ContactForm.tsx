"use client";

import { useState } from "react";
import { File, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log("Form submitted:", formData);

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					firstName: formData.firstName,
					lastName: formData.lastName,
					email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			)
			.then(() => {
				alert("Message sent successfully!");
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					subject: "",
					message: "",
				});
			})
			.catch((err) => {
				console.error("Email error:", err);
				alert("Failed to send message");
			});
	};

	return (
		<div className="bg-black text-white flex items-center justify-center p-4 sm:p-6 lg:p-8">
			<div className="w-full max-w-6xl">
				{/* Header */}
				<div data-aos="fade-up" className="text-center mb-12 lg:mb-16">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
						Get In <span className="text-neon">Touch</span>
					</h1>
					<p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
						Ready to start your next project? Let’s discuss how we can bring your
						vision to life. I’m here to help you create something extraordinary.
					</p>
				</div>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Left Column - Contact Info */}
					<div data-aos="zoom-in-left">
						<h2 className="text-2xl sm:text-3xl font-bold text-neon mb-8 sm:mb-12">
							Let’s Connect
						</h2>

						{/* Contact Items */}
						<div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
							<div className="flex items-start gap-4">
								<div className="bg-neon rounded-full p-3 shrink-0">
									<Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
								</div>
								<div>
									<h3 className="text-gray-300 text-sm sm:text-base mb-1">Email</h3>
									<p className="text-white text-base sm:text-lg">
										hello@jonathantri.com
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="bg-neon rounded-full p-3 shrink-0">
									<MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
								</div>
								<div>
									<h3 className="text-gray-300 text-sm sm:text-base mb-1">Location</h3>
									<p className="text-white text-base sm:text-lg">Jakarta, Indonesia</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="bg-neon rounded-full p-3 shrink-0">
									<File className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
								</div>
								<div>
									<h3 className="text-gray-300 text-sm sm:text-base mb-1">
										Curriculum Vitae
									</h3>
									<a
										href="https://drive.google.com/file/d/1OySnrx-3O_MRu8WH9uqlOKjsh3NqckDP/view?usp=sharing"
										target="_blank"
										className="text-neon text-base underline sm:text-lg"
									>
										Download My CV
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Form */}
					<div
						data-aos="zoom-in-right"
						className="bg-gray-900 bg-linear-to-tl from-transparent from-20% to-background to-100% border border-gray-800 rounded-xl hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10 p-6 sm:p-8 lg:p-10"
					>
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
								<div>
									<label
										htmlFor="firstName"
										className="block text-sm sm:text-base text-gray-300 mb-2"
									>
										First Name
									</label>
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										placeholder="Your first name"
										className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon transition-colors"
									/>
								</div>
								<div>
									<label
										htmlFor="lastName"
										className="block text-sm sm:text-base text-gray-300 mb-2"
									>
										Last Name
									</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										placeholder="Your last name"
										className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon transition-colors"
									/>
								</div>
							</div>

							{/* Email */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm sm:text-base text-gray-300 mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Your email address"
									className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon transition-colors"
								/>
							</div>

							{/* Subject */}
							<div>
								<label
									htmlFor="subject"
									className="block text-sm sm:text-base text-gray-300 mb-2"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder="Project Inquiry"
									className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon transition-colors"
								/>
							</div>

							{/* Message */}
							<div>
								<label
									htmlFor="message"
									className="block text-sm sm:text-base text-gray-300 mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell me about your project..."
									rows={6}
									className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon transition-colors resize-none"
								></textarea>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-neon hover:bg-neon/80 hover:scale-105 text-black font-semibold py-3 sm:py-4 px-6 rounded-lg transition duration-300"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
