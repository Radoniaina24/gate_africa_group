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
      <GraduationCap className="w-10 h-10 mx-auto text-blue-500 animate-bounce mb-2" />
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
      <div
        id="emedia"
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-6 md:px-20"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890218/IMG_2411_j58oem.jpg')",
          backgroundSize: "cover", // ou "cover" si tu préfères remplir l’espace

          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Texture décorative subtile */}
        {/* <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, #34d399 0%, transparent 25%), radial-gradient(circle at 70% 70%, #fbbf24 0%, transparent 20%)",
        }}
      ></div> */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative max-w-7xl mx-auto text-center z-10">
          {/* Carte principale */}
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-transparent p-10 rounded-2xl  inline-block"
          >
            <motion.img
              src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736508890/AELI_wn0rfr.png"
              alt="Logo AELI"
              className="h-30 mx-auto mb-6 animate-pulse"
            />
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r text-3xl from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm"
            >
              AELI – Université Entrepreneuriale de Madagascar
            </motion.h3>
            <p className="text-white mt-2">
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
                className="bg-transparent p-6 rounded-xl shadow-md text-center"
              >
                {domain.icon}
                <h4 className="text-xl font-bold mb-1">{domain.title}</h4>
                <p className="text-white-600">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
