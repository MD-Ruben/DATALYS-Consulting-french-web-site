"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { motion } from "framer-motion"
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
          <div className="max-w-full" data-wow-delay=".15s">
            <div
              className="mx-auto mb-14 max-w-full text-center"
              ref={scrollRef}
            >
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-3xl font-bold !leading-tight dark:text-white sm:text-4xl md:text-[45px]"
              >
                Nous auditons
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#4aa9b8"
                        d="M18 26h12v2H18zm0-5h12v2H18zm0-5h12v2H18z"
                      />
                      <path
                        fill="#4aa9b8"
                        d="M14 25H9.5a7.496 7.496 0 0 1-1.322-14.876A10 10 0 0 1 28 12h-2a7.999 7.999 0 0 0-15.95-.87l-.09.834l-.837.056A5.496 5.496 0 0 0 9.5 23H14Z"
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
                    Infrastructure & Système
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-base font-light leading-relaxed text-slate-300"
                    >
                      Nos interventions d’audit sur le volet Infrastructure
                      système et Cloud permettent d’évaluer dans un contexte
                      strictement professionnel et productif l’environnement
                      global du SI. Cette évaluation permet d’identifier les
                      optimisations tant sur le plan purement technique
                      qu’organisationnel.
                    </motion.p>
                    <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="A cet effet, nous évaluons :"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          <div className="mb-1 text-justify text-base font-light text-[#5793C7]">
                            <p>
                              - La{" "}
                              <span className="font-bold">maturité du SI</span>
                            </p>
                            <p>
                              - La{" "}
                              <span className="font-bold">
                                maturité des utilisateurs finaux
                              </span>{" "}
                              de l’environnement
                            </p>
                            <p>
                              - Les configurations des services et de la
                              sécurité des applications
                            </p>
                            <p>
                              - Les contrôles relatifs aux processus métiers
                              portés par les applications
                            </p>
                            <p>
                              - La{" "}
                              <span className="font-bold">
                                conformité des Systèmes d’Information
                              </span>{" "}
                              vis-à-vis des exigences de normalisation
                            </p>
                            <p>
                              -{" "}
                              <span className="font-bold">
                                L’Environnement du Cloud :
                              </span>{" "}
                              de l’aspect financier à l’aspect technique
                              contenant le design des solutions Cloud, le
                              dimensionnement des ressources, la supervision, et
                              bien d’autres.
                            </p>
                          </div>
                          <div className="text-base font-light text-[#5793C7]">
                            <p>
                              Notre vocation principale et de fournir à tout
                              type de système d’information, les meilleurs
                              pratiques et les meilleures sécurités afin de
                              tirer profit au maximum des services, applications
                              qui sont les nœuds du business.
                            </p>
                            <p>
                              Notre offre d’audit Système Infra & Cloud s’étend
                              bien sur la partie applicative que matérielle.
                            </p>
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
                      <g
                        fill="none"
                        stroke="#4aa9b8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9" />
                        <path d="M12 3q2 .5 2 6c0 5.5-.667 5.667-2 6m0-12q-2 .5-2 6c0 5.5.667 5.667 2 6M6 9h12M3 20h7m4 0h7m-11 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-5v3" />
                      </g>
                    </svg>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mb-5 text-xl font-bold text-[#5793C7] dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Réseau & Sécurité
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-base font-light leading-relaxed text-slate-300"
                    >
                      L’audit réseau et sécurité joue un rôle crucial dans la
                      protection des infrastructures informatiques d’une
                      organisation. Son objectif est d’identifier les failles et
                      les risques potentiels afin de garantir la sécurité, la
                      performance et la conformité des réseaux et des systèmes
                      d’information. Nous proposons diverses offres de services
                      pour évaluer, renforcer et protéger les infrastructures
                      réseau et sécurité des entreprises.
                    </motion.p>
                    <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="Audit réseau"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          <div className="mb-1 text-base font-light text-[#5793C7]">
                            <p>- Audit d’architecture</p>
                            <p>- Analyse de la maturité du réseau</p>
                            <p>- Audit des configurations</p>
                            <p>- Analyse de performance</p>
                            <p>- Analyse de résilience</p>
                            <p>- Tests de charge</p>
                          </div>
                          <div className="text-base font-light text-[#5793C7]">
                            <span className="my-1 font-bold">
                              Audit de sécurité des SI
                            </span>{" "}
                            <p>
                              - Inspection des firewall et équipements de
                              sécurité
                            </p>
                            <p>- Analyse de la segmentation du réseau</p>
                            <p>
                              - Audit de conformité (ISO 27001, RGPD, PCI DSS,
                              etc.)
                            </p>
                            <p>- Audit de vulnérabilités</p>
                            <p>- Audit des politiques de sécurité</p>
                            <p>- Analyse des applications web et mobiles</p>
                            <p>- Tests d’intrusion (Pentesting)</p>
                            <p>- Audit des accès et des identités</p>
                          </div>
                          <div className="text-base font-light text-[#5793C7]">
                            <span className="my-1 font-bold">
                              Audit de la Gouvernance et gestion des risques
                            </span>{" "}
                            <p>- Audit de la Gestion des risques IT</p>
                            <p>
                              - Audit de continuité des activités et plans de
                              reprise
                            </p>
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
                        d="M2 2h20v20H2zm2 2v7h1.998v-.002h2.004V11H20V4zm16 9H8.002v.002H5.998V13H4v7h16zM5.998 6.5h2.004v2.004H5.998zm0 9h2.004v2.004H5.998z"
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
                    Énergie et centres de données
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-base font-light leading-relaxed text-slate-300"
                    >
                      Pour améliorer le positionnement de nos clients dans le
                      cadre d’un audit du périmètre de l’Energie et du Data
                      Center, nous partons sur une analyse globale qui regroupe
                      en tout point trois enjeux cruciaux à savoir :
                    </motion.p>
                    <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                      <Accordion>
                        <AccordionItem
                          key="1"
                          aria-label="Accordion 1"
                          title="Gestion de l’Énergie dans le Data Center"
                          className="text-start text-sm font-bold text-[#5793C7] sm:text-base lg:text-lg xl:text-xl"
                        >
                          <div className="mb-1 text-base font-light text-[#5793C7]">
                            <p>- Efficacité énergétique</p>
                            <p>- Sources d’énergie</p>
                            <p>- Systèmes de refroidissement</p>
                            <p>- Supervision et Monitoring énergétique</p>
                          </div>
                          <div className="text-base font-light text-[#5793C7]">
                            <span className="my-1 font-bold">
                              Audit de la Résilience des Systèmes
                            </span>{" "}
                            <p>
                              - Conception de l’alimentation électrique /
                              Vérification des infrastructures de redondance
                            </p>
                            <p>
                              - Analyse des systèmes de sauvegarde de données
                              pour la continuité de service en cas d’incident
                            </p>
                            <p>- Analyse de l’Optimisation des réseaux</p>
                          </div>
                          <div className="text-justify text-base font-light text-[#5793C7]">
                            <span className="my-1 font-bold">
                              Gestion de la Sécurité et de la Conformité
                            </span>{" "}
                            <p>
                              - S’assurer que le Data Center respecte les normes
                              en vigueur comme ISO 27001 (gestion de la sécurité
                              de l’information), ISO 50001 (gestion de
                              l’énergie) ou la norme TIA-942 pour
                              l’infrastructure des Data Centers ainsi que les
                              exigences de l’Uptime Institute
                            </p>
                            <p>
                              - L’évaluation des mesures de sécurité physiques
                              et logiques (contrôles d’accès, caméras de
                              surveillance, etc.)
                            </p>
                            <p>- Chiffrement et protection des données</p>
                            <p className="mt-1">
                              En menant un Audit détaillé et en se concentrant
                              sur ces aspects, nous pourrons renforcer{" "}
                              <span className="font-bold">l’efficacité</span> ,{" "}
                              <span className="font-bold">la sécurité</span> et{" "}
                              <span className="font-bold">la durabilité</span>{" "}
                              des infrastructures (Energie et Data Center) tout
                              en s’assurant d’une conformité aux normes et une
                              gestion optimale des ressources énergétiques pout
                              tous nos clients.
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
