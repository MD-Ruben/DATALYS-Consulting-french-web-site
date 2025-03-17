"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { RxAccessibility } from "react-icons/rx"
import Link from "next/link"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import { motion } from "framer-motion"
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules"
import { RxArrowTopRight } from "react-icons/rx"
import { useRef } from "react"

const NosIntegrations = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#1a3654] dark:bg-[#1a3654] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-[600px] text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]"
          >
            Ce que nous intégrons
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto"
        >
          <div className="px-6 md:px-12 lg:px-16 relative">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 3,
                slideShadows: false,
              }}
              initialSlide={2}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: '.custom-prev-btn',
                nextEl: '.custom-next-btn',
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="integration-swiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide className="swiper-slide-custom">
                <Link href="/notreexpertise/integration" className="block w-full h-full">
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/reseau.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <RxAccessibility className="h-[28px] w-[28px] text-[#5bbfea]" />
                        <p className="text-[18px] font-medium">Réseau</p>
                      </div>
                      <RxArrowTopRight className="h-[30px] w-[30px] text-white duration-100 group-hover:rotate-45 group-hover:text-[#5bbfea]" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link href="/notreexpertise/integration" className="block w-full h-full">
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/serveur-stockage.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <RxAccessibility className="h-[28px] w-[28px] text-[#5bbfea]" />
                        <p className="text-[18px] font-medium">Serveurs et stockage</p>
                      </div>
                      <RxArrowTopRight className="h-[30px] w-[30px] text-white duration-100 group-hover:rotate-45 group-hover:text-[#5bbfea]" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link href="/notreexpertise/integration" className="block w-full h-full">
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/1-Cloud_Integration.PNG")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <RxAccessibility className="h-[28px] w-[28px] text-[#5bbfea]" />
                        <p className="text-[18px] font-medium">Cloud</p>
                      </div>
                      <RxArrowTopRight className="h-[30px] w-[30px] text-white duration-100 group-hover:rotate-45 group-hover:text-[#5bbfea]" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link href="/notreexpertise/integration" className="block w-full h-full">
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/2-Datacenter_Integration.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <RxAccessibility className="h-[28px] w-[28px] text-[#5bbfea]" />
                        <p className="text-[18px] font-medium">Data center</p>
                      </div>
                      <RxArrowTopRight className="h-[30px] w-[30px] text-white duration-100 group-hover:rotate-45 group-hover:text-[#5bbfea]" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link href="/notreexpertise/integration" className="block w-full h-full">
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/3-Securité_Integration.PNG")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <RxAccessibility className="h-[28px] w-[28px] text-[#5bbfea]" />
                        <p className="text-[18px] font-medium">Sécurité</p>
                      </div>
                      <RxArrowTopRight className="h-[30px] w-[30px] text-white duration-100 group-hover:rotate-45 group-hover:text-[#5bbfea]" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <Link href="/notreexpertise/integration" className="block w-full h-full">
                  <div className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl text-white shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("/images/integration/Infrastructure-Sys-Intregation.jpg")`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <RxAccessibility className="h-[28px] w-[28px] text-[#5bbfea]" />
                        <p className="text-[18px] font-medium">Infrastructure système</p>
                      </div>
                      <RxArrowTopRight className="h-[30px] w-[30px] text-white duration-100 group-hover:rotate-45 group-hover:text-[#5bbfea]" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
            <button 
              className="custom-prev-btn absolute left-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#5bbfea]/30 text-white transition-all hover:bg-[#5bbfea] hover:text-white md:h-12 md:w-12 md:left-2 lg:left-24"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button 
              className="custom-next-btn absolute right-0 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#5bbfea]/30 text-white transition-all hover:bg-[#5bbfea] hover:text-white md:h-12 md:w-12 md:right-2 lg:right-24"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .integration-swiper {
          width: 100%;
          padding: 50px 0;
          overflow: hidden;
        }
        
        .swiper-slide-custom {
          width: 340px;
          height: 340px;
          background-position: center;
          background-size: cover;
          transition: all 0.3s ease;
          opacity: 0.6;
          filter: blur(1px);
        }
        
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1.35);
          z-index: 10;
          filter: blur(0);
        }
        
        .swiper-slide-active .group {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }
        
        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.8;
          filter: blur(0);
        }
        
        @media (min-width: 768px) {
          .swiper-slide-custom {
            width: 380px;
            height: 380px;
          }
          
          .swiper-slide-active {
            transform: scale(1.4);
          }
        }
        
        @media (min-width: 1024px) {
          .swiper-slide-custom {
            width: 400px;
            height: 400px;
          }
          
          .swiper-slide-active {
            transform: scale(1.45);
          }
        }
        
        /* Masquer les boutons de navigation par défaut de Swiper */
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default NosIntegrations
