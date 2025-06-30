"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Tourisme() {
  const t = useTranslations("health.tourism");

  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100082906043536",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Motifs géographiques */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-300 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-3 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750235595/medical_zwtmry.jpg"
                alt="Medical Tourisme"
                width={450}
                height={450}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Contenu texte */}
          <div className="lg:w-1/2 space-y-4 lg:pl-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
              {t("title")}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>

            <p className="text-md text-white leading-relaxed font-light">
              {t("tagline")}
              <span className="font-medium text-white">
                {" "}
                {t("subtagline")}{" "}
              </span>{" "}
              {t("region")}
            </p>

            <p className="text-md text-white leading-relaxed max-w-2xl">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-6 pt-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center space-x-2 text-white">
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      i === 1
                        ? "bg-emerald-500"
                        : i === 2
                        ? "bg-teal-500"
                        : i === 3
                        ? "bg-green-500"
                        : "bg-cyan-500"
                    }`}
                  />
                  <span className="text-sm font-medium">{t(`badge${i}`)}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={handleClick}
                className="group text-sm relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{t("buttonLabel")}</span>
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
