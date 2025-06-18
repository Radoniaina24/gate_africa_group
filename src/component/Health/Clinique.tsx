"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function CliniqueInnovationHero() {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/Clinique.Innovation.Nanisana?",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="bg-gradient-to-br ">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col-reverse  lg:flex-row  items-center justify-between">
          {/* Contenu texte - Côté gauche */}
          <div className="lg:w-1/2 space-y-2 lg:pr-12">
            {/* Titre principal */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Clinique Innovation
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>

            {/* Description principale */}
            <p className="text-md  text-white leading-relaxed font-light">
              Un centre médical moderne, orienté vers la qualité des soins et
              l&apos;innovation médicale,
              <span className="font-medium text-white ">
                {" "}
                combinant expertise locale et standards internationaux.
              </span>
            </p>

            {/* Description secondaire */}
            <p className="text-md text-white leading-relaxed max-w-xl">
              Clinique Innovation propose des soins spécialisés, des services de
              diagnostic avancés et un accompagnement personnalisé des patients.
            </p>
            {/* Indicateurs de qualité */}
            <div className="flex flex-wrap gap-6 pt-2 text-white">
              <div className="flex items-center space-x-2 ">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Soins spécialisés</span>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Diagnostic avancé</span>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Accompagnement personnalisé
                </span>
              </div>
            </div>
            {/* Bouton d'action */}
            <div className="pt-6">
              <button
                onClick={handleClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative text-sm z-10 flex items-center space-x-2">
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Logo - Côté droit */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750244496/innovation_clique_bmkzyo.jpg"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
