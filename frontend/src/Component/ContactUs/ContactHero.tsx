
import { easeOut, motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, ArrowRight } from "lucide-react";

export default function ContactHero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section className="relative py-10 flex items-center justify-center overflow-hidden  text-white  px-6">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/premium-photo/visa-application-form-travel-immigration-document_926199-3784068.jpg"
          alt="background"
          className="w-full h-full object-cover "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-start max-w-3xl  mb-8">

          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-block  px-8 py-2 mb-4 text-xs font-semibold tracking-widest   bg-[#c1972d]/10 border border-[#c1972d]/30 text-[#c1972d] rounded-full"
          >
            Get In Touch
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl md:text-7xl font-serif font-extrabold tracking-tight mb-6"
          >
            Let’s build something{" "}
            <span className="text-[#c1972d]">together.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-md md:text-lg text-slate-100 leading-relaxed"
          >
            Whether you're in Mumbai or Dubai, our global team is ready to provide
            the guidance and technical solutions your business deserves.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Methods */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="lg:col-span-1 space-y-4"
          >
            <ContactMethodCard
              icon={<Mail size={24} />}
              label="Email us at"
              value="queries@excelenciaint.com"
              href="mailto:queries@excelenciaint.com"
            />

            <ContactMethodCard
              icon={<Phone size={24} />}
              label="Call our experts"
              value="+91 97697 87211"
              href="tel:+919769787211"
            />
          </motion.div>

          <LocationCard
            index={4}
            country="India"
            address="Elco Arcade, D Wing, Office No. 45, First Floor, Bandra West, Mumbai 400050"
            tag="Regional Hub"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Elco+Arcade+D+Wing+Office+No+45+First+Floor+Near+Almeida+Park+Bandra+West+Mumbai+400050"
          />

          <LocationCard
            index={5}
            country="UAE"
            address="Building A1, Dubai Digital Park, Dubai Silicon Oasis, United Arab Emirates"
            tag="Headquarters"
            mapUrl="https://www.google.com/maps/search/?api=1&query=Dubai+Digital+Park+Dubai+Silicon+Oasis+UAE"
          />

        </div>

      </div>
    </section>
  );
}

interface ContactMethodProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactMethodCard({ icon, label, value, href }: ContactMethodProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-5 p-4 md:p-8 rounded-lg bg-black/30  backdrop-blur-md border border-white/10 hover:border-[#c1972d]/50 hover:bg-white/10 transition-all group"
    >
      <div className="p-3 rounded-xl bg-[#c1972d]/10 text-[#c1972d] group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </a>
  );
}

interface LocationCardProps {
  country: string;
  address: string;
  tag: string;
  index: number;
  mapUrl?: string;
}

function LocationCard({ country, address, tag, index, mapUrl }: LocationCardProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  const cardContent = (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative group overflow-hidden rounded-lg bg-black/30 backdrop-blur-md border border-white/10 p-4 md:p-6 hover:border-[#c1972d]/60 transition-colors cursor-pointer h-full"
    >
      <div className="relative z-10">

        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-full bg-white/10 text-[#c1972d]">
            <MapPin size={24} />
          </div>

          <span className="text-[10px]  border border-white   tracking-widest font-bold text-[#c1972d] bg-[#c1972d]/10 px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>

        <h2 className="text-3xl font-bold font-serif text-[#c1972d] mb-4">{country}</h2>

        <p className="text-slate-100 text-sm leading-relaxed mb-4 ">
          "{address}"
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#c1972d] transition-colors">
          View on Map
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>

      <Globe className="absolute -bottom-10 -right-10 text-white/5 w-40 h-40 transition-transform group-hover:scale-110 duration-700" />
    </motion.div>
  );

  if (mapUrl) {
    return (
      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}