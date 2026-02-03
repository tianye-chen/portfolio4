import { useState } from "react";
import { BlogPage } from "./BlogPage";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

export const Editor = () => {
  const [title, setTitle] = useState("");
  const [secret, setSecret] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [content, setContent] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [postFailed, setPostFailed] = useState(false);

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const charCount = content.length;

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handlePost = () => {
    const query = {
      title,
      description,
      tags: tags,
      content,
      secret,
    };

    fetch("/api/blog/post", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(query)
    })
    .then(response => {
      if (response.ok) {
        setShowSuccessPopup(true);
        setPostFailed(false);
      } else {
        setPostFailed(true);
      }
    })
  };

  return (
    <div className="bg-secondary-background flex h-screen w-full overflow-hidden">
      {/* Left Side: Editor */}
      <div className="border-border-active bg-primary-background flex w-1/2 flex-col gap-6 overflow-y-auto border-r p-8">
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="text-secondary-text hover:text-primary-text group inline-flex items-center transition-colors"
          >
            <HiArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="-translate-y-0.5">Back</span>
          </Link>
          <h2 className="text-primary-text text-3xl font-bold">Editor</h2>
        </div>

        {/* Title */}
        <div>
          <label className="text-secondary-text mb-2 block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-border-active bg-primary-background text-primary-text placeholder:text-secondary-text focus:border-tertiary-text focus:ring-tertiary-text w-full rounded-lg border px-4 py-3 shadow-sm focus:ring-1 focus:outline-none"
            placeholder="Enter blog title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-secondary-text mb-2 block text-sm font-medium">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-border-active bg-primary-background text-primary-text placeholder:text-secondary-text focus:border-tertiary-text focus:ring-tertiary-text w-full rounded-lg border px-4 py-3 shadow-sm focus:ring-1 focus:outline-none"
            placeholder="Enter short description"
            rows={3}
          />
        </div>

        {/* Tags */}
        <div>
          <label className="text-secondary-text mb-2 block text-sm font-medium">
            Tags
          </label>
          <div className="border-border-active bg-primary-background focus-within:border-tertiary-text focus-within:ring-tertiary-text flex flex-wrap gap-2 rounded-lg border px-4 py-3 shadow-sm focus-within:ring-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary-background text-primary-text border-border-active inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-medium"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-secondary-text hover:text-primary-text ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full focus:outline-none"
                >
                  <span className="sr-only">Remove tag</span>
                  &times;
                </button>
              </span>
            ))}
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              className="text-primary-text placeholder:text-secondary-text flex-1 border-none bg-transparent p-0 text-sm focus:ring-0 focus:outline-none"
              placeholder={tags.length === 0 ? "Type tag and press Enter" : ""}
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-grow flex-col">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-secondary-text block text-sm font-medium">
              Content (Markdown)
            </label>
            <span className="text-secondary-text text-xs">
              {wordCount} words | {charCount} characters
            </span>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-border-active bg-primary-background text-primary-text placeholder:text-secondary-text focus:border-tertiary-text focus:ring-tertiary-text w-full flex-grow resize-none rounded-lg border px-4 py-3 font-mono text-sm shadow-sm focus:ring-1 focus:outline-none"
            placeholder="# Write your content here..."
          />
        </div>

        {/* Post Button */}
        <div className="mt-2 flex items-center">
          <button
            onClick={handlePost}
            disabled={!secret}
            className="bg-tertiary-text disabled:bg-secondary-text text-primary-background inline-flex justify-center rounded-lg border border-transparent px-6 py-3 text-sm font-bold shadow-sm hover:cursor-pointer hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Post
          </button>
          <input
            type="text"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="border-border-active bg-primary-background text-primary-text placeholder:text-secondary-text focus:border-tertiary-text focus:ring-tertiary-text rounded-lg border px-4 py-2 ml-4 shadow-sm focus:ring-1 focus:outline-none"
          />
          {postFailed && <div className="text-bad-text ml-4 text-sm"> 
            Post failed 
          </div>}
        </div>
      </div>

      {/* Right Side: Preview */}
      <div className="bg-secondary-background w-1/2 overflow-y-auto p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-primary-text text-3xl font-bold">Preview</h2>
        </div>
        <div className="bg-primary-background min-h-[calc(100vh-8rem)] rounded-lg p-8 shadow-lg">
          <BlogPage
            title={title}
            date={new Date().toISOString()}
            tags={tags}
            content={content}
          />
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-primary-background border-border-active w-full max-w-md rounded-2xl border p-10 shadow-2xl">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <FaCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-primary-text mb-5 text-center text-2xl font-bold">
              Success!
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="text-secondary-text hover:text-primary-text px-4 py-2 font-medium transition-colors"
              >
                Continue Editing
              </button>
              <Link
                to="/blog"
                className="bg-tertiary-text text-primary-background rounded-lg px-6 py-2 font-bold transition-opacity hover:opacity-90"
              >
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
