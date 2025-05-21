"use client";
import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function VideoSection() {
  const [isOpen, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const videoId = "5G09oc8vquM";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full relative py-20 overflow-hidden">
      {/* Animated vector background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="bg-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#131722" />
              <stop offset="100%" stopColor="#232734" />
            </linearGradient>

            {/* Animation pour les cercles */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Fond de base */}
          <rect width="100%" height="100%" fill="url(#bg-gradient)" />

          {/* Cercles animés */}
          <circle
            className="animate-pulse"
            cx="10%"
            cy="20%"
            r="120"
            fill="#304B78"
            opacity="0.05"
          />
          <circle
            className="animate-pulse"
            cx="85%"
            cy="30%"
            r="180"
            fill="#304B78"
            opacity="0.07"
          />
          <circle
            className="animate-pulse"
            cx="70%"
            cy="90%"
            r="160"
            fill="#304B78"
            opacity="0.08"
          />

          {/* Lignes de connection */}
          <g opacity="0.2">
            <path
              d="M0,200 Q960,100 1920,300"
              stroke="#4A6FA5"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="15s"
                repeatCount="indefinite"
                values="M0,200 Q960,100 1920,300;
                   M0,250 Q960,150 1920,250;
                   M0,200 Q960,100 1920,300"
              />
            </path>
            <path
              d="M0,500 Q960,650 1920,550"
              stroke="#4A6FA5"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="M0,500 Q960,650 1920,550;
                   M0,550 Q960,600 1920,600;
                   M0,500 Q960,650 1920,550"
              />
            </path>
            <path
              d="M0,800 Q960,900 1920,800"
              stroke="#4A6FA5"
              strokeWidth="2"
              fill="none"
            >
              <animate
                attributeName="d"
                dur="25s"
                repeatCount="indefinite"
                values="M0,800 Q960,900 1920,800;
                   M0,850 Q960,850 1920,850;
                   M0,800 Q960,900 1920,800"
              />
            </path>
          </g>

          {/* Points lumineux */}
          <g filter="url(#glow)">
            <circle cx="20%" cy="30%" r="3" fill="#6D9BF1" opacity="0.8">
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="80%" cy="60%" r="2" fill="#6D9BF1" opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50%" cy="80%" r="4" fill="#6D9BF1" opacity="0.9">
              <animate
                attributeName="opacity"
                values="0.5;0.9;0.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="30%" cy="70%" r="2" fill="#6D9BF1" opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.3;0.7;0.3"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="70%" cy="25%" r="3" fill="#6D9BF1" opacity="0.8">
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Contenu de la section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Indian Ocean Tech Valley
          </h2>
          {/* Thumbnail & Modal Trigger */}
          <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={`https://res.cloudinary.com/dx3xhdaym/image/upload/v1736322517/trano_e304tx.jpg`}
                alt="Vidéo à la une"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                onClick={() => setOpen(true)}
                width={700}
                height={700}
              />
            </div>
            {/* Play button */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setOpen(true)}
            >
              <div className="transition-transform duration-300 transform group-hover:scale-110">
                <PlayCircle className="text-red-600 w-14 h-14 animate-pulse" />
              </div>
            </div>
          </div>
          {/* Modal Video */}
          {isClient && (
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId={videoId}
              onClose={() => setOpen(false)}
            />
          )}
          {/* Description - avec effet de verre/glassmorphism */}
          <div className="mt-10 bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl text-white font-semibold mb-2">
              Le Pôle Numérique Visionnaire de Madagascar et de l&apos;Afrique
            </h3>
            <p className="text-gray-300">
              S&apos;étendant sur 15 hectares, Indian Ocean Tech Valley est un
              projet novateur qui place Madagascar au cœur de l&apos;innovation
              numérique, de l&apos;éducation technologique et de
              l&apos;entrepreneuriat en Afrique et dans l&apos;Océan Indien.
              Bien plus qu&apos;un complexe universitaire, il combine un centre
              de formation d&apos;excellence, un incubateur de startups, et un
              hub technologique, attirant talents africains et investisseurs
              internationaux pour transformer l&apos;avenir de la région.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
