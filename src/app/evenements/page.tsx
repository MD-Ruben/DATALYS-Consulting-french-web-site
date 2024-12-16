import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";
import Events from "@/components/LayoutFR/Events";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evénement | DATALYS Consulting",
  description: "La page d'événement de DATALYS Consulting",
  // other metadata
};

const Page = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Evénement"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      /> */}
      <Events />
    </>
  );
};

export default Page;
