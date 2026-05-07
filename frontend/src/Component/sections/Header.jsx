import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import PopupForm from "./PopupForm";
import logo from "../../assets/image1.png"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Webinar", href: "#webinar" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

// Ticker items repeated for seamless infinite scroll
const tickerText = [
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
  "Study in UK - FREE Webinar 16th May - Register Now.",
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupOpen || menuOpen ? "hidden" : "auto";
  }, [popupOpen, menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, menuOpen ? 300 : 0);
    }
  };

  const logoUrl =
    "https://customer-assets.emergentagent.com/job_e770a1ec-4c91-485d-8188-c81f01f34c9a/artifacts/lg4v696p_image.png";

  return (
    <>
      {/* ── INLINE STYLES ── */}
      <style>{`
        /* Menu item stagger-in */
        @keyframes menuItemIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-menu-item {
          animation: menuItemIn 0.4s ease forwards;
          opacity: 0;
        }

        /* Ticker marquee */
        @keyframes tickerScroll {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 18s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        .ticker-wrap {
          overflow: hidden;
          position: relative;
          /* Fade edges */
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `}</style>

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center h-20 gap-10">

            {/* ── LEFT: Logo + Register Free ── */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Logo */}
              <a href="/" className="flex items-center">
                <img src={logoUrl} alt="Excelencia" className="h-16" />
              </a>

            
            </div>

            {/* ── CENTER: Scrolling Ticker ── */}
            <div className="ticker-wrap flex-1 hidden md:block">
              <div className="ticker-track">
                {tickerText.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-6 text-lg font-semibold"
                    style={{ color: i % 2 === 0 ? "#c1972d" : "#081949ff" }}
                  >
                    {item}
                    <span className="text-gray-300 mx-2">|</span>
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Desktop Nav ── */}
            {/* Register Free — right after logo */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPopupOpen(true);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-8 py-2 text-white text-lg font-semibold rounded-xl whitespace-nowrap transition-transform hover:scale-105 active:scale-95"
                style={{ background: "linear-gradient(to right,#c1972d,#1e3a8a)" }}
              >
                Register Free
              </a>

            {/* ── MOBILE: Hamburger ── */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden ml-auto p-2 text-gray-800 hover:text-[#c1972d] transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* ── MOBILE TICKER BAR (below header row) ── */}
        <div className="md:hidden border-t border-gray-100 bg-white ticker-wrap py-1.5">
          <div className="ticker-track">
            {tickerText.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 px-4 text-xs font-semibold"
                style={{ color: i % 2 === 0 ? "#c1972d" : "#1e3a8a" }}
              >
                {item}
                <span className="text-gray-300 mx-1">|</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ── OVERLAY ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <img src={logoUrl} alt="Excelencia" className="h-10" />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Webinar Info Badge */}
        <div
          className="mx-5 mt-4 rounded-xl px-4 py-3 flex items-center gap-3"
          style={{ background: "linear-gradient(135deg,#fff7e6,#eff6ff)" }}
        >
          <Calendar size={20} style={{ color: "#c1972d" }} />
          <div>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#c1972d" }}>
              UK Free Webinar
            </p>
            <p className="text-sm font-semibold text-blue-950">16th May 2026 · 2:00 PM IST</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex-1 p-6 space-y-6 pt-5">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-xl font-medium text-gray-800 hover:text-[#c1972d] ${
                menuOpen ? "animate-menu-item" : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="p-6 border-t border-gray-100">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPopupOpen(true);
              setMenuOpen(false);
            }}
            className={`block text-center text-white py-4 rounded-xl font-semibold text-lg transition-transform active:scale-95 ${
              menuOpen ? "animate-menu-item" : ""
            }`}
            style={{
              background: "linear-gradient(to right,#c1972d,#1e3a8a)",
              animationDelay: `${navLinks.length * 0.1}s`,
            }}
          >
            Register Free
          </a>
        </div>
      </div>

      {/* ── POPUP ── */}
      <PopupForm open={popupOpen} setOpen={setPopupOpen} />
    </>
  );
};

export default Header;