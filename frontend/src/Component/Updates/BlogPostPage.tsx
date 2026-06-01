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
        <div className="w-full h-[50vh] bg-gray-200 animate-pulse" />
        <div className="max-w-3xl mx-auto px-4 py-16 space-y-4">
          <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
          <div className="mt-8 space-y-3">
            {[1,2,3,4,5].map(i => <div key={i} className={`h-4 bg-gray-100 rounded animate-pulse ${i === 3 ? 'w-5/6' : 'w-full'}`} />)}
          </div>
        </div>
      </div>
    );
  }

  /* ── Error / Not Found state ── */
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
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-end pb-16 overflow-hidden">
        {blog.image ? (
          <>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-[#c1972d]/60" />
        )}

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
        >
          <Link
            to="/updates/blog"
            className="inline-flex items-center text-white hover:text-white border border-white bg-blue-900/80 px-2 py-1 rounded-full mb-10 transition-colors text-sm font-medium group hover:border border-white hover:px-2 hover:rounded-full hover:py-1 hover:bg-blue-950"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300 " size={16} />
            Back to all articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            {blog.categories && (
              <span className="bg-[#c1972d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {blog.categories}
              </span>
            )}
            {blog.date && <span className="text-white text-sm">{blog.date}</span>}
            {blog.readTime && <span className="text-white text-sm">· {blog.readTime}</span>}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight">
            {blog.title}
          </h1>
        </motion.div>
      </section>

      {/* ── Article Content ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-16"
      >
        {blog.excerpt && (
          <p className="text-xl text-gray-600 italic mb-10">
            {blog.excerpt}
          </p>
        )}

        <div
          className="blog-content text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

          {blog.meta?.longContent && (
          <div
            className="hidden"
            dangerouslySetInnerHTML={{ __html: blog.meta.longContent }}
          />
        )}
      </motion.section>

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
