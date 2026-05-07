// This Is all Import Of the all files 

import { Helmet } from "react-helmet-async"
import AdmissionAssistance from "./AdmissionAssistance"
import CareerGuidanceSection from "./CareerGuidanceSection"
import DocumentationSection from "./DocumentationSection"
import FinanceSupportSection from "./FinanceSupportSection"
import InterviewPreparation from "./InterviewPreparation"
import PrePostArrivalSection from "./PrePostArrivalSection"
import ProfileEvaluation from "./ProfileEvaluation"
import ServiceHero from "./ServiceHero"
import ServicesOverview from "./ServicesOverview"
import ShortlistingSection from "./ShortlistingSection"
import StudentVisaAssistance from "./StudentVisaAssistance"
import VisitorVisaSection from "./VisitorVisaSection"

const ServicesMain = () => {
  return (
    <>

    <Helmet>
        {/* TITLE */}
        <title>
          Top Study Abroad Consultation Services | Excelencia International
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="Get top study abroad consultation with Excelencia International. From course selection to visa approval, we guide you at every step. Apply now!"
        />

        {/* KEYWORD */}
        <meta
          name="keywords"
          content="top study abroad consultation"
        />

        {/* ROBOTS */}
        <meta name="robots" content="index, follow" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Top Study Abroad Consultation Services | Excelencia International"
        />
        <meta
          property="og:description"
          content="Get top study abroad consultation with Excelencia International. From course selection to visa approval, we guide you at every step. Apply now!"
        />
        <meta property="og:type" content="website" />

      

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://excelenciaint.com/Services"
        />
      </Helmet>
      {/* All services on this page can be opened in a new tab by holding the Ctrl key and right-clicking with your mouse. */}

      <ServiceHero />              {/* Hero section */}
      <ServicesOverview />         {/* Service road animation  */}  
      <ProfileEvaluation />        {/* 1 service */}    
      <ShortlistingSection />      {/* 2 service */}
      <DocumentationSection />     {/* 3 service */}
      <AdmissionAssistance />      {/* 4 service */}
      <InterviewPreparation />     {/* 5 service */}
      <FinanceSupportSection />    {/* 6 service */}
      <CareerGuidanceSection />    {/* 7 service */}
      <StudentVisaAssistance />    {/* 8 service */}
      <VisitorVisaSection />       {/* 9 service */}
      <PrePostArrivalSection />    {/* 10 service*/}
    </>
  )
}

export default ServicesMain
