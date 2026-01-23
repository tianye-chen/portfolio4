import { useParams, Navigate } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { getBlogBySlug } from "./blogUtils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { Loading } from "../../Components/Loading";

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
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, [slug])

  if (isLoading) {
    return (    
      <Loading />
    )
  }

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="w-full bg-secondary-background min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-secondary-text hover:text-primary-text mb-8 transition-colors group"
        >
          <HiArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="-translate-y-0.5">Back to blog</span>
        </Link>

        <BlogPage
          title={blog.title}
          date={blog.date}
          tags={blog.tags}
          content={blog.content}
        />
      </div>
    </div>
  );
};
