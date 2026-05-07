import { motion } from "framer-motion";
import { Plane, GraduationCap, MapPin, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function ImmigrationHero() {
  const navigate = useNavigate();
  return (
    <section className="relative h-160 w-full overflow-hidden bg-blue-950 pt-24 pb-12 lg:pt-12">

      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10  px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c1972d]/10 border border-[#c1972d]/30 text-[#c1972d] text-sm font-bold  tracking-wide"
            >
              <Star className="w-4 h-4 fill-[#c1972d]" />
              98% Visa Success Rate in 2025
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1]"
            >
              Study Abroad. <br />
              <span className="text-[#c1972d]">Shape Your Future.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0"
            >
              Expert guidance for Student Visas, University Admissions, and
              Test Prep. Join 5,000+ students already studying in the UK, USA, Canada, and Australia.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center bg-white/95 backdrop-blur p-2 rounded-2xl shadow-xl max-w-xl"
            >
              <div className="flex items-center gap-3 px-4 py-2  w-full border-b sm:border-b-0 sm:border-r border-slate-200">
                <MapPin className="text-[#c1972d] w-5 h-5" />
                <select className="bg-transparent text-slate-700 font-medium outline-none w-full appearance-none">
                  <option>Select Destination</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>USA</option>
                  <option>Australia</option>
                </select>
              </div>

              <button
               onClick={() => navigate("/contact")}
              className="w-full sm:w-auto bg-[#c1972d] text-blue-950 px-8 py-2 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all ml-0 sm:ml-2 mt-2 sm:mt-0">
                Get Free Consultation
              </button>
            </motion.div>

            {/* Trust Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-[#c1972d]" /> Student Visa
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-[#c1972d]" /> Free Education
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-[#c1972d]" /> End-to-End Visa Support
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/5 relative h-112.5 md:h-137.5"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-4xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-[#c1972d]/20">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                alt="Student Abroad"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Visa Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
            >
              <div className="bg-[#c1972d]/20 p-2 rounded-full">
                <Plane className="w-6 h-6 text-[#c1972d]" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold  ">Visa Status</p>
                <p className="text-sm font-bold text-slate-800 italic">Approved: Canada 🇨🇦</p>
              </div>
            </motion.div>

            {/* University Card */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-4 bottom-20 bg-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
            >
              <div className="bg-[#c1972d]/20 p-2 rounded-full">
                <GraduationCap className="w-6 h-6 text-[#c1972d]" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold  ">Enrollment</p>
                <p className="text-sm font-bold text-slate-800 italic">800+ Partner Unis</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}