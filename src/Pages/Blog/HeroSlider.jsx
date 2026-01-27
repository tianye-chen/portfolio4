import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import config from "../../config.json";

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
    <div className="relative mb-12 h-[60vh] w-full overflow-hidden rounded-3xl shadow-2xl">
      {/* Slider Container */}
      <div className="relative h-full">
        {featuredBlogs.map((blog, index) => (
          <div
            key={blog.slug}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <BlogCard blog={blog} formatDate={formatDate} variant="hero" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {featuredBlogs.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 transform gap-2">
          {featuredBlogs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-hero-nav/50 w-8 backdrop-blur-2xl hover:w-9"
                  : "bg-hero-nav/25 hover:bg-hero-nav/50 hover:w-4 hover:backdrop-blur-2xl"
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
                (prev) =>
                  (prev - 1 + featuredBlogs.length) % featuredBlogs.length,
              )
            }
            className="bg-hero-nav/25 hover:bg-hero-nav/50 absolute top-1/2 left-4 z-20 -translate-y-1/2 transform rounded-full p-3 shadow-lg backdrop-blur-xs transition-all duration-300 hover:backdrop-blur-xl"
            aria-label="Previous slide"
          >
            <svg
              className="text-primary-text-contrast h-6 w-6"
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
            className="bg-hero-nav/25 hover:bg-hero-nav/50 absolute top-1/2 right-4 z-20 -translate-y-1/2 transform rounded-full p-3 shadow-lg backdrop-blur-xs transition-all duration-300 hover:backdrop-blur-xl"
            aria-label="Next slide"
          >
            <svg
              className="text-primary-text-contrast h-6 w-6"
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
