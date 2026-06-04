import { useState, useEffect } from 'react';
import { 
  CheckCircle2, Globe, Map, BookOpen, 
  Handshake, BadgeDollarSign, Compass, 
  Plane, Home, GraduationCap 
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const   StudyAbroadJourney = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const journeySteps = [
    { title: "Profile Evaluation", icon: <CheckCircle2 size={24} /> },
    { title: "University Shortlisting", icon: <Map size={24} /> },
    { title: "Documentation", icon: <BookOpen size={24} /> },
    { title: "Admission Assistance", icon: <Handshake size={24} /> },
    { title: "Interview Prep", icon: <GraduationCap size={24} /> },
    { title: "Financial Support", icon: <BadgeDollarSign size={24} /> },
    { title: "Career Guidance", icon: <Compass size={24} /> },
    { title: "Student Visa", icon: <Plane size={24} /> },
    { title: "Visitor Visa", icon: <Globe size={24} /> },
    { title: "Arrival Services", icon: <Home size={24} /> },
  ];

  // Logic for the 3-second auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % journeySteps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [journeySteps.length]);
const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-white py-4 px-6">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#c1972d]/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-2 items-start">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <span className="inline-block px-4 py-1 rounded-full bg-[#c1972d]/10 text-[#c1972d] text-sm font-bold   tracking-widest mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-6">
              End-to-End Study  <br /> 
              <span className="text-blue-950 text-3xl md:text-5xl">Abroad Support.</span>
            </h2>
            <p className="text-blue-950 text-md md:text-lg mb-8 leading-relaxed">
           We make the entire process simple, clear, and stress-free.
            </p>
            <button
             onClick={() => navigate("/services")}
            className="group flex items-center gap-3 bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-10 py-3 rounded-lg font-bold transition-all duration-300 shadow-xl shadow-blue-950/20">
              Get Started Now
              <Plane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Right Side: Interactive List */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {journeySteps.map((step, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)} // Allows manual hover to take over
                  className={`group relative flex items-center gap-5 p-6 rounded-2xl border transition-all duration-500 shadow-sm
                    ${isActive 
                      ? "bg-blue-950 border-blue-950 shadow-2xl shadow-blue-950/20 -translate-y-1" 
                      : "bg-white border-slate-100 hover:bg-blue-950 hover:shadow-2xl"
                    }`}
                >
                  {/* Number Indicator */}
                  <div className={`absolute top-2 right-2 text-4xl font-black transition-colors pointer-events-none
                    ${isActive ? "text-white/80" : "text-slate-50 group-hover:text-white/80"}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon Box */}
                  <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isActive 
                      ? "bg-[#c1972d] text-blue-950 scale-110" 
                      : "bg-slate-50 text-blue-950 group-hover:bg-[#c1972d]"
                    }`}>
                    {step.icon}
                  </div>

                  <div className="relative z-10">
                    <h3 className={`text-lg font-bold transition-colors leading-tight
                      ${isActive ? "text-white" : "text-blue-950 group-hover:text-white"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm mt-1 transition-colors
                      ${isActive ? "text-slate-300" : "text-slate-500 group-hover:text-slate-300"}`}>
                      Expert guidance for your journey.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudyAbroadJourney;