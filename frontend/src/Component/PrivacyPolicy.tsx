const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* 🔥 HERO */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We value your privacy. This policy explains how your information is collected, used, and protected at Excelencia International.
          </p>
          <p className="mt-4 text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* 🔹 CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">

        {/* TRUST BADGE */}
        <div className="bg-[#c1972d]/10 border border-[#c1972d]/30 rounded-xl p-5 text-center">
          <p className="text-[#c1972d] font-semibold">
            🔒 Your data is Safe — We never sell your personal information.
          </p>
        </div>

        {/* SECTION CARD */}
        {[
          {
            title: "1. Introduction",
            content:
              "Excelencia International is committed to protecting your personal information and ensuring transparency in how we handle your data.",
          },
          {
            title: "2. Information We Collect",
            list: [
              "Name, email address, and phone number",
              "Details submitted via forms (consultation, webinar, inquiry)",
              "Technical data like IP address, browser, device",
              "Cookies and usage behavior",
            ],
          },
          {
            title: "3. How We Use Your Information",
            list: [
              "Provide consultation and services",
              "Improve website experience",
              "Send updates and offers",
              "Run analytics and marketing campaigns",
            ],
          },
          {
            title: "4. Cookies",
            content:
              "We use cookies to enhance your experience and analyze traffic. You can control cookie preferences anytime through your browser or our cookie banner.",
          },
          {
            title: "5. Third-Party Services",
            content:
              "We may use trusted tools like Google Analytics and Meta Ads to improve performance and marketing effectiveness.",
          },
          {
            title: "6. Data Security",
            content:
              "We apply strict security measures to protect your data from unauthorized access or misuse.",
          },
          {
            title: "7. Your Rights",
            content:
              "You can request access, correction, or deletion of your personal data and opt out of marketing communications anytime.",
          },
          {
            title: "8. Policy Updates",
            content:
              "We may update this policy periodically. Updates will always be reflected on this page.",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-blue-950 mb-3">
              {section.title}
            </h2>

            {section.content && (
              <p className="text-gray-600">{section.content}</p>
            )}

            {section.list && (
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* CTA SECTION */}
        <div className="bg-blue-950 text-white rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Questions About Your Privacy?
          </h3>
          <p className="text-gray-300 mb-4">
            Our team is here to help you understand how your data is handled.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c1972d] text-black px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>

        {/* CONTACT */}
        <div className="text-center text-sm text-gray-500">
          📧 Email: info@excelenciaint.com
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;