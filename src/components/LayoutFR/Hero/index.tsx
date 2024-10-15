"use client";
import OrbitingCircles from "@/components/LayoutFR/magicui/orbiting-circles";
import { Button } from "@nextui-org/button";
import TypeIt from "typeit-react";
import Link from "next/link";

const Icons = {
  data: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4aa9b8"
        d="M20 6c0-2.168-3.663-4-8-4S4 3.832 4 6v2c0 2.168 3.663 4 8 4s8-1.832 8-4zm-8 13c-4.337 0-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4v-3c0 2.168-3.663 4-8 4"
      />
      <path
        fill="#4aa9b8"
        d="M20 10c0 2.168-3.663 4-8 4s-8-1.832-8-4v3c0 2.168 3.663 4 8 4s8-1.832 8-4z"
      />
    </svg>
  ),
  energie: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 55 55"
    >
      <path fill="#92d3f5" d="M16 36h19l16 20H31z" />
      <circle cx="48" cy="24" r="8" fill="#fcea2b" />
      <g
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M16 36h19.543L52 56H31.429zm1 7v13h10m-3-10h19M26 36l16 20" />
        <circle cx="48" cy="24" r="8" />
      </g>
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  security: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#4aa9b8"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M2.5 9q.045-1.208.27-2.45c.11-.616.166-.924.356-1.135s.66-.36 1.599-.66C7.035 4.019 8.987 2 11.998 2s4.967 2.02 7.277 2.755c.939.3 1.408.449 1.598.66c.19.21.246.519.357 1.135q.225 1.242.27 2.45m-2.055 8c-1.32 2.023-3.268 3.637-5.83 4.618c-.667.255-1 .382-1.614.382c-.612 0-.946-.128-1.613-.383c-2.562-.98-4.51-2.594-5.831-4.617M8.5 12l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m-5-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m10-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1m5-2l1 1m0 0l1 1m-1-1l1-1m-1 1l-1 1"
        color="#4aa9b8"
      />
    </svg>
  ),
  server: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4aa9b8"
        d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9zm0 8h1v-2H9zm0 8h1v-2H9zM5 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2z"
      />
    </svg>
  ),
};

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="max-w-screen px-4">
              <div className="grid grid-cols-2">
                <div className="col-span-2 mb-7 md:col-span-1 md:mb-0">
                  <div className="relative mx-auto mt-0 max-w-2xl text-left md:mt-12">
                    <div className="mb-3 leading-loose">
                      <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300 bg-clip-text text-3xl font-extralight leading-tight text-transparent dark:from-white dark:to-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl">
                        Bienvenue
                      </span>
                      <br />{" "}
                      <h1 className="text-3xl font-extralight leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl">
                        chez DATALYS{" "}
                        <span className="text-[#f5c034]">Consulting</span>
                      </h1>
                    </div>
                    <h2 className="mb-3">
                      <TypeIt
                        className="pointer-events-none bg-gradient-to-b from-black to-gray-300 bg-clip-text text-xl font-extralight leading-tight text-transparent dark:from-white dark:to-black sm:text-2xl md:text-3xl lg:text-4xl"
                        getBeforeInit={(instance) => {
                          instance
                            .type("Infrastructure et analyse des données")
                            .pause(750)
                            .delete(37)
                            .pause(500)
                            .type("IT Cloud")
                            .pause(750)
                            .delete(8)
                            .pause(500)
                            .type("Sécurité réseau")
                            .pause(750)
                            .delete(15)
                            .pause(500)
                            .type("Data center et energie")
                            .pause(750)
                            .delete(22)
                            .pause(500)
                            .type("Infrastructure et analyse des données");

                          // Remember to return it!
                          return instance;
                        }}
                      />
                      ;
                    </h2>
                    <p className="mb-9 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                      La donnée est aujourd'hui un moteur de croissance pour
                      beaucoup d'entreprises.
                    </p>
                    <div className="flex items-center space-y-4 sm:space-y-0">
                      <Button
                        className="flex items-center justify-center rounded-xl border-2 dark:border-body-color-dark"
                        as={Link}
                        href="/apropos"
                      >
                        {" "}
                        <span className="text-sm !leading-relaxed dark:text-body-color-dark sm:text-base md:text-lg">
                          Voir plus
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#959CB1"
                            d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="mx-auto max-w-2xl">
                    <div className="relative mx-auto w-full rounded-full">
                      <div className="relative h-[560px] w-full">
                        <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-full md:shadow-2xl">
                          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                            {/* DATALYS */}
                            <img
                              src="/images/logo/logo.png"
                              alt="logo"
                              width={160}
                              height={70}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <div className="h-48 w-48 rounded-full bg-gradient-to-r from-[#284567] to-[#111F2C]"></div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <div className="h-48 w-48 rounded-full bg-gradient-to-r from-[#1D3249] to-[#060B0F]"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
