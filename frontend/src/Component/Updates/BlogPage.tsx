import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Import dummy images
import img1 from "../../assets/blog/dummy_blog_img1.jpg";
import img2 from "../../assets/blog/dummy_blog_img2.png";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const LOCAL_STORAGE_KEY = 'excelencia_blogs_cache';

export interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  meta?: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    longContent: string;
    schema: string;
  };
}

export const dummyBlogs: Blog[] = [
  {
    _id: "dummy1",
    slug: "missed-your-target-in-neet-re-neet-2026",
    title: "Missed Your Target in NEET? RE-NEET 2026 Gives You Another Chance",
    excerpt: "A lot of students want to be doctors and NEET is the big test they have to take. Every year many students take this test. They hope to do well but some of them do not get the score they want. If you are not happy with how you did on the test do not worry. RE-NEET 2026 gives students a chance to do better and get into a school.",
    categories: "RE-NEET",
    readTime: "5 min",
    date: "Jun 8, 2026",
    image: img1,
    content: "<p>A lot of students want to be doctors and NEET is the big test they have to take. Every year many students take this test. They hope to do well but some of them do not get the score they want. If you are not happy with how you did on the test do not worry. RE-NEET 2026 gives students a chance to do better and get into a school.</p><p>A lot of students want to be doctors and NEET is the big test they have to take. Every year many students take this test. They hope to do well but some of them do not get the score they want. If you are not happy with how you did on the test do not worry. RE-NEET 2026 gives students a chance to do better and get into a school.</p>"
  },
  {
    _id: "dummy2",
    slug: "mbbs-in-india-vs-mbbs-abroad-which-one-to-choose-in-2026",
    title: "MBBS In India Vs MBBS Abroad – Which One to Choose in 2026?",
    excerpt: "Picking up the right medical course is one of the biggest decisions that students have to take after passing their NEET exam. Every year, thousands of students go through MBBS in India vs MBBS abroad to pick up the best course for them. With fewer seats available in government colleges and high tuition fee structure in private institutions, more students are considering MBBS abroad for Indians as an effective and economic option.",
    categories: "NEET exam",
    readTime: "5 min",
    date: "May 22, 2026",
    image: img2,
    content: "<p>Picking up the right medical course is one of the biggest decisions that students have to take after passing their NEET exam. Every year, thousands of students go through MBBS in India vs MBBS abroad to pick up the best course for them. With fewer seats available in government colleges and high tuition fee structure in private institutions, more students are considering MBBS abroad for Indians as an effective and economic option.</p><br/><h3>MBBS In India Vs MBBS Abroad – Which One to Choose in 2026?</h3><p>Picking up the right medical course is one of the biggest decisions that students have to take after passing their NEET exam. Every year, thousands of students go through MBBS in India vs MBBS abroad to pick up the best course for them. With fewer seats available in government colleges and high tuition fee structure in private institutions, more students are considering MBBS abroad for Indians as an effective and economic option.</p>"
  }
];

const BlogPage = () => {
  // Initialize with cached blogs or dummy data to avoid blank screen while Render wakes up
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        // Only use cache if it's an array and has items (or if it's empty from API sync)
        if (Array.isArray(parsed)) return parsed.length > 0 ? parsed : dummyBlogs;
      } catch (e) {
        console.error("Failed to parse cached blogs", e);
      }
    }
    return dummyBlogs;
  });

  // Only show initial loading spinner if we don't have any blogs to show
  const [loading, setLoading] = useState(() => blogs.length === 0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/blogs`);
        const data = await res.json();
        if (data.success) {
          setBlogs(data.data);
          // Sync fresh data to localStorage
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data.data));
        } else {
          // If we have cached/dummy blogs, don't show an intrusive error, just fail silently
          if (blogs.length === 0) setError(data.message || 'Failed to load blogs');
        }
      } catch {
        if (blogs.length === 0) setError('Failed to fetch blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-20">

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-black flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80')" }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#c1972d] font-semibold tracking-wider uppercase mb-4 block"
          >
            Our Updates
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-white font-bold mb-6"
          >
            Insights &amp; News
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Discover the latest trends in global education, immigration updates, and success stories from our students.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-4 w-1/3 bg-gray-200 rounded" />
                  <div className="h-7 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && blogs.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
            <div className="text-5xl mb-4">📝</div>
            <p className="text-xl">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {/* Blog cards */}
        {!loading && !error && blogs.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

          >
            {blogs.map(blog => (
              <motion.div
                key={blog._id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
                className="bg-white rounded-xl overflow-hidden shadow-xl shadow-black/70 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 relative"
              >
                <Link to={`/updates/blog/${blog.slug || blog._id}`} className="absolute inset-0 z-10" aria-label={`Read ${blog.title}`} />
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </div>
                  )}
                  {blog.categories && (
                    <div className="absolute bottom-4 left-4 bg-[#c1972d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-20">
                      {blog.categories}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col grow">
                  <div className="flex items-center gap-3 text-black text-sm mb-3">
                    {blog.date && <span>{blog.date}</span>}
                    {blog.readTime && (
                      <>
                        <span className="w-1 h-1 bg-black rounded-full" />
                        <span>{blog.readTime}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-blue-950 mb-3 line-clamp-2 group-hover:text-[#c1972d] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-blue-950 mb-6 line-clamp-3 text-justify grow">
                    {blog.excerpt}
                  </p>

                  <div className="inline-flex items-center text-[#c1972d] font-semibold group-hover:text-black transition-colors mt-auto relative z-20">
                    Read Full Article
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default BlogPage;
