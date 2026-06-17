import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Home, Heart, GraduationCap, CheckCircle,  MapPin, Clock, Users } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const PrePostArrivalSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-change tabs every 3 seconds with progress tracking
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / 3000) * 100;

      if (newProgress >= 100) {
        setActiveTab((prevTab) => (prevTab + 1) % 4); // phases.length is 4
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    }, 50); // Update progress every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeTab]);
const navigate = useNavigate();
  const phases = [
    {
      id: 'pre-departure',
      title: 'Pre-Departure',
      subtitle: 'Preparation & Planning',
      icon: Plane,
      color: 'from-blue-950 to-blue-950',
      hoverColor: 'from-[#c1972d] to-blue-950',
      content: {
        overview: 'Our service goes way beyond getting your visa approved at Excelencia International. In Mumbai, our detailed Pre and Post-Arrival Services take care of students by ensuring that they are completely prepared to move and settle in their study destination.',
        services: [
          'Travel documentation and visa guidance',
          'Accommodation booking assistance',
          'Cultural orientation sessions',
          'Packing checklists and travel tips',
          'Health insurance coordination',
          'Forex and banking preparation'
        ],
        timeline: '2-4 weeks before departure',
        support: 'Dedicated counselor assigned'
      }
    },
    {
      id: 'arrival',
      title: 'Airport & Arrival',
      subtitle: 'Smooth Landing Experience',
      icon: Home,
      color: 'from-blue-950 to-blue-950',
      hoverColor: 'from-[#c1972d] to-blue-950',
      content: {
        overview: 'Moving to another country is not just about booking a flight. Students need to get accommodation, get travel guidelines, carry important documents, experience a foreign exchange, and experience a culture. Our pre-departure guidance sessions include travel packing checklists, airport procedures, health insurance requirements, accommodation options, and student support systems abroad.',
        services: [
          'Airport pickup coordination',
          'Immigration and customs assistance',
          'Local transportation setup',
          'SIM card and mobile connectivity',
          'Initial accommodation check-in',
          'Emergency contact establishment'
        ],
        timeline: 'Day of arrival + first 48 hours',
        support: '24/7 arrival support hotline'
      }
    },
    {
      id: 'settlement',
      title: 'Settlement Support',
      subtitle: 'Building Your New Life',
      icon: Heart,
      color: 'from-blue-950 to-blue-950',
      hoverColor: 'from-[#c1972d] to-blue-950',
      content: {
        overview: 'We go beyond by providing advice on forex services, SIM cards, banking setup, and local transportation info so that you feel at home. For many students, studying abroad is the first time they’re living on their own — and our mentorship ensures they can make that transition seamlessly.',
        services: [
          'Bank account opening assistance',
          'Local registration and permits',
          'Healthcare system navigation',
          'Public transport familiarization',
          'Grocery shopping and cooking basics',
          'Language practice and cultural integration'
        ],
        timeline: 'First 2-4 weeks',
        support: 'Weekly check-in calls'
      }
    },
    {
      id: 'mentorship',
      title: 'Ongoing Mentorship',
      subtitle: 'Long-term Success',
      icon: GraduationCap,
      color: 'from-blue-950 to-blue-950',
      hoverColor: 'from-[#c1972d] to-blue-950',
      content: {
        overview: 'Once we arrive, we are still available to help with students if they encounter any academic challenges and/or difficulties acclimatizing or issues with housing. We at Excelencia International educate our students and provide them with long-term mentorship because we are not a short-term service company, but the best study abroad consultants in Mumbai and Bandra.',
        services: [
          'Academic performance monitoring',
          'Career guidance and internships',
          'Personal development coaching',
          'Challenge resolution support',
          'Network building assistance',
          'Future planning and opportunities'
        ],
        timeline: 'Throughout your study period',
        support: 'Monthly mentorship sessions'
      }
    }
  ];

  return (
    <div className="  font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-3 bg-[#c1972d] text-white px-6 py-2 rounded-full mb-4 shadow-lg"
          >
            <MapPin size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">PRE & POST ARRIVAL Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] leading-tight mb-4"
          >
            Your Complete
            <span className="text-blue-950 block">Journey Companion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl text-blue-950 max-w-7xl mx-auto leading-relaxed px-6 md:px-0"
          >
            From preparation to success, we provide comprehensive support at every stage of your international education journey.
          </motion.p>
        </motion.div>

        {/* Interactive Tabs */}
        <div
          className="mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12 px-6 xl:px-0">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = activeTab === index;

              return (
                <motion.button
                  key={phase.id}
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-10 py-4 rounded-2xl font-bold transition-all duration-300 ${isActive
                    ? 'bg-blue-950 text-white shadow-xl'
                    : 'bg-white text-blue-950 hover:bg-blue-50 shadow-lg border border-slate-200'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: isActive ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 rounded-xl ${isActive ? 'bg-[#c1972d]' : `bg-linear-to-r ${phase.color}`
                        }`}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-sm opacity-80">{phase.subtitle}</div>
                      <div className="text-lg">{phase.title}</div>
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-950 rounded-2xl -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Progress Bar */}
          {isAutoPlaying && (
            <div className="flex justify-center mb-8">
              <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-[#c1972d] to-blue-950 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                />
              </div>
            </div>
          )}

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=" p-2 "
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="grid text-justify lg:grid-cols-2 gap-12 px-6 md:px-0">
                {/* Left Column - Overview */}
                <div>
                  {(() => {
                    const ActiveIcon = phases[activeTab].icon;
                    return (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className={`inline-flex items-center gap-3 bg-linear-to-r ${phases[activeTab].color} text-white px-6 py-3 rounded-2xl mb-6`}
                      >
                        <ActiveIcon size={24} />
                        <span className="font-bold">{phases[activeTab].title}</span>
                      </motion.div>
                    );
                  })()}

                  <h3 className="text-xl  text-blue-950 mb-6">
                    {phases[activeTab].content.overview}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-950">
                      <Clock size={18} className="text-[#c1972d]" />
                      <span className="font-medium">{phases[activeTab].content.timeline}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-950">
                      <Users size={18} className="text-[#c1972d]" />
                      <span className="font-medium">{phases[activeTab].content.support}</span>
                    </div>
                  </div>


                </div>

                {/* Right Column - Services List */}
                <div>
                  <h4 className="text-2xl font-bold text-blue-950 mb-6">What We Provide</h4>
                  <div className="space-y-4">
                    {phases[activeTab].content.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * index + 0.3, type: "spring" }}
                        >
                          <CheckCircle size={24} className="text-[#c1972d] mt-0.5 shrink-0" />
                        </motion.div>
                        <span className="text-blue-950 font-medium leading-relaxed">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {/* Call to Action */}


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className=" bg-linear-to-r from-[#c1972d]  to-blue-950 p-6 text-white text-center shadow-2xl"
      >
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Start Your Journey?
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-xl leading-relaxed max-w-7xl mx-auto mb-8 text-justify md:text-center"
        >
          We are committed to making sure students arrive at their destination safely and flourish within the new context. Because real success is more than just leaving home — it’s reflecting, evolving, and prospering across the world. </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
           onClick={() => navigate("/contact")}
          className="inline-block px-20 py-4  bg-linear-to-r from-[#c1972d]  to-blue-950 text-white font-bold text-lg rounded-full"
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PrePostArrivalSection;