"use client"

import Link from "next/link"
import React from "react"

const EspaceEntreprise: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Overlay avec z-index plus bas */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* SVG avec z-index plus bas */}
      <div className="absolute inset-0 z-0">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          />
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          />
          <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Contenu principal avec z-index plus élevé */}
      <div className="relative z-10">
        <div className="mb-4 flex flex-col justify-between md:flex-row">
          <p className="m-4 text-lg text-gray-300 md:text-xl">
            Votre espace de gestion de projet simplifié <br />{" "}
            <span className="bg-cyan-700">
              pour retrouver et suivre tous vos projets en un unique endroit.
            </span>
          </p>
          <ul className="m-3 space-y-2 text-lg">
            <li className="font-medium text-green-400">
              Suivez efficacement vos projets
            </li>
            <li className="font-medium text-blue-400">
              Affectez des prestataires externes sur projets
            </li>
            <li className="font-medium text-blue-400">
              Augmentez votre productivité sur vos projets
            </li>
            <li className="font-medium text-white">
              Collaboration efficace entre les parties prenantes du projet
            </li>
            <li className="font-medium text-white">
              Déléguez les tâches de vos projets
            </li>
          </ul>
        </div>

        {/* Section principale avec z-index plus élevé */}
        <main className="relative mx-auto max-w-3xl rounded-full border border-l-8 border-r-8 border-white bg-[#000] px-6 py-6 md:px-12 z-20">
          {/* Header principal */}
          <header className="py-8 text-center">
            <h1 className="text-2xl font-bold md:text-4xl">
              <span className="text-[#f5c034]">DIGITAL</span>
              <br /> <span className="text-blue-400">WORKSPACE</span>{" "}
              <span className="text-yellow-400">(Espace Entreprise)</span>
            </h1>
          </header>
          {/* Cercle décoratif à droite */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full border-4 border-pink-300"></div>

          {/* Contenu principal */}
          <div className="flex flex-col items-center gap-8 rounded-full lg:flex-row">
            {/* Image de collaboration */}
            <div className="w-full overflow-hidden rounded-full lg:w-1/2">
              <img
                src="/images/collaboration.jpg"
                alt="Collaboration workspace"
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="mt-4 px-8 text-center text-sm font-semibold md:px-0 md:text-xl">
                L’espace Entreprise est l’espace de travail conçu par Datalys pour
                faciliter le suivi des projets de ses clients.
              </p>
            </div>
          </div>

          {/* Section Efficacité, Planification, Proactivité */}
          <div className="mt-12 flex justify-center gap-6">
            <div className="bg-yellow-400 rounded-full bg-yellow px-6 py-2 font-bold text-white">
              Efficacité
            </div>
            <div className="rounded-full bg-blue-400 px-6 py-2 font-bold text-white">
              Planification
            </div>
            <div className="rounded-full bg-green-400 px-6 py-2 font-bold text-white">
              Proactivité
            </div>
          </div>
        </main>

        {/* Footer avec z-index plus élevé */}
        <footer className="relative mt-16 z-20">
          <div className="flex flex-col items-center justify-around text-center text-lg md:flex-row md:text-left">
            <p className="font-semibold text-green-500">
              Déclarez des incidents et suivez leurs traitements.
            </p>
            <p className="font-semibold text-yellow">
              Sécurisez le contenu de vos projets.
            </p>
          </div>
          <div className="mt-8 block text-center md:hidden">
            <Link
              className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
              href="https://applicationweb.datalysconsulting.com/"
              rel="noopener noreferrer"
            >
              Connectez-vous à votre espace
            </Link>
            <p className="mt-2 text-gray-400">Et bien plus...</p>
          </div>
        </footer>

        {/* Décorations avec z-index approprié */}
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full border-4 border-blue-500 z-10"></div>
        <div className="absolute bottom-0 right-0 h-52 w-56 rounded-full border-4 bg-amber-200 z-10 hidden md:block">
          <div className="mt-8 hidden text-center md:block">
            <Link
              className="text-[17px] font-bold text-blue-500 hover:text-blue-400 transition-colors"
              href="https://applicationweb.datalysconsulting.com/"
              rel="noopener noreferrer"
            >
              Connectez-vous à votre espace
            </Link>
            <p className="mt-2 text-sm md:text-xl text-white">Et bien plus...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EspaceEntreprise
