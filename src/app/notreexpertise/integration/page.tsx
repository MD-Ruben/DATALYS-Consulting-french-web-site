import AboutIntegration from "@/components/LayoutFR/AboutIntegration";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";
import DomainIntegration from "@/components/LayoutFR/DomainIntegration";
import NosIntegrations from "@/components/LayoutFR/NosIntegrations";
import ScrollAnimation from "@/components/LayoutFR/Transitions/ScrollAnimation";

export const metadata: Metadata = {
  title: "Intégration | DATALYS Consulting",
  description: "La page d'intégration de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Intégration"
      />
      <AboutIntegration />
      <NosIntegrations />
    </>
  );
};

export default AboutPage;
