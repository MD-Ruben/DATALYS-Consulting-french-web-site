"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const AboutFormations = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div
              className="font-Title relative z-10 w-full px-4 text-start lg:w-1/2"
              ref={scrollRef}
            >
              {/* <h2 className="font-Title mb-4 text-start text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Formation
              </h2> */}
              <div className="absolute bottom-20 hidden w-full px-4 md:block">
                <div className="mx-auto max-w-[700px]">
                  <img
                    src="/images/logo/logo.png"
                    alt="about-image"
                    className="h-full w-full opacity-10"
                  />
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Chez DATALYS, nous croyons fermement que le développement des
                compétences de vos ressources est essentiel à la fois pour leur
                épanouissement personnel que pour la réussite collective de
                votre organisation. C’est pourquoi nous avons mis en place un
                programme de formation qui s’adapte à vos besoins tout en
                répondant aux objectifs stratégiques de l’entreprise.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Nous proposons des formations sur mesure dans sur le Cloud,
                l’Infrastructure Système, l’Energie & Datacenter, les Réseaux &
                Sécurité et bien d’autres …etc. Nos formations sont proposées à
                distance et en présentiel selon le type de formation et les
                exigences de mobilités de nos clients.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-2 text-justify text-base font-light leading-relaxed text-slate-300 [word-spacing:-1.7px] md:text-lg"
              >
                Nous utilisons une approche mixte comprenant des formations en
                présentiel, des e-learning et des sessions de coaching
                individuel. Chaque entreprise peut bénéficier d’un plan de
                formation personnalisé. Nous sommes convaincus que la formation
                est un investissement précieux pour votre entreprise.
              </motion.p>
            </div>

            <div className="w-full px-4 lg:mr-0 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-[500px] rounded-full bg-[#294666] p-6 shadow-lg"
              >
                <img
                  src="/images/about/training.png"
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
    // <section className="relative z-10 py-16 md:py-20 lg:py-28">
    //   <div className="container">
    //     <div className="mx-auto mb-14 max-w-[660px] text-center">
    //       <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
    //         Formation
    //       <h2/>
    //       <p className="text-center text-base !leading-relaxed font-light text-slate-300 md:text-lg">
    //         En plus des offres d’Audit et d’Intégration de solutions, l’une des
    //         offres que nous portons est la Formation. Dans cette offre nous
    //         proposons des formations sur mesure dans nos domaines couverts
    //         (Cloud, Infra Système, Energie & Datacenter et Réseau & Sécurité).
    //         Nos formations sont proposées à distance et en présentiel selon le
    //         type formation et les exigences de mobilités de nos clients.
    //       </p>
    //     </div>
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4">
    //         <div
    //           className="mx-auto max-w-[770px] overflow-hidden rounded-md"
    //           data-wow-delay=".15s"
    //         >
    //           <div className="relative aspect-[77/40] items-center justify-center">
    //             <img
    //               src="/images/audit-title.jpg"
    //               className="h-full w-full object-cover object-center"
    //               alt="audit image"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    // </section>
  )
}

export default AboutFormations
