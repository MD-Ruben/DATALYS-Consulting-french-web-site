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
      <Breadcrumb
        pageName="Evénement"
      />
      <Events />
    </>
  );
};

export default Page;
