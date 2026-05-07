
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import image from "../../assets/imranji.png"
export default function EducationTurningPoint() {
  return (
    <section className="relative bg-white py-24 px-6 lg:px-0 overflow-visible">
      <div className=" ">
        <div className="relative">

          {/* MAIN BLUE PILL CONTAINER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[95%] bg-blue-950 rounded-[60px] lg:rounded-r-full  flex flex-col lg:flex-row items-center overflow-hidden lg:overflow-visible px-8 lg:px-14 py-16 lg:py-10"
          >

            {/* LEFT CONTENT SIDE */}
            <div className="z-20 w-full lg:w-4/5 text-white">
              {/* Double dash indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                  <div className="h-4 w-0.75 bg-white/30 rounded-full" />
                  <div className="h-4 w-0.75 bg-white rounded-full" />
                </div>
                <span className="text-xs font-bold   tracking-[0.2em]">
                  15+ Years of Proven Expertise
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-serif font-extrabold leading-[1.1] mb-8">
                More Than Consulting  <br />
                <span className="text-[#c1972d]"> — Genuine Counselling.</span>
              </h2>

              <div className="space-y-4 mb-10 max-w-3xl">
                <p className="text-lg lg:text-xl font-medium text-blue-50">
                  Education does more than shape careers. It shapes perspective, resilience, and the way one understands the world.
                </p>
                <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                  Extensive experience in global education consulting enables Imran to guide students through every stage of their study abroad journey. Strategic counselling, ethical guidance, and focused planning form the foundation of Excelencia’s success.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-10">
                <motion.button

                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-blue-950 px-10 py-4 rounded-full font-bold transition-all shadow-xl flex items-center gap-2 text-sm   tracking-wider"
                >
                  Explore Study Abroad
                  <ArrowUpRight size={18} />
                </motion.button>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <Phone className="text-white fill-white" size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70   font-bold tracking-widest">Questions?</p>
                    <p className="text-lg font-bold text-white tracking-tight">+91 97697 87211</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE AREA - BREAKING THE BOUNDARIES */}
            <div className="relative lg:absolute lg:right-18 lg:bottom-12 w-full lg:w-[45%] h-full flex justify-center items-end">

              {/* Professional Spokesperson - Transparent background PNG recommended */}
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: true }}
                src={image}
                alt="Global Education Expert"
                className="relative z-20 h-125 lg:h-120  object-contain transform lg:translate-y-12 drop-shadow-[-20px_20px_50px_rgba(0,0,0,0.3)]"
              />

              {/* FLOATING "BEST QUALITY" BADGE - EXACTLY AS IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute left-0 lg:-left-1  z-30 bg-white rounded-2xl px-5 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center gap-4 border border-gray-50"
              >
                <div className="relative">
                  <div className="bg-[#FF9C07] p-3 rounded-full">

                  </div>
                  <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
                </div>
                <div>

                  <p className="text-xs font-black text-gray-900   tracking-tighter">Imran, Director</p>
                </div>
              </motion.div>

            </div>

            {/* BACKGROUND DECORATIVE SHAPE (The lighter arc/cirlce) */}
            <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-white/10 to-transparent rounded-l-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}