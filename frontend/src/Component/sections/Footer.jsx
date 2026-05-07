import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

/* ------------------------------------------------------------------ */
/* CONTACT SECTION                                                     */
/* ------------------------------------------------------------------ */
export const Contact = () => (
  <section id="contact" className="bg-ivory py-14 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-10  md:gap-16 items-start">
        {/* Left: Contact info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-rule" />
            <span className="section-header-eyebrow">GET IN TOUCH</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink mb-12">
            Let's start your{' '}
            <em className="text-gold italic">UK story</em>.
          </h2>
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div
              data-testid="contact-address"
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-semibold mb-1">
                  Visit us
                </p>
                <p className="text-sm text-ink leading-relaxed">
                  Elco Arcade, D Wing, Office No. 45, First Floor,<br />
                  Near Almeida Park, Bandra West,<br />
                  Mumbai 400050
                </p>
              </div>
            </div>
            {/* Phone */}
            <div
              data-testid="contact-phone"
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-semibold mb-1">
                  Call us
                </p>
                <a
                  href="tel:+919769787211"
                  className="text-sm text-ink hover:text-gold transition-colors"
                >
                  +91 97697 87211
                </a>
              </div>
            </div>
            {/* Email */}
            <div
              data-testid="contact-email"
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 bg-ink flex items-center justify-center shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted font-semibold mb-1">
                  Email
                </p>
                <a
                  href="mailto:queries@excelenciaint.com"
                  className="text-sm text-ink hover:text-gold transition-colors"
                >
                  queries@excelenciaint.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: CTA card */}
        <div
          className="relative bg-ink p-12 overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, rgba(184,145,58,0.12) 0%, #0A0A0A 60%)',
          }}
        >
          <h3 className="font-display text-3xl lg:text-4xl text-white mb-5">
            Book your free counselling
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-10">
            Talk directly with our UK study experts. Get personalized guidance on universities,
            scholarships, and visa pathways — completely free.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+919769787211"
              data-testid="contact-call-btn"
              className="btn-primary justify-center text-center"
              style={{ background: 'linear-gradient(to right, #c1972d, #1e3a8a)' }}
            >
              Call Now
            </a>
            <a
              href="#webinar"
              data-testid="contact-register-btn"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#webinar')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-gold/10 transition-colors duration-300"
            >
              Join Webinar →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */
const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Webinar', href: '#webinar' },
  { label: 'Contact', href: '#contact' },
];

const handleFooterNav = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => (
  <footer
    data-testid="site-footer"
    className="bg-ink text-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-12">
        {/* Col 1-2: Brand */}
        <div className="lg:col-span-2">
          <img
            src="https://customer-assets.emergentagent.com/job_e770a1ec-4c91-485d-8188-c81f01f34c9a/artifacts/smnnm6w4_Rectangle.png"
            alt="Excelencia International"
            className="h-20 w-auto object-contain mb-6"
          />
          <p className="text-white text-sm leading-relaxed max-w-sm mb-8">
            Excelencia International is your trusted partner for UK study abroad — from first
            consultation to campus arrival. Crafting quality, delivering trust.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-instagram"
              aria-label="Instagram"
              className="w-10 h-10 border border-white rounded-lg flex items-center justify-center text-white/90 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-linkedin"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-white flex rounded-lg items-center justify-center text-white/90 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-facebook"
              aria-label="Facebook"
              className="w-10 h-10 border border-white flex rounded-lg items-center justify-center text-white/90 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h4 className="text-lg tracking-[0.3em] uppercase text-gold font-semibold mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleFooterNav(e, link.href)}
                  className="text-md text-white hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Reach Us */}
        <div>
          <h4 className="text-lg tracking-[0.3em] uppercase text-gold font-semibold mb-6">
            Reach Us
          </h4>
          <div className="flex flex-col gap-4 text-md text-white">
            <p className="leading-relaxed">
              Elco Arcade, D Wing, Office No. 45,<br />
              First Floor, Near Almeida Park,<br />
              Bandra West, Mumbai 400050
            </p>
            <a href="tel:+919769787211" className="hover:text-gold transition-colors">
              +91 97697 87211
            </a>
            <a href="mailto:queries@excelenciaint.com" className="hover:text-gold transition-colors">
              queries@excelenciaint.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-md">
          © {new Date().getFullYear()} Excelencia International. All rights reserved.
        </p>
        <p className="font-display  text-gold/70 text-sm">
          Crafting Quality, Delivering Trust.
        </p>
      </div>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/* WHATSAPP FLOAT                                                      */
/* ------------------------------------------------------------------ */
export const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919769787211?text=Hello%20Excelencia%20International%2C%20I%20would%20like%20to%20know%20more%20about%20your%20UK%20study%20webinar."
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-float-btn"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
    style={{ backgroundColor: '#25D366' }}
  >
    <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current text-white">
      <path d="M19.11 17.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37s1.03 2.75 1.17 2.94c.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.64.6.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33zM16.04 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 2 .55 3.85 1.5 5.44L5 26.67l5.38-1.78c1.54.84 3.32 1.33 5.2 1.33h.01c5.9 0 10.7-4.8 10.7-10.7 0-5.9-4.8-10.7-10.66-10.69zm6.25 14.72c-.26.74-1.5 1.38-2.1 1.47-.56.09-1.26.13-2.02-.13-.47-.15-1.07-.34-1.84-.67-3.24-1.4-5.36-4.64-5.52-4.86-.16-.21-1.32-1.76-1.32-3.36 0-1.6.84-2.39 1.14-2.71.3-.33.65-.41.87-.41h.62c.2 0 .47-.08.73.56.26.66.89 2.26.97 2.42.08.17.13.36.03.58-.09.21-.14.33-.28.51-.14.18-.3.4-.43.54-.14.14-.29.3-.12.58.17.29.74 1.22 1.59 1.97 1.09.97 2 1.27 2.3 1.41.29.14.46.12.62-.07.17-.19.72-.84.91-1.12.19-.29.38-.24.64-.14.26.1 1.65.78 1.93.92.29.14.47.21.55.33.07.13.07.73-.19 1.45z" />
    </svg>
  </a>
);
export default Footer;
