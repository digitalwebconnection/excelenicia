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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Excelencia International",
            "image": "https://excelenciaint.com/assets/2-ocMapRxn.jpg",
            "@id": "https://excelenciaint.com/",
            "url": "https://excelenciaint.com/",
            "telephone": "+919769787211",
            "priceRange": "₹",
            "description": "Trusted student visa consultancy in Mumbai assisting with visa applications, documentation, and university selection for a seamless global education journey.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Elco Arcade, D Wing, Office No. 45, First Floor, Near Almeida Park, Bandra West",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400050",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0556,
              "longitude": 72.8329
            },
            "logo": {
              "@type": "ImageObject",
              "url": "https://excelenciaint.com/assets/image1-BmEcFFDH.png",
              "width": 248,
              "height": 55.86
            },
            "sameAs": [
              "https://www.facebook.com/people/Excelencia-International/61574612612766/",
              "https://www.instagram.com/excelencia_international/",
              "https://www.linkedin.com/company/excelencia-international01"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919769787211",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en-IN"]
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            }
          })}
        </script>
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
