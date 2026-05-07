
import { easeOut, motion } from "framer-motion";

const steps = [
  {
    title: "Profile Assessment & Counseling",
    description:
      "We evaluate your academic background, eligibility, financial profile, and career goals to identify the most suitable visa category, country, and pathway for your future.",
  },
  {
    title: "Documentation & Application Preparation",
    description:
      "Our experts assist in preparing and verifying all required documents, including SOP, financial proofs, and application forms, ensuring accuracy and compliance with embassy guidelines.",
  },
  {
    title: "Visa Filing & Interview Preparation",
    description:
      "We handle visa submission and provide professional interview preparation, helping you present your case confidently and meet all visa officer requirements.",
  },
  {
    title: "Visa Approval & Pre-Departure Support",
    description:
      "Once your visa is approved, we assist with pre-departure guidance, travel planning, accommodation advice, and essential information to help you transition smoothly abroad.",
  },
];

const StudentJourney = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="bg-[#f9fafb] pb-24 pt-14  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl font-serif md:text-5xl font-bold text-[#c1972d] tracking-tight">
            Our <span className="text-blue-950">Process</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-lg max-w-xl mx-auto">
            A seamless, step-by-step guide to your international success.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start"
        >
          {/* THE DOTTED PATH (Desktop) */}
          <svg
            className="hidden md:block absolute top-[15%] left-0 w-full h-32 pointer-events-none z-0"
            viewBox="0 0 1200 150"
            fill="none"
          >
            <path
              d="M0,80 C150,20 350,140 600,80 C850,20 1050,140 1200,80"
              stroke="#c1972d"
              strokeWidth="2"
              strokeDasharray="10 10"
              className="opacity-30"
            />
          </svg>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col items-center  group ${
                index % 2 !== 0 ? "sm:translate-y-12 md:translate-y-16 " : ""
              }`}
            >
              {/* NUMBER CIRCLE */}
              <div className="relative z-10 mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-[#c1972d] shadow-[0_10px_25px_-5px_rgba(193,151,45,0.3)] border-4 border-indigo-500 transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
              </div>

              {/* CARD - flex-1 and h-full ensures fixed height parity across the row */}
              <div className="bg-white hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-6 md:p-8 rounded-3xl md:rounded-4xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-500/60 text-center flex flex-col w-full h-full min-h-60 md:min-h-70 transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
                <h3 className="text-xl font-bold  mb-4 h-14 flex items-center justify-center">
                  {step.title}
                </h3>
                <p className="text-justify text-sm leading-relaxed grow">
                  {step.description}
                </p>
                
                {/* SUBTLE ACCENT LINE */}
                <div className="mt-6 w-12 h-1 bg-[#c1972d]/20 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudentJourney;