import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Header from "./Component/Header-1";
import Footer from "./Component/Footer-1";
import HomeMain from "./Component/HomePage/HomeMain";
import WhatsAppWidget from "./Component/WhatsAppWidget";
import AboutUsMain from "./Component/AboutUs/AboutUsMain";
import ContactUsMain from "./Component/ContactUs/ContactUsMain";
import FlightAnimation from "./Component/FlightAnimation";
import ServicesMain from "./Component/Services/ServicesMain";
import ScrollToTop from "./Component/ScrollToTop";
import DestinationPage from "./Component/Destination/DestinationPage";
import AdminApp from "./admin/AdminApp";
import CookieConsent from "./Component/CookieConsent";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import BlogPage from "./Component/Updates/BlogPage";
import BlogPostPage from "./Component/Updates/BlogPostPage";
import NotFound from "./Component/NotFound";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FlightAnimation />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppWidget />
      {/* 🍪 Cookie Consent Banner */}
      <CookieConsent />
    </>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04,            // Lower = silkier glide (0.05–0.1 range)
      smoothWheel: true,
      wheelMultiplier: 1.0,  // Slightly faster wheel to compensate for lower lerp
      touchMultiplier: 1.5,  // Snappy on mobile touch
      infinite: false,
    });
    
    (window as any).lenis = lenis;

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <Routes>
      {/* Standalone Admin app */}
      <Route path="/admin/*" element={<AdminApp />} />

      {/* Standalone 404 page — NO Header, NO Footer */}
      <Route path="/404" element={<NotFound />} />

      {/* Public routes wrapped with Header and Footer */}
      <Route path="/" element={<PublicLayout><HomeMain /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><AboutUsMain /></PublicLayout>} />
      <Route path="/about-us" element={<Navigate to="/about" replace />} />
      <Route path="/services" element={<PublicLayout><ServicesMain /></PublicLayout>} />
      <Route path="/destination/:country" element={<PublicLayout><DestinationPage /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><ContactUsMain /></PublicLayout>} />
      <Route path="/updates/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
      <Route path="/updates/blog/:id" element={<PublicLayout><BlogPostPage /></PublicLayout>} />
      <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />

      {/* Any unrecognised route displays the standalone 404 page (NO Header, NO Footer) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
