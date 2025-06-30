"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AlbumLandmark from "./Album/AlbumLandmark";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";

export default function LandmarkLanding() {
  const t = useTranslations("landmark");

  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551135051067",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto space-y-2 px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-blue-600 rounded-2xl shadow-lg mb-6">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.7" />
              <path
                d="M17 7L19 5M5 19L7 17M19 19L17 17M5 5L7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-rose-500 to-blue-600 bg-clip-text text-transparent">
              {t("title")}
            </span>
            <span className="text-gray-700"> — {t("subtitle")}</span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-12 place-items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750248311/landmark_hwccht.jpg"
                alt="Landmark Team"
                className="rounded-2xl shadow-2xl"
                width={500}
                height={500}
              />
            </motion.div>
          </div>

          <div>
            <p className="text-md text-gray-700 leading-relaxed">
              <span className="font-semibold text-rose-600">{t("title")}</span>{" "}
              {t("description1")}
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              {t("description2")}
            </p>

            <p className="text-gray-600 text-md leading-relaxed mb-8">
              {t("description3.before")}
              <span className="inline-flex items-center px-2 py-1 mx-1 bg-rose-100 text-rose-700 text-sm font-semibold rounded-md">
                {t("description3.highlight")}
              </span>
              {t("description3.after")}
            </p>

            <div className="mt-10 flex gap-10 items-center">
              <button
                onClick={handleClick}
                className="group inline-flex text-sm items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

              <a
                href="https://res.cloudinary.com/dikefxjpd/image/upload/v1750686126/LandMark-2k25-Gate_qmmhn1.pdf"
                download
                className="button_anime"
                target="_blank"
                rel="noreferrer"
              >
                <span className="button__text">{t("download")}</span>
                <span className="button__icon">
                  <Download className="text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <AlbumLandmark />
      </div>
    </div>
  );
}
