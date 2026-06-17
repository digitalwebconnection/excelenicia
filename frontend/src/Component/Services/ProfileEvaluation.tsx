import { CheckCircle, Globe, MapPin, Target, Zap } from 'lucide-react';

const ProfileEvaluation = () => {
    return (
        <section className="relative max-w-7xl mx-auto py-16 md:py-24 px-6 overflow-hidden">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Left Side: The Philosophy (Sticky) */}
                <div className="lg:sticky lg:top-24 space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950 text-white text-md font-bold   tracking-[0.2em] mb-6">
                            Excelencia International
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d]">
                            Profile
                            <span className="text-blue-950"> Evaluation</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-left text-blue-950 text-lg leading-relaxed border-l-2 border-[#c1972d]/30 pl-8">
                        <p>
                            At Excelencia International, the study abroad process starts with a comprehensive profile assessment that helps us to know each student beyond grades and certificates. Apprehensive students are not sure about their eligibility, admission, and the perfect direction across the border. Our professional-grade review process takes the confusion out and lets you know with certainty.
                        </p>

                        <div className="pt-4 flex flex-col gap-4">
                            <div className="flex items-center gap-3 text-md  font-semibold text-blue-950/70">
                                <MapPin className="w-4 h-4 text-[#c1972d]" />
                                Mumbai • Bandra • Maharashtra
                            </div>
                
                        </div>
                    </div>
                    {/* Highlighted LANDING Success Box */}
                    <div className="mt-8 bg-linear-to-r from-[#c1972d] to-blue-950 p-8 rounded-4xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#c1972d]/20 rounded-full blur-3xl -mr-10 -mt-10" />
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <CheckCircle className="text-blue-950" />
                            End-to-End Success
                        </h3>
                        <p className="leading-relaxed text-base">
                            With a well-defined breakdown of the student's profile, we drive this approach right from scratch till the time the student successfully lands in one of our partner universities.
                        </p>
                    </div>
                </div>

                {/* Right Side: The Value Stack */}
                <div className="space-y-6 md:space-y-8 text-left">

                    {/* Detailed Review Card */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:border-[#c1972d]/50 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#c1972d] group-hover:text-white transition-colors">
                            <Globe className="w-6 h-6 text-blue-950 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#c1972d] mb-3">Strategic Country Alignment</h3>
                        <p className="text-blue-950 leading-relaxed text-sm">
                            We conduct a detailed evaluation of academic background, English skills, professional objectives, and financial/other circumstances in the context of the respective country requirements. Rather than promote general recommendations, we present students with a practical plan that’s tailored to their actual potential. "It helps reduce the incidence of futile applications and makes students apply to universities where they stand a good chance."
                        </p>
                    </div>

                    {/* Personalized Approach Card */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:border-[#c1972d]/50 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#c1972d] group-hover:text-white transition-colors">
                            <Target className="w-6 h-6 text-blue-950 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#c1972d] mb-3">Personalized Career Mapping</h3>
                        <p className="text-blue-950 leading-relaxed text-sm">
                            We also assess academic gaps, backlogs, changes of career, and work experience to help in keeping our approach personalized. Students get candid comments on strengths, areas in need of improvement, and suggested paths forward. If a child is not quite ready, we counsel them on how to become eligible and don't strip away the process.
                        </p>
                    </div>

                    {/* Result Card */}
                    <div className="bg-white p-5 md:p-6 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 group hover:border-[#c1972d]/50 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[#c1972d] group-hover:text-white transition-colors">
                            <Zap className="w-6 h-6 text-blue-950 group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#c1972d] mb-3">Efficiency & Certainty</h3>
                        <p className="text-blue-950 leading-relaxed text-sm italic">
                            This facility is a must for those who are looking for student visa consultancy in Mumbai, Bandra, and other parts of Maharashtra, as it saves time, money, & the stress from the right start. It is a fact that a strong profile evaluation can empower students to decide their destination with the right plan in place.
                        </p>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default ProfileEvaluation;