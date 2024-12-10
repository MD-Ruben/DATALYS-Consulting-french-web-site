import Footer from "@/components/LayoutFR/Footer";
import Header from "@/components/LayoutFR/Header";
import ScrollToTop from "@/components/LayoutFR/ScrollToTop";
import PageNotFound from "@/components/LayoutFR/PageNotFound";
import Breadcrumb from "@/components/LayoutFR/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boutique | DATALYS Consulting",
  description: "La page boutique de DATALYS Consulting",
  // other metadata
};

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Boutique"
        description="Infrastructure et analyse des données. Envisager de manière synergique des catalyseurs de changement ayant un impact sur les infrastructures flexibles."
      />
      <PageNotFound />
    </>
  );
};

export default Page;
