import PageNotFound from "@/components/LayoutFR/PageNotFound";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace entreprise | DATALYS Consulting",
  description: "La page espace entreprise de DATALYS Consulting",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Espace entreprise"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <PageNotFound />
    </>
  );
};

export default Page;
