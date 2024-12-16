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
      {/* <Breadcrumb
        pageName="Contact"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
