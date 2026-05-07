import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Code2,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image.png";

const Footer = () => {
  // ✅ Quick Links with Paths
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Free Webinar", path: "/webinar" },
    { name: "Contact Us", path: "/contact" },
  ];
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=61574612612766",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/excelencia_international?igsh=YnQzZWh6ZWRndnJh",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/excelencia-international01/",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@ExcelenciaInternational",
    },
  ];



  // ✅ Services with Paths
  const services = [
    { name: "Study Abroad Counseling", path: "/services/counseling" },
    { name: "University Admissions", path: "/services/admissions" },
    { name: "Visa Assistance", path: "/services/visa" },
    { name: "Education Loans", path: "/services/loans" },
    { name: "Scholarship Guidance", path: "/services/scholarships" },
  ];

  return (
    <footer className="bg-[#ffffff] border-t border-[#c1972d]">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-5 md:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* LOGO & ABOUT */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Excelencia International"
              className="w-66 mb-2 cursor-pointer"
            />
          </Link>

          <p className="text-black text-justify text-sm leading-relaxed">
            Excelencia International helps students achieve their global
            education dreams with trusted university partnerships and expert
            guidance.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-blue-950 font-semibold text-lg mb-2">
            Quick Links
          </h4>

          <ul className="space-y-2 text-black text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#c1972d] font-semibold"
                      : "hover:text-[#c1972d] transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-blue-950 font-semibold text-lg mb-2">
            Our Services
          </h4>

          <ul className="space-y-2  text-black text-sm">
            {services.map((service, i) => (
              <li key={i}>
                <a
                  // href={service.path}
                  className="hover:text-[#c1972d] cursor-not-allowed transition"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-blue-950 font-semibold text-lg mb-2">
            Contact Us
          </h4>

          <div className="space-y-3 text-black text-sm">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Elco+Arcade%2C+D+Wing%2C+Office+No.+45%2C+First+Floor%2C+Near+Almeida+Park%2C+Bandra+West%2C+Mumbai+400050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-justify items-start gap-2 hover:text-[#c1972d]"
            >
              <MapPin size={18} className="text-[#c1972d] shrink-0" />
              <span>
                Elco Arcade, D Wing, Office No. 45, First Floor, Near Almeida Park,
                Bandra West, Mumbai 400050
              </span>
            </a>

            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[#c1972d]" />
              <a href="tel:+919769787211" className="hover:text-[#c1972d]">
                +91 97697 87211
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[#c1972d]" />
              <a
                href="mailto:queries@excelenciaint.com"
                className="hover:text-[#c1972d]"
              >
                queries@excelenciaint.com
              </a>
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-5">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-linear-to-r from-[#c1972d] to-blue-950 p-[1.5px] rounded-full hover:from-blue-950 hover:to-[#c1972d] transition"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#0b1f3a] hover:bg-[#c1972d] hover:text-white transition cursor-pointer">
                    <Icon size={18} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-[#010d20] border-[#020f24]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-white">

          <p>
            © {new Date().getFullYear()} Excelencia International. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2 text-white text-[13px] md:text-sm mt-2 md:mt-0">
            <Code2 className="w-5 h-5 text-[#c1972d]" />
            <span>
              Developed by{" "}
              <a
                href="https://digitalwebconnection.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c1972d] font-semibold"
              >
                Digital Web Connection
              </a>
            </span>
          </div>

          <a href="/privacy-policy">Privacy Policy</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;