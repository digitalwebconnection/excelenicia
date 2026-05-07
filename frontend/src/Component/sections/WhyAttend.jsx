import React from 'react';

const whyItems = [
  {
    title: 'Live session with UK study experts',
    desc: 'Direct access to specialists who know the system inside out.',
  },
  {
    title: 'Step-by-step guidance for 2026 intake',
    desc: 'Timelines, deadlines, and action plans tailored for the upcoming cycle.',
  },
  {
    title: 'Get your doubts solved in LIVE Q&A',
    desc: 'Ask your specific questions and get real answers in real time.',
  },
  {
    title: 'Personalised advice for your profile',
    desc: 'Guidance calibrated to your background, budget, and career ambitions.',
  },
];

const WhyAttend = () => (
  <section
    id="why-attend"
    className="relative  py-8 lg:py-12 overflow-hidden"
  >
    {/* Parallax-feel bg image */}
    <div
      className="absolute inset-0 "
      style={{
        backgroundImage:
          'url(https://www.upgrad.com/new/_ww3-next/image/?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FUK%20hero-8d9cfc5478f84fb89d873ef2b197d26e.webp&w=3840&q=75)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
    <div className="absolute inset-0  bg-black/60" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center gap-3 mb-4 justify-center">
        <span className="gold-rule" />
        <span className=" text-sm md:text-lg text-white ">WHY YOU SHOULD ATTEND</span>
        <span className="gold-rule" />
      </div>
      <h2 className="font-display text-3xl font-semibold drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl  text-white mb-14">
        Seats are limited.<br />
        <span className="text-gold underline underline-offset-8 decoration-2 decoration-white">
          Your Future isn't.
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 mb-5 md:mb-14">
        {whyItems.map((item, i) => (
          <div
            key={i}
            className="bg-ink/70 backdrop-blur-sm p-8 text-left hover:bg-black/45 transition-colors duration-300"
          >
            <div className="w-8 h-px bg-gold mb-6" />
            <h3 className="font-display text-xl text-white mb-3 leading-snug">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
     
    </div>
  </section>
);

export default WhyAttend;
