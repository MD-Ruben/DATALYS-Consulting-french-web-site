"use client";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const DomainFormations = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
                  Nos Objectifs de Formation :
                </h2>
              </div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Nos Objectifs de Formation"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p>
                    1.
                    <span className="text-extrabold">
                      Développement des Compétences
                    </span>
                    : Offrir des formations sur mesure pour renforcer les
                    compétences techniques et managériales de vos équipes.
                  </p>
                  <p className="mt-2">
                    2.{" "}
                    <span className="text-extrabold">
                      Innovation et Adaptabilité
                    </span>{" "}
                    : Encourager l'apprentissage de nouvelles technologies et
                    des méthodes de travail.
                  </p>
                  <p className="mt-2">
                    3.{" "}
                    <span className="text-extrabold">
                      Épanouissement Professionnel{" "}
                    </span>{" "}
                    : Favoriser la montée en compétences et les perspectives de
                    carrière.
                  </p>
                  <h3 className="font-Title mt-2 text-start text-xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
                    Nos Formations :
                  </h3>
                  <p className="mt-2">
                    <span className="text-extrabold">
                      • Formations et Atelier Techniques :
                    </span>{" "}
                    Cours sur les outils, solutions et logiciels spécifiques à
                    notre secteur d'activité.
                  </p>
                  <p className="mt-2">
                    <span className="text-extrabold">
                      • Ateliers de Leadership :
                    </span>{" "}
                    Programmes pour développer des compétences en gestion et en
                    communication.
                  </p>
                  <p className="mt-2">
                    <span className="text-extrabold">• Séminaires :</span>{" "}
                    Initiatives pour la présentation de produits et solutions
                    ainsi que le renforcement des capacités et compétences
                    techniques.
                  </p>
                  <p className="mt-2">
                    Ensemble, continuons à bâtir un avenir prometteur !
                  </p>
                  <p className="mt-2">
                    Avez-vous besoin d’une formation ou d’un accompagnement ?
                  </p>
                  <p className="mt-2">
                    PARLER A UN EXPERT --{" "}
                    <Link href="/contact" className="text-primary">
                      DEMANDER UN DEVIS
                    </Link>
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-full" data-wow-delay=".15s">
              <div className="mx-auto mb-14 max-w-full text-start">
                <h2 className="font-Title mb-4 text-start text-2xl font-bold !leading-tight text-black dark:text-white sm:text-3xl md:text-[35px]">
                  Intégration de solutions technologiques
                </h2>
              </div>

              <Accordion defaultExpandedKeys={["1"]}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Intégration de solutions technologiques"
                  className="font-Title mb-4 rounded-lg border-2 border-[#29547A] p-3 text-left text-sm font-thin leading-loose tracking-wide text-black dark:text-white md:text-lg"
                >
                  <p className="text-justify [word-spacing:-1.7px]">
                    Chez DATALYS, notre engagement est de vous offrir des
                    solutions innovantes et adaptées à vos besoins, tout en
                    garantissant une qualité de service irréprochable. Depuis
                    notre création, nous avons toujours placé la satisfaction de
                    nos clients au cœur de notre stratégie. C’est grâce à cette
                    approche que nous avons su bâtir des relations solides et
                    durables avec nos partenaires.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    Nous croyons fermement que l’intégration de solutions
                    technologiques doit être simple, fluide et surtout centrée
                    sur l’utilisateur final. C’est pourquoi nous mettons un
                    point d’honneur à vous accompagner tout au long du
                    processus, de la conception à la mise en œuvre, en passant
                    par le suivi continu. Nos équipes d’experts sont dédiées à
                    faire de vos projets un succès, en vous apportant un soutien
                    personnalisé et en assurant une exploitation optimisée de
                    vos services.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    DATALYS ne se contente pas de répondre à vos attentes, nous
                    visons à les dépasser. Notre approche proactive et notre
                    capacité à anticiper vos besoins futurs font de nous un
                    partenaire de confiance, capable de vous propulser vers
                    l’innovation et la performance.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    Je tiens à remercier chacun de nos clients pour la confiance
                    qu’ils nous accordent. Ensemble, nous construirons l’avenir
                    de votre entreprise grâce à des solutions à la fois
                    robustes, sécurisées, et parfaitement intégrées à vos
                    infrastructures.
                  </p>
                  <p className="mt-2 text-justify [word-spacing:-1.7px]">
                    Bienvenue chez DATALYS, là où l’innovation rencontre
                    l’excellence.
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

export default DomainFormations;
