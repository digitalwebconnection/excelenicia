import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { blogs } from "./BlogPage";

const BlogPostPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
        <Link to="/updates/blog" className="text-[#c1972d] flex items-center hover:underline">
          <ArrowLeft className="mr-2" size={18} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Article Hero */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-end pb-16 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full"
        >
          <Link to="/updates/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform duration-300" size={16} /> Back to all articles
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#c1972d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {blog.category}
            </span>
            <span className="text-gray-300 text-sm">{blog.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight">
            {blog.title}
          </h1>
        </motion.div>
      </section>

      {/* Article Content */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 py-16"
      >
        <div 
          className="max-w-none text-gray-700 leading-relaxed space-y-6 [&>h2]:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-2xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:mb-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </motion.section>
    </div>
  );
};

export default BlogPostPage;
