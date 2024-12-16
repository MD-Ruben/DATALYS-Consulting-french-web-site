import ModuleFormations from "@/components/LayoutFR/ModuleFormations";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";
import AboutFormations from "@/components/LayoutFR/AboutFormations";
import DomainCourse from "@/components/LayoutFR/DomainCourse";

export const metadata: Metadata = {
  title: "Formations | DATALYS Consulting",
  description: "La page de formation de DATALYS Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Formation" 
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      /> */}
      <AboutFormations />
      <DomainCourse />
      {/* <ModuleFormations /> */}
    </>
  );
};

export default AboutPage;
