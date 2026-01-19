import ReactMarkdown from "react-markdown";

export const BlogPage = ({ title, date, tags, content }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full bg-[#fdf5e2] min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title || 'Untitled'}</h1>
          {date && (
            <time className="text-gray-600 text-lg block mb-4">
              {formatDate(date)}
            </time>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <article className="prose lg:prose-xl max-w-none">
          <ReactMarkdown>{content || ''}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};