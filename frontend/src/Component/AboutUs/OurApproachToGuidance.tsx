import { motion } from "framer-motion";
import { Check, Award, ShieldCheck, Star } from "lucide-react";

const awards = [
  {
    year: "2020",
    title: "Best Consulting",
    subtitle: "The Best Choice",
    icon: <Star className="w-8 h-8 text-white" />,
  },
  {
    year: "2022",
    title: "Visa Guarantee",
    subtitle: "100% Guaranteed",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    year: "2018",
    title: "Quality Management",
    subtitle: "Premium Quality",
    icon: <Award className="w-8 h-8 text-white" />,
  },
];

const checkmarks = [
  "Professional Consultants",
  "100% Guarantee Approvals",
  "Affordable Fees",
];

export default function AgencyAwards() {
  return (
    <section
      className="
        relative py-18 overflow-hidden text-white
        bg-fixed bg-cover bg-center
      "
      style={{
        backgroundImage:
          "url('https://onhisowntrip.com/wp-content/uploads/2024/11/uk.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />

      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-12 bg-[#c1972d]" />
            <p className="text-xs tracking-[0.3em] text-gray-400   font-bold">
              They Trust Us
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
            Our Agency <span className="text-[#c1972d]">Awards</span> &  Achievements
          </h2>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed">
                We're Trusted by{" "}
                <span className="text-[#c1972d] font-bold">68,000+</span>{" "}
                Satisfied Clients Across the World for Best Visa & Immigration.
              </p>
            </div>

            <div className="flex-1 space-y-3">
              {checkmarks.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-md bg-blue-950 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#c1972d]" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Award Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="
                group relative flex flex-col items-center
                bg-[#111111]/90 backdrop-blur-lg
                p-8 rounded-xl border border-white/5
                hover:border-blue-950/40
                transition-all duration-500 shadow-2xl
              "
            >
              <span className="text-[10px] tracking-widest text-gray-500   mb-6 font-bold">
                {award.year} Award
              </span>

              {/* Seal Badge */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-blue-950/40 rounded-full"
                />

                <div className="absolute inset-1 bg-linear-to-r from-[#c1972d] to-blue-950 rounded-full shadow-[0_0_25px_rgba(23,37,84,0.6)] flex items-center justify-center">
                  <div className="border-2 border-white/30 rounded-full p-2">
                    {award.icon}
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-bold text-center mb-2">
                {award.title}
              </h4>
              <p className="text-[10px] text-gray-400   tracking-tight">
                {award.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
