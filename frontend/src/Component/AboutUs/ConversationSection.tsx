import { MessageCircle, PhoneCall } from "lucide-react";

export default function ConversationSection() {
  return (
    <section className="bg-linear-to-br from-blue-50 to-indigo-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let’s Start with a Conversation
        </h2>

        {/* Sub text */}
        <p className="text-lg text-gray-600 max-w-5xl mx-auto mb-10">
          No pressure. No confusion. Just an honest conversation about your
          goals, questions, and possibilities. We’re here to listen, guide,
          and help you explore the right path at your own pace.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-white border border-black/40 rounded-2xl shadow-xl p-6 text-left hover:shadow-lg transition">
            <MessageCircle className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ask Anything
            </h3>
            <p className="text-gray-600">
              Courses, universities, eligibility, timelines — no question is
              too small. We believe clarity builds confidence.
            </p>
          </div>

          <div className="bg-white border border-black/40 rounded-2xl shadow-xl p-6 text-left hover:shadow-lg transition">
            <PhoneCall className="text-indigo-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Explore Your Options
            </h3>
            <p className="text-gray-600">
              We help you understand possibilities, not push decisions.
              Choose when you’re ready — we’ll support you throughout.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-linear-to-r from-[#c1972d] to-blue-950 text-white px-8 py-3 rounded-full text-lg font-medium  transition">
            Start a Conversation
          </button>

          <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-50 transition">
            Talk to a Counselor
          </button>
        </div>
      </div>
    </section>
  );
}
