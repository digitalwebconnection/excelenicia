import { Helmet } from "react-helmet-async"
import VisionMissionSection from "../HomePage/VisionMissionSection"
import AboutHero from "./AboutHero"
import AboutSection from "./AboutSection"
// import ConversationSection from "./ConversationSection"
import ExcelenciaExperience from "./ExcelenciaExperience"
import GlobalEducationPersonalAttention from "./GlobalEducationPersonalAttention"
// import HowWeGuideStudents from "./HowWeGuideStudents"
// import OurApproachToGuidance from "./OurApproachToGuidance"
import PeopleBehindExcelencia from "./PeopleBehindExcelencia"
// import StudentsAndFamilies from "./StudentsAndFamilies"
// import WhatStudyingAbroadMeans from "./WhatStudyingAbroadMeans"
import WhyWeWorkWithStudents from "./WhyWeWorkWithStudents"

const AboutUsMain = () => {
  return (
    <div className="">
      <Helmet>
        {/* TITLE TAG */}
        <title>
          Study Abroad Experts Mumbai | Professional Guidance & Support
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="Connect with study abroad experts in Mumbai for personalized counseling, admission guidance, and visa assistance."
        />

        {/* KEYWORD (optional but ok) */}
        <meta
          name="keywords"
          content="study abroad experts Mumbai"
        />

        {/* OPEN GRAPH (important for sharing) */}
        <meta
          property="og:title"
          content="Study Abroad Experts Mumbai | Professional Guidance & Support"
        />
        <meta
          property="og:description"
          content="Connect with study abroad experts in Mumbai for personalized counseling, admission guidance, and visa assistance."
        />
        <meta property="og:type" content="website" />


        {/* CANONICAL URL (VERY IMPORTANT for SEO) */}
        <link
          rel="canonical"
          href="https://excelenciaint.com/about"
        />
      </Helmet>
      <AboutHero />
      <WhyWeWorkWithStudents />
      <AboutSection />
      {/* <WhatStudyingAbroadMeans /> */}
      <VisionMissionSection />
      {/* <HowWeGuideStudents /> */}
      {/* <OurApproachToGuidance /> */}
      <ExcelenciaExperience />
      <GlobalEducationPersonalAttention />
      <PeopleBehindExcelencia />
      {/* <StudentsAndFamilies /> */}
      {/* <ConversationSection /> */}
    </div>
  )
}

export default AboutUsMain
