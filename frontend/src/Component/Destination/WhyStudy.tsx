 
import { motion } from "framer-motion";
import { GraduationCap, Timer, Briefcase, Globe, Handshake, Building2 } from "lucide-react";

interface Point {
  title: string;
  description: string;
  image: string;
  full: string;
  emoji?: string;
}

interface SectionProps {
  data: {
    title: string;
    intro?: string;
    points: Point[];
  };
}

const icons = [
  <GraduationCap key="1" />,
  <Timer key="2" />,
  <Briefcase key="3" />,
  <Globe key="4" />,
  <Handshake key="5" />,
  <Building2 key="6" />,
];

// Variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Variants for text elements
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const WhyStudy = ({ data }: SectionProps) => {
  return (
    <section className="py-20 bg-linear-to-b from-white via-blue-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#c1972d] font-serif mb-4 max-w-3xl mx-auto">
            {data.title}
          </h2>
          {data.intro && (
            <div 
              className="text-blue-950 text-lg max-w-6xl mx-auto intro-content"
              dangerouslySetInnerHTML={{ __html: data.intro }}
            />
          )}
        </motion.div>

        {/*CONTENT*/}
        <div className="space-y-14">
          {data.points.map((item, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-12 items-center font-serif"
            >

              {/* IMAGE CONTAINER */}
              <motion.div
                className={`relative ${index % 2 !== 0 ? "md:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl group relative">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* FLOATING ICON */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-5 -left-4 bg-blue-950 text-white w-14 h-14 flex items-center justify-center text-xl rounded-xl shadow-lg z-10"
                >
                  {item.emoji || icons[index % icons.length]}
                </motion.div>
              </motion.div>

              {/* TEXT CONTENT */}
              <div className={index % 2 !== 0 ? "md:pr-10" : "md:pl-10"}>
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold text-[#c1972d] mb-4"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="text-blue-950   mb-4 font-semibold uppercase tracking-wide text-sm"
                >
                  {item.description}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="why-study-content text-blue-950 text-justify leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: item.full }}
                />

                {/* Visual accent line */}
                <motion.div
                  variants={itemVariants}
                  className="h-1 w-12 bg-[#c1972d] mt-6 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;