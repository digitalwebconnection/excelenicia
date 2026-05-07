
import { motion } from "framer-motion";
import { CheckCircle, HeartHandshake, ShieldCheck } from "lucide-react";

export default function   HowWeDefineSuccess() {
  return (
    <section className="relative w-full bg-[#fdf1ea] overflow-hidden">
      <div className=" py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Image container */}
          <div className="relative w-115 h-150">
            <img
              src="https://solverwp.com/demo/html/travhub/assets/images/resources/feature-3-1.png"
              alt="Student Success Journey"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* RIGHT DARK PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#1c1c1c] text-white rounded-[120px_0_0_120px] p-12 lg:p-16"
        >
          {/* Small label */}
          <p className="text-[#c1972d] italic font-semibold mb-4">
            How We Define Success
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-8">
            Success is not only an offer letter  
            <span className="text-[#c1972d]"> or visa approval.</span>
          </h2>

          {/* Feature list */}
          <div className="space-y-6">
            {[
              {
                title: "Prepared Students",
                desc: "A student who departs prepared — academically, emotionally, and practically.",
                icon: CheckCircle,
              },
              {
                title: "Assured Families",
                desc: "A family that feels confident, informed, and supported throughout the journey.",
                icon: HeartHandshake,
              },
              {
                title: "Confident Decisions",
                desc: "A decision made with clarity and confidence — never with regret.",
                icon: ShieldCheck,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start gap-4 p-4 rounded-xl
                             hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-950 text-white
                                  group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing statement */}
          <p className="mt-10 text-white/80 leading-relaxed max-w-xl">
            That is the outcome we work toward — every conversation,
            every recommendation, and every step of the way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
