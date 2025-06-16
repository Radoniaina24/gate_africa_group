"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface GalerieItem {
  src: string;
  alt: string;
}

const galerie: GalerieItem[] = [
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136506/6_radio_urfhi9.jpg",
    alt: "Photo radio 4",
  },
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136509/9_radio_waal3i.jpg",
    alt: "Photo radio 5",
  },
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136472/21_radio_w9olkn.jpg",
    alt: "Photo radio 6",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Galerie() {
  return (
    <section>
      <button className="z-50 swiper-button-prev-custom-gal absolute left-2 top-1/2 -translate-y-1/2  p-2 bg-white/80  shadow-lg rounded-full">
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button className="swiper-button-next-custom-gal absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white shadow-lg rounded-full">
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom-gal",
          prevEl: ".swiper-button-prev-custom-gal",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom", // lien avec ta div custom
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-custom-active",
        }}
      >
        {galerie.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative  rounded-lg hover:rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
