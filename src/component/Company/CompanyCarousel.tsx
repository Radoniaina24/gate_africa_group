"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const CompanyCarousel = ({
  allCompany,
  title = "Nos partenaires d'exception",
}: {
  allCompany: any;
  title: any;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Nombre d'éléments à afficher en fonction de la taille d'écran
  const [itemsToShow, setItemsToShow] = useState(3);

  // Mettre à jour le nombre d'éléments à afficher en fonction de la taille de l'écran
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

    // Initialiser
    handleResize();

    // Ajouter l'écouteur d'événements
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(allCompany.length / itemsToShow);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === totalPages - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, totalPages]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalPages - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, totalPages]);

  // Autoscroll toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Gestion des événements tactiles
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

  // Calculer les indices des éléments à afficher
  const visibleCompanies = () => {
    const startIdx = currentIndex * itemsToShow;
    return allCompany.slice(startIdx, startIdx + itemsToShow);
  };

  return (
    <section className="relative w-full py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <div className="mb-6 sm:mb-0">
            <span className=" font-medium text-lg uppercase tracking-wider">
              Gate Africa Group
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 group"
              aria-label="Précédent"
            >
              <ChevronLeft
                size={24}
                className="text-gray-600 group-hover:text-blue-600 transition-colors"
              />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 group"
              aria-label="Suivant"
            >
              <ChevronRight
                size={24}
                className="text-gray-600 group-hover:text-blue-600 transition-colors"
              />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out py-2 gap-6"
            style={{ transform: `translateX(0%)` }}
          >
            {visibleCompanies().map((company: any, index: any) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 h-full border border-gray-100">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={company.image}
                      alt={company.title}
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      fill
                      sizes="(max-width: 500px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                        hoveredCard === index ? "opacity-70" : "opacity-0"
                      }`}
                    ></div>
                    {company.url && hoveredCard === index && (
                      <div className="absolute bottom-4 right-4">
                        <a
                          href={`#${company.url}`}
                          className="p-2 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 shadow-md"
                          // target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} className="text-blue-600" />
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-left">
                    <div className="flex items-center mb-3">
                      {company.badge && (
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 mr-2">
                          {company.badge}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900">
                        {company.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {company.description}
                    </p>
                    {company.tags && (
                      <div className="flex flex-wrap gap-2">
                        {company.tags.map((tag: any, idx: any) => (
                          <span
                            key={idx}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs de page */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCarousel;
