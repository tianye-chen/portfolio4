import { useParams, Navigate } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { getBlogBySlug } from "./blogUtils";

export const BlogPost = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <BlogPage
      title={blog.title}
      date={blog.date}
      tags={blog.tags}
      content={blog.content}
    />
  );
};
