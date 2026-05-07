import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "cookie_consent_status";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent !== "accepted") {
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setShow(false);
  };

  const declineCookies = () => setShow(false);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }}
          className="fixed bottom-10 left-1/2 z-9999 w-[90%] max-w-[500px]"
        >
          {/* Main Card */}
          <div className="relative overflow-hidden group bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">

            {/* Animated Glow Aura */}
            <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,rgba(193,151,45,0.1),transparent)] animate-spin-slow pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Floating Cookie Icon with Ripple */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-6"
              >
                <div className="absolute inset-0 bg-[#c1972d] blur-2xl opacity-20 animate-pulse" />
                <div className="relative bg-linear-to-b from-amber-400 to-[#c1972d] w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-2xl">
                  🍪
                </div>
              </motion.div>

              {/* Text Content with Staggered Animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-black text-white tracking-tight mb-2">
                  Cookie Munchies?
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 px-4">
                  We use cookies to make your experience <span className="text-white font-medium">smooth as butter</span>.
                  By clicking accept, you're joining the sweet side.
                </p>
              </motion.div>

              {/* Action Buttons - Stacked for Mobile, Row for Desktop */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                <button
                  onClick={declineCookies}
                  className="w-full sm:w-1/3 order-2 sm:order-1 py-4 text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors"
                >
                  Later
                </button>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(193,151,45,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={acceptCookies}
                  className="w-full sm:w-2/3 order-1 sm:order-2 py-4 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl transition-all"
                >
                  Accept All
                </motion.button>
              </div>

              {/* Footer Link */}
              <motion.a
                href="/privacy-policy"
                whileHover={{ opacity: 1 }}
                className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest opacity-60 transition-opacity"
              >
                View our Privacy Chef's Menu →
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;

