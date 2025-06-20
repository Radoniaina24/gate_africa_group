"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import AlbumAgri from "./Album/AlbumAgri";
import { Target } from "lucide-react";

export default function GateAfricaAgribusiness() {
  // const services = [
  //   {
  //     icon: <Sprout className="w-4 h-4" />,
  //     text: "Production agricole et élevage",
  //   },
  //   {
  //     icon: <Factory className="w-4 h-4" />,
  //     text: "Transformation agroalimentaire",
  //   },
  //   {
  //     icon: <TrendingUp className="w-4 h-4" />,
  //     text: "Développement de filières exportatrices",
  //   },
  //   {
  //     icon: <Users className="w-4 h-4" />,
  //     text: "Accompagnement des exploitations et des coopératives",
  //   },
  //   {
  //     icon: <Cpu className="w-4 h-4" />,
  //     text: "Intégration des nouvelles technologies agricoles (agritech)",
  //   },
  // ];

  const handleClick = () => {
    window.open(
      "https://www.gateafricagroup.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto space-y-2 px-10 lg:px-10">
        <div className="">
          {/* En-tête avec logo et titre */}
          <div className="text-center mb-12">
            {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg mb-6">
              <Target className="w-10 h-10 text-white" />
            </div> */}

            <h1 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Gate Africa Agribusiness
              </span>
              <span className="text-gray-300">
                {" "}
                — Agriculture & Agro-Industrie
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
          </div>

          {/* Contenu principal en deux colonnes */}
          <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-12 lg:items-start place-items-center">
            {/* Colonne gauche - Carte visuelle avec badge animé */}
            <div className="">
              <p className="text-md text-gray-300 leading-relaxed">
                <span className="font-semibold text-green-400">
                  Gate Africa Agribusiness
                </span>{" "}
                est la branche agricole et agro-industrielle de
                <span className="font-medium text-white">
                  {" "}
                  Gate Africa Group
                </span>
                , engagée dans le développement des filières stratégiques de
                production, de transformation et de valorisation agricole.
              </p>

              <p className="text-white leading-relaxed mb-4">
                Notre approche intègre l&apos;ensemble de la chaîne de valeur,
                depuis la production jusqu&apos;à la commercialisation, en
                favorisant les modèles durables, l&apos;innovation technologique
                et l&apos;agro-entrepreneuriat.
              </p>

              <p className="text-white text-md leading-relaxed mb-8">
                Gate Africa Agribusiness contribue activement à la souveraineté
                alimentaire, à la création d&apos;emplois locaux et au
                développement économique durable, en positionnant
                l&apos;agriculture comme un
                <span className="inline-flex items-center px-2 py-1 mx-1 bg-green-800/40 text-green-300 text-sm font-semibold rounded-md border border-green-600/30">
                  véritable moteur de croissance
                </span>
                en Afrique.
              </p>

              {/* Domaines d'intervention */}
              {/* <div className="space-y-3 mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Nos axes d'intervention :
                </h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm text-gray-300"
                    >
                      <div className="text-green-400 bg-green-900/40 p-1.5 rounded-lg border border-green-600/30">
                        {service.icon}
                      </div>
                      <span>{service.text}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Bouton d'action centré */}
              <div className="mt-10">
                <button
                  onClick={handleClick}
                  className="group inline-flex text-sm items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>En savoir plus</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Colonne droite - Description */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750415011/506512031_683211541277965_838851079179425619_n_v1949u.jpg"
                  alt="Équipe Sophys au travail"
                  className="rounded-2xl shadow-2xl"
                  width={500}
                  height={500}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-5 -right-10 bg-yellow-400 text-gray-900 p-3 rounded-2xl shadow-lg"
                ></motion.div>
              </motion.div>
            </div>
          </div>
          <AlbumAgri />
        </div>
      </div>
    </div>
  );
}
