"use client";
/* eslint-disable */
import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown, ArrowRight } from "lucide-react";
import Hero from "../Hero/Hero";
import AnimatedButton from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

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
          <div className="flex justify-center items-center gap-5 h-18">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center py-2">
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749549435/logo_gate_group_pktaw2.jpg"
                alt="Gate Africa Group Logo"
                width={180}
                height={60}
                className="h-12 w-auto rounded-lg"
              />
            </div>
            <div className="text-center py-4">
              <p className="text-xl font-extrabold bg-gradient-to-r from-red-600 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-sm">
                Une vision panafricaine pour transformer <br /> l&apos;Afrique,
                secteur par secteur
              </p>
            </div>
            {/* CTA Button */}
            {/* <div className="hidden md:block">
              <a href="" download className="button_anime" type="button">
                <span className="button__text">Télécharger la brochure</span>
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
            </div> */}

            {/* Mobile menu button */}
            {/* <div className="md:hidden">
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
            </div> */}
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
            <div className="flex items-center  justify-center p-6 pt-20 border-b-2 border-red-100 bg-gradient-to-r from-red-50 to-white">
              <div className="flex items-center justify-center w-full">
                <div className="text-center">
                  <Image
                    src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749549435/logo_gate_group_pktaw2.jpg"
                    alt="Gate Africa Group Logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto rounded-lg"
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

            {/* CTA Section Mobile */}
            {/* <div className="p-6  border-t-2 border-red-100 bg-gradient-to-r from-red-50 to-white">
              <div className="flex justify-center ">
                <a href="" download className="button_anime" type="button">
                  <span className="button__text">Télécharger la brochure</span>
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
            </div> */}
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

export default Navbar;
