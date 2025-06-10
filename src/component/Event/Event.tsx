"use client";
/* eslint-disable */
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function App() {
  const [activeEvent, setActiveEvent] = useState(0);

  // Animation on scroll (simple version)
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate events in header
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  bg-gradient-to-br from-red-600 via-red-700 to-red-900  text-white overflow-hidden min-h-screen font-sans">
      <header className="text-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-white/20 rotate-12"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rotate-45"></div>
        </div>

        <div className="z-10 text-center px-6 ">
          {/* Main Logo/Title */}
          <div className="pt-10">
            <h1 className="text-5xl  md:text-5xl font-black leading-tight mb-6 tracking-tight bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              À la Une
            </h1>
          </div>
        </div>
        {/* Enhanced Main Content */}
      </header>
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  items-center px-5">
          {/* Enhanced Card 1 */}
          <article className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 animate-on-scroll opacity-0 translate-y-10 border-t-8 border-red-600">
            <div className="relative overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749121383/ibis_kuwrr3.jpg"
                alt="Carrefour de l'Emploi"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold">
                  ÉVÉNEMENT PHARE
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                Carrefour de l'Emploi
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="w-5 h-5 text-red-600 mr-3" />
                  <span className="font-medium">12 & 13 Septembre 2024</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <LocationIcon className="w-5 h-5 text-red-600 mr-3" />
                  <span className="font-medium">HÔTEL IBIS Antananarivo</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Le rendez-vous stratégique du recrutement international à
                Madagascar. Organisé directement par Gate Africa Group,
                l'événement réunit entreprises, institutions et talents
                qualifiés.
              </p>
            </div>
          </article>

          {/* Enhanced Card 2 */}
          <article className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 animate-on-scroll opacity-0 translate-y-10 border-t-8 border-red-600">
            <div className="relative overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137158/conference_3_vqnzs9.jpg"
                alt="Salon des Universités"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-bold">
                  FORMATION
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                Salon des Universités
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="w-5 h-5 text-red-600 mr-3" />
                  <span className="font-medium">30 & 31 Août 2024</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <LocationIcon className="w-5 h-5 text-red-600 mr-3" />
                  <span className="font-medium">
                    Membres Gate Group International
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Un rendez-vous dédié à la découverte des filières et formations
                proposées par l'ensemble des établissements universitaires du
                groupe. Deux journées d'échanges et d'orientation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

// --- Enhanced SVG Icons ---

function CalendarIcon({ className = "w-5 h-5 text-white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon({ className = "w-5 h-5 text-white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

// Add custom CSS animations
// const style = document.createElement("style");
// style.textContent = `
//   @keyframes spin-slow {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//   }
//   .animate-spin-slow {
//     animation: spin-slow 20s linear infinite;
//   }
// `;
// document.head.appendChild(style);
