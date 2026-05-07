import React from 'react';
import { Toaster } from 'sonner';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

import {
  SectionHeader,
  WhatYoullLearn,
  Hosts,
  About,
  WhyAttend,
  Services,
  WhyChoose,
  Process,
  Reviews,
  DoDont,
} from '.';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
       <Helmet>
        {/* TITLE */}
        <title>
          Study Abroad Webinar Mumbai | Excelencia International
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="Looking for a study abroad webinar in Mumbai? Join Excelencia’s expert session on student visas, admissions & career guidance. Sign up now."
        />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="study abroad webinar Mumbai, abroad education webinar, student visa webinar, study abroad seminar Mumbai"
        />

        {/* ROBOTS */}
        <meta name="robots" content="index, follow" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Study Abroad Webinar Mumbai | Excelencia International"
        />
        <meta
          property="og:description"
          content="Join Excelencia’s expert webinar on student visas, admissions & career guidance. Limited seats available. Sign up now."
        />
        <meta property="og:type" content="website" />

    

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://excelencia-update.vercel.app/webinar"
        />
      </Helmet>
      {/* Sonner toast notifications */}
      <Toaster position="top-center" richColors />
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}

      {/* Hero / Registration Section */}
      <Hero />

      {/* What You'll Learn Section */}
      <WhatYoullLearn />
      
      {/* Hosts Section */}
      <Hosts />

      {/* About Section */}
      <About />

      {/* Why Attend Section */}
      <WhyAttend />

      {/* Services Section */}
      <Services />

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Process Section */}
      <Process />

      {/* Reviews / Testimonials Section */}
      <Reviews />

      {/* Do's and Don'ts Section */}
      <DoDont />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
