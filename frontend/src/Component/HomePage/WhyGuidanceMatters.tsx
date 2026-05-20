import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Plus } from "lucide-react";
import image from "../../assets/2.jpg"
import im2 from "../../assets/3.jpg"
import { useNavigate } from "react-router-dom";
export default function WhyGuidanceMatters() {
  const benefits = [
  "World-class universities",
  "Global career opportunities",
  "Multicultural exposure",
  "Stronger personal growth",
  "A future without limits",
  "International networking ",
];
const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE COMPOSITION SIDE */}
          <div className="relative">
            {/* Dotted Decorative Border */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-dashed border-emerald-200 rounded-[3rem] -z-10 hidden lg:block" />

            <div className="relative flex items-center">
              {/* Main Vertical Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt="Traveller"
                  className="h-137.5 w-full object-cover"
                />
              </motion.div>

              {/* Overlapping Circular Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -right-10 -top-10 w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden hidden md:block"
              >
                <img
                  src={im2}
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Trust Card (Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute -left-10 bottom-10 bg-white rounded-xl p-4 flex items-center gap-3 shadow-xl border border-gray-100"
              >
                <div className="bg-blue-950 rounded-full p-1.5">
                  <CheckCircle className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Trusted Guidance</p>
                  <p className="text-[10px] text-gray-500   tracking-wider">Global Student Network</p>
                </div>
              </motion.div>

              {/* Overlapping Arrow Action (Bottom Right) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 right-6 bg-linear-to-r from-[#c1972d] to-blue-950 h-20 w-20 rounded-full border-8 border-white flex items-center justify-center shadow-lg cursor-pointer"
              >
                <ArrowUpRight className="text-white" size={32} />
              </motion.div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-950 bg-[#c1972d] px-7 rounded-2xl py-1 font-bold tracking-[0.2em]   text-sm md:text-md border-l-4 border-[#c1972d] pl-3">
              Education Beyond Borders
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d]">
              It’s not just a degree; <br />
              <span className="text-blue-950">it’s an experience of a lifetime.</span>
            </h2>
            <div className="mt-6 space-y-6 text-blue-950 text-lg leading-relaxed max-w-xl">
              <p className="text-justify">
                It fosters independence, self-assuredness, international immersion, and career advancement
                that stretch beyond the classroom. There are many academic, professional, and personal
                benefits to studying in a new country.
              </p>
              <p className="text-blue-950 font-bold  border-b-2 border-[#c1972d] inline-block">
                Your classroom becomes the world.
              </p>
            </div>
            {/* REFORMED POINTS SECTION */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-[#c1972d] shrink-0" size={20} />
                  <span className="text-blue-950 font-semibold text-base">{benefit}</span>
                </div>
              ))}
            </div>



            {/* Bottom CTA & Stats Group */}
            <div className="mt-8 flex flex-wrap items-center gap-10">
             <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => navigate("/contact")}
  className="bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-10 py-3 rounded-full font-bold shadow-xl transition-all"
>
  Start Your Journey
</motion.button>

              <div className="flex items-center gap-4">
                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-blue-950">
                    <Plus size={20} />
                  </div>
                </div>
                <div>
                  <p className="text-base font-bold text-blue-950 leading-none">18k+</p>
                  <p className="text-xs text-gray-500 font-medium">Global Success Stories</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path fill="#c1972d" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.5,-31.3,86.7,-15.7,85.2,-0.9C83.7,14,77.5,27.9,69.1,40.3C60.7,52.7,50.1,63.5,37.5,70.9C24.9,78.3,10.4,82.3,-3.8,88.9C-18,95.5,-31.9,104.7,-44.2,101.9C-56.5,99.1,-67.2,84.3,-74.4,70.1C-81.6,55.9,-85.3,42.3,-88.3,28.6C-91.3,14.9,-93.6,1,-91.7,-12.3C-89.8,-25.6,-83.7,-38.4,-74.8,-49.2C-65.9,-60,-54.2,-68.8,-41.7,-76.6C-29.2,-84.4,-15.8,-91.2,-0.6,-90.2C14.6,-89.2,29.2,-80.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}