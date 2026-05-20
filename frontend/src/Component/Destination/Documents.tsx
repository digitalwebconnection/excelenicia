import { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";


interface ListSectionProps {
  data: {
    title: string;
    subtitle?: string;
    list: {
      text: string;
      image: string;
    }[];
  };
}

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const Documents = ({ data }: ListSectionProps) => {
  const [, setCompleted] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // AUTO STEP ANIMATION
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % data.list.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused, data.list.length]);

  const toggleComplete = (i: number) => {
    setCompleted((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <section className="relative py-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-6"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-950 text-lg md:text-xl"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </div>

      {/* GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto mt-12 px-6 md:px-10"
      >
        {data.list.map((item, i) => {

          const isActive = i === step;

          return (
            <motion.div
              key={i}
              variants={cardVariants}
              animate={
                isActive
                  ? {
                    y: -8,
                    scale: 1.02,
                    opacity: 1,
                    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                  }
                  : {
                    y: 0,
                    scale: 0.98,
                    opacity: 0.9,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }
              }
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="relative cursor-pointer group rounded-xl overflow-hidden border border-black/10 bg-white h-80 flex flex-col w-full max-w-sm mx-auto sm:max-w-none"
              onClick={() => toggleComplete(i)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

              {/* 🔥 IMAGE (80%) */}
              <div className="relative h-[80%] w-full overflow-hidden">

                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-fill group-hover:scale-110 transition duration-500"
                />

                {/* 🔥 SHADOW OVERLAY (BOTTOM FADE) */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-80" />

              </div>

              {/* 🔥 DIVIDER */}
              <div className="h-px w-full bg-black/50" />

              {/* 🔥 CONTENT (20%) */}
              <div className="h-[20%] flex items-center px-4 bg-white">

                <h3 className="font-semibold text-sm md:text-base text-slate-900 line-clamp-2">
                  {item.text}
                </h3>

              </div>

            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Documents;