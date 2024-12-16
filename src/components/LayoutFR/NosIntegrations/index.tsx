"use client"
import SectionTitle from "../Common/SectionTitle"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { RxAccessibility } from "react-icons/rx"
import Link from "next/link"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/free-mode"

import { motion } from "framer-motion"
import { FreeMode, Navigation, Autoplay } from "swiper/modules"
import { RxArrowTopRight } from "react-icons/rx"
import { useRef } from "react"

// Composant pour les boutons de navigation
const NavigationButtons = () => {
  const swiper = useSwiper();
  
  return (
    <div className="absolute top-1/2 z-10 flex w-full -translate-y-1/2 justify-between px-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary transition-all hover:bg-primary hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary transition-all hover:bg-primary hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

const NosIntegrations = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-[560px] text-center">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
          >
            Ce que nous intégrons
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-full">
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={true}
              modules={[Navigation, Autoplay]}
              className="w-full py-10"
              onSlideChange={(swiper) => {
                // Réinitialiser tous les slides
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach(slide => {
                  slide.classList.remove('scale-125', 'z-10');
                  (slide as HTMLElement).style.opacity = '0.5';
                });
                // Zoomer le slide actif
                const activeSlide = slides[swiper.activeIndex];
                if (activeSlide) {
                  activeSlide.classList.add('scale-125', 'z-10');
                  (activeSlide as HTMLElement).style.opacity = '1';
                }
              }}
            >
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url("/images/integration/cloud.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                    <p className="lg:text-[18px]">Cloud</p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/DataCenter.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Data center</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/reseau.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Réseau</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/sauvegarde.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Infrastructure Système</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/supervision.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Supervision</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/security.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Sécurité</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/Virtualization.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Virtualisation</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                  <Link href="/notreexpertise/integration">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/serveur-stockage.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                    <div className="relative flex flex-col gap-3">
                      <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                      {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                      <p className="lg:text-[18px]">Serveurs et stockage</p>
                    </div>
                    <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-primary" />
                  </Link>
                </div>
              </SwiperSlide>
              <NavigationButtons />
            </Swiper>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-slide {
          transition: all 0.3s ease;
          opacity: 0.5;
        }
        .swiper-slide-active {
          transform: scale(1.25);
          z-index: 10;
          opacity: 1;
        }
        .swiper-wrapper {
          padding: 50px 0;
        }
      `}</style>
    </section>
  )
}

export default NosIntegrations
