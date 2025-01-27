import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";
import Contact from "@/components/LayoutFR/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DATALYS Consulting",
  description: "La page de contact de DATALYS Consulting",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
