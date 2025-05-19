"use client";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  ExternalLink,
  GraduationCap,
  Rocket,
} from "lucide-react";
import React from "react";

const ustDomains = [
  {
    icon: (
      <BookOpenCheck className="w-10 h-10 mx-auto text-red-600 animate-bounce mb-2" />
    ),
    title: "Sciences Informatiques",
    description: "Formations avancées en programmation, IA, et cybersécurité.",
    delay: 0,
  },
  {
    icon: (
      <Rocket className="w-10 h-10 mx-auto text-red-600 animate-bounce mb-2" />
    ),
    title: "Ingénierie",
    description: "Innovations en électronique, mécanique et énergie durable.",
    delay: 0.2,
  },
  {
    icon: (
      <GraduationCap className="w-10 h-10 mx-auto text-red-600 animate-bounce mb-2" />
    ),
    title: "Recherche & Développement",
    description:
      "Encourager l'innovation par la recherche scientifique appliquée.",
    delay: 0.4,
  },
];

export default function AELI() {
  return (
    <section
      id="ust"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 via-white to-slate-100"
    >
      {/* Texture décorative subtile */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, #f87171 0%, transparent 25%), radial-gradient(circle at 70% 70%, #facc15 0%, transparent 20%)",
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
            src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747221943/logoUST_eyzey1.png"
            alt="Logo UST"
            className="h-30 mx-auto mb-6 animate-pulse"
          />
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800"
          >
            Université des Sciences et Technologies
          </motion.h3>
          <p className="text-gray-600 mt-2">
            Explorez nos programmes d&apos;excellence en sciences, technologie
            et innovation.
          </p>
          <a
            href="https://ust-io.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 text-white mt-6 px-6 py-3 rounded-full font-semibold hover:bg-red-500 transition shadow-lg"
          >
            Découvrir UST <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>

        {/* Domaines */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ustDomains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: domain.delay }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              {domain.icon}
              <h4 className="text-xl font-bold mb-1">{domain.title}</h4>
              <p className="text-gray-600">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
