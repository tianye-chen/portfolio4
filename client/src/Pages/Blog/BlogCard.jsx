import { Link } from "react-router-dom";
import { ItemPill } from "../../Components/ItemPill";

export const BlogCard = ({ blog, formatDate, variant = "grid" }) => {
  const displayTags = blog.tags ? blog.tags.slice(0, 3) : [];
  const isHero = variant === "hero";
  const maxDescriptionLength = 300;

  if (isHero) {
    return (
      <Link
        to={`/blog/${blog.slug}`}
        className="group relative block h-full overflow-hidden rounded-3xl"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Content Overlay */}
        <div className="text-primary-text-contrast relative flex h-full flex-col justify-end p-8 md:p-12">
          {/* Date and Reading Time */}
          <div className="text-primary-text-contrast/90 mb-4 flex items-center gap-3 text-sm">
            {blog.date && (
              <time className="font-medium">{formatDate(blog.date)}</time>
            )}
            {blog.readingTime && (
              <>
                <span>•</span>
                <span>{blog.readingTime} min read</span>
              </>
            )}
          </div>

          {/* Title */}
          <h2 className="group-hover:text-tertiary-text-contrast mb-4 text-3xl font-bold transition-colors md:text-4xl lg:text-5xl">
            {blog.title}
          </h2>

          {/* Description */}
          {blog.descriptionPreview && (
            <p className="text-primary-text-contrast/90 mb-6 line-clamp-2 text-base md:text-lg">
              {blog.descriptionPreview}
            </p>
          )}

          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {displayTags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary-background/20 border-primary-background/30 rounded-full border px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
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
      className="group bg-primary-background block h-full overflow-hidden rounded-2xl pb-8 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex h-fit flex-col p-6">
        {/* Date and Reading Time */}
        <div className="text-secondary-text mb-3 flex items-center gap-3 text-sm">
          {blog.date && (
            <time className="font-medium">{formatDate(blog.date)}</time>
          )}
          {blog.readingTime && (
            <>
              <span>•</span>
              <span>{blog.readingTime} min read</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="text-primary-text group-hover:text-tertiary-text mb-3 text-xl font-bold transition-colors">
          {blog.title}
        </h2>

        {/* Description */}
        {blog.descriptionPreview && (
          <p className="text-secondary-text mb-4 flex-grow text-sm">
            {blog.descriptionPreview.length > maxDescriptionLength
              ? blog.descriptionPreview.slice(0, maxDescriptionLength) + " ..."
              : blog.descriptionPreview}
          </p>
        )}

        {/* Tags */}
        {displayTags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {displayTags.map((tag, index) => (
              <ItemPill key={index} item={tag} slateBase={true} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
