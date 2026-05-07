import image from "../../assets/1.jpg"
import { motion } from "framer-motion";

export default function StudentVisionSection() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-blue-950">

      {/* Background Image */}
      <motion.img
        src={image}
        alt="Students journey"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative  flex items-center justify-start z-10 h-full  ">

        <div className="max-w-4xl   px-6 md:px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm w-55 tracking-widest bg-[#c1972d] px-5 py-1 rounded-2xl text-white   mb-4"
          >
            How We See Students
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="text-3xl  md:text-5xl font-serif font-semibold text-white leading-tight"
          >
            Your Dream Deserves  <br />
            <span className="text-[#c1972d]">Honest Guidance.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 max-w-4xl text-base md:text-lg text-blue-100 leading-relaxed"
          >

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-100 text-justify text-md md:text-xl leading-relaxed space-y-6"
            >
              <p>
                Deciding to study abroad may be one of the most beneficial and life-changing decisions a student ever makes.
                It affects more than just the course of your education - it has its effects on your
                <strong> career advancement, international exposure, and long-term future opportunities.</strong>
              </p>
              <p>
                Right counselling not only helps you select the right course to match your career ambitions but also guides
                you in choosing universities that best suit your profile. Proper guidance will lead to a very good strategy
                that increases the chances of admission as well as visa success.
              </p>
              <p >
                Studying abroad is not just about getting a degree; it is about securing a global future,
                and the right direction is all important.
              </p>
              <p className="font-light italic text-gray-300">At Excelencia International, the <a href="/services">best student visa consultancy service in Mumbai</a>, India, we do not believe in pressure, quick fixes, or false promises. We listen first. This approach allows us to put your goals into action with clear and compassionate guidance. Our mission is straightforward; we are here to help you make the best decision for your future, not the easiest one.</p>
            </motion.div>
          </motion.p>


          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 h-0.5 bg-[#c1972d]"
          />
        </div>
      </div>
    </section>
  );
}
