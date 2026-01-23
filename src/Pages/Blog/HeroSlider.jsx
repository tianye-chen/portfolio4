import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import config from "../../config.json"

export const HeroSlider = ({ blogs, formatDate }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const featuredBlogs = blogs.slice(0, config.blog.heroCount);

	useEffect(() => {
		if (featuredBlogs.length <= 1) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % featuredBlogs.length);
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(interval);
	}, [featuredBlogs.length]);

	if (featuredBlogs.length === 0) return null;

	return (
		<div className="relative w-full h-[60vh] mb-12 rounded-3xl overflow-hidden shadow-2xl">
			{/* Slider Container */}
			<div className="relative h-full">
				{featuredBlogs.map((blog, index) => (
					<div
						key={blog.slug}
						className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
							}`}
					>
						<BlogCard blog={blog} formatDate={formatDate} variant="hero" />
					</div>
				))}
			</div>

			{/* Navigation Dots */}
			{featuredBlogs.length > 1 && (
				<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
					{featuredBlogs.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
								? "bg-hero-nav/50 backdrop-blur-2xl w-8 hover:w-9"
								: "bg-hero-nav/25 hover:bg-hero-nav/50 hover:backdrop-blur-2xl hover:w-4"
								}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}

			{/* Navigation Arrows */}
			{featuredBlogs.length > 1 && (
				<>
					<button
						onClick={() =>
							setCurrentIndex(
								(prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length
							)
						}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-hero-nav/25 backdrop-blur-xs hover:bg-hero-nav/50 hover:backdrop-blur-xl rounded-full p-3 shadow-lg transition-all duration-300"
						aria-label="Previous slide"
					>
						<svg
							className="w-6 h-6 text-primary-text-contrast"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						onClick={() =>
							setCurrentIndex((prev) => (prev + 1) % featuredBlogs.length)
						}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-hero-nav/25 backdrop-blur-xs hover:bg-hero-nav/50 hover:backdrop-blur-xl rounded-full p-3 shadow-lg transition-all duration-300"
						aria-label="Next slide"
					>
						<svg
							className="w-6 h-6 text-primary-text-contrast"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</>
			)}
		</div>
	);
};
