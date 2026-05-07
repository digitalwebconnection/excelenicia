import { useEffect, useRef, useState } from "react";

const DocumentationSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Academic Documents",
      desc: "Transcripts and certificates prepared as per international standards.",
      icon: "🎓",
    },
    {
      title: "Statement of Purpose",
      desc: "Expert review and guidance to craft a powerful SOP.",
      icon: "📝",
    },
    {
      title: "Letters of Recommendation",
      desc: "Structured LORs that strengthen your profile credibility.",
      icon: "📄",
    },
    {
      title: "Resume Building",
      desc: "Globally accepted resume formats for universities.",
      icon: "💼",
    },
    {
      title: "Financial Proof",
      desc: "Accurate documentation for visa fund requirements.",
      icon: "💰",
    },
    {
      title: "Application Documents",
      desc: "Complete and verified application file submission.",
      icon: "📂",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div
          className={`space-y-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 leading-tight">
            Documentation That{" "}
            <span className="text-[#c1972d]">Gets You Approved</span>
          </h2>

          <p className="text-gray-600 text-justify text-base md:text-lg leading-relaxed">
            Your documentation can make or break your admission and visa approval.
            We ensure every document meets global standards and strengthens your application.
          </p>

          <div className="border-l-4 text-justify border-[#c1972d] pl-4 text-gray-700">
            A well-prepared SOP, strong documentation, and error-free submission
            significantly increase your chances of success.   We guide you through document sorting, reviewing, and final submission —
          ensuring accuracy, clarity, and maximum impact for your application success.
          </div>
                {/* Bottom Highlight */}
     
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-4">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#c1972d] hover:shadow-md transition-all duration-300 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-2xl">{item.icon}</div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>


    </section>
  );
};

export default DocumentationSection;