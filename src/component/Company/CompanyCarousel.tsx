"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  ArrowUpRight,
} from "lucide-react";

const CompanyCarousel = ({ allCompany }: { allCompany: any; title?: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  // Particules avec positions fixes pour éviter l'hydration mismatch
  const particles = [
    { left: 10, top: 20, delay: 0, duration: 4 },
    { left: 80, top: 10, delay: 0.5, duration: 5 },
    { left: 30, top: 70, delay: 1, duration: 4.5 },
    { left: 70, top: 60, delay: 1.5, duration: 4.2 },
    { left: 20, top: 40, delay: 2, duration: 4.8 },
    { left: 90, top: 80, delay: 2.5, duration: 4.3 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    if (isMounted) {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMounted]);

  const totalPages = Math.ceil(allCompany.length / itemsToShow);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating, totalPages]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalPages - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 600);
    }
  }, [isAnimating, totalPages]);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isMounted]);

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const visibleCompanies = () => {
    const startIdx = currentIndex * itemsToShow;
    return allCompany.slice(startIdx, startIdx + itemsToShow);
  };

  if (!isMounted) {
    // Rendu de base pendant l'hydratation
    return (
      <section className="relative w-full py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6  relative z-10">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Fond avec gradient animé */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(255,154,158,0.1),transparent_50%)]"></div>
      </div>

      <section className="relative w-full pb-20 overflow-hidden">
        {/* Particules flottantes avec positions fixes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            >
              <Sparkles size={20} className="text-blue-400" />
            </div>
          ))}
        </div>

        <div className=" px-4 sm:px-6 lg:px-8 relative z-10">
          {/* En-tête premium */}

          {/* Contrôles navigation premium */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <button
              onClick={prevSlide}
              className="group relative p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-white/90"
              aria-label="Précédent"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ChevronLeft
                size={24}
                className="text-gray-700 group-hover:text-blue-600 transition-all duration-300 relative z-10"
              />
            </button>

            {/* Indicateurs de page premium */}
            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(idx);
                      setTimeout(() => setIsAnimating(false), 600);
                    }
                  }}
                  className={`relative transition-all duration-500 ${
                    currentIndex === idx
                      ? "w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                      : "w-3 h-3 bg-gray-300/60 hover:bg-gray-400/80 rounded-full hover:scale-125"
                  }`}
                  aria-label={`Page ${idx + 1}`}
                >
                  {currentIndex === idx && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-50"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="group relative p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-white/90"
              aria-label="Suivant"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ChevronRight
                size={24}
                className="text-gray-700 group-hover:text-blue-600 transition-all duration-300 relative z-10"
              />
            </button>
          </div>

          {/* Carrousel premium */}
          <div
            className="overflow-hidden py-5"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-all duration-700 ease-out gap-5"
              style={{ transform: `translateX(0%)` }}
            >
              {visibleCompanies().map((company: any, index: any) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transition-all duration-700"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-3xl transition-all duration-700 h-full border border-white/20 hover:border-white/40 transform hover:-translate-y-4 hover:rotate-1">
                    {/* Badge premium flottant - plus compact */}
                    {company.badge && (
                      <div className="absolute top-3 left-3 z-20">
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                          <Award size={10} />
                          {company.badge}
                        </div>
                      </div>
                    )}

                    {/* Image avec effets - taille réduite */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={company.image}
                        alt={company.title}
                        className="object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2"
                        fill
                        sizes="(max-width: 500px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Overlay très léger pour le texte */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Bouton d'action flottant - plus petit */}
                      {company.url && (
                        <div
                          className={`absolute top-3 left-3 transition-all duration-500 ${
                            hoveredCard === index
                              ? "scale-100 opacity-100"
                              : "scale-0 opacity-0"
                          }`}
                        >
                          <a
                            href={`https://www.gateafricagroup.com/#${company.url}`}
                            className="group/btn p-2 bg-white/90 hover:bg-white rounded-xl flex items-center justify-center transform transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm"
                            rel="noopener noreferrer"
                            target="_blanck"
                          >
                            <ArrowUpRight
                              size={16}
                              className="text-blue-600 group-hover/btn:rotate-45 transition-transform duration-300"
                            />
                          </a>
                        </div>
                      )}

                      {/* Titre en overlay - plus compact */}
                      <div
                        className={`absolute bottom-3 left-3 right-3 transition-all duration-500 ${
                          hoveredCard === index
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0"
                        }`}
                      >
                        <h3 className="text-lg font-bold text-white drop-shadow-lg">
                          {company.title}
                        </h3>
                      </div>
                    </div>

                    {/* Contenu de la carte  */}
                    <div className="p-5 bg-white">
                      <div className="flex items-start justify-center mb-3">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                          {company.title}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                        {company.description}
                      </p>

                      {/* Tags stylisés - plus compacts */}
                      {company.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {company.tags
                            .slice(0, 3)
                            .map((tag: any, idx: any) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          {company.tags.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-200 text-gray-500 rounded-full">
                              +{company.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bordure colorée simple au hover */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </section>
    </>
  );
};

export default CompanyCarousel;
