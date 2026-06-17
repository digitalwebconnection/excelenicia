
import { Landmark, ShieldCheck, Globe, BadgeCheck, Lightbulb,ChartLine, TrendingUp } from 'lucide-react';
import { easeOut, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinanceSupportSection = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };
  return (
    <div className="bg-linear-to-br from-slate-50 to-blue-50 pb-16 md:pb-20 px-6 lg:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-[#c1972d] text-white px-6 py-2 rounded-full mb-2"
          >
            <TrendingUp size={20} />
            <span className="text-sm font-bold tracking-widest">FINANCE SUPPORT</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-2"
          >
            Financial Guidance for
            <span className="text-blue-950 block">Your Global Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl text-blue-950 max-w-7xl mx-auto leading-relaxed"
          >
            Navigate the financial aspects of studying abroad with confidence. Our expert team provides comprehensive support to make international education accessible and stress-free.
          </motion.p>
        </motion.div>

        {/* Timeline Design */}
        <motion.div
          ref={timelineRef}
          variants={containerVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          className="relative "
        >
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-950 to-[#c1972d] transform md:-translate-x-0.5 origin-top hidden md:block"
          ></motion.div>

          <div className="space-y-5 text-justify">
            {/* Step 1 */}
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-8">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white hover:bg-linear-to-r from-[#c1972d]  to-blue-950 p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:text-white"
                >
                  <div className="flex items-center gap-4 mb-4 md:justify-end">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-blue-50  text-[#c1972d] rounded-2xl flex items-center justify-center"
                    >
                      <Landmark size={24} />
                    </motion.div>
                    <h3 className="text-2xl text-[#c1972d] font-serif font-bold ">Cost Clarity</h3>
                  </div>
                  <span className=" leading-relaxed text-blue-950  text-justify">
                    Cost is one of the primary worries students and parents have when it comes to international education. Our Education Finance Support at Excelencia International in Mumbai, Maharashtra, clarifies your tuition fees, living expenses, and funding options so you start your study abroad experience on the right track!
                  </span>
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={timelineInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#c1972d] rounded-full border-4 border-white shadow-lg transform md:-translate-x-2 order-1 md:order-2 hidden md:block"
              ></motion.div>
              <div className="hidden md:block md:w-1/2 md:pl-12 order-3"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-8">
              <div className="hidden md:block md:w-1/2 md:pr-8 order-2"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={timelineInView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#c1972d] rounded-full border-4  border-white shadow-xl transform md:-translate-x-2 order-1 hidden md:block"
              ></motion.div>
              <div className="md:w-1/2 md:pl-8 order-3">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white hover:bg-linear-to-r from-[#c1972d]  to-blue-950 p-4 rounded-3xl shadow-lg hover:text-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12  bg-blue-50  text-[#c1972d] rounded-2xl flex items-center justify-center"
                    >
                      <ShieldCheck size={24} />
                    </motion.div>
                    <h3 className="text-2xl text-[#c1972d] font-serif font-bold">Budget Planning</h3>
                  </div>
                  <span className=" leading-relaxed text-blue-950  text-justify">
                    Studying the curriculum overseas will demand some financial planning, covering tuition deposits, accommodation fees, visa charges, insurance and travel costs. Our experts guide families through how the entire financial framework works, and assist them with a realistic budget plan.
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-8">
              <div className="md:w-1/2 md:pr-8 text-start md:text-right order-2 md:order-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4 md:justify-end">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-blue-50 text-[#c1972d] rounded-2xl flex items-center justify-center"
                    >
                      <BadgeCheck size={24} />
                    </motion.div>
                    <h3 className="text-2xl text-[#c1972d] font-serif font-bold ">Loan & Scholarship Support</h3>
                  </div>
                  <span className=" leading-relaxed text-blue-950  text-justify">
                    Assistance in education loan advice, scholarship info, sponsorship documents, and financial affidavit. To avoid delays or refusals, our team helps ensure that financial documents comply with both embassy and university standards.
                  </span>
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={timelineInView ? { scale: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.4, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#c1972d] rounded-full border-4 border-white shadow-lg transform md:-translate-x-2 order-1 md:order-2 hidden md:block"
              ></motion.div>
              <div className="hidden md:block md:w-1/2 md:pl-12 order-3"></div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-8">
              <div className="hidden md:block md:w-1/2 md:pr-8 order-2"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={timelineInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.4, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#c1972d] rounded-full border-4 border-white shadow-xl transform md:-translate-x-2 order-1 hidden md:block"
              ></motion.div>
              <div className="md:w-1/2 md:pl-8 order-3">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white  hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-4 rounded-3xl shadow-lg "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-blue-50  text-[#c1972d] rounded-2xl flex items-center justify-center"
                    >
                      <Globe size={24} />
                    </motion.div>
                    <h3 className="text-2xl text-[#c1972d] font-serif font-bold">Country-Specific Guidance</h3>
                  </div>
                  <span className=" leading-relaxed text-blue-950  text-justify">
                    Being one of the top student visa consultants in Bandra, we have all the latest updates regarding individual countries like the UK, USA, Canada, and Australia when it comes to visa and its financial requirements. We help students understand how to maintain accurate bank statements, what GIC (if applicable) is required, and how to prepare strong financial proof.
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-8">
              <div className="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-4 md:justify-end">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white w-12 h-12 bg-blue-50 text-[#c1972d] rounded-2xl flex items-center justify-center"
                    >
                      <Lightbulb size={24} />
                    </motion.div>
                    <h3 className="text-2xl text-[#c1972d] font-serif font-bold ">Stress-Free Approach</h3>
                  </div>
                  <span className=" leading-relaxed text-blue-950  text-justify">
                    We believe in a simple and tangible approach. Funding options are clearly explained so families can decide about funding without stress or confusion. Well, students get ready for their visa approval because of the proper financial preparation, and it also provides confidence and security to the student before traveling.
                  </span>
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={timelineInView ? { scale: 1 } : {}}
                transition={{ delay: 1.7, duration: 0.4, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#c1972d] rounded-full border-4 border-white shadow-lg transform md:-translate-x-2 order-1 md:order-2 hidden md:block"
              ></motion.div>
              <div className="hidden md:block md:w-1/2 md:pl-12 order-3"></div>
            </motion.div>

            {/* /* Step 6 */}
            <motion.div variants={itemVariants} className="relative flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-8">
              <div className="hidden md:block md:w-1/2 md:pr-8 order-2"></div>
              <motion.div
                initial={{ scale: 0 }}
                animate={timelineInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.4, type: "spring" }}
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#c1972d]  rounded-full border-4 border-white shadow-xl transform md:-translate-x-2 order-1 hidden md:block"
              ></motion.div>
              <div className="md:w-1/2 md:pl-8 order-3">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-4 rounded-3xl shadow-lg "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-blue-50  text-[#c1972d] rounded-2xl flex items-center  md:justify-center"
                    >
                      <ChartLine size={24} />
                    </motion.div>
                    <h3 className="text-2xl  text-[#c1972d] font-serif font-bold "> Strategic Financial Planning for Global Futures</h3>
                  </div>
                  <span className=" leading-relaxed text-blue-950  text-justify">
                    With proper strategic planning, right financial decisions equipped with expert counsel, International study becomes a realistic investment towards viable global futures.
                  </span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default FinanceSupportSection;