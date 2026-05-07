import { motion } from "framer-motion";
import {
  Ear,
  Users,
  GraduationCap,
  FileCheck,
  Compass,
} from "lucide-react";

export default function OurWayOfCounseling() {
  const steps = [
    {
      icon: <Ear size={26} />,
      title: "Honest Counselling",
      desc: "Even when that recommendation is not an option you’re considering.",
      delay: 0,
    },
    {
      icon: <Users size={26} />,
      title: "Student-First Approach",
      desc: "Never prioritize the commissions over your goals, finances, or long-term future.",
      delay: 0.1,
    },
    {
      icon: <GraduationCap size={26} />,
      title: "Personalized University Selection",
      desc: "Each recommended school is matched to your academic profile and future aspirations.",
      delay: 0.2,
    },
    {
      icon: <FileCheck size={26} />,
      title: "Complete Visa Support",
      desc: "We guide you at each step from applications to visa success.",
      delay: 0.3,
    },
    {
      icon: <Compass size={26} />,
      title: "Long-Term Mentorship",
      desc: "We don’t stop at admission, but we are with you all the way. We replace confusion with clarity and help you to shape your career into a success story. ",
      delay: 0.4,
    },
  ];

  return (
    <section className="relative w-full bg-white pb-14 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-175 h-175 bg-blue-50/60 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="  tracking-[0.35em] text-blue-950 font-bold text-md mb-4">
            WHY EXCELENCIA INTERNATIONAL
          </p>

          <h2 className="text-3xl md:text-5xl font-serif  font-black tracking-tight text-[#c1972d] leading-tight">
            Not Just Admissions.
            <span className="text-blue-950"> Life Decisions.</span>
          </h2>

          <p className="mt-6 text-md md:text-xl text-slate-700 font-medium max-w-7xl mx-auto">
          We also believe that each student’s path is unique and deserves individual attention on our part, founded on honesty and accountability.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: step.delay }}
              viewport={{ once: true }}
              className="group relative rounded-3xl p-4 bg-white border border-slate-200
                         transition-all duration-700 ease-in-out
                         hover:-translate-y-3
                         hover:bg-linear-to-r hover:from-[#c1972d] hover:to-blue-950
                         hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex justify-around">
                <div className="flex items-center  text-center justify-center w-14 h-14 rounded-2xl bg-blue-950 text-white mb-6
                              transition-all duration-700 group-hover:bg-white group-hover:text-blue-950">
                  {step.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl text-center font-bold mb-4 text-slate-900 transition-colors duration-700 group-hover:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed  text-center text-slate-600 transition-colors duration-700 group-hover:text-white text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}