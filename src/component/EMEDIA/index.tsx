"use client";
import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, Film, Video } from "lucide-react";

// Données des programmes E-Media avec des icônes colorées
const emediaPrograms = [
  {
    icon: (
      <Video className="w-10 h-10 mx-auto text-blue-500 animate-bounce mb-2" />
    ),
    title: "Production",
    description: "Création de courts-métrages et documentaires primés.",
    delay: 0,
  },
  {
    icon: (
      <Film className="w-10 h-10 mx-auto text-indigo-500 animate-bounce mb-2" />
    ),
    title: "Montage & Réalisation",
    description: "Formations sur les outils professionnels et storytelling.",
    delay: 0.2,
  },
  {
    icon: (
      <BadgeCheck className="w-10 h-10 mx-auto text-green-500 animate-bounce mb-2" />
    ),
    title: "Accréditations",
    description: "Reconnaissance nationale et partenariats internationaux.",
    delay: 0.4,
  },
];

export default function Emedia() {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-10 -mt-2">
        <svg
          className="w-full h-14 md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,202.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Contenu principal avec fond */}
      <div
        id="emedia"
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-20"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890221/IMG_2423_jxympk.jpg')",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Contenu texte */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-transparent p-10 rounded-2xl inline-block"
          >
            <motion.img
              src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747652836/logoEmedia-removebg-preview_1_tfhj7p.png"
              alt="Logo E-Media"
              className="h-28 mx-auto mb-6 animate-pulse"
            />
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-blue-500"
            >
              E-Media - École du Cinéma et Audiovisuel
            </motion.h3>
            <p className="text-white mt-2 max-w-xl mx-auto">
              Formations en cinéma, réalisation, montage et production
              audiovisuelle.
            </p>
            <a
              href="https://e-mediauniversity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white mt-6 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg"
            >
              Explorer E-Media <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>

          {/* Programmes */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {emediaPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: program.delay }}
                viewport={{ once: true }}
                className="bg-transparent p-6 rounded-xl shadow-md text-center"
              >
                {program.icon}
                <h4 className="text-xl font-bold text-white mb-1">
                  {program.title}
                </h4>
                <p className="text-white">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
