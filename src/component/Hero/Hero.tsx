/* eslint-disable */
import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import AnimatedButton from "../Button/Button";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingElements = [
    { icon: Sparkles, delay: 0, x: 20, y: 20 },
    { icon: Zap, delay: 1000, x: 80, y: 30 },
    { icon: Globe, delay: 2000, x: 70, y: 70 },
    { icon: ArrowRight, delay: 1500, x: 15, y: 80 },
  ];

  return (
    <section className="relative pt-30 h-screen flex items-center justify-center overflow-hidden">
      {/* Clean Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749534205/bani%C3%A8re_mvhhsk.jpg")`,
          transform: `translate(${mousePosition.x * 0.02 - 1}px, ${
            mousePosition.y * 0.02 - 1
          }px) scale(1.02)`,
        }}
      ></div>

      {/* Animated Geometric Shapes */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-full blur-3xl"
          style={{
            top: "10%",
            left: "10%",
            animation: "float 6s ease-in-out infinite",
            transform: `translate(${mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.05
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-red-600/30 to-red-400/30 rounded-full blur-3xl"
          style={{
            bottom: "20%",
            right: "10%",
            animation: "float 8s ease-in-out infinite reverse",
            transform: `translate(${-mousePosition.x * 0.03}px, ${
              -mousePosition.y * 0.03
            }px)`,
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-white/20 to-red-200/20 rounded-full blur-3xl"
          style={{
            top: "60%",
            left: "70%",
            animation: "float 7s ease-in-out infinite",
            transform: `translate(${mousePosition.x * 0.04}px, ${
              mousePosition.y * 0.04
            }px)`,
          }}
        ></div>
      </div> */}

      {/* Floating Icons */}
      {floatingElements.map((element, index) => {
        const IconComponent = element.icon;
        return (
          <div
            key={index}
            className="absolute text-white/30 animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float 4s ease-in-out infinite`,
              animationDelay: `${element.delay}ms`,
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          >
            <IconComponent className="w-8 h-8" />
          </div>
        );
      })}

      {/* Main Content */}
      <div className="relative z-20 w-full  px-6 lg:px-12">
        <div
          className={`text-left transition-all duration-2000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-black text-white mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent hover:from-red-400 hover:to-white transition-all duration-1000 cursor-default">
              Transformer
            </span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent hover:from-red-600 hover:to-red-400 transition-all duration-1000 cursor-default">
              l&apos;Afrique
            </span>
            <span className="block text-white/90 text-4xl sm:text-5xl lg:text-5xl mt-4">
              grâce à l&apos;innovation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-red-50 mb-12 max-w-4xl leading-relaxed font-light">
            Notre mission est de{" "}
            <span className="text-red-300 font-semibold">
              catalyser le changement positif
            </span>{" "}
            à travers la technologie et l&apos;entrepreneuriat. Solutions
            digitales innovantes pour transformer votre vision en réalité.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-16">
            <AnimatedButton
              label="Télécharger la brochure"
              color="blue"
              size="lg"
            />

            <AnimatedButton label="Qui sommes nous?" color="red" size="lg" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-14 border-2 border-white/60 rounded-full flex justify-center cursor-pointer hover:border-white transition-colors duration-300">
          <div className="w-1.5 h-4 bg-gradient-to-b from-red-400 to-red-600 rounded-full mt-3 animate-bounce"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 text-center">Défiler</p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
