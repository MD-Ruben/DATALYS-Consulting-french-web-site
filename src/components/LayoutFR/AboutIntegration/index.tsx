"use client";

import Link from "next/link";
import React, { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image";

const AboutIntegration = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
 
  return (
    <>
      <section className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:-mt-[105px]">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="font-Title w-full px-4 text-start lg:w-1/2 mb-10 lg:mb-0" ref={scrollRef}>
                {/* <div className="absolute bottom-40 hidden w-full px-4 md:block">
                  <div className="mx-auto max-w-[700px]">
                    <img
                      src="/images/logo/logo.png"
                      alt="about-image"
                      className="h-full w-full opacity-10"
                    />
                  </div>
                </div> */}
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                Chez DATALYS, nous redéfinissons l'intégration des solutions
                  pour répondre parfaitement à vos besoins. Notre mission
                  principale est de simplifier l'exploitation des services après
                  la mise en place, en garantissant une configuration minutieuse
                  selon vos exigences spécifiques. Nos prestations couvrent un
                  large éventail de services, incluant l'intégration de
                  solutions d'infrastructures système, réseaux, sécurité, ainsi
                  que les énergies, datacenters, et le cloud.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                Nous accompagnons nos clients de manière rigoureuse, avec pour
                  objectif de les rendre autonomes et confiants dans la gestion
                  de leurs solutions. Toutes nos intégrations sont suivies via
                  des outils et des canaux dédiés, spécialement conçus pour vous
                  offrir un service optimal.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                Notre expertise se base sur des principes clés qui assurent la
                réussite de chaque projet.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base leading-relaxed font-light text-slate-300 [word-spacing:-1.7px] md:text-xl"
              >
                Notre approche personnalisée et notre expertise technique nous
                  permettent de répondre à vos besoins spécifiques et de vous
                  accompagner tout au long du processus d'intégration. Nous
                  croyons fermement que chaque projet est unique, et nous nous
                  engageons à fournir des solutions sur mesure qui reflètent
                  votre vision et vos objectifs. Ensemble, créons une présence
                  puissante et efficace, sur le marché, qui propulse votre
                  entreprise vers de nouveaux sommets.
              </motion.p>
              </div>

              <div className="w-full px-4 lg:mr-0 lg:w-1/2" ref={scrollRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-[550px] rounded-full bg-[#294666] p-2 shadow-lg"
              >
                <Image
                  src="/images/integration/aaabout_integration.jpeg"
                  alt="Integration Image" 
                  width={600}
                  height={600}
                  className="rounded-full object-cover"
                />
              </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto mb-14 max-w-[660px] text-center">
            <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Intégration
            </h2>
            <p className="text-start text-base !leading-relaxed text-body-color md:text-lg">
              Chez DATALYS, nous redéfinissons l'intégration des solutions pour
              répondre parfaitement à vos besoins. Notre mission principale est
              de simplifier l'exploitation des services après la mise en place,
              en garantissant une configuration minutieuse selon vos exigences
              spécifiques. Nos prestations couvrent un large éventail de
              services, incluant l'intégration de solutions d'infrastructures
              systèmes, réseaux, sécurité, ainsi que les énergies, datacenters,
              et le cloud.
            </p>
            <p className="mt-2 text-start text-base !leading-relaxed text-body-color md:text-lg">
              Nous accompagnons nos clients de manière rigoureuse, avec pour
              objectif de les rendre autonomes et confiants dans la gestion de
              leurs solutions. Toutes nos intégrations sont suivies via des
              outils et des canaux dédiés, spécialement conçus pour vous offrir
              un service optimal.
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                data-wow-delay=".15s"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <img
                    src="/images/audit-title.jpg"
                    className="h-full w-full object-cover object-center"
                    alt="audit image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </section> */}
    </>
  );
};

export default AboutIntegration;
