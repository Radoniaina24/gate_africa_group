"use client";
import { motion } from "framer-motion";
import { Rocket, GraduationCap, Sun, ExternalLink } from "lucide-react";
import React from "react";

const aeliDomains = [
  {
    icon: (
      <Rocket className="w-10 h-10 mx-auto text-amber-500 animate-bounce mb-2" />
    ),
    title: "Business & Innovation",
    description:
      "Des programmes axés sur la stratégie, le marketing et la création de valeur.",
    delay: 0,
  },
  {
    icon: (
      <GraduationCap className="w-10 h-10 mx-auto text-indigo-500 animate-bounce mb-2" />
    ),
    title: "Entrepreneuriat & Leadership",
    description:
      "Former les leaders de demain grâce à un apprentissage pratique et collaboratif.",
    delay: 0.2,
  },
  {
    icon: (
      <Sun className="w-10 h-10 mx-auto text-emerald-500 animate-bounce mb-2" />
    ),
    title: "Énergies Renouvelables",
    description:
      "Promouvoir la transition énergétique durable à travers la technologie verte.",
    delay: 0.4,
  },
];

export default function AELI() {
  return (
    <section
      id="aeli"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-green-50 via-white to-yellow-50"
    >
      {/* Texture décorative subtile */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, #34d399 0%, transparent 25%), radial-gradient(circle at 70% 70%, #fbbf24 0%, transparent 20%)",
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
            src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1746176127/Candidature/admin_20250502085526.jpg"
            alt="Logo AELI"
            className="h-30 mx-auto mb-6 animate-pulse"
          />
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800"
          >
            AELI – Université Entrepreneuriale de Madagascar
          </motion.h3>
          <p className="text-gray-600 mt-2">
            Première université dédiée à l&apos;entrepreneuriat, au leadership
            et aux énergies renouvelables à Madagascar.
          </p>
          <a
            href="https://aeli-madagascar.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-600 text-white mt-6 px-6 py-3 rounded-full font-semibold hover:bg-emerald-500 transition shadow-lg"
          >
            Découvrir AELI <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </motion.div>

        {/* Domaines */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {aeliDomains.map((domain, index) => (
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
