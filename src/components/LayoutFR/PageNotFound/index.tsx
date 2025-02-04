"use client"

import { Button } from "@nextui-org/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const PageNotFound = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const imageData = [
    {
      url: "/images/slider/new/infrastructure.jpg",
      title: "Infrastructure & systèmes",
    },
    {
      url: "/images/slider/new/datacenter1.jpg",
      title: "Data Center",
    },
    {
      url: "/images/slider/new/energie.jpg",
      title: "Énergie",
    },
    {
      url: "/images/slider/Cloud_Accueil.PNG",
      title: "Cloud",
    },
    {
      url: "/images/slider/new/reseau&securite2.jpg",
      title: "Réseau & Sécurité",
    },
  ]

  const slides = [
    {
      url: "/images/404/1.webp",
      title: "Infrastructure & System",
    },
    {
      url: "/images/404/2.webp",
      title: "Network & Security",
    },
    {
      url: "/images/404/3.webp",
      title: "Data Center & Energy",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageData.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen mt-10 md:-mt-6">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-primary to-[#f5c034] bg-clip-text text-6xl font-bold text-transparent">
              404
            </h2>
            <h3 className="mb-4 text-2xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              Bientôt disponible
            </h3>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
              {"Nous y travaillons pour vous offrir une meilleure expérience."}
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <Button
              className="bg-[#f5c034] hover:bg-[#f5c034]/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              as={Link}
              href="/"
            >
              Retour à l&apos;accueil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div> */}

          {/* Image Slider */}
          <div className="relative mt-12">
            <div className="flex flex-wrap justify-center gap-6">
              {imageData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: currentImage === index ? 1 : 0.5,
                    scale: currentImage === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative my-4 md:py-0"
                >
                  <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-gray-700 md:h-40 md:w-40">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {currentImage === index && (
                    <>
                      <motion.div
                        className="absolute -inset-2 rounded-full border-2 border-[#f5c034]"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-12 left-1/2 -translate-x-1/2 transform whitespace-nowrap"
                      >
                        <span className="rounded-full bg-[#f5c034] px-4 py-2 text-sm font-medium text-white shadow-lg">
                          {item.title}
                        </span>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#f5c034]/10"
                style={{
                  width: Math.random() * 50 + 10,
                  height: Math.random() * 50 + 10,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PageNotFound
