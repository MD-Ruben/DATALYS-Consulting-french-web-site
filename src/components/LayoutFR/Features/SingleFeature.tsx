"use client"

import { motion } from "framer-motion"
import { Feature } from "@/types/feature"
import { useRef } from "react"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { icon, title, paragraph } = feature
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s" ref={scrollRef}>
        <div className="mb-4 flex items-center justify-center">{icon}</div>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-5 text-center text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="pr-[10px] text-center text-base font-light leading-relaxed text-slate-300"
        >
          {paragraph}
        </motion.p>
      </div>
    </div>
  )
}

export default SingleFeature
