"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Building,
  UserCheck,
  Network,
  Calendar,
  Briefcase,
  Target,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import AlbumCarrefour from "./Album/AlbumCarrefour";

export default function GateAfricaRecruitment() {
  const cooperationAxes = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "B2B",
      description: "Connexions stratégiques entre entreprises",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "B2C",
      description: "Mise en relation entreprises - clients finaux",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "B2A",
      description: "Partenariats entreprises - administrations",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "B2G",
      description: "Collaboration entreprises - gouvernements",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "G2G",
      description: "Coopération institutionnelle internationale",
    },
  ];

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      description:
        "Planification de voyages professionnels sectoriels (éducation, santé, agro, tech, etc.)",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      description:
        "Accompagnement des délégations d'investisseurs ou de décideurs publics",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      description:
        "Organisation de visites d'entreprises, forums et séjours de prospection",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      description: "Services logistiques et protocole haut de gamme",
    },
  ];

  const handleClick = () => {
    window.open(
      "https://www.carrefour-emploi.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Network className="w-6 h-6 text-red-500" />
            </div>
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Volet <span className="text-red-500">Business Development</span> &
              Tourisme d&apos;affaires
            </h1>
          </div>

          <div className="max-w-5xl mx-auto py-16">
            <div className="relative">
              {/* Ligne centrale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 to-red-600"></div>

              <div className="">
                <div className="flex flex-col gap-5 lg:flex-row items-center">
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-400/20">
                      <h3 className="text-red-400 font-semibold mb-3">
                        Connexions Stratégiques
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        Créer des connexions stratégiques et ouvrir des marchés
                        à travers l&apos;Afrique et au-delà.
                        <span className="text-red-400 font-semibold">
                          {" "}
                          Gate Africa Group
                        </span>{" "}
                        accompagne le développement économique des entreprises.
                      </p>
                    </div>
                  </div>

                  <div className="w-4 h-4 bg-red-400 rounded-full border-4 border-gray-900 relative z-10"></div>

                  <div className="w-full lg:w-1/2 pl-0 lg:pl-8">
                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-red-400/20">
                      <h3 className="text-red-400 font-semibold mb-3">
                        Approche Intégrée
                      </h3>
                      <p className="text-gray-800 leading-relaxed">
                        Nous accompagnons les investisseurs et institutions
                        grâce à une approche intégrée, combinant expertise
                        sectorielle, mise en relation stratégique et
                        accompagnement sur mesure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cooperation Axes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos axes de <span className="text-red-500">coopération</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cooperationAxes.map((axis, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 mx-auto mb-4">
                  <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                    {axis.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {axis.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {axis.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AfricaBusinessTour Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-3xl p-8 border border-red-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  AfricaBusinessTour.com
                </h2>
                <p className="text-red-600 font-semibold">Initiative unique</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Une initiative unique dédiée à l'organisation de voyages
              d'affaires sur mesure, de missions économiques, de roadshows, de
              rencontres B2B et B2G, en Afrique et à l'international.
            </p>
          </div>
        </motion.div> */}

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nos <span className="text-red-500">services</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
            <div className="grid md:grid-cols-2 gap-8 col-span-2">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl text-sm p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 text-start">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 flex-shrink-0">
                      <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748861902/Candidature/carrefour-removebg-preview_20250602105817.jpg"
                  alt="Gate Africa Business Development"
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
        </motion.div>
        {/* Bouton d'action */}
        <div className="mt-8">
          <button
            onClick={handleClick}
            className="group inline-flex text-sm items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
        <AlbumCarrefour />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
    </div>
  );
}
