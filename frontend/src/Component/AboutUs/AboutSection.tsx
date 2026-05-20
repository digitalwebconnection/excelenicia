import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  GraduationCap,
  Users,
  ShieldCheck,
  Globe,
  Compass,
  Rocket,
} from "lucide-react";

const sections =
  [
    {
      title: "Life-Changing Global Education Journey",
      content: "At Excelencia International, we understand that studying abroad is not just a journey of enrollment; it’s a life-changing experience that influences one's profession, advances confidence, and introduces one to global doors of opportunity. Our goal is to offer expert advice and guidance to students who wish to pursue further education in other countries, and as one of the top student visa consultants in Mumbai, Maharashtra, India, we are committed to helping you decide on the best course and university options. We realize selecting a country, course, and university can be difficult, but with our transparent and ethical guidance, we will help you to navigate your way through the process.",
       image: "https://img.freepik.com/free-vector/global-education-student-exchange-isometric-composition-with-conceptual-image-earth-with-connections-academic-hat-vector-illustration_1284-76498.jpg?semt=ais_rp_progressive&w=740&q=80",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Personalized & Ethical Counseling",
      content: "We are inspired by the notion that every student is entitled to reliable advice and ethical guidance. We're not an ordinary agency that does admissions and never looks back. Our expert counselors assess students’ profiles, their career aspirations, as well as their personal & financial constraints, to help them make an informed decision and send them abroad, selecting the right course/university while bearing in mind the future compliance. Students may be planning to study in the UK, USA, Canada, Australia, Europe, and other prominent sites of education all over the world; we provide customized guidance matching their aspirations.",
      image: "https://media.easy-peasy.ai/99057590-b5e2-4dc5-a433-c317e20c4a0a/b49a93e8-341e-417a-b46d-1e6d8082d24b.png",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Complete Study Abroad Support",
      content: "As a study abroad consultancy in Bandra, Mumbai, we offer full assistance towards career counseling, country and university selection, application guidance, Statement of Purpose (SOP) assistance, documentation support, education loan assistance, scholarship advice, and visa processing for students. Our visa professionals are well-versed with the prevailing immigration regulations and global education trends to ensure that our students have a higher probability of success. From the very first counseling session to the day when students fly overseas, we continue to partner with them in their journey.",
      image: "https://image.cdn.uscholars.in/media/About_us_page/about_us_temp_1.png",
      icon: <Compass className="w-6 h-6" />,
    },
    {
      title: "Transparency & Trust at Every Step",
      content: "The real difference at Excelencia International is our dedication to being ethical and transparent. We help students make the right choices—even if it means discouraging options that might not be a good fit. We provide counseling with no pressure, manipulation, or unrealistic claims. We place emphasis on transparency so students and their parents are comfortable and informed at every stage.",
      image: "https://thumbs.dreamstime.com/b/trust-openness-to-transparency-trust-94364972.jpg",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Trusted Partner for Global Success",
      content: "For years, we have been assisting students in getting admissions at the most sought-after institutes and coming up with positive student visas. We’re committed to being the most trusted student visa consultants in India, offering individual services, ethical guidance, and long-term mentoring. At Excelencia International, the proof of success lies not only in admission numbers and visas but also in those who flourish globally and create sustainable international careers.",
      image: "https://t3.ftcdn.net/jpg/16/71/82/58/360_F_1671825852_fEf0P7PmDobzc6djRip7EB1ME0JOqHNM.jpg",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Turning Study Abroad Dreams into Reality",
      content: "Excelencia International is an overseas education and immigration consultancy committed to helping students and young professionals turn their global ambitions into reality. Since our founding, we have evolved from a focused study-abroad advisory into a trusted partner for international academic and immigration journeys.",
      image: "https://dreamsinternational.co.in/wp-content/uploads/2025/07/study-abroad.webp",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "End-to-End Student Visa Guidance",
      content: "We deliver tailored support from initial counseling to successful visa approvals. At Excelencia International, we believe that every student deserves strategic guidance, transparent processes, and dedicated assistance, and we work relentlessly to provide just that at every step of your international education journey.",
      image: "https://www.shrichandimmigration.in/wp-content/uploads/2026/01/v-1.png",
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ];

export default function AboutSection() {
  const [selected, setSelected] = useState<(typeof sections)[0] | null>(null);

  return (
    <section className="bg-slate-50 py-7 md:py-14 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-8 md:mb-12">
          <h2 className="text-md font-bold tracking-widest text-blue-950   mb-3">
            Excellence Defined
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d]">
            Why Choose <span className="text-blue-950">Excelencia?</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-950 mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              layoutId={`card-${item.title}`}
              onClick={() => setSelected(item)}
              whileHover={{ y: -5 }}
              className="group cursor-pointer bg-white p-6 md:p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-r from-[#c1972d]/20 to-blue-950/20 rounded-bl-full group-hover:bg-[#c1972d]/50" />

              <div className="bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#c1972d] transition-colors">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-[#c1972d] transition-colors">
                {item.title}
              </h3>

              <p className="text-blue-950 text-justify line-clamp-2 text-sm leading-relaxed mb-4">
                {item.content}
              </p>

              <div className="flex items-center text-sm font-bold text-[#c1972d]">
                Explore Details
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup */}
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />

              {/* Modal */}
              <motion.div 
                layoutId={`card-${selected.title}`}
                className="bg-white rounded-[1.2rem] md:rounded-3xl w-full max-w-5xl h-auto md:h-[550px] max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:grid md:grid-cols-2"
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-transform hover:rotate-90"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-slate-900" />
                </button>

                {/* Image */}
                <div className="relative h-48 sm:h-64 md:h-full shrink-0 overflow-hidden">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:bg-linear-to-r" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-12 flex flex-col bg-white overflow-hidden flex-1 md:h-full">
                  <div className="overflow-y-auto pr-2 flex-1 scrollbar-thin scrollbar-thumb-slate-200">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#c1972d]/10 text-[#c1972d] mb-6">
                      {selected.icon}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                      {selected.title}
                    </h3>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      {selected.content}
                    </p>

                    <button
                      onClick={() => setSelected(null)}
                      className="w-full md:w-max bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-bold px-10 py-4 rounded-2xl  transition-all transform active:scale-95 shadow-lg shadow-slate-200 mb-2"
                    >
                      Back to Overview
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}