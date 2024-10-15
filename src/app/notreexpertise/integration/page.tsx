import AboutIntegration from "@/components/LayoutFR/AboutIntegration";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";
import DomainIntegration from "@/components/LayoutFR/DomainIntegration";
import NosIntegrations from "@/components/LayoutFR/NosIntegrations";

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
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <AboutIntegration />
      {/* <DomainIntegration /> */}
      <NosIntegrations />
    </>
  );
};

export default AboutPage;
