import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, Users, School } from "lucide-react";

const audiences = [
  {
    title: "Undergraduate Students",
    subtitle: "Start Your Journey",
    description: "Clear, structured guidance for high schoolers exploring global campuses.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJUIsfO5Qii7s1AHD-L8OVaq8B0hd2em4jQ&s",
    icon: <School className="w-6 h-6" />,
    color: "bg-blue-500",
  },
  {
    title: "Postgraduate Aspirants",
    subtitle: "Master Your Future",
    description: "Advanced study planning with a focus on career growth and global research.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCAsfFSCpaTxnK2mqmm0TzaPuqxCXNJaDxg&s",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "bg-indigo-600",
  },
  {
    title: "Working Professionals",
    subtitle: "Global Career Pivot",
    description: "Upskill or switch careers through specialized international programs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjB-taUsDcj48pLiChIivSJY6nxPeH19pqQ&s",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-emerald-600",
  },
  {
    title: "Parents Seeking Clarity",
    subtitle: "Peace of Mind",
    description: "Transparent roadmaps and financial confidence for your child's future.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4YEoF08gOieFBIvknc4P15_WmBYAYQ-LF0Q&s",
    icon: <Users className="w-6 h-6" />,
    color: "bg-amber-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};


const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
  },
};

export default function EnhancedAudiences() {
  return (
    <section className="relative py-12 bg-[#faf9f6] overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-150 h-150 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-[0.2em]   text-blue-900/60 mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-950/30"></span>
              Partners in Success
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif text-[#1a2b3b] leading-tight">
              Tailored expertise for <br />
              <span className="italic font-light text-blue-950">every ambition.</span>
            </h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-900 max-w-xs text-lg leading-relaxed border-l border-gray-200 pl-6"
          >
            Whether you're starting fresh or leveling up, our framework adapts to you.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative h-112.5 rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100"
            >
              {/* Image with Parallax-like scale */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#1a2b3b]/40 to-transparent opacity-80" />
              </div>

              {/* Top Icon Badge */}
              <div className="absolute top-6 left-6">
                <div className={`p-3 rounded-2xl backdrop-blur-md bg-blue-950 border border-white/20 text-white`}>
                  {item.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-8 transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                <p className="text-blue-950 text-xs font-bold   tracking-widest mb-2">
                  {item.subtitle}
                </p>
                <h4 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-white text-sm font-semibold overflow-hidden">
                  <span className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    Explore Path
                  </span>
                  <ArrowUpRight className="w-4 h-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-300" />
                </div>
              </div>

              {/* Decorative Border Glow */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}