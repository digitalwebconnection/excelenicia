import { CalendarDays, Snowflake, Sun, Leaf } from "lucide-react";

interface IntakeItem {
  name: string;
  tag: string;
  description: string;
  icon: "fall" | "winter" | "spring";
}

interface IntakeSectionProps {
  data: {
    title: string;
    subtitle?: string;
    list: IntakeItem[];
  };
}

// 🎨 ICON MAPPING  
const getIcon = (type: string) => {
  switch (type) {
    case "fall":
      return <Leaf size={26} />;
    case "winter":
      return <Snowflake size={26} />;
    case "spring":
      return <Sun size={26} />;
    default:
      return <CalendarDays size={26} />;
  }
};

const IntakeSection = ({ data }: IntakeSectionProps) => {
  return (
    <section className="bg-white pb-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#c1972d] tracking-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-2 text-blue-950 text-lg">{data.subtitle}</p>
          )}
          <p className="mt-3 text-blue-950 text-sm font-medium">
            Application deadlines usually fall 3–4 months prior to intake.
          </p>
        </div>

        {/* LIST */}
        <div className="grid gap-8">
          {data.list.map((item, i) => {
            return (
              <div
                key={i}
                className="group relative flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-blue-950 hover:shadow-2xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border flex items-center justify-center text-[#c1972d] shadow-sm group-hover:bg-[#c1972d] group-hover:text-white transition-all duration-300">
                  {getIcon(item.icon)}
                </div>

                {/* CONTENT */}
                <div className="grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">

                    {/* Intake Name */}
                    <h3 className="text-2xl font-bold text-blue-950 group-hover:text-white">
                      {item.name}
                    </h3>

                    {/* Tag */}
                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-950 font-semibold group-hover:bg-white/20 group-hover:text-white">
                      {item.tag}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-blue-950 leading-relaxed group-hover:text-white">
                    {item.description}
                  </p>
                </div>

                {/* RIGHT ICON (HOVER EFFECT) */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <CalendarDays size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IntakeSection;