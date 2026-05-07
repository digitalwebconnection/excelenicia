import React, { useState } from "react";
import { X, ArrowRight, User, Mail, Phone, GraduationCap, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface PopupFormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const WEB3_ACCESS_KEY = "99f8361f-e5e4-493d-ae0a-6f3acd3d4274";

const PopupForm = ({ open, setOpen }: PopupFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", qualification: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!open) return null;

  /* ── Validation ── */
  const validate = (): boolean => {
    if (!form.name.trim()) {
      toast.error("Please enter your full name.");
      return false;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (!form.phone.trim() || !/^\+?[\d\s\-()\u0020]{7,15}$/.test(form.phone.trim())) {
      toast.error("Please enter a valid phone number.");
      return false;
    }
    if (!form.qualification) {
      toast.error("Please select your highest qualification.");
      return false;
    }
    return true;
  };

  /* ── Submit to Web3Forms ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", WEB3_ACCESS_KEY);
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("qualification", form.qualification);
    formData.append("subject", "New Webinar Registration — Popup Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        toast.success("🎉 Registration successful! Check your email.");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Reset & close ── */
  const handleClose = () => {
    setOpen(false);
    setForm({ name: "", email: "", phone: "", qualification: "" });
    setSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0a0a0a]/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 md:p-10 z-50 border border-gray-100">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 hover:rotate-180 transition-all duration-300"
        >
          <X size={20} />
        </button>

        {/* ── SUCCESS SCREEN ── */}
        {success ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5 shadow-lg"
              style={{ background: "linear-gradient(135deg,#c1972d,#1e3a8a)" }}
            >
              <CheckCircle2 size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">You're Registered! 🎉</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-1">
              A confirmation has been sent to
            </p>
            <p className="font-semibold text-[#c1972d] mb-4 break-all">{form.email}</p>
            <p className="text-gray-400 text-sm mb-8">
              We'll send you the webinar link and reminders before the session starts.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(to right,#c1972d,#1e3a8a)" }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_e770a1ec-4c91-485d-8188-c81f01f34c9a/artifacts/lg4v696p_image.png"
                alt="Excelencia Logo"
                className="h-16 w-auto mb-3"
              />
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight leading-tight">
                Reserve Your <span className="font-bold" style={{ color: "#c1972d" }}>Free Spot</span>
              </h2>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-sm">
                Fill in your details below to confirm your complimentary seat for the UK Webinar.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Full Name */}
              <div className="relative group">
                <User className="absolute left-0 bottom-3 text-gray-400 group-focus-within:text-[#c1972d] transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 rounded-none pl-8 pr-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c1972d] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-0 bottom-3 text-gray-400 group-focus-within:text-[#c1972d] transition-colors" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-gray-300 rounded-none pl-8 pr-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c1972d] transition-colors"
                />
              </div>

              {/* Phone + Qualification row */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">

                {/* Phone */}
                <div className="relative group">
                  <Phone className="absolute left-0 bottom-3 text-gray-400 group-focus-within:text-[#c1972d] transition-colors" size={18} />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 rounded-none pl-8 pr-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#c1972d] transition-colors"
                  />
                </div>

                {/* Qualification */}
                <div className="relative group">
                  <GraduationCap className="absolute left-0 bottom-3 text-gray-400 group-focus-within:text-[#c1972d] transition-colors z-10" size={18} />
                  <select
                    value={form.qualification}
                    onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-300 rounded-none pl-8 pr-8 py-3 text-sm focus:outline-none focus:border-[#c1972d] transition-colors appearance-none cursor-pointer text-gray-900"
                  >
                    <option value="" disabled className="text-gray-400">Highest Qualification</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                  </select>
                  <ArrowRight className="absolute right-0 bottom-3 text-gray-400 rotate-90" size={14} />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full text-white font-bold text-sm uppercase tracking-[0.15em] flex items-center justify-center gap-2 shadow-lg transition-all hover:brightness-110 active:scale-95 disabled:opacity-60"
                style={{ background: "linear-gradient(to right,#c1972d,#1e3a8a)" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>Confirm My Registration <ArrowRight size={16} /></>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 Your privacy is protected. We never share your details.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PopupForm;