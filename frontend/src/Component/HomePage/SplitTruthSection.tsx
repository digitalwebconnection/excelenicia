import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const whatWeDo = [
  "We guide students honestly",
  "We advise based on career goals",
  "We support every step of the journey",
];

const whatWeDont = [
  "We never pressure students",
  "We don't decide for you",
  "We don't sell unrealistic dreams",
];

export default function SplitTruthSection() {
  return (
    <section className="relative py-14 bg-slate-950 overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000')",  backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}/>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
            Honest Guidance.
            <span className="text-[#c1972d]"> No Hidden Agendas.</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Our goal is simple — help students make informed decisions
            about their international education.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-12 relative">

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/10" />

          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md"
          >
            <h3 className="text-[#c1972d] text-xl md:text-2xl font-bold mb-8">
              What We Do
            </h3>

            <ul className="space-y-6">
              {whatWeDo.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white text-md md:text-lg">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="text-green-400 w-5 h-5" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What We Don't */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md"
          >
            <h3 className="text-red-400 text-xl md:text-2xl font-bold mb-8">
              What We Don't Do
            </h3>

            <ul className="space-y-6">
              {whatWeDont.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white text-md md:text-lg">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="text-red-400 w-5 h-5" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <div className="inline-block px-10 py-4 rounded-full bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-semibold text-md md:text-lg shadow-xl">
            Our role is to help students choose wisely — not quickly.
          </div>
        </motion.div>

      </div>
    </section>
  );
}