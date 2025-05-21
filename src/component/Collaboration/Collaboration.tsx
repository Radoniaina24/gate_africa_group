"use client";
import { Globe } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const CollaborationSection = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <motion.div
      className="relative bg-gradient-to-b from-blue-50 to-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Drapeaux stylisés */}
          <div className="relative mx-auto w-full max-w-3xl mb-10">
            <div className="absolute top-0 lg:-top-3 left-0 lg:-left-24 transform -translate-x-3/4 -translate-y-1/2 w-32 h-32 opacity-90 z-10">
              <div className="relative w-full h-full">
                {/* Drapeau Madagascar - Blanc, Rouge, Vert */}
                <div className="absolute inset-0 rounded-full shadow-xl overflow-hidden border-4 border-white rotate-6 transform transition-transform duration-500 hover:rotate-0 hover:scale-110">
                  <div className="flex h-full">
                    <div className="w-1/3 bg-white h-full"></div>
                    <div className="w-2/3 h-full">
                      <div className="h-1/2 bg-red-600"></div>
                      <div className="h-1/2 bg-green-600"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform translate-x-1/4 translate-y-1/4 z-20">
                  MDG
                </div>
              </div>
            </div>

            <div className="absolute top-0 lg:-top-3 right-0 lg:-right-24 transform translate-x-3/4 -translate-y-1/2 w-32 h-32 opacity-90 z-10">
              <div className="relative w-full h-full">
                {/* Drapeau Maurice - Rouge, Bleu, Jaune, Vert */}
                <div className="absolute inset-0 rounded-full shadow-xl overflow-hidden border-4 border-white -rotate-6 transform transition-transform duration-500 hover:rotate-0 hover:scale-110">
                  <div className="flex flex-col h-full">
                    <div className="h-1/4 bg-red-600"></div>
                    <div className="h-1/4 bg-blue-600"></div>
                    <div className="h-1/4 bg-yellow-400"></div>
                    <div className="h-1/4 bg-green-600"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform -translate-x-1/4 translate-y-1/4 z-20">
                  MUS
                </div>
              </div>
            </div>

            {/* Ligne connectant les drapeaux */}
            <div className="absolute  top-20 md:top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-red-500 z-0"></div>
          </div>

          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
            Partenariat International
          </h2>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Collaboration Madagascar-Maurice
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Un pont académique entre deux îles de l&apos;océan Indien pour
            promouvoir l&apos;excellence éducative et l&apos;innovation.
          </p>

          {/* Badge de collaboration */}
          <motion.div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-0.5 rounded-full">
              <div className="bg-white p-1 rounded-full">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation des onglets */}
        <motion.div
          className="border-b border-gray-200 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <nav className="flex justify-center -mb-px space-x-8">
            <button
              onClick={() => setActiveTab("about")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "about"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => setActiveTab("universities")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "universities"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Universités
            </button>
          </nav>
        </motion.div>

        {/* Contenu des onglets */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                <div className="relative aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Globe className="w-24 h-24 text-white opacity-70" />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">
                      Coopération Académique Régionale
                    </h3>
                    <p className="mt-2">
                      Renforcer les liens éducatifs dans l&apos;océan Indien
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Notre Vision de Collaboration
                </h3>
                <p className=" text-gray-600 mb-6">
                  La collaboration entre Madagascar et Maurice représente un
                  partenariat stratégique visant à élever le niveau
                  d&apos;éducation supérieure dans la région de l&apos;océan
                  Indien. En unissant les forces de l&apos;Université E-media et
                  de l&apos;Université AELI, nous créons un hub
                  d&apos;excellence académique qui bénéficie aux étudiants des
                  deux îles.
                </p>
                <p className=" text-gray-600 mb-8">
                  Ce partenariat favorise la mobilité étudiante, le partage des
                  connaissances et la recherche collaborative dans des domaines
                  critiques pour le développement régional, comme les
                  technologies numériques, le développement durable et
                  l&apos;innovation entrepreneuriale.
                </p>
              </div>
            </div>
          )}
          {activeTab === "universities" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Université E-media */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                      Université E-media
                    </h3>
                  </div>
                  {/* Motif vectoriel décoratif */}
                  <svg
                    className="absolute bottom-0 left-0 w-full opacity-30"
                    viewBox="0 0 600 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,50 Q150,0 300,50 T600,50 V100 H0 Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    L&apos;Université E-media est reconnue pour son excellence
                    dans les domaines des médias numériques, des technologies de
                    l&apos;information et de la communication. Fondée avec la
                    vision de former les leaders de demain dans l&apos;ère
                    numérique, elle offre des programmes innovants alignés sur
                    les besoins de l&apos;industrie.
                  </p>
                </div>
              </div>

              {/* Université AELI */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-purple-600 to-purple-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                      Université AELI
                    </h3>
                  </div>
                  {/* Motif vectoriel décoratif */}
                  <svg
                    className="absolute bottom-0 left-0 w-full opacity-30"
                    viewBox="0 0 600 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,50 Q150,0 300,50 T600,50 V100 H0 Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    L&apos;Université AELI se distingue par son approche
                    multidisciplinaire de l&apos;éducation, avec une forte
                    orientation vers l&apos;entreprenariat, les langues
                    internationales et l&apos;innovation. Elle s&apos;engage à
                    développer des compétences adaptées aux défis mondiaux du
                    21ème siècle.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
