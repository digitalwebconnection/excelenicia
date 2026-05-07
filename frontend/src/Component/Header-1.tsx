import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/image1.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [destinations, setDestinations] = useState<{ name: string; path: string }[]>([]);

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    fetch(`${API}/countries`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setDestinations(data.map((c: any) => ({ name: c.name, path: c.code })));
        }
      })
      .catch(() => { });

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed font-serif top-0 z-50">
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${scrolled ? "py-4" : "py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">

          {/* LOGO */}
          <NavLink
            to="/"
            className={`flex items-center transition-all duration-300 ${scrolled ? "h-6 w-40" : "h-8 w-52"
              }`}
          >
            <img src={logo} alt="Logo" className="w-full object-contain" />
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-black font-medium">

            <li>
              <NavLink to="/" className="hover:text-[#c1972d]">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-[#c1972d]">
                About Us
              </NavLink>
            </li>

            {/* 🔥 DESTINATION DROPDOWN */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-[#c1972d]">
                Destination
              </span>

              <div className="absolute top-full left-0 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <ul className="flex flex-col p-4 gap-3 min-w-50">

                  {destinations.map((item, i) => (
                    <NavLink
                      key={i}
                      to={`/destination/${item.path}`}
                      className="hover:text-[#c1972d]"
                    >
                      {item.name}
                    </NavLink>
                  ))}

                </ul>
              </div>
            </li>

            <li className="opacity-50 cursor-not-allowed">Collaborate</li>
            <li className="opacity-50 cursor-not-allowed">Updates</li>

            <li>
              <NavLink to="/Services" className="hover:text-[#c1972d]">
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-[#c1972d]">
                Contact
              </NavLink>
            </li>

         

          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* OVERLAY */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* MOBILE SLIDER MENU */}
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
            } rounded-l-3xl`}
        >

          {/* HEADER */}
          <div className="flex items-center justify-between p-5 border-b">
            <img src={logo} alt="Logo" className="h-8" />
            <button onClick={() => setMenuOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-6 p-6 text-black font-medium">

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/" className="hover:text-[#c1972d]">
                Home
              </NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/about" className="hover:text-[#c1972d]">
                About Us
              </NavLink>
            </li>

            {/* 🔥 MOBILE DESTINATION */}
            <li>
              <p className="font-semibold">Destination</p>

              <ul className="ml-3 mt-2 flex flex-col gap-3">

                {destinations.map((item, i) => (
                  <li key={i} onClick={() => setMenuOpen(false)}>
                    <NavLink
                      to={`/destination/${item.path}`}
                      className="hover:text-[#c1972d]"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}

              </ul>
            </li>

            <li className="opacity-50">Collaborate</li>
            <li className="opacity-50">Updates</li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/Services" className="hover:text-[#c1972d]">
                Services
              </NavLink>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/contact" className="hover:text-[#c1972d]">
                Contact
              </NavLink>
            </li>

     

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;