import { Link } from "react-router-dom";

export const BlogCard = ({ blog, formatDate, variant = "grid" }) => {
  const displayTags = blog.tags ? blog.tags.slice(0, 3) : [];
  const isHero = variant === "hero";

  if (isHero) {
    return (
      <Link
        to={`/blog/${blog.slug}`}
        className="group block h-full relative overflow-hidden rounded-3xl"
      >
        {/* Background Image */}
        {blog.image ? (
          <div className="absolute inset-0">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500" />
        )}

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
          {/* Date and Reading Time */}
          <div className="flex items-center gap-3 text-sm text-white/90 mb-4">
            {blog.date && (
              <time className="font-medium">
                {formatDate(blog.date)}
              </time>
            )}
            {blog.readingTime && (
              <>
                <span>•</span>
                <span>{blog.readingTime} min read</span>
              </>
            )}
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-amber-200 transition-colors">
            {blog.title}
          </h2>

          {/* Description */}
          {blog.descriptionPreview && (
            <p className="text-base md:text-lg text-white/90 mb-6 line-clamp-2">
              {blog.descriptionPreview}
            </p>
          )}

          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {displayTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 h-full"
    >
      {/* Image */}
      {blog.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
          <span className="text-4xl">📝</span>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Date and Reading Time */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          {blog.date && (
            <time className="font-medium">
              {formatDate(blog.date)}
            </time>
          )}
          {blog.readingTime && (
            <>
              <span>•</span>
              <span>{blog.readingTime} min read</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-amber-700 transition-colors">
          {blog.title}
        </h2>

        {/* Description */}
        {blog.descriptionPreview && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
            {blog.descriptionPreview}
          </p>
        )}

        {/* Tags */}
        {displayTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {displayTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-medium border border-amber-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
