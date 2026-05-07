
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import allfleg from "../../assets/allfleg.jpg"

export default function JourneyStepSection() {
  const steps = [
    "The Questioning Phase",
    "The Clarity Phase",
    "The Courage Phase",
    "The Commitment Phase",
    "The Becoming Phase",
  ];
const navigate = useNavigate();
  return (
    <section className="relative w-full bg-white overflow-hidden py-10">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="  tracking-[0.2em] text-blue-950 text-sm font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-blue-950"></span>
              Begin With Clarity
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-black text-blue-950 leading-[1.1] mb-6">
              Before You Cross Borders, <span className="text-[#c1972d]"> You Cross Doubt.</span>
            </h2>

            <p className="text-slate-600 leading-relaxed max-w-xl mb-6 text-md md:text-lg">
              Every student stands at the edge of uncertainty.
              Our role isn’t to push you forward — it’s to make sure you’re ready.
            </p>
          </motion.div>

          {/* Animated Steps List */}
          <ul className="space-y-5">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "backOut"
                }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="shrink-0 flex items-center  justify-center w-6 h-6 rounded-full bg-blue-950 text-white shadow-md shadow-blue-200 transition-colors group-hover:bg-slate-900"
                >
                  <Check size={14} strokeWidth={3} />
                </motion.span>
                <span className="text-slate-700 font-medium text-lg group-hover:text-blue-950 transition-colors duration-300">
                  {step}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Optional CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button
             onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-linear-to-r from-[#c1972d]  to-blue-950 text-white font-bold rounded-sm  transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:-translate-y-1">
              LEARN MORE ABOUT PROCESS
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE (With Floating & Glow Effect) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.4
          }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center items-center"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full h-100 lg:h-137.5"
          >
            <img
              src={allfleg}
              alt="Countries We Offer"
              className="w-full h-full object-contain "
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}