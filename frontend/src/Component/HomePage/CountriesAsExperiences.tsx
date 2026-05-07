

import { motion } from "framer-motion";
import { ArrowUpRight, Globe2 } from "lucide-react";

const countries = [
  {
    title: "UAE",
    desc: "Nurturing independence through tradition.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-600 to-indigo-900"
  },
  {
    title: "London",
    desc: "Global mobility and vibrant lifestyle.",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop",
    color: "from-orange-400 to-red-600"
  },
  {
    title: "USA",
    desc: "Cultural exposure and inclusive growth.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop",
    color: "from-red-500 to-red-900"
  },
  {
    title: "Paris",
    desc: "Emphasizing research and structure.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
    color: "from-yellow-500 to-orange-700"
  },
];

export default function CountriesAsExperiences() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">

        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <p className="  tracking-[0.2em] text-xs text-slate-500 font-bold">
                Countries as Experiences
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 leading-[1.1] mb-6">
              We Don’t Start With Countries.<br />
              <span className="text-blue-950">We Start With You.</span>
            </h2>
          </div>

          <div className="space-y-4 border-l-4 border-blue-950 pl-8">
            <p className="text-slate-600 text-lg leading-relaxed">
              Your career goals, personality, financial comfort, and long-term vision decide the destination — not trends.
            </p>
            <p className="text-slate-900 font-bold text-lg">
              Your destination should match who you are — and who you’re becoming.
            </p>
          </div>
        </div>

        {/* CIRCULAR CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* THE CIRCLE CONTAINER */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay (Transitions from bottom-up on hover) */}
                <div className={`absolute inset-0 bg-linear-to-b ${item.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <Globe2 className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" size={32} />

                  <h3 className="text-xl font-black   tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-37.5">
                    {item.desc}
                  </p>

                  <div className="mt-4 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>

              {/* Background Glow Effect */}
              <div className={`absolute -inset-2 bg-linear-to-r ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}