import { easeOut, motion } from "framer-motion";
import {
    Globe,
    BadgeCheck,
    IndianRupee,
    Briefcase,
    FileCheck,
    TrendingUp,
    ChevronRight,
} from "lucide-react";

export default function ShortlistingSection() {


    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
    };

    const features = [
        { icon: IndianRupee, title: "Tuition & Living", desc: "Transparent cost forecasting" },
        { icon: BadgeCheck, title: "Scholarships", desc: "Maximum funding potential" },
        { icon: Briefcase, title: "Job Prospects", desc: "Post-study work analysis" },
        { icon: FileCheck, title: "Visa Success", desc: "Approval-centric selection" },
        { icon: TrendingUp, title: "Career Growth", desc: "Long-term pathway mapping" },
        { icon: Globe, title: "Global Reach", desc: "Tier-1 study destinations" },
    ];

    return (
        <section className="w-full bg-white py-10 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                {/* Badge Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-8 py-1 rounded-full bg-blue-50 border border-blue-100 mb-2"
                >
                    <span className="text-blue-950 text-lg font-bold tracking-wide  ">
                        Expert Guidance
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-10"
                >

                    Country, Course, University  
                    <span className="text-blue-950">  Shortlisting</span>
                </motion.h2>

                <div className="grid text-left md:grid-cols-2 gap-10 items-start">
                    {/* RIGHT CONTENT - FEATURE GRID */}
                    <div className="relative">
                        {/* Animated background blob */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -inset-4 -rotate-2"
                        />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                                    }}
                                    className="group  hover:bg-linear-to-r from-[#c1972d]  to-blue-950 p-6 rounded-xl border-b-4 border-transparent hover:border-[#c1972d] transition-all duration-300 shadow-xl cursor-default"
                                >
                                    <item.icon
                                     
                                        className="mb-4 text-[#c1972d] group-hover:text-blue-950 group-hover:rotate-12 transition-transform duration-300"
                                        size={32}
                                    />
                                    <h3 className="font-bold text-[#c1972d] group-hover:text-white text-lg">{item.title}</h3>
                                    <p className="group-hover:text-blue-200/70 text-sm mt-2 text-blue-950 leading-snug">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 text-justify">
                            <p className="text-blue-950 text-lg leading-relaxed">
                                Selecting the perfect place to study is one of the biggest decisions you will make throughout your life. With thousands of universities and programs on offer globally, it’s no wonder students become stressed. Explore the very best options with our Country, Course & University Shortlisting Service in Bandra, Mumbai, India.
                            </p>

                            {[
                                "At Excelencia International, we support students to compare the top study destinations, such as the UK, USA, Canada, Australia & Europe, for their visa success rate, tuition fee, and post-study work, PR pathways, and global career prospects.",
                                "We, on the other hand, don’t believe in random recommendations or using trashy lists. Our professionals prepare a tailored university list according to your academic profile, career aspirations, and financial status. Each student gets a well-balanced, moderate,  and safe school list to optimize the chances of admission.",
                                "We help students to choose courses that are in line with future job prospects and international recognition. We know we can’t just focus on ranking; we need to prioritize ROI, career return, and long-term success."
                            ].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="mt-1 bg-blue-950 p-1 rounded-full shrink-0">
                                        <ChevronRight size={16} className="text-[#c1972d]" />
                                    </div>
                                    <p className="text-blue-950">{text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>


                </div>

                {/* BOTTOM CALLOUT */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 p-8 rounded-2xl text-center"
                >
                    <p className="text-blue-950 text-lg md:text-xl max-w-7xl mx-auto  font-medium">
                        "Through our personal shortlisting service, students can benefit from a guided selection process and apply with confidence. The right course and university can change everything about your future, and we make sure you pick wisely."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}