import AboutSectionOne from "@/components/LayoutFR/About/AboutSectionOne";
import AboutSectionTwo from "@/components/LayoutFR/About/AboutSectionTwo";
import OurWorks from "@/components/LayoutFR/OurWorks";
import Brands from "@/components/LayoutFR/Brands";
import ScrollUp from "@/components/LayoutFR/Common/ScrollUp";
import ContactHome from "@/components/LayoutFR/ContactHome";
import Features from "@/components/LayoutFR/Features";
import AboutSectionThree from "@/components/LayoutFR/About/AboutSectionThree";
import Hero from "@/components/LayoutFR/Hero";
import Testimonials from "@/components/LayoutFR/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DATALYS Consulting",
  description: "La page d'accueil de DATALYS Consulting",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionThree />
      {/* <AboutSectionTwo /> */}
      <AboutSectionOne />
      <Features />
      <OurWorks />
      {/* <Testimonials /> */}
      {/* <Brands /> */}
      <ContactHome />
    </>
  );
}
