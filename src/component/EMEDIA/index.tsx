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
    <section
      id="emedia"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-white to-slate-100"
    >
      {/* Texture de fond subtile */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 40%, #3b82f6 0%, transparent 20%), radial-gradient(circle at 80% 70%, #60a5fa 0%, transparent 25%)",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Carte principale */}
        <motion.div
          whileHover={{ rotateY: 10, rotateX: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-10 rounded-2xl shadow-2xl inline-block"
        >
          <motion.img
            src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747222338/logoEmedia_ookb0v.jpg"
            alt="Logo E-Media"
            className="h-28 mx-auto mb-6 animate-pulse"
          />
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-600"
          >
            E-Media - École du Cinéma et Audiovisuel
          </motion.h3>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
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

        {/* Programmes E-Media */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {emediaPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: program.delay }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              {program.icon}
              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {program.title}
              </h4>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
