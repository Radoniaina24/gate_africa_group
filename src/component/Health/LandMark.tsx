"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import AlbumLandmark from "./Album/AlbumLandmark";

export default function LandmarkLanding() {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61551135051067",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto space-y-2 px-10 lg:px-10">
        <div className="">
          {/* En-tête avec logo et titre */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-blue-600 rounded-2xl shadow-lg mb-6">
              <svg
                className="w-10 h-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="currentColor"
                  opacity="0.7"
                />
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
                Landm&apos;Ark
              </span>
              <span className="text-gray-700">
                {" "}
                — Communication, Marketing & Événementiel
              </span>
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full mx-auto"></div>
          </div>

          {/* Contenu principal en deux colonnes */}
          <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-12 lg:items-start place-items-center">
            {/* Colonne gauche - Carte visuelle avec badge animé */}
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
                  alt="Équipe Sophys au travail"
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
            {/* Colonne droite - Description */}
            <div className="">
              <p className="text-md text-gray-700 leading-relaxed ">
                <span className="font-semibold text-rose-600">
                  Landm&apos;Ark
                </span>{" "}
                est la filiale spécialisée de
                <span className="font-medium"> Gate Africa Group</span> dans les
                métiers de la communication, du marketing stratégique et de
                l&apos;événementiel à forte valeur ajoutée.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Alliant créativité, expertise technique et approche terrain,
                Landm&apos;Ark accompagne les entreprises et institutions dans
                la conception et la mise en œuvre de leurs stratégies de
                communication, de visibilité et de développement de marque, en
                Afrique et à l&apos;international.
              </p>
              <p className="text-gray-600 text-md leading-relaxed mb-8">
                Grâce à ses équipes expérimentées, ses équipements
                professionnels et son réseau international, Landm&apos;Ark
                propose des
                <span className="inline-flex items-center px-2 py-1 mx-1 bg-rose-100 text-rose-700 text-sm font-semibold rounded-md">
                  solutions intégrées
                </span>
                et innovantes, adaptées aux besoins des acteurs économiques
                publics et privés.
              </p>
              {/* Domaines d'intervention */}
              {/* <div className="space-y-3 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Nos domaines d'intervention :
                </h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm text-gray-600"
                    >
                      <div className="text-rose-600 bg-rose-50 p-1.5 rounded-lg">
                        {service.icon}
                      </div>
                      <span>{service.text}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Bouton d'action centré */}
              <div className="mt-10 flex gap-10 items-center">
                <button
                  onClick={handleClick}
                  className="group inline-flex text-sm items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

                <div className="">
                  <a
                    href="https://res.cloudinary.com/dikefxjpd/image/upload/v1750686126/LandMark-2k25-Gate_qmmhn1.pdf"
                    download
                    className="button_anime"
                    target="_blanck"
                    type="button"
                  >
                    <span className="button__text">
                      Télécharger la brochure
                    </span>
                    <span className="button__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 35 35"
                        id="bdd05811-e15d-428c-bb53-8661459f9307"
                        data-name="Layer 2"
                        className="svg"
                      >
                        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                        <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <AlbumLandmark />
        </div>
      </div>
    </div>
  );
}
