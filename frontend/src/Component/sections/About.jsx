import React from 'react';

const About = () => (
  <section id="about" className="bg-ivory py-8 lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="gold-rule" />
            <span className=" text-gold ">ABOUT EXCELENCIA</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display font-semibold text-3xl drop-shadow-[0_1px_0px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl leading-[1.3] tracking-tight text-ink mb-8">
            Study abroad Dreams, <span className='text-gold'>Crafted Into Reality.</span>
          </h2>
          {/* Stats strip */}
          <div className="flex gap-8 mb-8 pt-6 border-t border-black">
            <div>
              <p className="font-display text-3xl lg:text-4xl text-gold font-semibold">1000+</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">Students Guided</p>
            </div>
            <div className="w-px bg-black" />
            <div>
              <p className="font-display text-3xl lg:text-4xl text-gold font-semibold">98%</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-1">Visa Success Rate</p>
            </div>
          </div>
          <p className="text-black text-justify leading-relaxed mb-6">
            Excelencia International is a premier study-abroad consultancy dedicated to turning
            international education ambitions into reality. With years of hands-on experience,
            our team has helped over a thousand students secure admissions, scholarships, and visas
            at top UK universities.
          </p>
          <p className="text-black text-justify leading-relaxed">
            We believe every student deserves honest, personalised guidance — not cookie-cutter
            advice. From your first free counselling session to your first day on campus, we walk
            every step of the journey with you, ensuring clarity, confidence, and the best possible
            outcome.
          </p>
        </div>

        {/* Right: Image with quote overlay */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1707065634977-ad779c889242?crop=entropy&cs=srgb&fm=jpg&w=900&q=85"
            alt="Students studying"
            className="w-full h-135 object-cover"
          />
          <div className="hidden md:block absolute -bottom-8 -left-8 bg-ink p-8 max-w-xs shadow-2xl">
            <p className="font-display text-xl text-white  leading-snug mb-3">
              "Crafting quality, delivering trust."
            </p>
            <p className="text-gold-light text-md uppercase tracking-widest">— Our promise</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
