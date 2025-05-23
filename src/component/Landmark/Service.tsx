"use client";

import { Car, Music, Truck } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function Service() {
  const services = [
    {
      icon: <Truck className="w-16 h-16 text-white" />,
      title: "Location de Camions Premium",
      description:
        "Flotte de véhicules haut de gamme avec technologie avancée pour maximiser l'efficacité de vos opérations logistiques.",
      features: [
        "GPS intégré",
        "Maintenance préventive",
        "Assurance tous risques",
        "Assistance prioritaire",
      ],
      gradient: "from-blue-600 to-blue-800",
      accent: "blue",
    },
    {
      icon: <Car className="w-16 h-16 text-white" />,
      title: "Véhicules Executive",
      description:
        "Sélection exclusive de véhicules prestige pour vos déplacements d'affaires et représentation clientèle.",
      features: [
        "Modèles récents",
        "Confort premium",
        "Service conciergerie",
        "Chauffeur disponible",
      ],
      gradient: "from-emerald-600 to-emerald-800",
      accent: "emerald",
    },
    {
      icon: <Music className="w-16 h-16 text-white" />,
      title: "Roadshow All-in-One ",
      description:
        "Solution événementielle complète avec technologie de pointe pour créer des expériences mémorables.",
      features: [
        "Équipement professionnel",
        "Scénographie sur mesure",
        "Streaming live",
        "Analytics détaillés",
      ],
      gradient: "from-purple-600 to-purple-800",
      accent: "purple",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white to-slate-50 rounded-3xl shadow-2xl"
            layout
            transition={{ duration: 0.4 }}
          />
          <div className="relative p-8 border border-white/20">
            <div
              className={`w-24 h-24 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-md">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
