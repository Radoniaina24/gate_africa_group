"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalerieItem {
  src: string;
  alt: string;
  title?: string;
}

const galerie: GalerieItem[] = [
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339476/4_m7r5wx.jpg",
    alt: "Photo radio 1",
    title: "Studio Principal",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339476/3_exfoie.jpg",
    alt: "Photo radio 2",
    title: "Équipement Audio",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339476/1_n3iple.jpg",
    alt: "Photo radio 3",
    title: "Cabine d'Enregistrement",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339477/7_ytcllj.jpg",
    alt: "Photo radio 4",
    title: "Console de Mixage",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339478/10_lqygzu.jpg",
    alt: "Photo radio 5",
    title: "Espace Technique",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339479/11_hp6yyj.jpg",
    alt: "Photo radio 6",
    title: "Zone Production",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339481/15_xits8k.jpg",
    alt: "Photo radio 7",
    title: "Salle de Régie",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339478/9_xslbza.jpg",
    alt: "Photo radio 8",
    title: "Équipement Diffusion",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339479/16_g4rsqg.jpg",
    alt: "Photo radio 9",
    title: "Interface Audio",
  },
  {
    src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1750339482/24_x6y5mr.jpg",
    alt: "Photo radio 10",
    title: "Configuration Pro",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Album() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  return (
    <>
      <motion.section
        className="relative py-16 rounded-lg px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header Section */}
        <motion.div
          className="max-w-7xl mx-auto mb-12 text-center"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Visitez notre studio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          {/* <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez nos installations professionnelles et notre équipement de
            pointe
          </p> */}
        </motion.div>

        {/* Custom Navigation Buttons */}
        <button className="gallery-prev-btn group absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          <svg
            className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button className="gallery-next-btn group absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          <svg
            className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Swiper Gallery */}
        <motion.div variants={itemVariants} className="max-w-7xl mx-auto">
          <Swiper
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            navigation={{
              nextEl: ".gallery-next-btn",
              prevEl: ".gallery-prev-btn",
            }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 36,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            className="pb-16"
          >
            {galerie.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="group relative cursor-pointer"
                  onClick={() => setLightboxImage(image.src)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>

                    {/* Image Title Overlay */}
                    {/* <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6"
                          variants={overlayVariants}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-white font-semibold text-lg mb-1">
                            {image.title}
                          </h3>
                          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        </motion.div>
                      )}
                    </AnimatePresence> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center space-x-3 mt-8"></div>
        </motion.div>
      </motion.section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setLightboxImage(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={lightboxImage}
                  alt="Image agrandie"
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx global>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.7;
        }

        .custom-bullet:hover {
          background: #64748b;
          transform: scale(1.2);
        }

        .custom-bullet-active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </>
  );
}
