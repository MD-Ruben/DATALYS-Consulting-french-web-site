import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";
import CorporateEspace from "@/components/LayoutFR/CorporateEspace";
import Espace from "@/components/LayoutFR/Espace";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace Entreprise | DATALYS Consulting",
  description: "La page de l'espace entreprise de DATALYS Consulting",
  // other metadata
};

const EspacePage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Contact"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      /> */}

      {/* <Espace /> */}
      <CorporateEspace />
    </>
  );
};

export default EspacePage;
