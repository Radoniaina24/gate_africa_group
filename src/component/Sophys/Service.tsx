"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Why from "./Why";

export default function Service() {
  const services = [
    {
      title: "Nettoyage Professionnel & Commercial",
      description:
        "Entretien expert des bureaux, commerces et locaux d'entreprise avec désinfection complète.",
      image:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747900969/2150520631_by3xzn.jpg",
      features: [
        "Entretien régulier bureaux",
        "Sols, vitres, moquettes",
        "Désinfection espaces travail",
      ],
      color: "from-purple-500 to-pink-500",
      icon: "🏢",
    },
    {
      title: "Nettoyage Résidentiel",
      description:
        "Service complet pour maisons et appartements, incluant nettoyage de fin de chantier.",
      image:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747901055/2149345515_wwrz7c.jpg",
      features: [
        "Cuisines & salles de bain",
        "Fin de chantier",
        "Nettoyage de printemps",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "🏠",
    },
    {
      title: "Nettoyage Industriel & Spécialisé",
      description:
        "Solutions techniques pour environnements industriels avec équipements spécialisés.",
      image:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747901131/1209_drcarv.jpg",
      features: [
        "Locaux industriels",
        "Machines & surfaces",
        "Gestion des déchets",
      ],
      color: "from-amber-500 to-orange-500",
      icon: "🏭",
    },
    {
      title: "Services de Désinfection",
      description:
        "Désinfection complète conformément aux normes d'hygiène les plus strictes.",
      image:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747901207/2148848588_pfrbrk.jpg",
      features: [
        "Désinfection post-risques",
        "Produits professionnels",
        "Bureaux, écoles, santé",
      ],
      color: "from-green-500 to-teal-500",
      icon: "🦠",
    },
  ];
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="relative z-10 py-10 bg-gradient-to-b from-transparent to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-4xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            NOS OFFRES DE SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Quatre domaines d&apos;expertise pour répondre à tous vos besoins de
            nettoyage professionnel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveService(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-500 cursor-pointer ${
                activeService === index ? "ring-4 ring-purple-500" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="relative overflow-hidden rounded-t-xl">
                <Image
                  width={400}
                  height={400}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
              </div>

              <div className="p-8 relative">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-md">
                  {service.description}
                </p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                  className="space-y-4 mb-8"
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-4`}
                      ></div>
                      <span className="text-gray-200 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Why />
    </section>
  );
}
