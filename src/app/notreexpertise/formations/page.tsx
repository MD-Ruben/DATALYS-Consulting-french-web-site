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
      <Breadcrumb
        pageName="Formation" 
      />
      <AboutFormations />
      <DomainCourse />
      {/* <ModuleFormations /> */}
    </>
  );
};

export default AboutPage;
