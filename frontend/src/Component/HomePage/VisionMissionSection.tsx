import { motion } from "framer-motion";
import { Globe, Target, ShieldCheck, Shield, Users, Zap } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <>
      <section className="grid md:grid-cols-2 overflow-hidden">

        {/* ================= VISION ================= */}
    
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white text-blue-950 flex px-10 md:px-22 py-8  shadow-amber-600 shadow-2xl transition-all"
        >
          <div className="max-w-xl">

            <span className="text-md tracking-[0.15em]   font-bold text-[#c1972d] drop-shadow-sm">
              Excelencia International
            </span>

            <div className="flex items-center gap-4 mt-6 mb-6">

              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Globe size={34} className="text-blue-700 drop-shadow-lg" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-blue-950 drop-shadow-md">
                Our Vision
              </h2>

            </div>

            <p className="text-md md:text-lg text-justify leading-relaxed text-blue-950 drop-shadow-sm">
              At <a href="/">Excelencia International</a>, our vision is to be a globally recognized leader in international education and immigration services.
              We strive to simplify the complexities of studying abroad so that students can embark on their academic journeys with clarity and confidence.
              We envision a future where every student, regardless of background, has access to quality guidance, seamless processes, and the support they need
              to thrive in world-class universities and secure international opportunities.
            </p>

            <div className="mt-10 w-24 h-0.75 bg-linear-to-r from-blue-700 to-[#c1972d] shadow-md"></div>

          </div>
        </motion.div>


        {/* ================= MISSION ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.6 }}
          className="relative bg-blue-950 text-white flex items-center px-7 md:px-15 py-10 shadow-2xl shadow-black hover:shadow-2xl"
        >

          {/* background glow */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-950 via-blue-900 to-blue-950 opacity-80"></div>

          <div className="relative max-w-xl">

            <div className="flex items-center gap-4 mb-6">

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Target size={34} className="text-[#c1972d] drop-shadow-xl" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#c1972d] drop-shadow-lg">
                Our Mission
              </h2>

            </div>

            <p className="text-md text-justify   md:text-lg text-white/90 mb-8 drop-shadow-sm">
              Our mission at Excelencia International is to empower every student with personalized,
              ethical, and professional support as they pursue educational and career goals overseas.
            </p>

            <div className="space-y-5 text-justify">

              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 bg-[#c1972d] text-black rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition">
                  1
                </div>
                <p className="text-white/90  group-hover:text-white transition">
                  Providing accurate and transparent guidance through every stage of admissions and immigration.
                </p>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 bg-[#c1972d] text-black rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition">
                  2
                </div>
                <p className="text-white/90 group-hover:text-white transition">
                  Helping students make informed decisions about countries, universities, and visa pathways.
                </p>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-8 h-8 bg-[#c1972d] text-black rounded-full flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition">
                  3
                </div>
                <p className="text-white/90 group-hover:text-white transition">
                  Delivering exceptional service rooted in integrity, expertise, and commitment.
                </p>
              </div>

            </div>

            <div className="flex gap-3 pt-5 md:pt-10 mt-10 border-t border-white/20">
              <ShieldCheck className="text-[#c1972d] drop-shadow-md" />
              <p className="italic text-white/80 drop-shadow-sm">
                Turning global education dreams into real opportunities.
              </p>
            </div>

          </div>

        </motion.div>

      </section>

      <CoreValuesSection />
    </>
  );
}


const values = [
  {
    title: "Integrity",
    desc: "We uphold honesty and ethical practices in all interactions, ensuring trust remains the foundation of our relationships.",
    icon: Shield
  },
  {
    title: "Transparency",
    desc: "We communicate clearly and openly, guiding students through every process with complete clarity and confidence.",
    icon: Target
  },
  {
    title: "Precision",
    desc: "Every recommendation and action we take is informed, accurate, and tailored to your unique profile.",
    icon: Users
  },
  {
    title: "Student-Centric Support",
    desc: "Your goals are our priority we listen, customize our approach, and walk with you at every stage of your global journey.",
    icon: Zap
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d]"
          >
            Our <span className="text-blue-950">Core Values</span>
          </motion.h2>
          <p className="mt-6 max-w-5xl text-md md:text-lg mx-auto text-blue-950">
            At the heart of <b>Excelencia International</b> lie four core values that define how we serve our clients and operate as an organization.
          </p>
        </div>

        {/* Value Cards */}
        <div className="space-y-7 md:space-y-14 max-w-7xl mx-auto">
          {values.map((value, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex w-full ${isLeft ? "justify-start" : "justify-end"}`}
              >
                {/* The Card */}
                <div className="relative w-full md:w-[90%] bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200 border border-slate-900/40">

                  {/* Floating Icon Holder */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-17 h-17 md:w-34 md:h-34 bg-linear-to-r from-[#c1972d]  to-blue-950 text-white rounded-full shadow-lg flex items-center justify-center border-8 border-[#f7f3e6] transition-transform duration-500 group-hover:scale-110 z-20
                      ${isLeft ? "-right-8 md:-right-18" : "-left-8 md:-left-18"}
                    `}
                  >
                    <value.icon size={102} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className={`max-w-5xl ${isLeft ? "text-left" : "text-left md:ml-auto ps-6"}`}>

                    <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-2 font-serif ">
                      {value.title}
                    </h3>
                    <p className="text-blue-950 text-md md:text-lg leading-relaxed">
                      {value.desc}
                    </p>
                  </div>

                  {/* Decorative background number */}
                  <span className="absolute bottom-6 right-10 text-8xl font-black text-slate-50 select-none pointer-events-none">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}