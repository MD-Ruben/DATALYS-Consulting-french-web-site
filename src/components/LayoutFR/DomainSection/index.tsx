"use client";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import { nextui } from "@nextui-org/react";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DomainSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Nos domaines d'interventions
                </h2>
              </div>

              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Infra Système"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse des différentes briques de l’infra
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse des Vérification des systèmes de supervision
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse du PLU (Plan Local d’Urbanisation)
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse Energétique
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Data center"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse des différentes briques de l’infra
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse des Vérification des systèmes de supervision
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse du PLU (Plan Local d’Urbanisation)
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse Energétique
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Réseau & Sécurité
"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse des différentes briques de l’infra
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse des Vérification des systèmes de supervision
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse du PLU (Plan Local d’Urbanisation)
                  </p>
                  <p className="group flex items-center">
                    <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                    Analyse Energétique
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Détails de chaque phase
                </h2>
              </div>
              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Phase 1"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi provident repudiandae perferendis, cumque inventore
                    nesciunt similique vero. Illo quaerat porro dicta repellat
                    facilis a nihil! Repellat dolores fugiat ex neque!
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Phase 2"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi provident repudiandae perferendis, cumque inventore
                    nesciunt similique vero. Illo quaerat porro dicta repellat
                    facilis a nihil! Repellat dolores fugiat ex neque!
                  </p>
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Phase 3
"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi provident repudiandae perferendis, cumque inventore
                    nesciunt similique vero. Illo quaerat porro dicta repellat
                    facilis a nihil! Repellat dolores fugiat ex neque!
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

export default DomainSection;
