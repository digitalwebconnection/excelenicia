 import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* TYPES */
export interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    description?: string;
    image?: string;
    backgroundImages?: string[];
    ctaText?: string;
    ctaText2?: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  const [currentBg, setCurrentBg] = useState(0);
const navigate = useNavigate();
  const images = data.backgroundImages || [];

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND SLIDER WITH FADE */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            key={currentBg}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              backgroundImage: `url(${images[currentBg]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </AnimatePresence>

      {/* 🌑 PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-black/10 " />

      {/* CONTENT */}
      <div className="relative max-w-7xl  px-6 md:px-16   text-white">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#c1972d] font-semibold mb-3 uppercase text-lg tracking-widest">
            {data.subtitle}
          </p>

          <h1 className="text-4xl md:text-6xl max-w-xl font-serif font-bold leading-tight mb-6">
            {data.title}
          </h1>

          {data.description && (
            <p className="text-gray-200 text-lg mb-8 max-w-lg">
              {data.description}
            </p>
          )}

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            {data.ctaText && (
              <a 
                href="/contact" 
                className="bg-linear-to-r from-[#c1972d] to-blue-950 px-7 py-3 rounded-xl font-semibold shadow-xl hover:scale-110 hover:shadow-2xl transition duration-300"
              >
                {data.ctaText}
              </a>
            )}

            {data.ctaText2 && (
              <button
               onClick={() => navigate("/contact")}
              className="border border-white/50 backdrop-blur-md px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                {data.ctaText2}
              </button>
            )}
          </div>

          <p className="text-sm text-gray-300 mt-6">
            Trusted by 10,000+ students worldwide
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          
        
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;