import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const items = [
  {
    id: "01",
    title: "Student Visa Guidance",
    text: "Assistance With Admission, Documentation, And Visa Application Assistance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf-BzXAvmgkxiqZSe2VNjjb3aKHKFc_if7A&s"
  },
  {
    id: "02",
    title: "PTE Exam Preparation",
    text: "We Provide Expert Guidance And Personalized Support Throughout The Education Visa Process,",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "University Selection",
    text: "We Provide Expert Guidance And Personalized Support Throughout The Education Visa Process,",
    image: "https://www.collegedhundo.com/images/service/univ.jpg"
  },
  {
    id: "04",
    title: "IELTS Exam Preparation",
    text: "We Provide Expert Guidance And Personalized Support Throughout The Education Visa Process,",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  }
];

export default function VisaSolutions() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-14 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center text-blue-950 tracking-tight  "
        >
          Comprehensive Visa Solutions
        </motion.h2>

        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group border-b border-gray-100 last:border-none"
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Image Preview - Positioned relative to the row */}
              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.9 }}
                    className="hidden lg:block absolute left-40 top-1/2 -translate-y-1/2 w-72 h-44 z-30 rounded-xl overflow-hidden shadow-2xl pointer-events-none"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Row */}
              <div className={`
                transition-colors duration-300 px-4 py-10 flex flex-col md:flex-row items-start md:items-center gap-6
                ${active === item.id ? 'bg-[#f8f9fa]' : 'bg-transparent'}
              `}>
                
                {/* ID & Title */}
                <div className="flex items-center gap-8 md:w-1/3">
                  <span className="text-xl font-bold text-gray-800">{item.id}</span>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:w-1/2">
                  <p className="text-gray-500 leading-relaxed max-w-md">
                    {item.text}
                  </p>
                </div>

                {/* Link */}
                <div className="md:w-1/6 flex justify-end">
                  <button className="flex items-center gap-2 text-blue-950 font-semibold transition-colors">
                    <span className="text-sm">Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}