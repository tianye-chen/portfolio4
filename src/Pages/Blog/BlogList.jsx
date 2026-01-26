import { useState, useMemo, useEffect } from "react";
import { loadAllBlogs } from "./blogUtils";
import { HeroSlider } from "./HeroSlider";
import { BlogCard } from "./BlogCard";
import { Loading } from "../../Components/Loading";
import { IoIosArrowDown } from "react-icons/io";
import config from "../../config.json"

export const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdownActive, setFilterDropdownActive] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tags = ["lorem", "ipsum", "dolor", "sit", "amet",]
  const blogsPerPage = 12;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await loadAllBlogs();
        setAllBlogs(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Sort blogs based on selected order
  const sortedBlogs = useMemo(() => {
    const sorted = [...allBlogs];
    if (sortOrder === "newest") {
      return sorted.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date) - new Date(a.date);
      });
    } else {
      return sorted.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(a.date) - new Date(b.date);
      });
    }
  }, [allBlogs, sortOrder]);

  // Get blogs for grid
  const gridBlogs = useMemo(() => {
    const heroCount = config.blog.displayHeroPosts ? 0 : Math.min(config.blog.heroCount, sortedBlogs.length)
    return sortedBlogs.slice(heroCount);
  }, [sortedBlogs]);

  // Get blogs for current page
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    return gridBlogs.slice(startIndex, startIndex + blogsPerPage);
  }, [gridBlogs, currentPage]);

  // Calculate total pages (based on grid blogs, not including hero blogs)
  const totalPages = Math.ceil(gridBlogs.length / blogsPerPage);

  // Reset to page 1 when sort order changes
  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
    setCurrentPage(1);
  };

  const handleFilterClick = () => {

  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="w-full bg-gradient-to-b from-primary-background to-secondary-background min-h-screen">
      {/* Hero Section */}
      <div className="w-full px-4 md:px-2 pt-2">
        <HeroSlider blogs={allBlogs} formatDate={formatDate} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-1">
        {/* Header with Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4 md:mb-0">
            All Posts
          </h2>
          <p>
          </p>

          {/* Control Cluster*/}
          <div className="flex flex-row gap-4">
            {/* Sort */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-4 py-2 bg-primary-background border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-border-active focus:border-transparent cursor-pointer transition-all"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
            {/* Filter */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Filter by:</label>
              <div className="relative">
                <div
                  onClick={() => setFilterDropdownActive(!filterDropdownActive)}
                  className="pl-4 py-2 flex items-center gap-2 select-none bg-primary-background border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-border-active focus:border-transparent cursor-pointer transition-all">
                   {filterOptions.length} Criteria <span className="h-full pr-1"><IoIosArrowDown className={`h-full w-auto ${filterDropdownActive ? "rotate-180" : "rotate-0"} transition-all`}/></span>
                </div>
                <ul className={`absolute top-full left-0 bg-primary-background w-full z-10 border border-border-active rounded-lg p-2 max-h-48 overflow-y-auto mt-2 ${filterDropdownActive ? "opacity-100 scale-100" : "opacity-0 scale-75"} transition-all`}>
                  {tags.map((tag, index) => (
                    <li key={index} className="mb-2 hover:bg-primary-background-hover cursor-pointer transition-colors p-1 rounded-lg pl-3"> 
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
        <p className="mb-8">
          Hey there, welcome to my blog! This is where I like to write about anything that might come to my mind, be it my experiences, giving my opinion on certain topics, or just random thoughts in general. If you find it interesting or useful, that's great! If not, that's fine too, I just hope you enjoy your stay 💚!
        </p>

        {/* Blog Grid */}
        {paginatedBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-secondary-text text-lg">No blog posts found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedBlogs.map((blog) => (
                <BlogCard
                  key={blog.slug}
                  blog={blog}
                  formatDate={formatDate}
                  variant="grid"
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-primary-background border border-border-active rounded-lg text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary-background transition-colors"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page
                          ? "bg-icon-background text-white font-semibold"
                          : "bg-primary-background border border-border-active text-secondary-text hover:bg-secondary-background"
                          }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span key={page} className="px-2 text-secondary-text">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-primary-background border border-border-active rounded-lg text-secondary-text disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary-background transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
