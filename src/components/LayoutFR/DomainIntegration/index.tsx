"use client";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import { nextui } from "@nextui-org/react";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DomainIntegration = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Intégration
                </h2>
              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="intégration"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    Notre offre de prestation de service couvre nos domaines de
                    service que ce soit l’intégration de solutions
                    d’Infrastructure système, de réseau et sécurité, d’Energie
                    et Datacenter ou du Cloud. Nous apportons un accompagnement
                    strict à nos clients de sorte à les rendre autonomes et
                    sereins. Toutes nos missions d’intégration sont suivies via
                    des outils : Des canaux conçus spécialement à cet effet.
                    Nous nous basons sur :
                  </p>
                  <div className="mt-3 grid grid-cols-2">
                    <div className="col-span-2 md:col-span-1">
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Intégration sur mesure dans des domaines spécifiques
                        maîtrisés
                      </p>
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Des Ingénieurs certifiés
                      </p>
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Un contrôle Qualité effectué sur chaque projet
                        d’intégration
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Une documentation de repère
                      </p>
                      <p className="group flex items-center">
                        <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                        Un support 24h/7 offert lors de l’intégration et après
                        l’intégration Et nous intégrons
                      </p>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
              <div className="mt-4" data-wow-delay=".15s">
                <div className="mx-auto mb-14 max-w-full text-start">
                  <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                    Nos offres de prestation de service
                  </h2>
                </div>
                <Accordion defaultExpandedKeys={["1"]}>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="Etude (OPEX, CAPEX)"
                    className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                  >
                    <p>
                      Apporter une première couche essentielle à la maîtrise à
                      court moyen et long terme du budget IT…
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Etude (OPEX, CAPEX)"
                    className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                  >
                    <p>
                      Apporter une première couche essentielle à la maîtrise à
                      court moyen et long terme du budget IT…
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="Etude (OPEX, CAPEX)"
                    className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                  >
                    <p>
                      Apporter une première couche essentielle à la maîtrise à
                      court moyen et long terme du budget IT…
                    </p>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Nos avantages
                </h2>
              </div>
              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Nos avantages"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    Toutes nos prestations et réalisations sont étroitement
                    suivies par un service après-vente…
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainIntegration;
