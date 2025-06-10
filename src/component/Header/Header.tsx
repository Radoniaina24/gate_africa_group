"use client";
/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import Hero from "../Hero/Hero";
import AnimatedButton from "../Button/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef<any>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Gestion des événements de survol pour le dropdown desktop
  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // Délai pour éviter la fermeture accidentelle
  };

  // Nettoyage du timeout lors du démontage
  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50  shadow-lg backdrop-blur-sm bg-white/90">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="text-center px-4 transform transition-transform duration-300 hover:scale-105">
                <h1 className="text-xl sm:text-xl md:text-xl lg:text-xl font-extrabold tracking-wide  leading-tight">
                  <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
                    Gate
                  </span>{" "}
                  <span className="text-black">Africa</span>{" "}
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-400 bg-clip-text text-transparent font-medium tracking-widest text-sm align-super">
                    Group
                  </span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block  ">
              <div className="ml-10 flex items-baseline space-x-1">
                <a
                  href="#"
                  className="relative text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg  group"
                >
                  Accueil
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>

                {/* Dropdown Menu avec animations */}
                <div
                  className="relative "
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="relative  text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium flex items-center transition-all duration-300 rounded-lg  group">
                    À propos
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-all duration-300 ${
                        isDropdownOpen
                          ? "rotate-180 text-blue-600"
                          : "group-hover:text-blue-600"
                      }`}
                    />
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </button>

                  {/* Dropdown avec animation */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform ${
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 visible"
                        : "opacity-0 translate-y-2 scale-95 invisible"
                    }`}
                  >
                    <div className="py-2">
                      {[
                        { name: "Qui sommes-nous?", icon: "" },
                        { name: "Carrières", icon: "" },
                        { name: "Nos comités de travail", icon: "" },
                        { name: "Conseil d’administration", icon: "" },
                        { name: "Équipe", icon: "" },
                      ].map((service, index) => (
                        <a
                          key={service.name}
                          href="#"
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 group transform hover:translate-x-1"
                          style={{
                            animationDelay: isDropdownOpen
                              ? `${index * 50}ms`
                              : "0ms",
                            animation: isDropdownOpen
                              ? "slideInLeft 0.3s ease-out forwards"
                              : "none",
                          }}
                        >
                          <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                            {service.icon}
                          </span>
                          <span className="flex-1">{service.name}</span>
                          {/* <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" /> */}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {["Services", "Publications", "Activités", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="relative text-gray-900 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg  group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <AnimatedButton color="blue" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 hover:text-blue-600 p-2 transition-all duration-300 hover:bg-blue-50 rounded-lg"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-3 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 top-3" : "top-5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - Plein écran */}
        <div
          className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-lg shadow-2xl h-screen transform transition-all duration-300 ease-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header du menu plein écran */}
            <div className="flex items-center justify-between p-6 pt-20 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center justify-center w-full">
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide  leading-tight">
                    <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
                      Gate
                    </span>{" "}
                    <span className="text-black">Africa</span>{" "}
                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-400 bg-clip-text text-transparent font-medium tracking-widest text-lg align-super">
                      Group
                    </span>
                  </h1>
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 p-3 rounded-xl hover:bg-white/80 transition-all duration-200 hover:rotate-90"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Navigation Links avec animations en cascade - Plein écran */}
            <div className="flex-1 px-8 py-12 space-y-4 overflow-y-auto flex flex-col justify-center">
              <div className="max-w-md mx-auto w-full space-y-4">
                {[
                  { name: "Accueil", hasSubmenu: false },

                  { name: "À propos", hasSubmenu: true },
                  { name: "Services", hasSubmenu: false },
                  { name: "Publications", hasSubmenu: false },
                  { name: "Activités", hasSubmenu: false },
                  { name: "Contact", hasSubmenu: false },
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className={`transform transition-all duration-300 ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={toggleMobileServices}
                          className="flex items-center justify-between w-full text-gray-900 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-all duration-300 ${
                              isMobileServicesOpen
                                ? "rotate-180 text-blue-600"
                                : "group-hover:text-blue-600"
                            }`}
                          />
                        </button>

                        {/* Sous-menu Services avec animation */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isMobileServicesOpen
                              ? "max-h-60 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-6 mt-3 space-y-2">
                            {[
                              "Qui sommes-nous?",
                              "Carrières",
                              "Nos comités de travail",
                              "Conseil d’administration",
                              "Équipe",
                            ].map((service, serviceIndex) => (
                              <a
                                key={service}
                                href="#"
                                className={`flex items-center text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                                  isMobileServicesOpen
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-4 opacity-0"
                                }`}
                                style={{
                                  transitionDelay: isMobileServicesOpen
                                    ? `${serviceIndex * 100}ms`
                                    : "0ms",
                                }}
                              >
                                <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                                {service}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href="#"
                        className="flex items-center text-gray-900 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group transform hover:translate-x-1"
                      >
                        <span>{item.name}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section plein écran */}
            <div className="p-5   border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex justify-center">
                <AnimatedButton color="blue" />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay amélioré */}
        {isMenuOpen && (
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={toggleMenu}
          ></div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        /* Animation pour les liens de navigation */
        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .nav-link:hover::before {
          left: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
