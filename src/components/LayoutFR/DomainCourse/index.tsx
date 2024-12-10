"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section
        id="features"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="max-w-full" data-wow-delay=".15s" ref={scrollRef}>
            <div className="mx-auto mb-14 max-w-full text-center">
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px]"
              >
                Nous formons
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 18 18"
                    >
                      <path
                        fill="#4aa9b8"
                        fill-rule="evenodd"
                        d="M13.037.057A.75.75 0 0 1 13.5.75V2.5h1.75a.75.75 0 0 1 .53 1.28l-3 3a.75.75 0 0 1-.53.22h-.377a4 4 0 1 1-4.797-2.892a.75.75 0 0 1 .347 1.46A2.5 2.5 0 1 0 10.29 7h-.23L8.53 8.53a.75.75 0 1 1-1.06-1.06L9 5.94V3.75a.75.75 0 0 1 .22-.53l3-3a.75.75 0 0 1 .817-.163M10.5 4.061V5.5h1.44l1.5-1.5H12V2.56zM4.82 2.33a6.5 6.5 0 0 1 3.853-.796a.75.75 0 1 0 .155-1.492a8 8 0 1 0 7.129 7.128a.75.75 0 1 0-1.492.155A6.5 6.5 0 1 1 4.82 2.331Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-5 text-xl font-bold text-[#5793C7] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Nos Objectifs de Formation
                  </motion.h3>

                  <div className="inline-block">
                    <div className="text-base font-light leading-relaxed text-slate-300">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <p>
                          - Développement des Compétences: Offrir des formations
                          sur mesure pour renforcer les compétences techniques
                          et managériales de vos équipes.
                        </p>
                        <p>
                          - Innovation et Adaptabilité : Encourager
                          l'apprentissage de nouvelles technologies et des
                          méthodes de travail.
                        </p>
                        <p>
                          - Épanouissement Professionnel : Favoriser la montée
                          en compétences et les perspectives de carrière.
                        </p>
                      </motion.div>
                    </div>
                    <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="Nos Formations :"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          <div className="mb-1 text-justify text-base font-light text-[#5793C7]">
                            <p>
                              -{" "}
                              <span className="font-bold">
                                Formations et Atelier Techniques :
                              </span>{" "}
                              Cours sur les outils, solutions et logiciels
                              spécifiques à notre secteur d'activité.
                            </p>
                            <p>
                              -{" "}
                              <span className="font-bold">
                                Ateliers de Leadership :
                              </span>{" "}
                              Programmes pour développer des compétences en
                              gestion et en communication.
                            </p>
                            <p>
                              - <span className="font-bold">Séminaires :</span>{" "}
                              Initiatives pour la présentation de produits et
                              solutions ainsi que le renforcement des capacités
                              et compétences techniques.
                            </p>
                            <p>
                              Ensemble, continuons à bâtir un avenir prometteur
                              !
                            </p>
                            <p>
                              Avez-vous besoin d’une formation ou d’un
                              accompagnement ?
                            </p>
                            <div className="flex items-end gap-2 mt-2">
                              <Link
                                href="/contact"
                                className="font-semibold text-[#5793C7]"
                              >
                                PARLER A UN EXPERT --
                              </Link>
                              <Link
                                href="/contact"
                                className="font-semibold text-[#5793C7]"
                              >
                                DEMANDER UN DEVIS
                              </Link>
                            </div>
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4aa9b8"
                        d="m8.85 12l1.45-1.45q.3-.3.288-.7t-.288-.7q-.3-.3-.712-.312t-.713.287L6.7 11.3q-.3.3-.3.7t.3.7l2.175 2.175q.3.3.713.288t.712-.313q.275-.3.288-.7t-.288-.7zm6.3 0l-1.45 1.45q-.3.3-.288.7t.288.7q.3.3.713.312t.712-.287L17.3 12.7q.3-.3.3-.7t-.3-.7l-2.175-2.175q-.3-.3-.712-.288t-.713.313q-.275.3-.287.7t.287.7zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm7-14.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212M5 19V5z"
                      />
                    </svg>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-5 text-xl font-bold text-[#5793C7] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Intégration de solutions technologiques
                  </motion.h3>

                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-base font-light leading-relaxed text-slate-300"
                    >
                      Chez DATALYS, notre engagement est de vous offrir des
                      solutions innovantes et adaptées à vos besoins, tout en
                      garantissant une qualité de service irréprochable. Depuis
                      notre création, nous avons toujours placé la satisfaction
                      de nos clients au cœur de notre stratégie. C’est grâce à
                      cette approche que nous avons su bâtir des relations
                      solides et durables avec nos partenaires.
                    </motion.p>

                    <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="Chez DATALYS,"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          <div className="mb-1 text-base font-light text-[#5793C7]">
                            <p className="mb-2">
                              Nous croyons fermement que l’intégration de
                              solutions technologiques doit être simple, fluide
                              et surtout centrée sur l’utilisateur final. C’est
                              pourquoi nous mettons un point d’honneur à vous
                              accompagner tout au long du processus, de la
                              conception à la mise en œuvre, en passant par le
                              suivi continu. Nos équipes d’experts sont dédiées
                              à faire de vos projets un succès, en vous
                              apportant un soutien personnalisé et en assurant
                              une exploitation optimisée de vos services.
                            </p>
                            <p className="mb-2">
                              DATALYS ne se contente pas de répondre à vos
                              attentes, nous visons à les dépasser. Notre
                              approche proactive et notre capacité à anticiper
                              vos besoins futurs font de nous un partenaire de
                              confiance, capable de vous propulser vers
                              l’innovation et la performance.
                            </p>
                            <p className="mb-2">
                              Je tiens à remercier chacun de nos clients pour la
                              confiance qu’ils nous accordent. Ensemble, nous
                              construirons l’avenir de votre entreprise grâce à
                              des solutions à la fois robustes, sécurisées, et
                              parfaitement intégrées à vos infrastructures.
                            </p>
                            <p>
                              Bienvenue chez DATALYS, là où l’innovation
                              rencontre l’excellence.
                            </p>
                          </div>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
