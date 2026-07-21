import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import logo from "../assets/image1.png";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0d172a] via-[#15233d] to-[#0d172a] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | Excelencia</title>
        <meta name="description" content="The page you requested could not be found." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c1972d]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto text-center relative z-10 flex flex-col items-center"
      >
        {/* Brand Logo */}
        <Link to="/" className="mb-10 inline-block transition-transform hover:scale-105">
          <div className="bg-white/95 backdrop-blur px-6 py-3 rounded-2xl shadow-xl border border-white/20">
            <img src={logo} alt="Excelencia International" className="h-9 sm:h-10 object-contain" />
          </div>
        </Link>

        {/* 404 Display */}
        <h1 className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-amber-100 via-[#c1972d] to-amber-300 bg-clip-text text-transparent tracking-tight mb-2 select-none drop-shadow-sm">
          404
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Page Not Found
        </h2>

        {/* Short message */}
        <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-sm leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Return Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#c1972d] hover:bg-[#a88224] text-white font-semibold transition-all duration-300 shadow-lg shadow-[#c1972d]/25 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Home size={18} />
          <span>Back to Homepage</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
