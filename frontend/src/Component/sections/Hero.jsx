import React, { useState } from 'react';
import { Calendar, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import video from "../../assets/video.mp4"

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

  const validate = () => {
    if (!form.name.trim()) {
      toast.error('Please enter your full name.');
      return false;
    }
    if (!form.phone.trim() || !/^\+?[\d\s\-()]{7,15}$/.test(form.phone.trim())) {
      toast.error('Please enter a valid phone number.');
      return false;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);

    // Prepare Web3Forms Data
    const formData = new FormData();
    formData.append("access_key", "99f8361f-e5e4-493d-ae0a-6f3acd3d4274");
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("subject", "New Webinar Registration");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setRegisteredEmail(form.email);
        setSuccess(true);
        toast.success("Registration Successful!");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '' });
    setSuccess(false);
    setRegisteredEmail('');
  };

  if (success) {
    return (
      <div
        data-testid="registration-success"
        className="flex flex-col items-center justify-center py-12 px-8 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-linear-to-br from-green-400 to-amber-500 flex items-center justify-center mb-6 shadow-lg">
          <CheckCircle2 size={40} className="text-white" />
        </div>
        <h3 className="font-display text-3xl text-ink font-semibold mb-3">
          You're registered!
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-2">
          Confirmation details have been sent to
        </p>
        <p className="text-gold font-semibold mb-6 break-all">{registeredEmail}</p>
        <p className="text-muted text-sm mb-8">
          We'll send you the webinar link and reminders before the session.
        </p>
        <button
          data-testid="register-another-btn"
          onClick={handleReset}
          className="text-sm text-gold underline underline-offset-4 hover:text-gold-dark transition-colors"
        >
          Register another attendee
        </button>
      </div>
    );
  }

  return (
    <form
      data-testid="registration-form"
      onSubmit={handleSubmit}
      className="p-8 flex flex-col gap-5"
    >
      <div>
        <label htmlFor="input-name" className="block text-xs uppercase tracking-widest font-semibold text-ink mb-2">
          Full Name
        </label>
        <input
          id="input-name"
          data-testid="input-name"
          type="text"
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>
      <div>
        <label htmlFor="input-phone" className="block text-xs uppercase tracking-widest font-semibold text-ink mb-2">
          Phone Number
        </label>
        <input
          id="input-phone"
          data-testid="input-phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>
      <div>
        <label htmlFor="input-email" className="block text-xs uppercase tracking-widest font-semibold text-ink mb-2">
          Email Address
        </label>
        <input
          id="input-email"
          data-testid="input-email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-white border border-border px-4 py-3 text-sm text-ink placeholder-muted/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>
      <button
        data-testid="submit-registration-btn"
        type="submit"
        disabled={loading}
        className="w-full py-3.5 text-white text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:brightness-110 disabled:opacity-70"
        style={{ background: 'linear-gradient(to right, #c1972d, #1e3a8a)' }}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Registering...
          </>
        ) : (
          <>
            Register Now <ArrowRight size={16} />
          </>
        )}
      </button>
    </form>
  );
};

const Hero = () => {
  return (
    <section
      id="webinar"
      className="relative min-h-screen flex items-center"
      
    >
       <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left column */}
          <div className="fade-in-up">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 border rounded-lg border-gold/60 px-4 py-2 mb-8">
              <span className="text-lg  drop-shadow-[0_2px_0px_rgba(0,0,0,0.8)] tracking-[0.15em] uppercase text-gold font-semibold">
                 FREE LIVE WEBINAR
              </span>
            </div>

            <h1 className="font-display font-semibold drop-shadow-[0_2px_0px_rgba(0,0,0,4.8)] text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-tight text-white mb-6">
              Turn Your{' '}
              <span className=" text-gold font-bold">UK Study Dream </span>
       
               into Reality
            </h1>

            <p className="text-white text-lg sm:text-xl font-light leading-relaxed max-w-xl mb-10">
              Join our exclusive live session and unlock complete guidance on UK admissions,
              scholarships, and the student visa process — directly from industry experts.
            </p>

            {/* Metadata chips */}
            <div className="flex flex-col sm:flex-row gap-2">
              {[
                { icon: <Calendar size={28} />, label: 'DATE', value: '16th May, 2026' },
                { icon: <Clock size={28} />, label: 'TIME', value: '2:00 PM IST' },
                { icon: <Users size={28} />, label: 'SEATS', value: 'Limited · Filling Fast' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-3 border border-gold rounded-xl px-4 py-2 bg-black/45 backdrop-blur-xl"
                >
                  <div className="text-gold">{chip.icon}</div>
                  <div>
                    <p className="text-xl tracking-widest uppercase text-gold font-semibold">
                      {chip.label}
                    </p>
                    <p className="text-white text-md font-medium">{chip.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Form card */}
          <div className="fade-in-up-delay flex justify-center lg:justify-end">
            <div className="bg-white w-full max-w-md rounded-xl  shadow-2xl overflow-hidden">
              {/* Card header */}
              <div className="bg-ink px-4 py-6">
                <p className="text-lg tracking-[0.3em] uppercase text-gold font-semibold mb-2">
                  RESERVE YOUR SEAT
                </p>
                <h2 className="  text-2xl text-white font-bold">
                  Secure your spot in under 30 seconds
                </h2>
              </div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
