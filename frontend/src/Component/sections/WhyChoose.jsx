import React, { useEffect, useState } from "react";
import { Users, CheckCircle, ShieldCheck, Headphones } from "lucide-react";

/* ---------------- COUNTER COMPONENT ---------------- */
const Counter = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(numericValue)) return;

    let current = 0;
    const duration = 1500;
    const stepTime = 20;
    const increment = numericValue / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, start]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

/* ---------------- DATA WITH ICONS ---------------- */
const stats = [
  {
    value: "1000+",
    label: "Students Guided",
    icon: Users,
  },
  {
    value: "98%",
    label: "Visa Success Rate",
    icon: CheckCircle,
  },
  {
    value: "100%",
    label: "Transparent Process",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "End-to-End Support",
    icon: Headphones,
  },
];

/* ---------------- MAIN COMPONENT ---------------- */
const WhyChoose = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("why-choose");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setStartAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="why-choose" className="bg-gray-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <p className="text-sm md:text-lg text-gold font-medium mb-2">
            WHY CHOOSE EXCELENCIA
          </p>

          <h2 className="font-display text-3xl font-semibold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl  text-black mb-14">
            Numbers That Speak{" "} <br />
            <span className="text-gold">for Themselves</span>
          </h2>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className="p-10 text-center group shadow-xl shadow-black/20 mx-5 rounded-2xl border border-gold/40 hover:bg-white transition-all duration-300"
              >

                {/* ICON */}
                <div className="mb-4 flex justify-center">
                  <div className="w-18 h-18 flex items-center justify-center  transition">
                    <Icon className="text-blue-950  transition" size={32} />
                  </div>
                </div>

                {/* NUMBER */}
                <p className="text-5xl lg:text-6xl text-gold font-semibold mb-3 leading-none">
                  <Counter value={stat.value} start={startAnimation} />
                </p>

                {/* LABEL */}
                <p className="text-xs tracking-widest uppercase text-gray-500 font-semibold">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;