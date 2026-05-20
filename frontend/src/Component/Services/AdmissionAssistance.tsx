
import {
    Building2,
    CheckCircle,
    Clock,
    MapPin,
    FileText,
} from 'lucide-react';

const AdmissionService = () => {
    return (
        <div className="  pb-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <header className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c1972d] text-white rounded-full text-sm font-bold mb-4">
                        <Building2 size={16} /> EXCELENCIA INTERNATIONAL
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-extrabold text-[#c1972d] mb-6  tracking-tight">
                        Admission <span className="text-blue-950">Assistance</span>
                    </h1>
                    <div className="flex justify-center items-center gap-2 text-blue-950 font-medium ">
                        <MapPin size={18} className="text-[#c1972d]" />
                        Our Foreign Education Consultancy in Mumbai, Bandra
                    </div>
                </header>

                <div className="relative text-justify border-l-2 border-blue-950 ml-6 md:ml-12 space-y-12">

                    {/* Step 1: The Recognition */}
                    <div className="relative pl-8 md:pl-16">
                        <div className="absolute left-0 -translate-x-1/2 top-0 bg-[#c1972d] text-white p-2 rounded-full shadow-lg">
                            <Clock size={20} />
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg text-blue-950 leading-relaxed">
                            At Excelencia International, we recognize that the process of applying to international universities is one of the key components in any student’s study abroad journey. It’s a time-intensive process with deadlines to adhere to, documents to complete, and always be in <a href="contact">contact </a>with universities. Our Foreign Education Consultancy in Mumbai, Bandra has been devised to ensure that this process is smooth, organized, and not cumbersome. Because of this, you stand a greater chance of receiving an offer from multiple universities. We assign expert counselors at every step of the university application process with an experience base covering all stages. Then, based on the international admission format, we go ahead to design well-drafted applications once the country, course, and university shortlisting is done. All academic papers, SOPs, LORs, resumes, and visa forms are reviewed meticulously before being forwarded to the university. From submission to updating universities portal and off-course follow-ups, we take care of all application process for our students. Our staff diligently keeps track of deadlines for applications and intake dates so that your chance is never missed by you. We also provide students and parents with timely updates to answer questions and reduce anxiety.</p>
                        </div>
                    </div>

                    {/* Step 2: The Solution */}
                    <div className="relative pl-8 md:pl-16">
                        <div className="absolute left-0 -translate-x-1/2 top-0 bg-[#c1972d] text-white p-2 rounded-full shadow-lg">
                            <CheckCircle size={20} />
                        </div>
                        <div className=" space-y-4">
                            <p className="text-lg text-blue-950 leading-relaxed">
                            Once students receive offer letters, we help them with offer acceptance, the tuition fee payment, document submission, unconditional offer, sponsorship letter, visa application, travel arrangement & enrollment confirmation. We help our students to understand conditional and unconditional offers so that they fulfill all the requirements in a timely manner.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Documentation */}
                    <div className="relative pl-8 md:pl-16">
                        <div className="absolute left-0 -translate-x-1/2 top-0 bg-[#c1972d] text-white p-2 rounded-full shadow-lg">
                            <FileText size={20} />
                        </div>
                        <div className="space-y-4 text-lg text-blue-950 leading-relaxed">
                            <p>We are the best study abroad consultants in Mumbai. Ease your tension by tackling all application-related problems so that none of these problems blocks your way to admission. Equipped with professional admissions advisory and personalized attention, students can now step onto their lifelong dream of studying abroad and bring a successful global career one day near.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdmissionService;