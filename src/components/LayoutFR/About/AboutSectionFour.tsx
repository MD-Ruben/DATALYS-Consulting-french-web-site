"use client"

import { useRef } from "react"
import SectionTitle from "../Common/SectionTitle"
import { motion } from "framer-motion"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
)

const AboutSectionFour = () => {
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
    <section className="pt-16 md:pt-20 lg:pt-28 mt-[45px] md:-mt-[105px]">
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
                Fondé en 2023, par des Consultants engagés et passionnés de la
                Digitalisation, Datalys Consulting est une Entreprise de Service
                IT qui apporte une expertise réinventée. Nous sommes
                spécialisées dans le Cloud, l’Infrastructure IT et les Réseaux &
                Sécurité : Les sujets clés impactant le monde de l’IT et de la
                Digitalisation. La transformation, la gestion d'infrastructures
                IT & cloud, l'optimisation énergétique des Data Centers ainsi
                que le déploiement efficace des systèmes de Réseau et Sécurité
                informatique font partie de nos compétences de pointe. Chez
                DATALYS, notre engagement est d'offrir des solutions innovantes
                qui propulsent votre entreprise vers l'avenir numérique et dans
                l’atteinte de vos objectifs stratégiques.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                Notre équipe dévouée travaille sans relâche pour concevoir des
                environnements informatiques fiables, performants et
                éco-responsables. Forts de notre expertise dans le cloud,
                l'énergie, et les Réseaux & sécurité, nous réinventons notre
                expertise sur mesure de sorte à l’adapter à vos besoins
                spécifiques. Chez DATALYS, l'innovation est au coeur de notre
                ADN. Nous proposons à nos clients des solutions de nouvelles
                générations ainsi que des bonnes pratiques pour leur fournir un
                avantage concurrentiel dans un monde en constante évolution.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.6px] md:text-lg"
              >
                Travailler avec Datalys, c’est se faire accompagner par une
                équipe dynamique, expérimentée, Agile, motivée, engagée et
                passionnée ; capable de vous accompagner dans votre
                transformation digitale, dans l’optimisation de votre
                consommation énergétique, dans le renforcement de la robustesse
                de votre réseau informatique. Nous vous fournissons des axes
                d’optimisations claires et précis de votre SI dans sa globalité.
                Faites équipe avec nous pour façonner l'avenir de votre
                entreprise. Bienvenue chez Datalys, nous sommes heureux de faire
                ce chemin avec Vous.
              </motion.p>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2" ref={scrollRef}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }} 
                className="relative mx-auto max-w-[600px] rounded-full bg-[#294666] p-4 shadow-lg"
              >
                <img
                  src="/images/about/pexels.jpg"
                  alt="About Us Image"
                  // width={500}
                  // height={500}
                  className="rounded-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionFour
