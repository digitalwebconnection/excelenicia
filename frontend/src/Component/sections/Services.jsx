import React from 'react';
import { GraduationCap, Compass, FileText, DollarSign, Stamp, Home } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    num: '01',
    icon: Compass,
    title: 'Career Counselling',
    desc: 'Clarity on the right course, university & career path.',
  },
  {
    num: '02',
    icon: GraduationCap,
    title: 'University & Admission',
    desc: 'Apply to top UK universities with expert guidance.',
  },
  {
    num: '03',
    icon: FileText,
    title: 'SOP & Documentation',
    desc: 'Build a strong profile with proper documents & SOP.',
  },
  {
    num: '04',
    icon: DollarSign,
    title: 'Scholarship & Finance',
    desc: 'Plan your budget and explore scholarship options.',
  },
  {
    num: '05',
    icon: Stamp,
    title: 'Visa Assistance',
    desc: 'Complete support for a smooth and successful visa process.',
  },
  {
    num: '06',
    icon: Home,
    title: 'Pre-Departure Support',
    desc: 'Guidance for accommodation, travel & settling in the UK.',
  },
];

const Services = () => (
  <section id="services" className="bg-ivory py-8  lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
       {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-5 md:mb-16">
          <p className="text-sm md:text-lg text-gold font-medium mb-2">
           OUR SERVICES
          </p>
          <h2 className="font-display  max-w-2xl mx-auto text-3xl drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)]  sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-5">
           Complete Guidance,  <br /> <span className='text-gold '>Start to Finish.</span> 
          </h2>
          <p className="text-gray-600 mt-4 ">
            From your first counselling call to your first day in the UK — we walk the entire journey with you.
          </p>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <div
              key={i}
              data-testid={`service-card-${i}`}
              className="group relative px-8 py-12 border border-gray-600/70 rounded-xl hover:bg-cream transition-colors duration-300"
            >
              <span
                className="absolute top-4 right-6 font-display text-6xl font-bold text-border group-hover:text-gold transition-colors duration-300 select-none leading-none"
                aria-hidden
              >
                {svc.num}
              </span>
              <div className="w-12 h-12 bg-ink flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300 relative z-10">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3 relative z-10">{svc.title}</h3>
              <p className="text-sm text-muted leading-relaxed relative z-10">{svc.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
