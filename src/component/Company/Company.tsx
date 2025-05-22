"use client";
import React from "react";
import { motion } from "framer-motion";

import CompanyCarousel from "./CompanyCarousel";

// Liste des compâny
const allCompany = [
  {
    title: "E-Media – École du Cinéma et Audiovisuel",
    description:
      "Formations en cinéma, réalisation, montage et production audiovisuelle.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747222338/logoEmedia_ookb0v.jpg", // Remplace par le lien réel
    url: "school",
  },
  {
    title: "AELI – Université Entrepreneuriale ",
    description:
      "Première université dédiée à l'entrepreneuriat, au leadership et aux énergies renouvelables à Madagascar.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1746176127/Candidature/admin_20250502085526.jpg",
    url: "school",
  },
  {
    title: "Université des Sciences et Technologies",
    description:
      "Explorez nos programmes d'excellence en sciences, technologie et innovation.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747221943/logoUST_eyzey1.png", // Remplace par le lien réel
    url: "school",
  },
  {
    title: "Clinique & Innovation",
    description:
      "Renforcer les systèmes de santé pour une Afrique en bonne santé.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747804142/clinique_xcy1bm.jpg",
    url: "clinique",
  },
  {
    title: "E-Media 107.8 FM",
    description:
      "Une radio dynamique et engagée, au service de l'information, de la culture et de la proximité avec ses auditeurs.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747805711/radio_tfde71.jpg",
    url: "radio",
  },
  {
    title: "Landm'ark",
    description:
      "Landmark propose un service de location de véhicules adaptés à tous vos besoins professionnels ou événementiels.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811175/landmark_cn1yj9.jpg",
    url: "landmark",
  },
  {
    title: "Sophys – Nettoyage Premium",
    description:
      "Service de nettoyage haut de gamme pour entreprises, véhicules et événements. Une propreté irréprochable garantie.",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811368/sophys_gyrxet.jpg",
    url: "sophys",
  },
];

export default function CompanySection() {
  return (
    <section
      className="pt-24 bg-gradient-to-br from-gray-50 to-white"
      id="mission"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-5xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Les entreprises de Gate Africa Group
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Gate Africa Group réunit des entreprises engagées à catalyser un
          changement positif en Afrique grâce à la technologie et à
          l&apos;entrepreneuriat, en favorisant l&apos;impact, l&apos;innovation
          et la croissance durable.
        </motion.p>
        <CompanyCarousel allCompany={allCompany} title={""} />
      </div>
    </section>
  );
}
