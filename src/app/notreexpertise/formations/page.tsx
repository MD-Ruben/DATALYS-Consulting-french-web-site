import ModuleFormations from "@/components/ModuleFormations";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutFormations from "@/components/AboutFormations";
import DomainFormations from "@/components/DomainFormations";

export const metadata: Metadata = {
  title: "Formations | DATALYS Consulting",
  description: "La page de formation de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Formation"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <AboutFormations />
      <DomainFormations />
      <ModuleFormations />
    </>
  );
};

export default AboutPage;
