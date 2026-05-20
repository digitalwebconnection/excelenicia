import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const blogs = [
  {
    id: 1,
    title: "How to Choose the Right University for You",
    excerpt: "Discover the key factors to consider when selecting a university abroad, from location and campus culture to academic reputation and tuition costs.",
    category: "Education",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    content: `
      <h2>The Importance of Research</h2>
      <p>Choosing a university is one of the biggest decisions you'll ever make. It's not just about academics; it's about finding a place where you can thrive personally and professionally.</p>
      <h3>Location Matters</h3>
      <p>Consider whether you want to live in a bustling metropolis or a quiet college town. Each offers a unique experience. City universities often provide more networking opportunities, while smaller towns might offer a tighter-knit community.</p>
      <h3>Academic Reputation</h3>
      <p>Look beyond overall rankings. Investigate the specific department for your intended major. Who are the professors? What kind of research are they doing?</p>
      <h3>Campus Culture</h3>
      <p>Visit campuses if possible, or take virtual tours. Talk to current students. Ensure the university's values align with your own.</p>
    `
  },
  {
    id: 2,
    title: "Navigating the Student Visa Process",
    excerpt: "A comprehensive guide to understanding and successfully applying for a student visa, avoiding common pitfalls and ensuring a smooth transition.",
    category: "Immigration",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80",
    content: `
      <h2>Understanding Visa Requirements</h2>
      <p>The student visa application process can seem daunting, but breaking it down into manageable steps makes it much easier.</p>
      <h3>Start Early</h3>
      <p>The most common mistake students make is waiting too long to begin the process. Start gathering documents as soon as you receive your acceptance letter.</p>
      <h3>Financial Proof</h3>
      <p>You must demonstrate that you have sufficient funds to cover your tuition and living expenses. This usually requires official bank statements.</p>
      <h3>The Interview</h3>
      <p>If an interview is required, be prepared to clearly explain your academic goals and your intention to return to your home country after graduation (depending on the visa type).</p>
    `
  },
  {
    id: 3,
    title: "Top 5 Destinations for International Students in 2026",
    excerpt: "Explore the most popular countries for studying abroad this year, highlighting their unique benefits, top universities, and post-graduation opportunities.",
    category: "Study Abroad",
    date: "April 10, 2026",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    content: `
      <h2>Where to Go?</h2>
      <p>The world is your oyster when it comes to studying abroad. Here are some of the top destinations for 2026.</p>
      <h3>1. United Kingdom</h3>
      <p>Known for its prestigious universities and rich history, the UK remains a top choice. The new post-study work visa makes it even more attractive.</p>
      <h3>2. Canada</h3>
      <p>Canada offers high-quality education, a welcoming multicultural society, and excellent pathways to permanent residency.</p>
      <h3>3. Australia</h3>
      <p>With its fantastic weather, laid-back lifestyle, and world-class institutions, Australia is a perennial favorite.</p>
    `
  }
];

const BlogPage = () => {
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
            Insights & News
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

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#c1972d] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col grow">
                <span className="text-gray-500 text-sm mb-3 block">{blog.date}</span>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 grow">
                  {blog.excerpt}
                </p>
                <Link 
                  to={`/updates/blog/${blog.id}`}
                  className="inline-flex items-center text-[#c1972d] font-semibold hover:text-black transition-colors"
                >
                  Read Full Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;
