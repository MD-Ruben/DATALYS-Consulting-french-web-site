"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const AboutSectionOne = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-light text-slate-300">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  )

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div
              className="font-Title w-full px-4 text-start lg:w-1/2"
              ref={scrollRef}
            >
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
              >
                Notre expertise
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-3 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                Chez DATALYS, notre engagement est de vous offrir des solutions
                innovantes et adaptées à vos besoins, tout en garantissant une
                qualité de service irréprochable. Depuis notre création, nous
                avons toujours placé la satisfaction de nos clients au cœur de
                notre stratégie. C’est grâce à cette approche que nous avons su
                bâtir des relations solides et durables avec nos partenaires.
                Notre valeur ajoutée a pu se démontrer sur les axes suivants :
              </motion.p>

              <div
                className="mb-12 max-w-[570px] md:max-w-[670px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-full px-3"
                  >
                    <List text=" Des Audits sur mesure." />
                    <List text=" Des Intégrations de qualité sur nos différents périmètres (Infrastructure & Cloud, Réseau & Sécurité, Datacenter & Energie)." />
                    <List text=" Des accompagnements stratégiques (Gouvernance, Meilleurs pratiques d’exploitation, maturité des utilisateurs, choix technologique en fonction du domaine d’activité et bien d’autres)." />
                    <List text=" Des Documentations Projets de qualité." />
                    <List text=" Des Planifications claires et maitrisées sur les projets." />
                    <List text=" Notre espace de gestion complète de projet (Espace Entreprise (mettre le lien pour une redirection sur l’espace entreprise))." />
                    <List text=" Un support offert sur une période immédiatement pour tous nos projets." />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ root: scrollRef }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-[500px] rounded-full bg-[#294666] p-4 shadow-lg"
              >
                <img
                  src="/images/about/data_analytics3D_2.png"
                  alt=""
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

export default AboutSectionOne
