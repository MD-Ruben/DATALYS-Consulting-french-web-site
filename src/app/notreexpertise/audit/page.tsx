import DomainSection from "@/components/LayoutFR/DomainSection";
import AboutAudit from "@/components/LayoutFR/AboutAudit";
import RayonIntervention from "@/components/LayoutFR/RayonIntervention";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit | DATALYS Consulting",
  description: "La page d'audit de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Audit"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <AboutAudit />
      <DomainSection />
      <RayonIntervention />
    </>
  );
};

export default AboutPage;
