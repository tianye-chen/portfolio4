import { useParams, Navigate } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { getBlogBySlug } from "./blogUtils";
import { useEffect, useState } from "react";

export const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setBlog(await getBlogBySlug(slug));
        console.log(blog)
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlog();
  }, [slug])

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
