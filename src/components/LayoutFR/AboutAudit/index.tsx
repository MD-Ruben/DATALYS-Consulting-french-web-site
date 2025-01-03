"use client"

import { RxArrowTopRight } from "react-icons/rx"
import { motion } from "framer-motion"
import React, { useRef } from "react" 
import Image from "next/image" 

const AboutAudit = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:mt-[105px]">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div
              className="font-Title w-full px-4 text-start lg:w-1/2"
              ref={scrollRef}
            >
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
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Adopter les meilleures techniques pour construire sa gouvernance
                autour d’un Système d’Information (SI){" "}
                <span className="font-semibold">fiable</span>,{" "}
                <span className="font-semibold">sécurisé</span> et
                <span className="ml-1 font-semibold">normalisé</span> n’est pas
                une chose donnée. Datalys Consulting, fort de ses compétences
                dans le domaine de l’Audit apporte une expertise réinventée
                visant à ajouter une plus-value dans la normalisation, la
                fiabilisation et la sécurité du SI.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Notre offre d’Audit couvre globalement les points suivants :
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="py-2"
              >
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  L’Audit des Procédés
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  L’Audit de la Configuration des Services
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  L’Audit d’Architectures
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  L’Audit de Sécurité
                </li>
              </motion.ul>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Portée sur les différents périmètres que nous couvrons :
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="py-2"
              >
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Infrastructure Système & Cloud
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Datacenter & Energie
                </li>
                <li className="group flex items-center font-light text-slate-300">
                  <RxArrowTopRight className="relative h-[15px] w-[15px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  Réseau & Sécurité
                </li>
              </motion.ul>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-[500px] rounded-full bg-[#294666] p-6 shadow-lg"
              >
                <img
                  src="/images/audit/aboutImage.png"
                  alt="About Us Image"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAudit
