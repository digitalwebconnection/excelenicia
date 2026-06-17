
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SectionItem {
  title: string;
  content: string;
}

interface SectionProps {
  data: {
    title: string;
    intro: string;
    sections: SectionItem[];
    highlights: string[];
  };
}

const EducationSection = ({ data }: SectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* AUTO SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === data.sections.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [data.sections.length]);

  return (
    <section className="pb-10 ">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-20 px-6">
        <p className="text-blue-950 font-semibold uppercase text-md mb-1 tracking-widest">
          Education System
        </p>

        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] max-w-2xl mx-auto mb-4">
          {data.title}
        </h2>

        <p className="text-blue-950 text-lg max-w-6xl mx-auto">
          {data.intro}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* RIGHT SIDE (TIMELINE) */}
        <div className="relative order-1 lg:order-2">

          {/* LINE */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-r from-[#c1972d] to-blue-900" />

          <div className="space-y-5">
            {data.sections.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className="flex items-start gap-6 cursor-pointer group  "
              >
                {/* DOT */}
                <div className="relative">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition ${activeIndex === i
                      ? "bg-[#c1972d] text-white scale-110"
                      : "bg-blue-950 text-white"
                      }`}
                  >
                    {i + 1}
                  </div>

                  {/* ACTIVE LINE */}
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeLine"
                      className="absolute left-4 top-8 w-0.5 h-6 bg-[#c1972d]"
                    />
                  )}
                </div>

                {/* TEXT */}
                <div>
                  <h3
                    className={`font-semibold text-lg ${activeIndex === i
                      ? "text-blue-950"
                      : "text-blue-950 group-hover:text-blue-950"
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-blue-950">
                    {item.content.slice(0, 60)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LEFT SIDE (CONTENT) */}
        <div className="sticky top-14 order-2 lg:order-1">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-3xl md:text-4xl font-bold text-[#c1972d] mt-2 mb-6 font-serif">
              {data.sections[activeIndex]?.title}
            </h3>

            <div
              className="edu-content text-blue-950 text-justify text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: data.sections[activeIndex]?.content }}
            />

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-10">
              {data.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-4 py-1 bg-gray-900 rounded-full text-sm font-medium text-white"
                >
                  {h}
                </span>
              ))}
            </div>

            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;