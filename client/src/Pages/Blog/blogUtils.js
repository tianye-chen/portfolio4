import matter from 'front-matter';

// Dynamically import all markdown files from the Content directory as raw text
const blogModules = import.meta.glob('./Content/*.md', { eager: true, query: '?raw', import: 'default' });

/**
 * Calculate reading time based on word count
 * @param {string} content - The blog content
 * @returns {number} Estimated reading time in minutes
 */
const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

/**
 * Load and parse all blog markdown files
 * @returns {Array} Array of blog objects with { slug, title, date, tags, content, image, readingTime }
 */
export const loadAllBlogs = async () => {
  const blogs = [];

  const res = await fetch('/.netlify/functions/api/blog/get');
  const data = await res.json();

  for (const blog of data) {
    const content = blog.content.trim()
    const readingTime = calculateReadingTime(content);
    const slug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    blogs.push({
      slug,
      title: blog.title || 'Untitled',
      date: blog.createdAt || '',
      tags: Array.isArray(blog.tags) ? blog.tags : [],
      descriptionPreview: blog.description || '',
      image: blog.image || await fetchRandomImg(blog.title),
      content: content,
      readingTime: readingTime,
    });

  }

  console.log(blogs);

  //for (const path in blogModules) {
  //  const fileContent = blogModules[path];
//
  //  // Parse frontmatter and content
  //  const { attributes, body } = matter(fileContent);
//
  //  // Extract slug from filename
  //  const slug = path
  //    .split('/')
  //    .pop()
  //    .replace(/\.md\?raw$/, '');
//
  //  const content = body.trim();
  //  const readingTime = calculateReadingTime(content);
//
  //  blogs.push({
  //    slug,
  //    title: attributes.title || 'Untitled',
  //    date: attributes.date || '',
  //    tags: Array.isArray(attributes.tags) ? attributes.tags : [],
  //    descriptionPreview: attributes.descriptionPreview || '',
  //    image: attributes.image || await fetchRandomImg(attributes.title),
  //    content: content,
  //    readingTime: readingTime,
  //  });
  //}

  // Sort by date (newest first) by default
  return blogs.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });
};

/**
 * Get a single blog by slug
 * @param {string} slug - The blog slug
 * @returns {Object|null} Blog object or null if not found
 */
export const getBlogBySlug = async (slug) => {
  const blogs = await loadAllBlogs();
  return blogs.find(blog => blog.slug == slug) || null;
};

/**
 * Gets a random image
 * @param {string} seed - Seed used to get a predetermined image
 * @returns {string|null} Image url or null if fetch was not successful
 */
const fetchRandomImg = async (seed = "random") => {
  const url = `https://picsum.photos/seed/${seed}/1920/1080`
  try {
    const res = await fetch(url)
    if (res.ok) {
      return res.url
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
