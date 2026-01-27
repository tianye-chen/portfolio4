import { useParams, Navigate } from "react-router-dom";
import { BlogPage } from "./BlogPage";
import { getBlogBySlug } from "./blogUtils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { Loading } from "../../Components/Loading";

export const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setBlog(await getBlogBySlug(slug));
        console.log(blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (isLoading) {
    return <Loading />;
  }

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-secondary-background min-h-screen w-full px-4 py-8">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          to="/blog"
          className="text-secondary-text hover:text-primary-text group mb-8 inline-flex items-center transition-colors"
        >
          <HiArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
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
