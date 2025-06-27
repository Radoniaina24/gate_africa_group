"use client";

import Image from "next/image";

import React, { useEffect } from "react";

type EventData = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  label: string;
  link?: string; // Ajout du lien optionnel
};

const events: EventData[] = [
  {
    title: "Carrefour de l'Emploi",
    date: "19 & 20 Septembre 2025",
    location: "HÔTEL Carlton Antananarivo",
    description:
      "Le rendez-vous stratégique du recrutement international à Madagascar. Organisé par Gate Africa Group, l'événement réunit entreprises, institutions et talents qualifiés.",
    imageUrl:
      "https://res.cloudinary.com/dikefxjpd/image/upload/v1751003214/event_jp92ix_1_dohm0e.jpg",
    label: "ÉVÉNEMENT",
    link: "https://www.carrefour-emploi.com", // Exemple de lien
  },
  {
    title: "Salon des Universités",
    date: "30 & 31 Août 2025",
    location: "HÔTEL Ibis Antananarivo",
    description:
      "Un rendez-vous dédié à la découverte des filières et formations proposées par les établissements universitaires du groupe. Deux journées d'échanges et d'orientation.",
    imageUrl:
      "https://res.cloudinary.com/dikefxjpd/image/upload/v1751003106/conference_1_jgkb0o.jpg",
    label: "ÉVÉNEMENT",
    // link: "", // Exemple de lien
  },
];

export default function FeaturedEvents() {
  // Auto-rotate header title

  // Animate on scroll
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-br py-20 from-red-600 via-red-700 to-red-900 text-white overflow-hidden font-sans">
      <header className="text-center relative z-10 ">
        <h1 className="text-4xl mb-5 font-black leading-tight bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
          À la Une
        </h1>
        <BackgroundVisuals />
      </header>

      <main className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div className=" -mb-20 py-10">
            <Image
              src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750772443/event_jp92ix.jpg"
              alt="event"
              width={500}
              height={500}
              className="rounded-lg w-full h-[480px] "
            />
          </div> */}
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
}

function EventCard({
  title,
  date,
  location,
  description,
  imageUrl,
  label,
  link,
}: EventData) {
  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border-t-8 border-red-600 max-w-4xl mx-auto">
      {/* Image visible en entier */}
      <div className="relative w-full bg-black">
        <div className="relative w-full h-64 bg-white">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain  w-full h-full"
          />
        </div>

        {/* Texte par-dessus l’image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 text-white z-10">
          <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-semibold">
            {label}
          </span>
        </div>
      </div>

      {/* Contenu texte */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>

        <div className="space-y-2 mb-4 text-gray-600 text-sm">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 text-red-600 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <LocationIcon className="w-4 h-4 text-red-600 mr-2" />
            <span>{location}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {link && (
          <div className="flex justify-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 group/btn"
            >
              En savoir plus
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function BackgroundVisuals() {
  return (
    <>
      {/* Blur Balls */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/30 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-white/20 rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rotate-45" />
      </div>
    </>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
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

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
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

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}
