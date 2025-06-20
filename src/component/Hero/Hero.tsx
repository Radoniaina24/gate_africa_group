/* eslint-disable */
import React, { useState, useEffect } from "react";
import AnimatedButton from "../Button/Button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center  overflow-hidden bg-gradient-to-br from-gray-900 via-red-950 to-black">
      {/* Enhanced Background with Multiple Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749534205/bani%C3%A8re_mvhhsk.jpg")`,
          transform: `translate(${mousePosition.x * 0.015 - 0.75}px, ${
            mousePosition.y * 0.015 - 0.75
          }px) scale(1.05)`,
        }}
      />

      <div className="relative z-20 w-full container mx-auto px-6 lg:px-12">
        <div
          className={`text-left transition-all duration-2000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {/* Enhanced Main Heading */}
          <div className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-black  leading-[0.9] tracking-tight space-y-5 ">
            <p className="block bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent hover:from-red-300 hover:via-white hover:to-red-100 transition-all duration-1000 cursor-default drop-shadow-2xl">
              ACCÉLÉRATEUR
            </p>
            <p className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent hover:from-red-600 hover:via-red-400 hover:to-red-500 transition-all duration-1000 cursor-default drop-shadow-2xl">
              DE TRANSFORMATION
            </p>
            <p className="block text-white/95 text-2xl sm:text-3xl lg:text-4xl xl:text-4xl mt-6 font-light tracking-wide">
              AU SERVICE D'UN DÉVELOPPEMENT
            </p>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold">
                INTELLIGENT,
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-500" />
            </span>
            {", "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold">
                INCLUSIF
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-500" />
            </span>
            <span className="text-white">{" ET "}</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent font-semibold">
                PÉRENNE
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-500" />
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer">
        <div className="relative flex justify-center">
          <div className="w-8 h-16 border-2 border-white/40 group-hover:border-red-400/80 rounded-full flex justify-center transition-all duration-500 backdrop-blur-sm bg-white/5">
            <div className="w-1.5 h-5 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-3 animate-bounce group-hover:from-red-300 group-hover:to-red-500 transition-colors duration-300" />
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-red-400/20 to-red-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="text-white/50 group-hover:text-red-300/80 text-sm mt-3 text-center transition-colors duration-300 tracking-wider">
          DÉFILER
        </div>
      </div>

      {/* Enhanced Keyframes */}
      <style jsx>{`
        @keyframes float-large {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-30px) rotate(5deg) scale(1.05);
          }
          66% {
            transform: translateY(-15px) rotate(-3deg) scale(0.98);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(8deg);
          }
        }

        @keyframes float-icon {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-10px) rotate(3deg) scale(1.1);
          }
          75% {
            transform: translateY(-5px) rotate(-2deg) scale(0.95);
          }
        }

        @keyframes particle-float {
          0%,
          100% {
            transform: translateY(0px) opacity(0.3);
          }
          50% {
            transform: translateY(-20px) opacity(0.8);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
