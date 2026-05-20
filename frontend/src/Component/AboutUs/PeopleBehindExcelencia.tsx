import { motion } from "framer-motion"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import imranji from "../../assets/imranji.png"
import taranjit from "../../assets/taranjit.png"


const leaders = [
    {
        name: "Imran Huda",
        role: "CEO, Excelencia International",
        description:
            "Leads Excelencia with a focus on clarity, trust, and helping students take confident steps toward international education.",
        image:imranji,
        instagram: "https://www.instagram.com/imranhuda1?igsh=aDNyN2RmZXNwM3U2",
        linkedin: "https://www.linkedin.com/in/imran-huda-9836a3148/",
        facebook: "https://www.facebook.com/share/1DB3iCRYhf/?mibextid=wwXIfr",
        details: `10 years of experience in the recruitment of international students has earned him a stellar reputation in steering students to the appropriate international education avenues. He is a former employee of a reputable UK university and has had firsthand experience in regard to international admissions standards, academic expectations, and international student engagement strategies. His experience gives him a chance to see the institutional point of view and the dreams of a student, connecting the two point-blank.
In addition to recruiting students, he also has over 20 years of experience in building relationships, leadership, communication and strategic management. His organizational skills and structured approach can be demonstrated by the fact that he can afford to deal with several students and international agents. He is sure that good work consists of attention to detail, accuracy, documentation accuracy and clear instructions, which are the main points of his professional philosophy.
Imran is very goal and student-oriented in nature. His communication, presentation and management skills allow him to streamline the complicated process of admissions and visas without complicating it and ensure that the students and their families can easily comprehend it. Having global exposure and having detailed information about the education system in different countries, he gives informed, ethical and personalized guidance.
Being reputable in his helpfulness and with a team mindset of strong leadership, he considers the journey of all the students as a duty and not an exchange. His advice is based on experience, integrity and sincere interest in the success of students.
`,
        quotes: [
            "Success in global education begins with the courage to guide responsibly."
        ]
    },
    {
        name: "Taranjit Singh",
        role: "Managing Partner, Excelencia International",
        description:
            "Works closely on student guidance and operations to ensure every journey is smooth and structured.",
        image:taranjit,
        instagram: "https://www.instagram.com/lonewolf_tj?igsh=MTJvZHJpeXZ4YzM1Yg==",
        linkedin: "https://www.linkedin.com/in/taranjit-singh-939491225/",
        facebook: "https://www.facebook.com/share/1D1grBen6C/?mibextid=wwXIfr",
        details: `Having been in the international student recruitment industry of a respectable university in the UK with more than 12 years of experience in the field, he has a very profound insight into international admission, market forces and the international education system. His career has enabled him to operate in various parts of the world and he has had good global exposure and knowledge of what exactly makes student placements successful.
He is strategic and visionary and is backed by a 21-year experience in managing relationships, communication, sales support and team leadership. His track record is that of developing a product into a strong brand through the use of innovation, positioning and creating long-term value. His leadership approach is based on compliance, integrity and organization of execution, where all processes are of the finest quality and transparency.
He is an accomplished public speaker and an effective communicator who motivates teams and establishes relationships of trust with partners and solidifies cross-border partnerships. His technological knowledge also adds to the efficiency in operations and contemporary business practice. He can conduct several businesses at the same time, which shows outstanding organizational, strategic and performance-focused leadership skills.
To him, the key to sustainable growth is found in the close relationships, practices and visionary orientation. His leadership is not about the numbers and targets, but it is about establishing the institutions, empowering the teams, and making an impact in the global education industry.
`,
        quotes: [
            "Vision builds brands, leadership sustains them, and integrity defines their legacy."
        ]
    }
]

import { useState } from "react";


function LeaderCard({ person, index }: any) {
    const [flipped, setFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group relative h-140 md:h-195 perspective-distant"
            onClick={() => setFlipped(!flipped)} // 👈 mobile click flip
        >
            <div
                className={`
                    relative h-125 md:h-full w-full duration-700 transform-3d
                    ${flipped ? "rotate-y-180" : ""}
                    md:group-hover:rotate-y-180
                `}
            >
                {/* FRONT */}
                <div className="absolute inset-0 bg-white rounded-[2.5rem] p-4 shadow-xl backface-hidden">
                    
                    <div className="relative h-80 md:h-135 rounded-3xl overflow-hidden">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#1a2b3b]/80 to-transparent" />
                    </div>

                    <div className="px-5 py-5 text-[#1a2b3b]">
                        <h3 className="text-xl md:text-2xl font-black mb-1 text-[#c1972d] font-serif">
                            {person.name}
                        </h3>

                        <p className="text-xs md:text-sm font-bold text-blue-950   tracking-widest mb-3">
                            {person.role}
                        </p>

                        <p className="text-xs md:text-sm text-blue-950">
                            {person.description}
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 bg-white text-blue-950 rounded-[2.5rem] p-6 overflow-y-auto rotate-y-180 backface-hidden">
                    
                    <h3 className="text-2xl text-[#c1972d] font-serif font-black mb-1">
                        {person.name}
                    </h3>

                    <p className="text-sm text-blue-950 font-bold mb-4">
                        {person.role}
                    </p>

                    {/* Quotes */}
                    <div className="space-y-3 mb-6">
                        {person.quotes.map((q: string, i: number) => (
                            <div
                                key={i}
                                className=" text-md border-l-4 border-[#c1972d] pl-3"
                            >
                                "{q}"
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-justify leading-relaxed text-blue-950 whitespace-pre-line mb-6">
                        {person.details}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href={person.instagram} target="_blank">
                            <div className="p-3 rounded-full bg-pink-500/20 hover:bg-pink-500 transition">
                                <Instagram size={18} />
                            </div>
                        </a>

                        <a href={person.linkedin} target="_blank">
                            <div className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500 transition">
                                <Linkedin size={18} />
                            </div>
                        </a>

                        <a href={person.facebook} target="_blank">
                            <div className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-700 transition">
                                <Facebook size={18} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function PeopleBehindExcelencia() {

    return (

        <section className="py-10 md:py-20 bg-[#fcfcfc]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-6">

                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="text-md font-black   tracking-[0.3em] text-blue-900">
                            Our Architects
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-6">
                        The People <br className="hidden md:block" />
                        <span className="text-blue-950">
                            Behind Excelencia
                        </span>
                    </h2>

                    <p className="max-w-7xl mx-auto text-md md:text-lg text-blue-950 font-medium leading-relaxed">
                        Bridging the gap between local ambition and global opportunity through structured leadership and empathetic guidance.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2  md:gap-12">
                    {leaders.map((person, index) => (
                        <LeaderCard
                            key={index}
                            person={person}
                            index={index}
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}