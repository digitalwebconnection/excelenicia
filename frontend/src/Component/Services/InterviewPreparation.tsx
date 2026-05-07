import { Quote, CheckCircle2, MessageSquare, ShieldCheck, GraduationCap } from 'lucide-react';

const InterviewDetailSection = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#c1972d]" />,
      title: "Mock Environment",
      desc: "Simulated sessions that mimic real embassy and university pressure."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#c1972d]" />,
      title: "Tricky Question Mastery",
      desc: "Deep dives into financial viability, intent, and post-study goals."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#c1972d]" />,
      title: "Individual Feedback",
      desc: "Personalized coaching to shore up weaknesses before the live interview."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="max-w-4xl text-center mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#c1972d] uppercase mb-3">
            Mumbai - Bandra Expert Coaching
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight">
            Excelencia International <br />
            <span className="text-[#c1972d] ">Student Visa Interview Preparation</span>
          </h3>

        </div>

        <div className="grid text-justify grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
              <Quote className="absolute -top-4 -left-7 text-[#c1972d] w-20 h-20 z-0" />
              <p className="relative z-10 text-xl text-slate-700 leading-relaxed italic">
                "One of the most pressing tasks before you can even think about studying abroad is getting your student visa. Excelencia International offers expert student visa assistance in Mumbai Bandra that helps students submit strong, accurate, well-prepared visa applications."
              </p>
            </div>

            <div className="space-y-6 text-slate-600 text-md leading-relaxed">
              <p>
                Getting approved for a student visa requires proper documentation, financial proof that you can afford the cost, a genuine intent to study and compliance with immigration laws. Visa application forms, Financial statements, Sponsorship documents, Medical test, Biometric appointment & Credibility interview are processes students face while applying abroad and are mentored by our exceptionally experienced visa consultants.
              </p>
              <p>
                We are updated with the latest immigration policies for some major study destinations like the UK, USA, Canada, Australia, and Europe. Embassies receive an influx of applications every day, but our team makes sure that your paperwork meets their requirements as stated on their website, so that the chances of getting denied or delayed are at a minimum. We also conduct mock credibility interviews as necessary, where we have to ensure that the students are able to state their reasons for the choice of course, academic goals, and financial preparedness confidently.As a study abroad consultancy in Mumbai, we work in an organized and transparent manner from the 1st day. All details are vetted before submission, with timelines that are as transparent as possible so students and parents can feel comfortable knowing their time is valued throughout the process.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                {['Communication Skills', 'Clarity of Purpose', 'Genuine Intent'].map((skill) => (
                  <span key={skill} className="flex items-center gap-2 bg-blue-950 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-blue-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">What We Target:</h4>
                <div className="space-y-6">
                  {features.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="bg-white/10 p-3 rounded-lg h-fit">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-white">{item.title}</h5>
                        <p className="text-blue-100 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative background circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c1972d]/20 rounded-full blur-3xl"></div>
            </div>

            <div className="p-6 border-l-4 border-[#c1972d] bg-white">
              <p className="text-slate-600 italic">
                "Our professional student visa advice and personalised understanding enable us to boost visa acceptance rates, helping students confidently take that final step towards their dream of growing internationally."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterviewDetailSection;