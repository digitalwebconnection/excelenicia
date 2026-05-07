import React from "react";
import imranji from "../../assets/imranji.png";
import taranjit from "../../assets/taranjit.png";

const hosts = [
  {
    name: "Imran Huda",
    role: "CEO, Excelencia International",
    bio: " Brings over 10 years of experience in international student recruitment and global education strategy. He has helped numerous students secure admissions in leading universities by providing clear, structured, and reliable guidance. With a strong understanding of UK education systems, admissions standards, and visa processes, he simplifies complex procedures into easy, actionable steps. Known for his student-first approach, Imran focuses on transparency, accuracy, and personalized support. His expertise, global exposure, and commitment to student success ensure that every applicant makes informed decisions and moves forward with confidence in their study abroad journey.",
    img: imranji,
  },
  {
    name: "Taranjit Singh",
    role: "Managing Partner, Excelencia International",
    bio: "Brings over 12 years of experience in international student recruitment and global education systems. With strong global exposure, he has deep expertise in admissions, market trends, and student placement strategies. Backed by 21+ years of leadership experience in communication, relationship management, and operations, he is known for building strong partnerships and driving long-term value. His approach focuses on integrity, transparency, and structured execution. A skilled communicator and visionary leader, Taranjit ensures smooth processes and empowers students and teams to achieve successful outcomes in their international education journey.",
    img: taranjit,
  },
];

const Hosts = () => {
  return (
    <section className="bg-[#f6f1e9] py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-xl font-bold tracking-widest text-gold mb-1">
            HOSTED BY
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
            Two Experts. One <br /> <span className=" text-gold">Unforgettable
             Session.</span> 
          </h2>

          <p className="text-gray-900 mt-4 text-md">
            Guiding you with expert insights and proven experience to make your UK study journey clear and successful.
          </p>
        </div>

        {/* HOST GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">

          {hosts.map((host, i) => (
            <div key={i} className="text-left p-4 ">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={host.img} // ✅ FIXED
                  alt={host.name}
                  className="w-full bg-white h-105 md:h-100 object-cover object-top"
                />
              </div>

              {/* TEXT */}
              <div className="mt-4">
                <h3 className="text-2xl font-serif text-black">
                  {host.name}
                </h3>

                <p className="text-sm tracking-widest uppercase text-yellow-700 mt-1">
                  {host.role}
                </p>

                <p className="text-sm text-justify text-gray-900 mt-3 leading-relaxed">
                  {host.bio}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Hosts;