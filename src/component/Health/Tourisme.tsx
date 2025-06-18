"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Tourisme() {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100082906043536",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="  relative overflow-hidden">
      {/* Motifs géographiques en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-300 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-3 relative">
        <div className="flex flex-col  lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Logo - Côté gauche */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750235595/medical_zwtmry.jpg"
                  alt="Équipe Sophys au travail"
                  className="rounded-2xl shadow-2xl"
                  width={450}
                  height={450}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-5 -right-10 bg-yellow-400 text-gray-900 p-3 rounded-2xl shadow-lg"
                ></motion.div>
              </motion.div>

              {/* Éléments décoratifs - drapeaux/destinations */}
              <div className="absolute -top-6 -right-6 w-8 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm animate-bounce opacity-80"></div>
              <div
                className="absolute -bottom-6 -left-6 w-8 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-sm animate-bounce opacity-80"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-8 w-6 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm animate-bounce opacity-80"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Contenu texte - Côté droit */}
          <div className="lg:w-1/2 space-y-2 lg:pl-12">
            {/* Titre principal */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
                Medical Tourisme International
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
            {/* Description principale */}
            <p className="text-md  text-white leading-relaxed font-light">
              Une plateforme spécialisée dans l&apos;organisation de parcours de
              soins internationaux,
              <span className="font-medium text-white">
                {" "}
                facilitant l&apos;accès des patients aux meilleures structures
                médicales
              </span>
              en Afrique, à l&apos;île Maurice, en Inde et en Europe.
            </p>
            {/* Description secondaire */}
            <p className="text-md text-white leading-relaxed max-w-2xl">
              Medical Tourisme International prend en charge l&apos;ensemble du
              processus : diagnostic, organisation logistique, accompagnement
              administratif et suivi post-traitement.
            </p>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🌍</div>
                <span className="text-sm font-medium text-gray-700">
                  Afrique
                </span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🏝️</div>
                <span className="text-sm font-medium text-gray-700">
                  Maurice
                </span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🕌</div>
                <span className="text-sm font-medium text-gray-700">Inde</span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🏰</div>
                <span className="text-sm font-medium text-gray-700">
                  Europe
                </span>
              </div>
            </div> */}
            {/* Services inclus */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Diagnostic</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Organisation logistique
                </span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Accompagnement administratif
                </span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Suivi post-traitement
                </span>
              </div>
            </div>
            {/* Bouton d'action */}
            <div className="pt-4">
              <button
                onClick={handleClick}
                className="group text-sm relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>En savoir plus</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
