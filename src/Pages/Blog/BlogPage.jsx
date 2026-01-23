import ReactMarkdown from "react-markdown";
import { ItemPill } from "../../Components/ItemPill"

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
    <div className="w-full bg-secondary-background min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title || 'Untitled'}</h1>
          {date && (
            <time className="text-secondary-text text-lg block mb-4">
              {formatDate(date)}
            </time>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                  <ItemPill key={index} item={tag} />
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