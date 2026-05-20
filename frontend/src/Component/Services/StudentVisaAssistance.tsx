import { motion } from "framer-motion";

export default function StudentVisaAssistance() {
  return (
    <section className="bg-white py-10 px-6 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto relative">


        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" p-8 md:p-0  transition"
        >
          <h2 className="text-3xl text-center md:text-5xl font-serif font-extrabold text-[#c1972d] mb-8">
            Student Visa <span className="text-blue-950">  Assistance</span>
          </h2>

          <div className="space-y-6 text-justify text-blue-950 leading-relaxed text-lg md:text-base">
            <p className="text-lg">
              One of the most pressing tasks before you can even think about studying abroad is getting your student visa. Excelencia International offers expert student visa assistance in Mumbai Bandra that helps students submit strong, accurate, well-prepared visa applications.
            </p>

          <p className="text-lg">
              Getting approved for a student visa requires proper documentation, financial proof that you can afford the cost, a genuine intent to study and compliance with immigration laws. Visa application forms, Financial statements, Sponsorship documents, Medical test, Biometric appointment & Credibility interview are processes students face while applying abroad and are mentored by our exceptionally experienced visa consultants.
            </p>

           <p className="text-lg">
              We are updated with the latest immigration policies for some major study destinations like the <a href="destination/uk"> UK</a>, <a href="destination/usa"> USA</a>, <a href="destination/canada"> Canada</a>, <a href="destination/australia"> Australia</a>, and <a href="destination/europe"> Europe</a>. Embassies receive an influx of applications every day, but our team makes sure that your paperwork meets their requirements as stated on their website, so that the chances of getting denied or delayed are at a minimum. We also conduct mock credibility interviews as necessary, where we have to ensure that the students are able to state their reasons for the choice of course, academic goals, and financial preparedness confidently.<a href="/"> As a study abroad consultancy in Mumbai</a>, we work in an organized and transparent manner from the 1st day. All details are vetted before submission, with timelines that are as transparent as possible so students and parents can feel comfortable knowing their time is valued throughout the process.
            </p>

            <p className="text-blue-950 text-lg">
              Our professional student visa advice and personalised understanding enable us to boost visa acceptance rates, helping students confidently take that final step towards their dream of growing internationally.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}