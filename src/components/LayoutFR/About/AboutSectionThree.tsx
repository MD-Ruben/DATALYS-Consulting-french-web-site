"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@nextui-org/button"
import Link from "next/link"
import { useRef } from "react"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-light text-slate-300">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
)

const AboutSectionThree = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Image Section with Animation */}
            <div className="w-full px-4 lg:w-1/2 mb-10 lg:mb-0" ref={scrollRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-[550px] rounded-full bg-[#294666] p-2 shadow-lg"
              >
                <Image
                  src="/images/about/pppexels.jpg"
                  alt="About Us Image"
                  width={600}
                  height={600}
                  className="rounded-full"
                />
              </motion.div>
            </div>

            {/* Text Section */}
            <div className="w-full px-4 text-start lg:w-1/2" ref={scrollRef}>
              {/* <div className="absolute bottom-20 hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="Background Logo"
                    width={700}
                    height={700}
                    className="opacity-10"
                  />
                </div>
              </div> */}

              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                // viewport={{ root: scrollRef }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="font-Title mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]"
              >
                À propos de nous
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Fondé en 2023, par des Consultants engagés et passionnés de la
                Digitalisation, Datalys Consulting est une Entreprise de Service
                IT qui apporte une expertise réinventée. Nous sommes spécialisés
                dans le Cloud, l’Infrastructure IT et les réseaux & sécurités :
                les sujets clés impactant le monde de l’IT et de la
                Digitalisation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                La transformation, la gestion d'infrastructures IT & cloud,
                l'optimisation énergétique des Data Centers ainsi que le
                déploiement efficace des systèmes de réseau et sécurité
                informatique font partie de nos compétences de pointe. Chez
                DATALYS, notre engagement est d'offrir des solutions innovantes
                qui propulsent votre entreprise vers l'avenir numérique et dans
                l’atteinte de vos objectifs stratégiques.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.2px] md:text-xl"
              >
                Chez DATALYS, l'innovation est au coeur de notre ADN. Nous
                proposons à nos clients des solutions de nouvelles générations
                ainsi que des bonnes pratiques pour leur fournir un avantage
                concurrentiel dans un monde en constante évolution.
              </motion.p>

              {/* Call to Action Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-4 flex-col items-center justify-start gap-2 space-y-4 sm:flex-row sm:space-y-0"
              >
                <div>
                  <Link
                    href="/apropos"
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Voir plus
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionThree
