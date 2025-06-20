"use client";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Fonction pour gérer le scroll et calculer le progrès
  const toggleVisibility = () => {
    const scrolled = window.pageYOffset;
    const maxHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;

    setScrollProgress(progress);

    if (scrolled > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour scroller vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-8 right-8 z-50 
        w-16 h-16 
        transition-all duration-300 ease-in-out 
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      {/* Barre de progression circulaire */}
      <svg
        className="absolute inset-0 w-16 h-16 transform -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Cercle de fond */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="transparent"
          className="drop-shadow-sm"
        />
        {/* Cercle de progression */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={`${2 * Math.PI * 45 * (1 - scrollProgress / 100)}`}
          className="transition-all duration-300 ease-out drop-shadow-md"
        />
        {/* Définition du gradient */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Le bouton */}
      <button
        onClick={scrollToTop}
        className={`
            absolute inset-1 
            w-14 h-14 
           
            text-white 
            rounded-full 
            shadow-2xl 
            hover:shadow-purple-500/25 
            transition-all duration-300 ease-in-out 
            transform hover:scale-105 
            backdrop-blur-sm 
            group
          `}
        aria-label="Retour en haut"
      >
        {/* Icône flèche vers le haut */}
        <svg
          className="w-6 h-6 mx-auto text-red-600 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 15l7-7 7 7"
          />
        </svg>

        {/* Effet de ripple au hover */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        {/* Bordure animée */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-colors duration-300"></div>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
