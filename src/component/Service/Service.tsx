"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Liste des services
const allServices = [
  {
    title: "Location de Camions & Voitures",
    description:
      "Landmark propose un service de location de véhicules adaptés à tous vos besoins professionnels ou événementiels.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811175/landmark_cn1yj9.jpg",
  },
  {
    title: "Roadshow All-in-One",
    description:
      "Une solution complète incluant animation, sonorisation, logistique et coordination pour des événements mobiles inoubliables.",
    image:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890233/IMG_2959_rfrp0u.jpg",
  },
  {
    title: "Sophys – Nettoyage Premium",
    description:
      "Service de nettoyage haut de gamme pour entreprises, véhicules et événements. Une propreté irréprochable garantie.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811368/sophys_gyrxet.jpg",
  },
];

// Variants pour les animations
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
      id="services"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Nos Services
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Découvrez les services distincts proposés par{" "}
          <strong>Landmark</strong> et <strong>Sophys</strong> pour répondre à
          tous vos besoins professionnels avec qualité et expertise.
        </motion.p>

        <motion.div
          className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
                width={500}
                height={500}
              />
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
