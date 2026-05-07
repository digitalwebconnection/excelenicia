import { Helmet } from "react-helmet-async"
import ContactHero from "./ContactHero"
import EnquiryForm from "./EnquiryFormcontact"

const ContactUsMain = () => {
  return (
    <>
     <Helmet>
        {/* TITLE */}
        <title>
          Contact Top Study Abroad Consultants | Excelencia International
        </title>

        {/* META DESCRIPTION */}
        <meta
          name="description"
          content="Reach out to Excelencia International, your trusted study abroad consultants. Book a consultation for visa, admission, and career guidance."
        />

        {/* KEYWORDS */}
        <meta
          name="keywords"
          content="study abroad consultants, contact study abroad experts, overseas education consultants"
        />

        {/* ROBOTS */}
        <meta name="robots" content="index, follow" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Contact Top Study Abroad Consultants | Excelencia International"
        />
        <meta
          property="og:description"
          content="Reach out to Excelencia International, your trusted study abroad consultants. Book a consultation for visa, admission, and career guidance."
        />
        <meta property="og:type" content="website" />


        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://excelenciaint.com/contact"
        />
      </Helmet>

      <ContactHero/>
      <EnquiryForm/>
    </>
  )
}

export default ContactUsMain
