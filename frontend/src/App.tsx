import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.04,            // Lower = silkier glide (0.05–0.1 range)
      smoothWheel: true,
      wheelMultiplier: 1.0,  // Slightly faster wheel to compensate for lower lerp
      touchMultiplier: 1.5,  // Snappy on mobile touch
      infinite: false,
    });

    let raf: number;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Admin route — completely standalone, no header/footer */}
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />

        {/* Public routes */}
        <Route path="/*" element={
          <>
            <FlightAnimation />
            <Header />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/about" element={<AboutUsMain />} />
                <Route path="/services" element={<ServicesMain />} />
                <Route path="/destination/:country" element={<DestinationPage />} />
                <Route path="/contact" element={<ContactUsMain />} />
                <Route path="/updates/blog" element={<BlogPage />} />
                <Route path="/updates/blog/:id" element={<BlogPostPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <WhatsAppWidget />
            {/* 🍪 Cookie Consent Banner */}
            <CookieConsent />
          </>
        } />
        {/* <Route path="/leandingpage" element={<HomeMain/>}/> */}
      </Routes>
    </>
  );
}

export default App;
