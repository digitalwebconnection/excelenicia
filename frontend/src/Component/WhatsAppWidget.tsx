
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919769787211";

const botFlow = [
  {
    question: "Are you looking for visa or immigration assistance?",
    yes: "Great! We specialize in visa & immigration services.",
    no: "No worries! We can still guide you.",
  },
  {
    question: "Do you already have a country in mind?",
    yes: "Perfect! That helps us assist you faster.",
    no: "No problem, we’ll help you choose the best option.",
  },
  {
    question: "Would you like to talk to our expert on WhatsApp?",
    yes: "Connecting you to our expert now 👇",
    no: "You can connect anytime. We’re here for you.",
  },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<string[]>([botFlow[0].question]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);



  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const moveToWhatsApp = () => {
    const text = "Hello Excelencia International, I just chatted with your assistant and want expert guidance.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleAnswer = (answer: "yes" | "no") => {
    const current = botFlow[step];
    setMessages((prev) => [...prev, answer === "yes" ? "Yes" : "No", answer === "yes" ? current.yes : current.no]);

    if (step === botFlow.length - 1 && answer === "yes") {
      setTimeout(moveToWhatsApp, 1200);
      return;
    }

    if (step < botFlow.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [...prev, botFlow[step + 1].question]);
        setStep(step + 1);
      }, 800);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-5 w-80 border border-black/40 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-[#c1972d]  to-blue-950 text-white p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">X</div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#c1972d] rounded-full"></span>
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">Excelencia International</p>
                  <p className="text-[10px] opacity-80   tracking-wider">Online | Expert Support</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="p-4 space-y-3 max-h-80 overflow-y-auto bg-gray-50/50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg === "Yes" || msg === "No" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-2xl text-sm shadow-sm ${
                    msg === "Yes" || msg === "No"
                      ? "bg-linear-to-r from-[#c1972d]  to-blue-950 text-white ml-auto rounded-tr-none"
                      : "bg-white text-gray-700 mr-auto rounded-tl-none border border-gray-100"
                  }`}
                >
                  {msg}
                </motion.div>
              ))}
              <div ref={chatEndRef} />

              {/* Action Buttons */}
              {step < botFlow.length && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 pt-2"
                >
                  <button
                    onClick={() => handleAnswer("yes")}
                    className="flex-1 bg-blue-950 text-white font-semibold py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-green-500/20"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer("no")}
                    className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-2.5 rounded-xl transition-all active:scale-95"
                  >
                    No
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Ping Effect */}
      <div className="fixed bottom-5 right-5 z-50">
       
           <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
     
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="relative bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-2xl flex items-center justify-center"
        >
         
            
        
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
               <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.253-.041.397.303.145.344.492 1.2.535 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383a5.146 5.146 0 00.94 1.164c.548.478 1.012.785 1.272.912.259.127.41.106.561-.059.151-.165.644-.751.817-.996.174-.246.347-.203.586-.115.24.088 1.516.714 1.776.844.26.13.433.195.497.303.064.11.064.637-.08 1.042z"/>
            </svg>
        
        </motion.button>
      </div>
    </>
  );
}