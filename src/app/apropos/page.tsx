import AboutSectionOne from "@/components/LayoutFR/About/AboutSectionOne";
import AboutSectionFour from "@/components/LayoutFR/About/AboutSectionFour";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";
import Features from "@/components/LayoutFR/Features";

export const metadata: Metadata = {
  title: "A propos de nous | DATALYS Consulting",
  description: "La page d'apropos de nous de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="A propos de nous"
      />
      <AboutSectionFour />
      {/* <AboutSectionOne /> */}
      <Features />
    </>
  );
};

export default AboutPage;
