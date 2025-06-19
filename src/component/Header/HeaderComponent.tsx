"use client";
/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import Hero from "../Hero/Hero";
import AnimatedButton from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
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
    }, 150);
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
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-xl backdrop-blur-md bg-white/95 border-b border-red-100">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center py-2">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749549435/logo_gate_group_pktaw2.jpg"
                alt="Gate Africa Group Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <Link
                  href="#"
                  className="relative text-gray-800 hover:text-red-600 px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-lg group hover:bg-red-50"
                >
                  Accueil
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                </Link>

                {/* Dropdown Menu */}
                <div
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="relative text-gray-800 hover:text-red-600 px-5 py-3 text-sm font-semibold flex items-center transition-all duration-300 rounded-lg group hover:bg-red-50">
                    À propos
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-all duration-300 ${
                        isDropdownOpen
                          ? "rotate-180 text-red-600"
                          : "group-hover:text-red-600"
                      }`}
                    />
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                  </button>

                  {/* Dropdown Content */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-red-100 overflow-hidden transition-all duration-300 transform ${
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 visible"
                        : "opacity-0 translate-y-2 scale-95 invisible"
                    }`}
                  >
                    <div className="py-3">
                      {[
                        { name: "Qui sommes-nous?", icon: "" },
                        { name: "Carrières", icon: "" },
                        { name: "Nos comités de travail", icon: "" },
                        { name: "Conseil d'administration", icon: "" },
                        { name: "Équipe", icon: "" },
                      ].map((service, index) => (
                        <Link
                          key={service.name}
                          href="#"
                          className="flex items-center px-5 py-4 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-700 transition-all duration-300 group transform hover:translate-x-2"
                          style={{
                            animationDelay: isDropdownOpen
                              ? `${index * 50}ms`
                              : "0ms",
                            animation: isDropdownOpen
                              ? "slideInLeft 0.3s ease-out forwards"
                              : "none",
                          }}
                        >
                          <span className="text-lg mr-4 group-hover:scale-110 transition-transform duration-200">
                            {service.icon}
                          </span>
                          <span className="flex-1 font-medium">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {["Services", "Publications", "Activités"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="relative text-gray-800 hover:text-red-600 px-5 py-3 text-sm font-semibold transition-all duration-300 rounded-lg group hover:bg-red-50"
                  >
                    {item}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <AnimatedButton color="red" label="Nous contacter" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-red-600 p-3 transition-all duration-300 hover:bg-red-50 rounded-xl"
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

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 z-50 bg-white/97 backdrop-blur-xl shadow-2xl h-screen transform transition-all duration-400 ease-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header du menu mobile */}
            <div className="flex items-center justify-between p-6 pt-20 border-b-2 border-red-100 bg-gradient-to-r from-red-50 to-white">
              <div className="flex items-center justify-center w-full">
                <div className="text-center">
                  <Image
                    src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749549435/logo_gate_group_pktaw2.jpg"
                    alt="Gate Africa Group Logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-gray-500 hover:text-red-600 p-3 rounded-2xl hover:bg-red-50 transition-all duration-200 hover:rotate-90"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Navigation Links Mobile */}
            <div className="flex-1 px-8 py-8 space-y-3 overflow-y-auto flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full space-y-3">
                {[
                  { name: "Accueil", hasSubmenu: false, icon: "🏠" },
                  { name: "À propos", hasSubmenu: true, icon: "ℹ️" },
                  { name: "Services", hasSubmenu: false, icon: "🛠️" },
                  { name: "Publications", hasSubmenu: false, icon: "📚" },
                  { name: "Activités", hasSubmenu: false, icon: "🎯" },
                ].map((item, index) => (
                  <div
                    key={item.name}
                    className={`transform transition-all duration-400 ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms",
                    }}
                  >
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={toggleMobileServices}
                          className="flex items-center justify-between w-full text-gray-800 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-white px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group border border-transparent hover:border-red-200"
                        >
                          <div className="flex items-center">
                            <span className="text-xl mr-4">{item.icon}</span>
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 transition-all duration-300 ${
                              isMobileServicesOpen
                                ? "rotate-180 text-red-600"
                                : "group-hover:text-red-600"
                            }`}
                          />
                        </button>

                        {/* Sous-menu */}
                        <div
                          className={`overflow-hidden transition-all duration-400 ${
                            isMobileServicesOpen
                              ? "max-h-80 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="ml-6 mt-3 space-y-2">
                            {[
                              { name: "Qui sommes-nous?", icon: "🏢" },
                              { name: "Carrières", icon: "💼" },
                              { name: "Nos comités de travail", icon: "👥" },
                              { name: "Conseil d'administration", icon: "🎯" },
                              { name: "Équipe", icon: "⭐" },
                            ].map((service, serviceIndex) => (
                              <a
                                key={service.name}
                                href="#"
                                className={`flex items-center text-gray-600 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-white px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:translate-x-2 group border border-transparent hover:border-red-100 ${
                                  isMobileServicesOpen
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-4 opacity-0"
                                }`}
                                style={{
                                  transitionDelay: isMobileServicesOpen
                                    ? `${serviceIndex * 80}ms`
                                    : "0ms",
                                }}
                              >
                                <span className="text-base mr-3">
                                  {service.icon}
                                </span>
                                <span className="flex-1">{service.name}</span>
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 text-red-500" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href="#"
                        className="flex items-center text-gray-800 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-white px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 group transform hover:translate-x-1 border border-transparent hover:border-red-200"
                      >
                        <span className="text-xl mr-4">{item.icon}</span>
                        <span>{item.name}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section Mobile */}
            <div className="p-6 border-t-2 border-red-100 bg-gradient-to-r from-red-50 to-white">
              <div className="flex justify-center">
                <AnimatedButton color="red" label="Nous contacter" />
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
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
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
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
            rgba(220, 38, 38, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        /* Ombres professionnelles */
        .professional-shadow {
          box-shadow: 0 4px 6px -1px rgba(220, 38, 38, 0.1),
            0 2px 4px -1px rgba(220, 38, 38, 0.06);
        }
      `}</style>
    </div>
  );
};

export default NavbarComponent;
