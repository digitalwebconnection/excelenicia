 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const students = [
  {
    id: 1,
    name: " Vamshi Pottabatini",
    location: "UK",
    quote: "Excelencia International provided excellent guidance throughout my study abroad journey. From shortlisting universities to visa support, everything was handled professionally and smoothly. The team is very supportive, responsive, and genuinely cares about students’ futures. Highly recommended for anyone planning to study abroad.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEnabVbz5PS4w/profile-displayphoto-scale_200_200/B56ZlVT3YVG0AY-/0/1758072895764?e=2147483647&v=beta&t=ZGO4LLFYmDLxJ1jbhXhJQUzTsHGwwKbjj5doQkgXP9I",
  },
  {
    id: 2,
    name: "Ihita Kumar",
    location: "Canada",
    quote: "Very helpful and supportive staff. I had a great experience while inquiring about study-abroad plans. Highly recommend this place.",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHUGbJmJGY8dw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680289087526?e=2147483647&v=beta&t=cGO4dXHr4p1pNwKflnprRKX_LNHIjlzzq2P_dirld6A",
  },
  {
    id: 3,
    name: "Mohammed Uzair",
    location: "USA",
    quote: "Very professional and helpful agency. They made my study abroad journey smooth and stress-free. Thank you for the support!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRqGWhJpWfE-_JlS0hpIUfKm6mMnhKP00QQ&s",
  },
  {
    id: 4,
    name: "Manav Gandhi",
    location: "Australia",
    quote: "Highly recommend their personalised guidance and visa assistance — made the whole study abroad process smooth and stress-free.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqrPUzmHN1BLkBlZWhYpYNIH1ydiruOK2sA&s",
  },
  {
    id: 5,
    name: "Gajendra Thakre",
    location: "Ireland",
    quote: "I’m really thankful to Excelencia International for always being there to guide me step by step. At first, studying abroad felt difficult and confusing, but they made everything simple and possible for me👍👍",
    image: "https://www.upsurge.club/api/image?url=https%3A%2F%2Fuser-data-cdn.upsurge.club%2Finstructors%2F66ed1c1b0b0f9f7b47683bb9%2Fprofile%2FUvB81Kqki3H6GTYLaOf7R.png&w=384&q=75",
  },
  {
    id: 6,
    name: "Drashti sadrani",
    location: "Germany",
    quote: "Excelencia International made my study abroad journey so much easier! They helped me choose the right university and took care of all the visa paperwork. What really stood out was their support after I arrived in the UK, they were there to help me settle in and answer all my questions. I truly felt cared for throughout the entire process.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHvftbnhKnnOg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718260618180?e=2147483647&v=beta&t=qbxKFtuwszhJKwjCRh3C83ngN7KH3u_rPwA0D986rI4",
  },
  {
    id: 7,
    name: "Abhi Thakkar",
    location: "France",
    quote: "I’m very thankful to Excelencia International for helping me achieve my dream of studying abroad in the USA. They guided me in managing applications, preparing for visa interviews, and provided constant support at every stage. Their guidance made everything simple and easy. Thank you to the Excelencia International team.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvI37cbTktCcVs3GdN9rQsGmV-XMC4kP0k7A&s",
  },
  {
    id: 8,
    name: "Rhythm Benara",
    location: "New Zealand",
    quote: "Honestly the best decision I made! I was so stressed about applications and visas, but they handled everything smoothly. The team is super friendly and explains every small detail. Totally worth it!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLDrlH7EhfzSjEBgUWC4oNUHoflg2Yu4bCQ&s",
  }
];

const AUTO_PLAY_INTERVAL = 2500;

export default function AutoRotatingStudentVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Logic to get exactly 4 students to show, starting from current index
  const visibleStudents = [
    students[currentIndex % students.length],
    students[(currentIndex + 1) % students.length],
    students[(currentIndex + 2) % students.length],
    students[(currentIndex + 3) % students.length],
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % students.length);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="relative w-full bg-white py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p className="  tracking-widest text-[#c1972d] font-bold text-xs mb-3">
            Student Voices
          </motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-bold text-blue-950">
            Real stories. <span className=" text-[#c1972d]">Real trust.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Faces (Showing only 4 at a time with animation) */}
          <div className="flex  sm:flex-wrap justify-start sm:justify-center gap-4 sm:gap-6 px-2 sm:px-0 ">
            <AnimatePresence mode="popLayout">
              {visibleStudents.map((student, i) => (
                <motion.button
                  key={student.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.4 }}
                  onClick={() =>
                    setCurrentIndex(students.findIndex((s) => s.id === student.id))
                  }
                  className="relative group shrink-0 focus:outline-none"
                >
                  {/* Progress Ring */}
                  {i === 0 && (
                    <svg className="absolute -inset-1 sm:-inset-2 w-[calc(100%+8px)] sm:w-[calc(100%+16px)] h-[calc(100%+8px)] sm:h-[calc(100%+16px)] -rotate-90">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="48%"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        className="text-blue-600"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: AUTO_PLAY_INTERVAL / 1000,
                          ease: "linear",
                        }}
                      />
                    </svg>
                  )}

                  <motion.div
                    animate={{
                      scale: i === 0 ? 1.05 : 0.95,
                      filter: i === 0 ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                    className={`relative 
            w-14 h-14 
            sm:w-20 sm:h-20 
            md:w-24 md:h-24 
            rounded-full overflow-hidden border-2 transition-all
            ${i === 0
                        ? "border-blue-500 shadow-md"
                        : "border-slate-200 opacity-70"
                      }`}
                  >
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Right: Quote */}
          <div
            className="min-h-30 flex flex-col justify-center text-center lg:text-left"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-6xl text-blue-100 font-serif leading-none block h-8">“</span>
                <h3 className="text-md text-justify md:text-2xl font-medium text-slate-800 italic leading-tight">
                  {students[currentIndex % students.length].quote}
                </h3>
                <div className="mt-4">
                  <p className="text-lg  font-bold text-slate-900">
                    — {students[currentIndex % students.length].name}
                  </p>
                  <p className="text-slate-500 text-sm tracking-wide  ">
                    Studying in {students[currentIndex % students.length].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}