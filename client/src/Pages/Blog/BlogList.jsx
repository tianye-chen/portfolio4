import { useState, useMemo, useEffect, useRef } from "react";
import { loadAllBlogs } from "./blogUtils";
import { HeroSlider } from "./HeroSlider";
import { BlogCard } from "./BlogCard";
import { Loading } from "../../Components/Loading";
import { IoIosArrowDown, IoMdCheckmark } from "react-icons/io";
import { RxReset } from "react-icons/rx";
import config from "../../config.json";

export const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropdownActive, setFilterDropdownActive] = useState(false);
  const [sortDropdownActive, setSortDropdownActive] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const blogsPerPage = 12;
  const filterRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterDropdownActive(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await loadAllBlogs();
        setAllBlogs(blogs);

        const tagCounts = {};
        blogs.forEach((blog) => {
          if (blog.tags) {
            blog.tags.forEach((tag) => {
              tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
          }
        });
        const sortedTags = Object.entries(tagCounts)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count);
        setTags(sortedTags);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchBlogDb = async () => {
      try {
        const res = await fetch("http://localhost:5050/");
        const data = await res.json();
        console.log("Blog DB Connection:", data);
      } catch (error) {
        console.error("Error connecting to Blog DB:", error);
      }
    }

    fetchBlogDb();
    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
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

  // Filter blogs based on selected tags
  const filteredBlogs = useMemo(() => {
    if (filterOptions.length === 0) return sortedBlogs;
    return sortedBlogs.filter((blog) =>
      filterOptions.every((tag) => blog.tags && blog.tags.includes(tag)),
    );
  }, [sortedBlogs, filterOptions]);

  // Get blogs for grid
  const gridBlogs = useMemo(() => {
    const heroCount =
      config.blog.displayHeroPosts || filterOptions.length > 0
        ? 0
        : Math.min(config.blog.heroCount, filteredBlogs.length);
    return filteredBlogs.slice(heroCount);
  }, [filteredBlogs, filterOptions]);

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

  const handleFilterClick = (tag) => {
    if (filterOptions.includes(tag)) {
      setFilterOptions(filterOptions.filter((t) => t !== tag));
    } else {
      setFilterOptions([...filterOptions, tag]);
    }
    setCurrentPage(1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="from-primary-background to-secondary-background min-h-screen w-full bg-gradient-to-b">
      {/* Hero Section */}
      <div className="w-full px-4 pt-2 md:px-2">
        <HeroSlider blogs={allBlogs} formatDate={formatDate} />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 pb-1 md:px-8">
        {/* Header with Sort */}
        <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-primary-text mb-4 text-3xl font-bold md:mb-0 md:text-4xl">
            All Posts
          </h2>
          <p></p>

          {/* Control Cluster*/}
          <div className="flex flex-row gap-4">
            {/* Sort */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Sort by:
              </label>
              <div className="relative flex gap-2" ref={sortRef}>
                <div
                  onClick={() => setSortDropdownActive(!sortDropdownActive)}
                  className={`bg-primary-background flex w-44 cursor-pointer items-center justify-between gap-2 rounded-lg border py-2 pl-4 text-gray-700 ring-2 transition-all select-none hover:ring-border-active hover:border-transparent ${sortDropdownActive ? "ring-border-active border-transparent" : "ring-transparent"}`}
                >
                  <span>
                    {sortOrder === "newest" ? "Newest First" : "Oldest First"}
                  </span>
                  <IoIosArrowDown
                    className={`${sortDropdownActive ? "rotate-180" : "rotate-0"} mr-2 transition-all`}
                  />
                </div>

                {/* Dropdown Menu */}
                <ul
                  className={`bg-primary-background border-border-active absolute top-full left-0 z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border px-1 py-2 ${sortDropdownActive ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"} origin-top-left transition-all`}
                >
                  <li
                    onClick={() => {
                      handleSortChange("newest");
                      setSortDropdownActive(false);
                    }}
                    className="hover:bg-primary-background-hover mb-2 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1 transition-colors"
                  >
                    <span className="select-none">Newest First</span>
                  </li>
                  <li
                    onClick={() => {
                      handleSortChange("oldest");
                      setSortDropdownActive(false);
                    }}
                    className="hover:bg-primary-background-hover mb-2 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1 transition-colors"
                  >
                    <span className="select-none">Oldest First</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Filter */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Filter by:
              </label>
              <div className="relative flex gap-2" ref={filterRef}>
                <div
                  onClick={() => setFilterDropdownActive(!filterDropdownActive)}
                  className={`bg-primary-background flex cursor-pointer items-center gap-2 rounded-lg border py-2 pl-4 text-gray-700 ring-2 transition-all select-none hover:ring-border-active hover:border-transparent ${filterDropdownActive ? "ring-border-active border-transparent" : "ring-transparent"}`}
                >
                  <span>{filterOptions.length}</span> Criteria{" "}
                  <IoIosArrowDown
                    className={`${filterDropdownActive ? "rotate-180" : "rotate-0"} mr-2 transition-all`}
                  />
                </div>

                {/* Dropdown Menu */}
                <ul
                  className={`bg-primary-background border-border-active absolute top-full left-0 z-10 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border px-1 py-2 ${filterDropdownActive ? "scale-100 opacity-100" : "pointer-events-none scale-75 opacity-0"} origin-top-left transition-all`}
                >
                  {tags.map((tag, index) => (
                    <li
                      key={index}
                      onClick={() => handleFilterClick(tag.name)}
                      className="hover:bg-primary-background-hover mb-2 flex cursor-pointer items-center gap-2 rounded-lg px-3 py-1 transition-colors"
                    >
                      <div
                        className={`flex h-4.5 items-center justify-center rounded transition-all ${filterOptions.includes(tag.name) ? "w-4.5" : "w-0"}`}
                      >
                        <IoMdCheckmark
                          className={`text-primary font-bold ${filterOptions.includes(tag.name) ? "opacity-100" : "opacity-0"} transition-opacity`}
                        />
                      </div>
                      <span
                        className={`${filterOptions.includes(tag.name) ? "font-semibold" : ""} select-none`}
                      >
                        {tag.name}
                      </span>
                      <span className="text-secondary-text ml-auto text-sm select-none">
                        {tag.count}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Reset Filters Button */}
                <button
                  onClick={() => {
                    setFilterOptions([]);
                    setCurrentPage(1);
                  }}
                  className="bg-primary-background hover:ring-border-active hover:border-transparent hover:ring-2 active:bg-secondary-background rounded-lg border p-2 text-gray-700 transition-all"
                  title="Reset Filters"
                >
                  <RxReset />
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-8">
          Hey there, welcome to my blog! This is where I like to write about
          anything that might come to my mind, be it my experiences, giving my
          opinion on certain topics, or just random thoughts in general. If you
          find it interesting or useful, that's great! If not, that's fine too,
          I just hope you enjoy your stay 💚!
        </p>

        {/* Blog Grid */}
        {paginatedBlogs.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-secondary-text text-lg">No blog posts found.</p>
          </div>
        ) : (
          <>
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  disabled={currentPage === 1}
                  className="bg-primary-background border-border-active hover:bg-secondary-background rounded-lg border px-4 py-2 text-gray-700 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
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
                          className={`rounded-lg px-4 py-2 transition-colors ${
                            currentPage === page
                              ? "bg-icon-background font-semibold text-white"
                              : "bg-primary-background border-border-active text-secondary-text hover:bg-secondary-background border"
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
                        <span key={page} className="text-secondary-text px-2">
                          ...
                        </span>
                      );
                    }
                    return null;
                  },
                )}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="bg-primary-background border-border-active text-secondary-text hover:bg-secondary-background rounded-lg border px-4 py-2 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
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
