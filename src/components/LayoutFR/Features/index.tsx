"use client"

import { motion } from "framer-motion"
import SingleFeature from "./SingleFeature"
import featuresData from "./featuresData"
import { useRef } from "react"

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="font-Title container">
          <div
            className="mx-auto mb-14 max-w-[460px] text-center md:max-w-[560px]"
            ref={scrollRef}
          >
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              // viewport={{ root: scrollRef }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
            >
              Nos domaines d’expertise
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
