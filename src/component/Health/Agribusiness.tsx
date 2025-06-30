"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import AlbumAgri from "./Album/AlbumAgri";

export default function GateAfricaAgribusiness() {
  const t = useTranslations("agribusiness");

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
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {t("title")}
            </span>
            <span className="text-gray-300"> — {t("tagline")}</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2 gap-12 lg:items-start place-items-center">
          {/* Texte à gauche */}
          <div>
            <p className="text-md text-gray-300 leading-relaxed">
              {t.rich("description", {
                span: (chuncks) => (
                  <span className=" text-green-300 ">{chuncks}</span>
                ),
              })}
            </p>
            <p className="text-white leading-relaxed mt-4">
              {t("subdescription1")}
            </p>
            <p className="text-white text-md leading-relaxed mt-4 mb-8">
              {t.rich("subdescription2", {
                span: (chuncks) => (
                  <span className="inline-flex items-center px-2 py-1 mx-1 bg-green-800/40 text-green-300 text-sm font-semibold rounded-md border border-green-600/30">
                    {chuncks}
                  </span>
                ),
              })}
            </p>

            {/* Bouton */}
            <div className="mt-10">
              <button
                onClick={handleClick}
                className="group inline-flex text-sm items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>{t("buttonLabel")}</span>
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

          {/* Image à droite */}
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
                alt={t("title")}
                className="rounded-2xl shadow-2xl"
                width={400}
                height={400}
                priority
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-5 -right-10 bg-yellow-400 text-gray-900 p-3 rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Galerie */}
        <AlbumAgri />
      </div>
    </div>
  );
}
