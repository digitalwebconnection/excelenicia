import { useState } from "react";
import {
  Briefcase,
  Settings,
  Terminal,
  Stethoscope,
  Scale,
  Palette,
} from "lucide-react";

interface Course {
  icon?: string;
  image: string | undefined;
  title: string;
  description: string;
  full: string;
}

interface CourseSectionProps {
  data: {
    title: string;
    list: Course[];
  };
}

// Icon Mapping
const getIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("business")) return <Briefcase size={32} />;
  if (t.includes("engineering")) return <Settings size={32} />;
  if (t.includes("computer") || t.includes("it")) return <Terminal size={32} />;
  if (t.includes("health") || t.includes("nursing")) return <Stethoscope size={32} />;
  if (t.includes("law")) return <Scale size={32} />;
  return <Palette size={32} />;
};

const CourseSection = ({ data }: CourseSectionProps) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <section className=" py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl text-blue-950  max-w-2xl mx-auto font-extrabold ">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#c1972d] to-blue-950 mx-auto mt-4 rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {data.list.map((course, i) => (
            <div 
              key={i} 
              className="group perspective-[1000px] cursor-pointer h-100" 
              onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
            >
              <div className={`relative h-full w-full transition-transform duration-700 transform-3d md:group-hover:[transform:rotateY(180deg)] ${flippedIndex === i ? "[transform:rotateY(180deg)]" : ""}`}>


                {/* FRONT */}
                <div className="absolute inset-0 shadow-xl shadow-black/80   rounded-3xl overflow-hidden  border border-slate-200 backface-hidden">

                  {/* BACKGROUND IMAGE */}
                  <div className="absolute inset-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col  justify-end   p-6 text-white">

                    <div>
                      <div className="mb-4 text-white text-3xl">
                        {course.icon ? course.icon : getIcon(course.title)}
                      </div>

                      <h3 className="text-xl font-bold mb-2">
                        {course.title}
                      </h3>

                      <p className="text-sm opacity-90">
                        {course.description}
                      </p>
                    </div>

                    <p className="text-xs font-semibold mt-4 text-white/80">
                      Hover to explore →
                    </p>

                  </div>
                </div>

                {/* BACK SIDE */}
                <div 
                  className="absolute inset-0 bg-linear-to-r from-[#c1972d] to-blue-950 text-white rounded-3xl p-7 md:p-8 shadow-xl [transform:rotateY(180deg)] backface-hidden overflow-y-auto overscroll-contain custom-scrollbar"
                >

                  <h3 className="text-2xl font-bold mb-3">
                    {course.title}
                  </h3>

                  <div
                    className="course-content text-sm leading-relaxed text-justify translate-x-1 translate-y-1"
                    dangerouslySetInnerHTML={{ __html: course.full }}
                  />

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* REQUIRED CSS */}
      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .transform-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          margin: 20px 0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.8) rgba(255, 255, 255, 0.1);
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
};

export default CourseSection;