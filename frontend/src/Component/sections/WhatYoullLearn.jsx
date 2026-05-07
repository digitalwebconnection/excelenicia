import React, { useEffect, useState } from 'react';
import { GraduationCap, Wallet, Plane, Briefcase, ShieldAlert } from 'lucide-react';
import SectionHeader from './SectionHeader';

const learnItems = [
  {
    icon: GraduationCap,
    title: 'Choose the right UK university',
    desc: 'Match your profile, budget & career goals with the ideal course and institution.',
  },
  {
    icon: Wallet,
    title: 'Scholarships & low-cost study options',
    desc: 'Unlock funding opportunities and plan your UK education without financial stress.',
  },
  {
    icon: Plane,
    title: 'Complete UK student visa process',
    desc: 'A step-by-step walk-through of documents, interview prep and timelines.',
  },
  {
    icon: Briefcase,
    title: 'Part-time work & post-study jobs',
    desc: 'Understand the 20-hour work rule and the UK Graduate Route visa pathway.',
  },
  {
    icon: ShieldAlert,
    title: 'Common mistakes students make',
    desc: 'Avoid the costly errors that delay admissions, visas and settlement.',
  },
];

const WhatYoullLearn = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % learnItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="learn" className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gold font-medium mb-2">
            WHAT YOU'LL LEARN
          </p>

          <h2 className="font-display max-w-xl mx-auto text-4xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-5">
            Key Insights for Your <span className='text-gold'>UK Journey</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Learn everything you need to successfully plan your UK education
            from industry experts.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6">
          {learnItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                className={`group relative overflow-hidden p-8 h-60 border mx-4 my-4 text-center rounded-xl border-gold transition-all duration-500
                
                hover:shadow-xl hover:-translate-y-2
                ${isActive ? "shadow-xl -translate-y-2" : ""}
                ${i < 3 ? "md:col-span-2" : "md:col-span-3"}
              `}
              >

                {/* BACKGROUND (FIXED FOR AUTO HOVER) */}
                <div
                  className={`absolute inset-0 transition duration-500 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-gold to-blue-950" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center mb-6 mx-auto rounded-md transition-all duration-300
                    
                    ${
                      isActive
                        ? "bg-gold scale-110"
                        : "bg-gray-900 group-hover:bg-gold  group-hover:scale-110"
                    }
                  `}
                  >
                    <Icon size={22} className="text-white" />
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text-xl font-semibold mb-3 leading-tight transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-900 group-hover:text-white"
                    }
                  `}
                  >
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p
                    className={`text-sm leading-relaxed transition
                    ${
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    }
                  `}
                  >
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatYoullLearn;