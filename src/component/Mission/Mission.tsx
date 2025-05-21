"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Lightbulb } from "lucide-react";

// Liste des missions
const missionItems = [
  {
    icon: <GraduationCap />,
    title: "Éducation",
    description: "Promouvoir l'accès à une éducation de qualité pour tous.",
    delay: 0.1,
  },
  {
    icon: <HeartPulse />,
    title: "Santé",
    description:
      "Renforcer les systèmes de santé pour une Afrique en bonne santé.",
    delay: 0.3,
  },
  {
    icon: <Lightbulb />,
    title: "Innovation",
    description: "Encourager la créativité et les technologies émergentes.",
    delay: 0.5,
  },
];

// Variants pour animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Mission() {
  return (
    <section
      className="py-20 px-6 md:px-20 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, #f8faff 0%, #eef2f7 100%)",
      }}
    >
      {/* Motifs de fond */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e53e3e' fill-opacity='0.25'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Formes décoratives */}
      <div className="absolute -top-10 right-0 w-64 h-64 rounded-full bg-blue-100 opacity-30 z-0" />
      <div className="absolute top-40 -left-20 w-56 h-56 rounded-full bg-red-100 opacity-20 z-0" />
      <div className="absolute -bottom-10 right-20 w-72 h-72 rounded-full bg-yellow-100 opacity-25 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre avec animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre Mission et Vision
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-16 h-1 bg-blue-500 rounded-full" />
            <div className="w-16 h-1 bg-red-500 rounded-full" />
            <div className="w-16 h-1 bg-yellow-500 rounded-full" />
          </div>
        </motion.div>

        {/* Cartes animées */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {missionItems.map((item, index) => {
            const bgColor = "bg-white";
            let accentColor = "bg-red-50";
            let iconColor = "text-red-600";

            if (item.title === "Éducation") {
              accentColor = "bg-blue-50";
              iconColor = "text-blue-600";
            } else if (item.title === "Santé") {
              accentColor = "bg-red-50";
              iconColor = "text-red-600";
            } else if (item.title === "Innovation") {
              accentColor = "bg-yellow-50";
              iconColor = "text-yellow-600";
            }

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  rotate: 0.5,
                  boxShadow: "0px 15px 25px rgba(0,0,0,0.1)",
                }}
                className={`flex flex-col items-center text-center ${bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform duration-300`}
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center ${accentColor} rounded-full mb-6`}
                >
                  {React.cloneElement(item.icon, {
                    className: `h-12 w-12 ${iconColor}`,
                  })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
