import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface Blog {
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

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // If it looks like a MongoDB ObjectId (24-char hex), use /:id
        // Otherwise use /slug/:slug for clean URL slugs
        const isObjectId = /^[a-f\d]{24}$/i.test(id || '');
        const endpoint = isObjectId
          ? `${API_BASE}/blogs/${id}`
          : `${API_BASE}/blogs/slug/${id}`;

        const res = await fetch(endpoint);
        const data = await res.json();
        if (data.success) {
          setBlog(data.data);
        } else {
          setError(data.message || 'Blog not found');
        }
      } catch {
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  /* ── Loading state ── */
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white">
        {/* Skeleton hero */}
        <div className="w-full h-[60vh] md:h-[75vh] bg-gray-200 animate-pulse" />
        <div className="max-w-3xl mx-auto px-4 py-16 space-y-4">
          <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="mt-8 space-y-3">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-4 bg-gray-100 rounded animate-pulse ${i === 3 ? 'w-5/6' : 'w-full'}`} />)}
          </div>
        </div>
      </div>
    );
  }

  /* Error / Not Found state */
  if (error || !blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-6">😕</div>
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-6">{error || 'The article you are looking for does not exist.'}</p>
        <Link to="/updates/blog" className="text-[#c1972d] flex items-center gap-2 hover:underline font-semibold">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <Helmet>
        <title>{blog.meta?.title || blog.title || "Blog Post"}</title>
        {blog.meta?.description && <meta name="description" content={blog.meta.description} />}
        {blog.meta?.keywords && <meta name="keywords" content={blog.meta.keywords} />}
        {blog.meta?.canonical && <link rel="canonical" href={blog.meta.canonical} />}
        {blog.meta?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: blog.meta.schema.replace(/<script.*?>|<\/script>/gi, '').trim()
            }}
          />
        )}
      </Helmet>

      {/* ── Article Hero ── */}
      <section className="relative w-full  overflow-hidden bg-slate-950">
        {blog.image ? (
          <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] overflow-hidden">
            {/* Hero Image */}
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={blog.image}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-fill object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

            {/* Top Bar Back Button */}
            <div className="absolute top-8 left-0 right-0 z-20">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <Link
                  to="/updates/blog"
                  className="inline-flex items-center text-white border border-white/80 bg-blue-950/40 px-7 py-2 rounded-full transition-all duration-300 hover:bg-blue-950 hover:border-white group"
                >
                  <ArrowLeft
                    size={16}
                    className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Back to all articles
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-end z-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-8 lg:pb-12"
              >
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-5">
                  {blog.categories && (
                    <span className="bg-[#c1972d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {blog.categories}
                    </span>
                  )}

                  {blog.date && (
                    <span className="text-white/90 text-sm">
                      {blog.date}
                    </span>
                  )}

                  {blog.readTime && (
                    <span className="text-white/90 text-sm">
                      • {blog.readTime}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-bold text-white leading-tight max-w-6xl">
                  {blog.title}
                </h1>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-[50vh] md:h-[65vh] bg-gradient-to-br from-blue-950 to-[#c1972d]/60">
            {/* Top Bar Back Button */}
            <div className="absolute top-8 left-0 right-0 z-20">
              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <Link
                  to="/updates/blog"
                  className="inline-flex items-center text-white border border-white/80 bg-blue-900/80 px-3 py-2 rounded-full transition-all duration-300 hover:bg-blue-950 hover:border-white group"
                >
                  <ArrowLeft
                    size={16}
                    className="mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                  />
                  Back to all articles
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 absolute inset-x-0 bottom-0 pb-8 md:pb-16"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {blog.categories && (
                  <span className="bg-[#c1972d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {blog.categories}
                  </span>
                )}

                {blog.date && (
                  <span className="text-white/90 text-sm">
                    {blog.date}
                  </span>
                )}

                {blog.readTime && (
                  <span className="text-white/90 text-sm">
                    • {blog.readTime}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight max-w-5xl">
                {blog.title}
              </h1>
            </motion.div>
          </div>
        )}
      </section>

      {/* ── Article Content ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
      >
        {blog.excerpt && (
          <p className="text-xl text-gray-600 font-serif italic mb-10">
            {blog.excerpt}
          </p>
        )}

        <div
          className="blog-content text-gray-700 font-serif leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {blog.meta?.longContent && (
          <div
            className="hidden"
            dangerouslySetInnerHTML={{ __html: blog.meta.longContent }}
          />
        )}
      </motion.section>

      {/* ── Bottom Buttons & Call to Action ── */}
      <section className=" px-4 sm:px-6 pb-24">
        
        {/* Premium Back to Articles Button with hover slide arrow animation */}
        <div className="flex justify-center mb-6">
          <Link
            to="/updates/blog"
            className="inline-flex items-center gap-2.5 px-10 py-2 rounded-full border-2 border-slate-500 text-slate-700 hover:text-white hover:bg-blue-950 hover:border-blue-950 transition-all duration-300 font-serif font-semibold shadow-sm hover:shadow-md group hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1.5 text-[#c1972d]" />
            Back to Articles
          </Link>
        </div>

        {/* Premium bottom MBBS Counseling Card in Excelenicia colors */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-950  to-[#c1972d]  p-4 md:p-8 text-center text-white shadow-2xl group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c1972d]/10 rounded-full blur-3xl -z-10" />

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 tracking-tight">
            Start Your MBBS Journey Today
          </h2>

          <p className="text-white max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed font-serif font-light">
            Get expert counseling, university selection support, seamless admission guidance, and complete visa assistance from Excelenicia counselors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="bg-white text-blue-950 hover:bg-slate-50 hover:scale-102 active:scale-98 px-10 py-2 rounded-full font-serif font-bold text-sm tracking-wide shadow-md transition-all duration-300"
            >
              Free Consultation
            </Link>

            <Link
              to="/updates/blog"
              className="border-2 border-white/90 text-white hover:bg-white/10 hover:scale-102 active:scale-98 px-10 py-2 rounded-full font-serif font-bold text-sm tracking-wide transition-all duration-300"
            >
              Read More Updates
            </Link>
          </div>
        </div>
      </section>

      {/* ── Scoped styles for blog content ── */}
      <style>{`
        .blog-content {
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .blog-content h1 { font-size: 2.25rem; font-weight: 700; font-family: Georgia, serif; margin-top: 2rem; margin-bottom: 1rem; color: #1e293b; line-height: 1.2; }
        .blog-content h2 { font-size: 1.875rem; font-weight: 700; font-family: Georgia, serif; margin-top: 1.75rem; margin-bottom: 0.85rem; color: #1e293b; line-height: 1.25; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 600; font-family: Georgia, serif; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #1e293b; }
        .blog-content h4 { font-size: 1.25rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.65rem; color: #1e293b; }
        .blog-content p { margin-bottom: 1.25rem; }
        .blog-content ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 2rem 0; }
        .blog-content a { color: #c1972d; text-decoration: underline; }
        .blog-content a:hover { color: #1e293b; }
        .blog-content blockquote { border-left: 4px solid #cbd5e1; padding-left: 1.5rem; font-style: italic; margin: 1.5rem 0; color: #475569; }
        .blog-content pre { background: #f1f5f9; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; font-size: 0.9rem; }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; display: block; overflow-x: auto; }
        .blog-content table td, .blog-content table th { border: 1px solid #e2e8f0; padding: 0.75rem; text-align: left; }
        .blog-content table th { background: #f8fafc; font-weight: 600; }
        .blog-content iframe, .blog-content video { max-width: 100%; border-radius: 12px; margin: 2rem 0; }
        @media (max-width: 768px) {
          .blog-content { font-size: 1rem; }
          .blog-content h1 { font-size: 1.75rem; }
          .blog-content h2 { font-size: 1.5rem; }
          .blog-content h3 { font-size: 1.25rem; }
        }
      `}</style>
    </div>
  );
};

export default BlogPostPage;
