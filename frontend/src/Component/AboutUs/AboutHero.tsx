import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    tag: "Global Education Simplified",
    title: "From application to visa,",
    highlight: "we guide you with clarity",
    desc: "Excelencia International partners with students and families to make studying abroad simple, transparent, and stress-free.",
    image: "https://img.freepik.com/premium-photo/graduating-student-png-sticker-isolated-transparent-background_53876-995350.jpg?semt=ais_hybrid&w=740&q=80",
    bgImage: "https://assets.insuremytrip.com/wp-content/uploads/2019/01/26102437/travel_insurance_uk_tower_bridge.webp", // Library/University
    badge: "🎓 95% Visa Success",
  },
  {
    tag: "Trusted Study Abroad Experts",
    title: "Right university.",
    highlight: "Right country. Right future.",
    desc: "We help students choose universities that match their goals, budget, and long-term career aspirations.",
    image: "https://img.freepik.com/free-photo/medium-shot-smiley-woman_23-2148499052.jpg?semt=ais_hybrid&w=740&q=80",
    bgImage: "https://img.freepik.com/free-photo/manhattan-skyline_649448-1559.jpg?semt=ais_hybrid&w=740&q=80", // Campus
    badge: "🌍 10+ Countries",
  },
  {
    tag: "Student-First Guidance",
    title: "Honest counselling,",
    highlight: "confident decisions",
    desc: "No false promises. No shortcuts. Just clear guidance backed by experience and transparency.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVMNW9fradvXUA5TpMgY-bWumz7fUC0t84Q&s",
    bgImage: "https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=", // Student working
    badge: "⭐ Trusted by Families",
  },
];

export default function AboutHero() {
  const [active, setActive] = useState(0);
const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative   w-full overflow-hidden flex items-center">
      
      {/* BACKGROUND IMAGE LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[active].bgImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Overlay to ensure text stays readable */}
          <div className="absolute inset-0 bg-black/80 z-10" />
          <img
            src={slides[active].bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-5 md:py-18 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* LEFT CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="text-white  col-span-2  "
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 md:mb-6
              rounded-full bg-white/10 backdrop-blur text-sm tracking-wide border border-white/20">
              {slides[active].tag}
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-white">
              {slides[active].title}
              <span className=" text-[#c1972d]">
                {slides[active].highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-2 md:mt-6 text-md md:text-lg text-blue-100/90 leading-relaxed">
              {slides[active].desc}
            </p>

            {/* CTA */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
               onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-6 md:px-10 py-3 rounded-full bg-[#c1972d] text-white
                font-bold hover:scale-105 transition shadow-lg text-center">
                Apply Now →
              </button>

              <a
              href="tel:+919769787211"   
              className="w-full sm:w-auto px-6 md:px-10 py-3 rounded-full border border-white/30
                text-white font-semibold hover:bg-white/10 transition backdrop-blur-sm text-center block">
                Free Consultation
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE (Main Student Image) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl bg-white/5 backdrop-blur-md
              border border-white/10 p-3 md:p-6 shadow-2xl"
            >
              <img
                src={slides[active].image}
                alt="Student"
                className="w-65 rounded-3xl  md:w-[320px] drop-shadow-2xl"
              />

              <div className="absolute -top-4 -right-4 px-4 py-2
                bg-[#c1972d] text-white text-sm font-bold rounded-full shadow-lg">
                {slides[active].badge}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}