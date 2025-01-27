"use client"

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

const NosIntegrations = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 20, opacity: 1 }}
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
          className="relative mx-auto max-w-screen"
        >
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            modules={[Navigation, Autoplay]}
            className="relative mx-auto w-full"
          >
            <SwiperSlide>
              <div className="group relative mb-20 flex h-[250px] w-[215px] cursor-pointer flex-col gap-6 overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg lg:h-[400px] lg:w-[350px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("/images/integration/1-Cloud_Integration.PNG")`,
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
                      backgroundImage: `url("/images/integration/2-Datacenter_Integration.jpg")`,
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
                      backgroundImage: `url("/images/integration/3-Securité_Integration.PNG")`,
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
                      backgroundImage: `url("/images/integration/Infrastructure-Sys-Intregation.jpg")`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20" />
                  <div className="relative flex flex-col gap-3">
                    <RxAccessibility className="h-[32px] w-[32px] text-primary group-hover:text-blue-400" />
                    {/* <h1 className="text-xl lg:text-2xl">Intégration</h1> */}
                    <p className="lg:text-[18px]">Infrastructure système</p>
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
            <button className="custom-prev absolute left-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary/30 text-white transition-all hover:bg-primary hover:text-white md:left-4 lg:left-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
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
            <button className="custom-next absolute right-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary/30 text-white transition-all hover:bg-primary hover:text-white md:right-4 lg:right-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
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
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-wrapper {
          align-items: center;
          padding: 40px 0;
        }
        
        .swiper-slide {
          transition: all 0.5s ease;
          opacity: 0.4;
          transform: scale(0.65);
        }
        
        .swiper-slide-active {
          transform: scale(1.2) !important;
          opacity: 1 !important;
          z-index: 20;
        }
        
        .swiper-slide-active .group {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          transform: scale(0.8);
          opacity: 0.6;
          z-index: 10;
        }

        .swiper {
          overflow: hidden;
          padding: 0 40px;
          margin: 0 auto;
        }

        /* Masquer les boutons de navigation par défaut de Swiper */
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }

        @media (max-width: 768px) {
          .swiper {
            padding: 0 20px;
          }
          
          .swiper-slide {
            max-width: 280px;
            margin: 0 auto;
          }
          
          .swiper-slide-active {
            transform: scale(1.1) !important;
          }
        }

        @media (max-width: 640px) {
          .swiper-slide {
            max-width: 240px;
          }
          
          .swiper-slide-active {
            transform: scale(1.05) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default NosIntegrations
