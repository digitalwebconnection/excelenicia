import { motion } from "framer-motion"
import { Globe, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function WhyWeWorkWithStudents() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6">

      {/* Background Decorative Blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: IMAGE STACK DESIGN (Matching your reference) */}
        <div className="relative h-110 md:h-150">

          {/* Top-Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-2/3 aspect-4/5 z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
              alt="Student"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Bottom-Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 right-0 h-70 md:h-120 w-2/3 aspect-4/5 z-20 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="https://ex-coders.com/html/visaway/assets/img/home-1/about/about-02.jpg"
              alt="Counseling Session"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Passports/Tickets icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 z-30 w-24 md:w-32 opacity-90 drop-shadow-lg"
          >
            <div className="bg-[#c1972d] p-2 rounded-lg -rotate-12 absolute top-0 right-0 shadow-md">
              <Globe className="text-white w-8 h-8 opacity-50" />
            </div>
            <div className="bg-blue-950 p-2 rounded-lg rotate-12 absolute top-4 right-6 shadow-md border border-white/20">
              <Globe className="text-white w-8 h-8 opacity-50" />
            </div>
          </motion.div>

          {/* Floating Plane Illustration at bottom left */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 0.4 }}
            className="absolute -bottom-10 -left-10 z-0 pointer-events-none"
          >
            <svg width="300" height="200" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50 L180 20" stroke="currentColor" strokeWidth="0.5" className="text-gray-300" strokeDasharray="4 4" />
              <path d="M10 80 Q 50 10 190 40" stroke="currentColor" strokeWidth="1" className="text-gray-200" fill="none" />
            </svg>
          </motion.div>


        </div>

        {/* RIGHT: CONTENT (Unchanged design, updated icons) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 text-blue-950 text-md font-medium tracking-wide">
            About Our Consultancy
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-6  ">
            Every Approval Letter <span className="text-blue-950"> Has A Journey Behind It</span>
          </h2>

          <p className="text-blue-950 text-justify  text-md md:text-lg mb-10 max-w-xl">
            What you see is a visa stamp.
            What we see is months of preparation, planning, clarity, and confidence.

            We work behind the scenes — refining SOPs, correcting documentation, preparing you for interviews, reviewing every detail twice — so that nothing is left to chance.
          </p>

          {/* Feature points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {[
              {
                title: "Global Reach-",
                desc: "Expanding Opportunities Worldwide",
                icon: Globe
              },

            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-blue-950" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-950 leading-tight">{item.title}</h3>
                  <p className="text-xs text-gray-800">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="space-y-4 mb-4 md:mb-8">
            <li className="flex items-center gap-3 text-blue-950 font-medium">
              <span className="text-blue-950">≫</span> Success abroad isn’t luck.
            </li>
            <li className="flex items-center gap-3 text-blue-950 font-medium">
              <span className="text-blue-950">≫</span>It’s preparation meeting the right guidance.
            </li>
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
             onClick={() => navigate("/contact")}
            className="group flex items-center text-white gap-4 bg-linear-to-r from-[#c1972d] to-blue-950 border border-gray-200 pl-8 pr-2 py-1 md:py-2 rounded-full font-bold shadow-sm hover:shadow-md transition-all"
          >
            GET STARTED
            <span className="md:w-10 md:h-10 w-7 h-7 flex items-center justify-center rounded-full bg-white text-blue-950  transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}