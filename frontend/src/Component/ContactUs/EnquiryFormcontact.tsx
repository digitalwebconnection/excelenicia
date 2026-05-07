import { easeOut, motion } from "framer-motion";
import { Send, Globe, Target, ArrowUpRight, BookOpen, Newspaper, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

const updates = [
    {
        category: "Immigration News",
        title: "New 2026 Work Permit Regulations for UAE & GCC",
        desc: "Detailed breakdown of the latest visa amendments for skilled professionals.",
        date: "Mar 05, 2026",
        icon: <Newspaper size={20} />,
    },
    {
        category: "Expert Blog",
        title: "Choosing Between Canada and Australia in 2026",
        desc: "Which country offers better PR prospects for tech experts?",
        date: "Mar 02, 2026",
        icon: <BookOpen size={20} />,
    },
    {
        category: "Success Stories",
        title: "Excelenci reaches 5,000+ Successful Visa Grants",
        desc: "Celebrating a milestone in global immigration excellence.",
        date: "Feb 28, 2026",
        icon: <Trophy size={20} />,
    },
    {
        category: "Industry Update",
        title: "Impact of AI on Student Visa Processing Times",
        desc: "How automation is speeding up the approval process globally.",
        date: "Feb 25, 2026",
        icon: <Newspaper size={20} />,
    }
];

export default function ExcelenciFormWhite() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % updates.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // ✅ FIXED SUBMIT HANDLER
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        setLoading(true);
        setResult("Sending...");

        // 🔥 REQUIRED (Fix spam + delivery)
        formData.append("access_key", "99f8361f-e5e4-493d-ae0a-6f3acd3d4274");
        formData.append("subject", "New Consultation Request - White Form");
        formData.append("from_name", "Excelencia Immigration");
        formData.append("replyto", formData.get("email") as string);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    Accept: "application/json", // ✅ VERY IMPORTANT (fix network + spam issues)
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setResult("✅ Enquiry submitted successfully!");
                form.reset();

                setTimeout(() => setResult(""), 4000);
            } else {
                setResult("❌ Submission failed. Try again.");
                setTimeout(() => setResult(""), 4000);
            }

        } catch (error) {
            console.error(error);
            setResult("❌ Network error. Please try later.");
            setTimeout(() => setResult(""), 4000);
        }

        setLoading(false);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    return (
        <section className="relative py-14 px-6 bg-white overflow-hidden text-slate-900">
            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 pt-2"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#c1972d]/10 flex items-center justify-center text-[#c1972d]">
                            <Globe size={20} />
                        </div>
                        <p className="  tracking-[3px] text-sm text-[#c1972d] font-bold">
                            Excelencia International
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-extrabold leading-tight tracking-tight text-blue-950">
                        Your Blueprint for <span className="text-[#c1972d]"> Global Success</span>
                    </h2>

                    <p className="text-slate-600 text-md md:text-lg leading-relaxed max-w-md">
                        Expert consultation tailored for study, work, and permanent residency visas.
                    </p>

                    <div className="border-t border-slate-100 md:pt-6 mt-8 space-y-4 text-sm text-slate-600">
                        <p className="flex items-center gap-2">
                            <Target className="text-[#c1972d]" size={16} />
                            100% Case Assessment
                        </p>
                        <p className="flex items-center gap-2">
                            <Target className="text-[#c1972d]" size={16} />
                            Certified Immigration Specialists
                        </p>
                    </div>
                </motion.div>

                {/* FORM */}
                <motion.form
                    onSubmit={handleFormSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    className="lg:col-span-7 p-2 md:p-4"
                >
                    <input type="hidden" name="from_name" value="Excelencia Website" />
                    <input type="hidden" name="subject" value="New Consultation Request" /> 

                    <motion.div variants={itemVariants} className="mb-5">
                        <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#c1972d] mb-2">
                            Request a Consultation
                        </h3>
                        <p className="text-slate-600">
                            Provide your details, and our visa experts will connect shortly.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                        <FormInput name="name" variants={itemVariants} type="text" placeholder="Full Name" required />
                        <FormInput
                            name="phone"
                            variants={itemVariants}
                            type="tel"
                            placeholder="Contact Number"
                            required
                            pattern="[6-9][0-9]{9}"
                            title="Please enter a valid 10-digit Indian phone number"
                        />
                        <FormInput name="email" variants={itemVariants} type="email" placeholder="Email ID" required />
                        <FormInput name="location" variants={itemVariants} type="text" placeholder="Current Location" required />

                        <motion.div variants={itemVariants} className="md:col-span-2">
                            <textarea
                                name="message"
                                required
                                placeholder="Describe your visa requirements"
                                rows={3}
                                className="w-full bg-transparent border-b-2 border-slate-200 py-3 focus:border-[#c1972d] outline-none resize-none text-gray-800"
                            />
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="mt-12">
                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-linear-to-r from-[#c1972d] to-blue-950 text-white font-semibold px-10 py-4 rounded-xl flex items-center gap-3 disabled:opacity-50 transition-opacity"
                        >
                            {loading ? "Processing..." : "Submit Your Enquiry"}
                            <Send size={18} />
                        </motion.button>

                        {result && (
                            <p className={`mt-4 font-medium ${result.includes('✅') ? 'text-green-600' : 'text-red-500'}`}>
                                {result}
                            </p>
                        )}
                    </motion.div>
                </motion.form>
            </div>

            {/* UPDATES SECTION */}
            <section className="bg-white border-t border-black/20 mt-10 py-14 ">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 text-[#c1972d] font-bold tracking-widest   text-xs mb-3" >
                                <span className="w-8 h-0.5 bg-[#c1972d]"></span> Knowledge Hub
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-black font-serif text-blue-950 leading-tight">
                                Latest <span className="text-[#c1972d]">Insights &</span> Updates
                            </h2>
                        </div>
                        <button className="hidden bg-linear-to-r from-[#c1972d] to-blue-950 md:flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-white font-semibold transition-colors">
                            View All News <ArrowUpRight size={18} />
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-2 md:gap-6">
                        <FeaturedCard item={updates[activeIndex]} />
                        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
                            {updates.map((item, idx) => (
                                <SecondaryCard key={idx} item={item} index={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

function FormInput({ variants, name, ...props }: { variants: any; name: string;[key: string]: any }) {
    return (
        <motion.div variants={variants}>
            <input
                {...props}
                name={name}
                className="w-full border-b-2 border-slate-200 py-3 focus:border-[#c1972d] outline-none text-gray-800"
            />
        </motion.div>
    );
}

// ... FeaturedCard and SecondaryCard remain unchanged ...
function FeaturedCard({ item }: { item: any }) {
    return (
        <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 group relative bg-slate-900 rounded-[2.5rem] p-4 md:p-10 overflow-hidden flex flex-col justify-end md:min-h-112 min-h-90 "
        >
            <div className="relative z-10">
                <span className="bg-[#c1972d] text-white text-[10px] px-4 py-1 rounded-full">{item.category}</span>
                <h3 className= "text-2xl md:text-3xl font-bold text-white mt-2 md:mt-6 mb-4">{item.title}</h3>
                <p className="text-slate-400 text-md md:text-lg mb-8 max-w-md">{item.desc}</p>
                <div className="flex justify-between border-t border-white/10 pt-6">
                    <span className="text-slate-500 text-sm">{item.date}</span>
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <ArrowUpRight size={22} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

function SecondaryCard({ item, index }: { item: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-slate-100 border border-[#c1972d] p-4 md:p-8 rounded-4xl hover:shadow-xl transition"
        >
            <div className="text-[#c1972d] mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-bold text-[#c1972d] leading-snug">{item.title}</h3>
            <p className="text-slate-500 text-sm mt-4 text-justify">{item.desc}</p>
            <div className="mt-6 flex justify-between text-xs  ">
                <span className="text-slate-400">{item.date}</span>
                <span className="flex items-center gap-1">Read <ArrowUpRight size={14} /></span>
            </div>
        </motion.div>
    );
}