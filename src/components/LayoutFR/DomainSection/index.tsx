"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { motion } from "framer-motion"
import { useRef } from "react"

const ArrowBox = () => (
  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-md bg-yellow/20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </div>
)

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
                      className="text-base text-justify [word-spacing:-4.6px] font-light text-slate-300 md:text-[18px]"
                    >
                      Nos interventions d’audit sur le volet Infrastructure
                      système et Cloud permettent d’évaluer dans un contexte
                      strictement professionnel et productif l’environnement
                      global du SI. Cette évaluation permet d’identifier les
                      optimisations tant sur le plan purement technique
                      qu’organisationnel.
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-7 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      A cet effet, nous évaluons
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] mt-3"
                    >
                      <div className="mb-1 text-left text-base font-light leading-relaxed text-yellow [word-spacing:-3.1px] md:[word-spacing:-1.8px] md:text-[17px]">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                La maturité du SI
                              </span>
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                La maturité des utilisateurs finaux
                              </span>{" "}
                              de l'environnement
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Les configurations des services et de la sécurité
                              des applications
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Les contrôles relatifs aux processus métiers
                              portés par les applications
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                La conformité des Systèmes d'Information
                              </span>{" "}
                              vis-à-vis des exigences de normalisation
                            </p>
                          </div>

                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              <span className="font-bold">
                                L'Environnement du Cloud :
                              </span>{" "}
                              de l'aspect financier à l'aspect technique
                              contenant le design des solutions Cloud, le
                              dimensionnement des ressources, la supervision, et
                              bien d'autres.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-left text-base font-light leading-relaxed text-yellow [word-spacing:-1.8px] md:text-[17px]">
                        <p>
                          Notre vocation principale et de fournir à tout type de
                          système d’information, les meilleurs pratiques et les
                          meilleures sécurités afin de tirer profit au maximum
                          des services, applications qui sont les nœuds du
                          business.
                        </p>
                        <p>
                          Notre offre d’audit Système Infra & Cloud s’étend bien
                          sur la partie applicative que matérielle.
                        </p>
                      </div>
                    </motion.div>
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
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.3px] md:text-[18px]"
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
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-7 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Audit réseau
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px]"
                    >
                      <div className="mb-1 text-left font-light text-yellow">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Audit d'architecture</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Analyse de la maturité du réseau
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Audit des configurations</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Analyse de performance</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Analyse de résilience</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Tests de charge</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-left font-light text-yellow my-4">
                        <span className="my-1 font-bold">
                          Audit de sécurité des SI
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Inspection des firewall et équipements de sécurité
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Analyse de la segmentation du réseau
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Audit de conformité (ISO 27001, RGPD, PCI DSS,
                              etc.)
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Audit de vulnérabilités</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Audit des politiques de sécurité
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Analyse des applications web et mobiles
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Tests d'intrusion (Pentesting)
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Audit des accès et des identités
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-left font-light text-yellow">
                        <span className="my-1 font-bold">
                          Audit de la Gouvernance et gestion des risques
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Audit de la Gestion des risques IT
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Audit de continuité des activités et plans de
                              reprise
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
                    Data center & Énergie
                  </motion.h3>
                  <div className="inline-block">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px] text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.3px] md:text-[18px]"
                    >
                      Pour améliorer le positionnement de nos clients dans le
                      cadre d’un audit du périmètre de l’Energie et du Data
                      Center, nous partons sur une analyse globale qui regroupe
                      en tout point trois enjeux cruciaux à savoir :
                    </motion.p>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mb-7 mt-4 text-xl font-bold dark:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Gestion de l’Énergie dans le Data Center
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="pr-[10px]"
                    >
                      <div className="mb-1 text-left font-light text-yellow">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Efficacité énergétique</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">Sources d'énergie</p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Systèmes de refroidissement
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Supervision et Monitoring énergétique
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mt-4 text-base font-light text-[#5793C7]"> */}
                      <div className="mt-4 text-left font-light text-yellow">
                        <span className="my-1 font-bold">
                          Audit de la Résilience des Systèmes
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Conception de l'alimentation électrique /
                              Vérification des infrastructures de redondance
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Analyse des systèmes de sauvegarde de données pour
                              la continuité de service en cas d'incident
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p className="flex-1">
                              Analyse de l'Optimisation des réseaux
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-left text-base font-light text-yellow">
                        <span className="mb-4 font-bold">
                          Gestion de la Sécurité et de la Conformité
                        </span>{" "}
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <ArrowBox />
                            <p>
                              S'assurer que le Data Center respecte les normes
                              en vigueur comme ISO 27001 (gestion de la sécurité
                              de l'information), ISO 50001 (gestion de
                              l'énergie) ou la norme TIA-942 pour
                              l'infrastructure des Data Centers ainsi que les
                              exigences de l'Uptime Institute
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p>
                              L'évaluation des mesures de sécurité physiques et
                              logiques (contrôles d'accès, caméras de
                              surveillance, etc.)
                            </p>
                          </div>
                          <div className="flex items-start">
                            <ArrowBox />
                            <p>Chiffrement et protection des données</p>
                          </div>
                        </div>
                        <p className="mt-2">
                          En menant un Audit détaillé et en se concentrant sur
                          ces aspects, nous pourrons renforcer{" "}
                          <span className="font-bold">l'efficacité</span> ,{" "}
                          <span className="font-bold">la sécurité</span> et{" "}
                          <span className="font-bold">la durabilité</span> des
                          infrastructures (Energie et Data Center) tout en
                          s'assurant d'une conformité aux normes et une gestion
                          optimale des ressources énergétiques pout tous nos
                          clients.
                        </p>
                      </div>
                    </motion.div>
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
