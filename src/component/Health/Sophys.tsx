"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Sophys() {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100075924167986",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="">
          {/* En-tête avec logo et titre */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-6">
              <svg
                className="w-10 h-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM18 20H6V18H18V20ZM18 16H6V14H18V16ZM18 12H6V10H18V12Z" />
                <circle
                  cx="12"
                  cy="8"
                  r="2"
                  fill="currentColor"
                  opacity="0.7"
                />
                <path
                  d="M8 16l4-4 4 4"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sophys
              </span>
              <span className="text-gray-700">
                {" "}
                — Hygiène, Propreté & Solutions Sanitaires
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>

          {/* Contenu principal en deux colonnes */}
          <div className="grid lg:grid-cols-2 gap-12 items-start place-items-center">
            {/* Colonne gauche - Description */}
            <div className="space-y-2">
              <p className="text-md text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-700">Sophys</span> est
                la filiale spécialisée de
                <span className="font-medium"> Gate Africa Group</span> dans les
                métiers de l&apos;hygiène professionnelle, du nettoyage
                industriel, de la désinfection et des solutions sanitaires
                globales.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Au-delà des services classiques de propreté, Sophys développe
                également ses propres gammes de produits d&apos;entretien et de
                désinfection, dont la marque
                <span className="inline-flex items-center px-2 py-1 mx-1 bg-red-100 text-red-700 text-sm font-semibold rounded-md">
                  VIRUSTOP
                </span>
                , permettant de garantir à ses clients des standards de qualité
                et de sécurité maîtrisés de bout en bout.
              </p>

              {/* Statistiques ou points forts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Qualité maîtrisée</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-indigo-600">24/7</div>
                  <div className="text-sm text-gray-600">
                    Solutions sanitaires
                  </div>
                </div>
              </div>

              {/* Bouton d'action centré */}
              <div className="mt-10">
                <button
                  onClick={handleClick}
                  className=" group inline-flex text-sm items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

            {/* Image avec badge animé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811368/sophys_gyrxet.jpg"
                alt="Équipe Sophys au travail"
                className="rounded-2xl shadow-2xl"
                width={400}
                height={400}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-5 -right-10 bg-yellow-400 text-gray-900 p-3 rounded-2xl shadow-lg"
              >
                <div className="text-sm font-bold">100%</div>
                <div className="font-semibold text-xs ">Satisfaction</div>
                <div className="font-semibold text-xs">Garantie</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
