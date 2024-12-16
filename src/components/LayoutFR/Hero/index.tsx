"use client"
import OrbitingCircles from "@/components/LayoutFR/magicui/orbiting-circles"
import { motion } from "framer-motion"
import { Button } from "@nextui-org/button"
import CountUp from "react-countup"
import TypeIt from "typeit-react"
import Link from "next/link"
import ScrollAnimation from "@/components/LayoutFR/Transitions/ScrollAnimation"

const Icons = {
  data: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#92d3f5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m18 0c0 2.21-4.03 4-9 4s-9-1.79-9-4m18 0v5c0 2.21-4.03 4-9 4s-9-1.79-9-4v-5"
      />
    </svg>
  ),
  energie: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
    >
      <path
        fill="#92d3f5"
        d="M20 12H4L2 22h20zm-1.64 2l.4 2H13v-2zM11 14v2H5.24l.4-2zm-6.16 4H11v2H4.44zM13 20v-2h6.16l.4 2zM11 8h2v3h-2zm4.76-.79l1.42-1.42l2.12 2.12l-1.41 1.42zm-11.05.7l2.12-2.12l1.41 1.42l-2.12 2.12zM3 2h3v2H3zm15 0h3v2h-3zm-6 5c2.76 0 5-2.24 5-5h-2c0 1.65-1.35 3-3 3S9 3.65 9 2H7c0 2.76 2.24 5 5 5"
      />
    </svg>
  ),
  openai: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 25 24"
    >
      <path
        fill="#92d3f5"
        d="M2.226 2h20v9h-20zm6.002 3.5H6.224v2.004h2.004zM2.226 13h20v9h-20zm6.002 3.5H6.224v2.004h2.004z"
      />
    </svg>
  ),
  security: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#92d3f5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        color="#92d3f5"
      >
        <path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2" />
        <path d="M10.45 6.501V8.48m-3.487 1.521h2.052m5.971 0h2.052m-2.052 2.974h2.052m-10.075 0h2.052m1.435 1.545v1.98m3.025-1.98v1.98m-.01-9.999V8.48m-3.45 5.989h3.971a1 1 0 0 0 1-1V9.48a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.989a1 1 0 0 0 1 1" />
      </g>
    </svg>
  ),
  server: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 22 22"
    >
      <path
        fill="#92d3f5"
        d="M2 4.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6V4.6C22 3.7 21.5 3 20.8 3H3.2C2.5 3 2 3.7 2 4.6M10 8V6H9v2zM5 8h2V6H5zm15 1H4V5h16zM2 14.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6v-4.8c0-.9-.5-1.6-1.2-1.6H3.2c-.7 0-1.2.7-1.2 1.6m8 3.4v-2H9v2zm-5 0h2v-2H5zm15 1H4v-4h16z"
      />
    </svg>
  ),
  cloud: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 20 20"
    >
      <g fill="#92d3f5">
        <path
          fill-rule="evenodd"
          d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M6.901 7l.193-.75A3 3 0 0 1 10 4h1c1.405 0 2.614.975 2.924 2.325l.14.61l.61.141A3.001 3.001 0 0 1 14 13H6a3 3 0 1 1 0-6z"
          clip-rule="evenodd"
        />
        <path d="M11 16.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 1 0z" />
        <path d="M8.312 11.39a.5.5 0 0 1-.624-.78l2.5-2a.5.5 0 0 1 .624.78z" />
        <path d="M13.312 10.61a.5.5 0 0 1-.624.78l-2.5-2a.5.5 0 1 1 .624-.78z" />
      </g>
    </svg>
  ),
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-tr from-[#29547A] to-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      <ScrollAnimation>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="max-w-screen w-full px-3 md:px-0">
              <div className="grid grid-cols-2 gap-0 md:gap-8">
                <div className="col-span-2 mb-7 md:col-span-1 md:mb-0">
                  <div className="relative mx-auto mt-0 max-w-2xl text-left md:mt-12">
                    <div className="mb-3 leading-loose">
                      {/* <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300 bg-clip-text text-3xl font-extralight leading-tight text-transparent dark:from-white dark:to-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl">
                        Bienvenue
                      </span> */}
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                          hidden: {
                            scale: 0.8,
                            opacity: 0,
                          },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              delay: 0.4,
                            },
                          },
                        }}
                      >
                        <span className="pointer-events-none bg-clip-text text-3xl font-extralight leading-tight text-transparent dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:font-light lg:tracking-wide">
                          Bienvenue chez
                        </span>
                        <br />{" "}
                        <h1 className="text-3xl font-extralight leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:font-bold lg:tracking-wide">
                          DATALYS{" "}
                          <span className="font-extralight leading-tight text-[#f5c034]">
                            Consulting
                          </span>
                        </h1>
                      </motion.div>
                    </div>
                    <h2 className="mb-3">
                      <TypeIt
                        options={{
                          loop: true,
                        }}
                        className="pointer-events-none bg-clip-text text-xl font-semibold capitalize leading-tight text-transparent dark:text-white sm:text-2xl md:text-3xl lg:text-4xl"
                        getBeforeInit={(instance) => {
                          instance
                            .type("Infrastructure Système & Cloud")
                            .pause(750)
                            .delete(30)
                            .pause(500)
                            .type("Data center & énergie")
                            .pause(750)
                            .delete(21)
                            .pause(500)
                            .type("Réseau & Sécurité")
                            .pause(750)
                            .delete(17)
                            .pause(500)
                            .type("Data center & énergie")
                            .pause(750)
                            .delete(21)

                          // Remember to return it!
                          return instance
                        }}
                      />
                    </h2>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {
                          scale: 0.8,
                          opacity: 0,
                        },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: 0.4,
                          },
                        },
                      }}
                    >
                      <p className="mb-9 text-base font-extralight !leading-relaxed dark:text-white sm:text-lg md:text-xl">
                        La donnée est aujourd'hui un moteur de croissance pour
                        beaucoup d'entreprises.
                      </p>
                    </motion.div>
                    <div className="flex items-center gap-3">
                      <Button
                        className="flex items-center justify-center rounded-xl border-2 bg-[#f5c034] dark:border-[#f5c034]"
                        as={Link}
                        href="/contact"
                      >
                        {" "}
                        <span className="text-sm flex-nowrap dark:text-white sm:text-base md:text-lg">
                          Parler à un Expert
                        </span>
                      </Button>
                      <Button
                        className="flex items-center justify-center rounded-xl border-2 dark:border-white"
                        as={Link}
                        href="/contact"
                      >
                        {" "}
                        <span className="text-sm !leading-relaxed dark:text-white sm:text-base md:text-lg">
                          Demander un Devis
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#ffffff"
                            d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="mx-auto max-w-2xl p-0 md:p-2">
                    <div className="relative mx-auto w-full rounded-full">
                      <div className="relative h-[560px] w-full">
                        {/* <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-full md:shadow-2xl">
                          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black"> */}
                        <div className="relative z-10 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-full bg-dark md:shadow-2xl">
                          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                            {/* DATALYS */}
                            <img
                              src="/images/infraestructure.png"
                              alt="logo"
                              width={100}
                              height={50}
                            />
                          </span>

                          {/* Inner Circles */}
                          <OrbitingCircles
                            className="size-[30px] border-none bg-transparent"
                            duration={20}
                            delay={20}
                            radius={80}
                          >
                            <Icons.server />
                          </OrbitingCircles>
                          <OrbitingCircles
                            className="size-[30px] border-none bg-transparent"
                            duration={20}
                            delay={10}
                            radius={80}
                          >
                            <Icons.energie />
                          </OrbitingCircles>

                          {/* Outer Circles (reverse) */}
                          <OrbitingCircles
                            className="size-[50px] border-none bg-transparent"
                            radius={190}
                            duration={20}
                            reverse
                          >
                            <Icons.security />
                          </OrbitingCircles>
                          <OrbitingCircles
                            className="size-[50px] border-none bg-transparent"
                            radius={190}
                            duration={20}
                            delay={20}
                            reverse
                          >
                            <Icons.data />
                          </OrbitingCircles>
                          <OrbitingCircles
                            className="size-[30px] border-none bg-transparent"
                            duration={20}
                            delay={10}
                            radius={80}
                          >
                            <Icons.cloud />
                          </OrbitingCircles>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Hero
