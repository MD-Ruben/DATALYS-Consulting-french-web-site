"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const EspaceEntreprise = () => {
  const router = useRouter()

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.location.href = "https://applicationweb.datalysconsulting.com/"
  //   }, 5000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <main
      className="min-h-screen bg-auto bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background/background.jpeg')",
      }}
    >
      <div className="absolute w-full max-w-screen bg-black/80" />

      <div className="relative flex min-h-screen items-center justify-center px-4">
          {/* Grille d'icônes */}
        <div className="absolute w-full max-w-2xl rounded-full border-x-[20px] border-y-[1px] border-slate-200 bg-black/30 p-8 backdrop-blur-xl">

          {/* Texte défilant */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-10"
          >
            <motion.h1
              animate={{
                x: [-20, 0, -20],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-center text-base font-bold uppercase text-white md:text-3xl"
            >
              digital <span className="text-[#f5c034]">workspace</span><br />(Espace Entreprise)
            </motion.h1>
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-10 overflow-hidden rounded-xl bg-primary/10 p-6 backdrop-blur-sm"
          >
            <motion.p
              animate={{
                x: [-20, 0, -20],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-center text-base md:text-xl font-bold text-white"
            >
              L'espace Entreprise est l'espace de travail conçu par Datalys pour
              faciliter le suivi des projets de ses clients.
            </motion.p>
          </motion.div>

          <div className="my-10 grid grid-cols-3 gap-6">
            <h2 className="flex flex-col items-center rounded-full bg-dark shadow-2xl px-2 py-2 text-sm font-normal text-yellow md:text-xl md:font-semibold">
              Efficacité
            </h2>
            <h2 className="flex flex-col items-center rounded-full bg-dark shadow-2xl px-2 py-2 text-sm font-normal text-primary md:text-xl md:font-semibold">
              Planification
            </h2>
            <h2 className="flex flex-col items-center rounded-full bg-dark shadow-2xl px-2 py-2 text-sm font-normal text-primary md:text-xl md:font-semibold">
              Proactivité
            </h2>
          </div>

          {/* Bouton avec animation */}
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-primary/80 hover:shadow-lg"
              onClick={() =>
                (window.location.href =
                  "https://applicationweb.datalysconsulting.com/")
              }
            >
              Accéder à l&apos;application
            </motion.button>
          </motion.div>

          {/* Indicateur de redirection */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-center text-sm text-white/70"
          >
            Redirection automatique <br /> dans quelques secondes...
          </motion.p>
        </div>
      </div>
    </main>
  )
}

export default EspaceEntreprise
