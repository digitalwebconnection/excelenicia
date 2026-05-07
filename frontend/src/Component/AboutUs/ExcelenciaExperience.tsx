import { motion, animate } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { MessageSquare, Zap, Clock, ShieldCheck } from "lucide-react"

const stats = [
  {
    value: 1000,
    suffix: "+",
    title: "Friendly Conversations",
    desc: "Students feel comfortable asking questions and sharing their goals.",
    icon: MessageSquare
  },
  {
    value: 50,
    suffix: "+",
    title: "Step-by-Step Clarity",
    desc: "Every process is explained clearly, without confusion or pressure.",
    icon: Zap
  },
  {
    value: 100,
    suffix: "%",
    title: "Timely Updates",
    desc: "Regular follow-ups so students always know what’s happening next.",
    icon: Clock
  },
  {
    value: 100,
    suffix: "%",
    title: "Support at Every Stage",
    desc: "From first call to final decision, we stay with you throughout.",
    icon: ShieldCheck
  }
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1], // Custom out-expo ease
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      })
      return () => controls.stop()
    }
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

export default function ExcelenciaExperience() {
  return (
    <section className="relative py-10 md:py-24 bg-white overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c1972d]/10 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1 rounded-full bg-blue-50 text-blue-950 text-xs font-bold tracking-widest   mb-4 border border-blue-100"
          >
            Did You Know
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-[#1a2b3b] text-center  tracking-tighter"
          >
            The <span className="text-[#c1972d] relative">
              Excelencia
              <motion.svg 
                viewBox="0 0 100 10" 
                className="absolute -bottom-2 left-0 w-full h-2 text-blue-950/10"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </motion.svg>
            </span> Experience
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
          {stats.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ item, index }: { item: typeof stats[0], index: number }) {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        relative px-4 md:px-8 py-5 md:py-16 text-center group
        border-gray-100 
        md:border-r border-b lg:border-b-0 last:border-r-0
        hover:bg-linear-to-r from-[#c1972d] to-blue-950 duration-500
      `}
    >
      {/* Icon with floating animation */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="mb-6 flex justify-center"
      >
        <div className="p-3 rounded-2xl bg-blue-50 text-blue-950 group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
          <Icon size={38} strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Large Number with Outlined Shimmer */}
      <div className="relative mb-4 flex justify-center items-center h-20">
        <h3 className="text-6xl font-black tracking-tighter transition-all duration-500 group-hover:scale-110">
          <span className="
            text-blue-950 group-hover:text-white
            [text-stroke:1px_transparent] 
            group-hover:[text-stroke:1px_rgba(255,255,255,0.3)]
            transition-all duration-500
          ">
            <Counter value={item.value} suffix={item.suffix} />
          </span>
        </h3>
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h4 className="text-md font-bold text-[#1a2b3b] group-hover:text-[#ffffff] mb-3   tracking-wider transition-colors duration-500">
          {item.title}
        </h4>
        <p className="text-gray-500 text-justify text-sm leading-relaxed max-w-80 mx-auto group-hover:text-white transition-colors duration-500">
          {item.desc}
        </p>
      </div>

      {/* Background Decorative Element on Hover */}
      <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
      
      {/* Bottom Progress Line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1.5 bg-[#c1972d] w-0 group-hover:w-full transition-all duration-700 ease-in-out"
      />
    </motion.div>
  )
}