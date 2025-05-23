"use client";
import React from "react";
import Image from "next/image";
import ContactItems from "./ContactItems";
import FormContact from "./Form";

const ContactForm = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden">
      {/* Background Pattern Design - Attractif pour les clients */}
      <div className="absolute inset-0 z-0">
        {/* Gradient de base moderne */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30"></div>

        {/* Pattern hexagonal moderne */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 200 200"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Pattern hexagonal */}
              <pattern
                id="hexagon"
                width="40"
                height="35"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="20,5 30,15 30,25 20,35 10,25 10,15"
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.2)"
                  strokeWidth="0.8"
                />
              </pattern>

              {/* Pattern de lignes diagonales */}
              <pattern
                id="diagonals"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,30 L30,0 M-5,5 L5,-5 M25,35 L35,25"
                  stroke="rgba(236, 72, 153, 0.1)"
                  strokeWidth="1"
                />
              </pattern>

              {/* Pattern de cercles connectés */}
              <pattern
                id="network"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="25" cy="25" r="2" fill="rgba(16, 185, 129, 0.3)" />
                <circle cx="0" cy="0" r="1" fill="rgba(16, 185, 129, 0.2)" />
                <circle cx="50" cy="50" r="1" fill="rgba(16, 185, 129, 0.2)" />
                <line
                  x1="25"
                  y1="25"
                  x2="0"
                  y2="0"
                  stroke="rgba(16, 185, 129, 0.15)"
                  strokeWidth="0.5"
                />
                <line
                  x1="25"
                  y1="25"
                  x2="50"
                  y2="50"
                  stroke="rgba(16, 185, 129, 0.15)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>

            <rect width="100%" height="60%" fill="url(#hexagon)" />
            <rect width="100%" height="100%" fill="url(#diagonals)" />
            <rect width="100%" height="40%" y="60%" fill="url(#network)" />
          </svg>
        </div>

        {/* Formes géométriques modernes flottantes */}
        <div className="absolute top-20 left-16 w-40 h-40 bg-gradient-to-br from-violet-400/15 to-purple-600/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-12 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rotate-45 blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-gradient-to-br from-emerald-400/25 to-teal-600/25 rounded-xl rotate-12 blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-32 bg-gradient-to-br from-pink-400/15 to-rose-600/15 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Lignes de connexion subtiles */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M20,10 Q50,30 80,20 T90,60"
            fill="none"
            stroke="url(#connectionGradient)"
            strokeWidth="0.5"
            className="animate-pulse"
          />
          <path
            d="M10,80 Q30,50 60,70 T90,40"
            fill="none"
            stroke="url(#connectionGradient)"
            strokeWidth="0.5"
            className="animate-pulse delay-1000"
          />
          <defs>
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
              <stop offset="50%" stopColor="rgba(236, 72, 153, 0.4)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        {/* En-tête avec titre attractif */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Parlons de Votre Projet
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transformons vos idées en réalité. Notre équipe d&apos;experts est
            prête à vous accompagner dans la réussite de votre projet.
          </p>

          {/* Indicateurs de confiance */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
              <span>Consultation gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700"></div>
              <span>Devis personnalisé</span>
            </div>
          </div>
        </div>

        {/* Grille principale */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Formulaire de contact avec style amélioré */}
          <div className="relative">
            {/* Arrière-plan décoratif pour le formulaire */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <FormContact />
            </div>
          </div>

          {/* Image illustrative avec effets améliorés */}
          <div className="relative">
            {/* Arrière-plan décoratif pour l'image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747658146/2149854953_gmhi5v.jpg"
                alt="Équipe professionnelle prête à vous accompagner dans vos projets"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Overlay subtil pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Badge de confiance flottant */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Expert Certifié</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Contact Items avec espacement amélioré */}
        <div className="mt-20">
          <ContactItems />
        </div>
      </div>

      {/* Effet de parallaxe subtil */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default ContactForm;
