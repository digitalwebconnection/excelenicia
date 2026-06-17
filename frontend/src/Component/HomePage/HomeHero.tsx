import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, Briefcase } from "lucide-react";
import video from "../../assets/newvideo.mp4";
import mobileVideo from "../../assets/Website video - Excelencia International - moblie screen.mp4";

const slides = [
  { title: "We guide. We don’t push." },
  { title: "We advise. We don’t manipulate." },
  { title: "We pay attention to where your journey takes you." }
];

export default function HeroWithVideoAndSearchForm() {
  // Stages: 0 = Video, 1 = Hero/Search, 2 = Honest Guidance Content
  const [stage, setStage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleVideoEnd = () => {
    setTimeout(() => setStage(1), 100);
  };

  /* Auto slide effect for Hero */
  useEffect(() => {
    if (stage === 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [stage]);

  return (
    <section className="relative w-full h-screen mt-1 overflow-hidden ">
      <AnimatePresence mode="wait" >
        {/* ================= STAGE 0: VIDEO INTRO ================= */}
        {stage === 0 && (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute  inset-0"
          >
            {/* ── Desktop video (hidden on mobile) ── */}
            <video
              src={video}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="hidden md:block w-full h-full object-fill absolute top-0 left-0"
            />

            {/* ── Mobile video (hidden on md+) ── */}
            <video
              src={mobileVideo}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="block md:hidden w-full h-full object-cover absolute top-0 left-0"
            />
            <div className="absolute inset-0 bg-black/0" />
          </motion.div>
        )}

        {/* ================= STAGE 1: HERO CONTENT ================= */}
        {stage === 1 && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="relative h-full flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('https://t4.ftcdn.net/jpg/07/53/16/87/360_F_753168793_UeLlYWN1PfAs57EgM9VTq1CepinQKjjI.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 text-center px-6">
              <p className="text-white font-semibold text-lg">Guidance That Puts Your Future First</p>
              <h1 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-serif font-extrabold text-white leading-tight">
                Honest, Transparent <br /> and Personalized Counseling For <br /> Students who Dream of Studying Abroad.
              </h1>

              <div className="mt-12 max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg"
                  >
                    <h2 className="text-2xl font-bold text-white">{slides[currentSlide].title}</h2>
                  </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="flex justify-center mt-6 gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${currentSlide === index ? "bg-[#c1972d] scale-125" : "bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>


            </div>

            {/* SEARCH BAR */}
            {/* <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white rounded-full shadow-2xl px-6 py-5 z-20 flex flex-wrap lg:flex-nowrap items-center gap-6">
              <div className="flex items-center gap-3 flex-1 min-w-45">
                <MapPin className="text-blue-950 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-900">Degree</p>
                  <select className="outline-none text-sm font-semibold text-gray-800 bg-transparent">
                    <option>MSC</option><option>MBA</option><option>BSC</option><option>BBA</option>
                  </select>
                </div>
              </div>
              <div className="hidden lg:block h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-3 flex-1 min-w-40">
                <Briefcase className="text-blue-950 w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-900">Country</p>
                  <select className="outline-none text-sm font-semibold text-gray-800 bg-transparent">
                    <option>UK</option><option>USA</option><option>UAE</option>
                  </select>
                </div>
              </div>
              <div className="hidden lg:block h-8 w-px bg-gray-200" />
              <button className="ml-auto bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-8 py-4 rounded-full font-semibold">
                Submit
              </button>
            </motion.div> */}
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  );
}