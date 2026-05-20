import { FileText, Globe, CheckCircle2 } from 'lucide-react';

const VisitorVisaSection = () => {
  return (
    <div className=" py-14 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className=" text-center items-end mb-5 gap-6">
          <div className=" ">

            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d]  leading-none md:leading-tight">
              Visitor Visa <span className="text-blue-950">Assistance</span>
            </h2>
          </div>

        </div>

        {/* Paragraph 1 - Context */}
        <div className="relative group mb-5">

          <div className="relative">
            <div className=" text-center">

              <p className="text-lg md:text-xl text-blue-950 leading-relaxed font-semibold">
                This help is important, especially if the students are abroad. Excelencia International also offers Visitor Visa Assistance in Mumbai, Maharashtra to assist parents and family members on holiday (visa) who are planning to visit their families abroad.
              </p>
            </div>
          </div>
        </div>
        <div className="grid text-justify gap-8 md:gap-10 mt-8 md:mt-10" >
          {/* Paragraph 2 & 3 - Documentation & Guidance (Side by Side) */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-8 md:p-10  group rounded-2xl shadow-xl">
              <FileText className="text-[#c1972d] group-hover:text-blue-950 mb-6" size={32} />
              <p className="text-sm md:text-base text-blue-950 group-hover:text-white leading-loose ">
                Need to have appropriate documentation, proof of funds, travel intent demonstration, and immigration documents that you are eligible to get the visa. Mistakes — even minor ones — can lead to visa denials.” With the help of our experienced consultants, applicants walk through each step of the application process to submit as complete and accurate an application as possible.
              </p>
            </div>

            <div className="hover:bg-linear-to-r from-[#c1972d]  to-blue-950 hover:text-white p-8 md:p-10  group rounded-2xl shadow-xl">
              <CheckCircle2 className="text-[#c1972d] group-hover:text-blue-950 mb-6" size={32} />
              <p className="text-sm md:text-base text-blue-950 leading-loose group-hover:text-white ">
                We also provide guidance for the submission of visitor visa documents, such as invitation letters, financial statements, travel itineraries, accommodation information, and supporting papers requested by embassies. Our team helps applicants to establish a genuine travel purpose and strong ties in India, two of the most decisive factors for granting a visa.
              </p>
            </div>
          </div>

          {/* Paragraph 4 - Global Reach */}
          <div className="bg-slate-100 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border-l-8 border-[#c1972d]">
            <div className="shrink-0">
              <Globe size={48} className="text-blue-950" />
            </div>
            <p className="text-lg text-blue-950 font-medium leading-relaxed italic">
              As a trustworthy visa consultancy in Bandra, we know what each embassy demands from citizens of different nationalities for the UK, USA, Canada, Australia, and the Schengen countries. We guide you thoroughly on timelines, processing, and interviews if necessary.
            </p>
          </div>

          {/* Paragraph 5 - Conclusion */}
          <div className="relative   rounded-2xl text-center overflow-hidden">

            <p className="text-lg md:text-xl text-blue-950 leading-snug max-w-7xl mx-auto relative z-10">
              We want to make the visa application process as hassle free as possible, so that families can be safe in the knowledge they are doing this part of their reunion right. With good preparation and documentation, parents can travel to their children and join them in their global achievements.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default VisitorVisaSection;