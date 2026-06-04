// import CountriesAsExperiences from "./CountriesAsExperiences"
// import EducationTurningPoint from "./EducationTurningPoint"
import HeroSection from "./HomeHero"
// import HowWeDefineSuccess from "./HowWeDefineSuccess"
import JourneyStepSection from "./JourneyStepSection"
import OurWayOfCounseling from "./OurWayOfCounseling"
import QuietInvitationSection from "./GetCallbackSection"
import SplitTruthSection from "./SplitTruthSection"
import StudentVisionSection from "./StudentVisionSection"
import StudentVoicesChat from "./StudentVoicesChat"
import TopDestinations from "./TopDestinations"
import TrustPanel from "./TrustPanel"
// import TrustQuietMomentsSection from "./TrustQuietMomentsSection"
import ValuesWePractice from "./ValuesWePractice"
import WhyGuidanceMatters from "./WhyGuidanceMatters"
import StudyAbroadServices from "./StudyAbroadServices"
import { Helmet } from "react-helmet-async"

const HomeMain = () => {
  return (
    <>
      <Helmet>
        <title>Top Student Visa Consultants in Mumbai for Study Abroad | Excelencia International </title>
        <meta name="description" content="Looking for student visa consultants in Mumbai? Get expert help for study abroad, admissions, visa processing & documentation with trusted consultants." />
        <link rel="canonical" href="https://excelenciaint.com/" />
      </Helmet>

      <HeroSection />
      <TopDestinations />
      <WhyGuidanceMatters />
      {/* <EducationTurningPoint /> */}
      <OurWayOfCounseling />
      <StudentVisionSection />
      <ValuesWePractice />
      <JourneyStepSection />
      <StudyAbroadServices />
      {/* <TrustQuietMomentsSection /> */}
      {/* <CountriesAsExperiences /> */}
      {/* <HowWeDefineSuccess /> */}
      <StudentVoicesChat />
      <TrustPanel />
      <SplitTruthSection />
      <QuietInvitationSection />
    </>
  )
}

export default HomeMain
