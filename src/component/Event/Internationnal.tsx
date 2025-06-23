// components/InternationnalSection.tsx
import React from "react";
import { Globe, Briefcase, Award, Cpu } from "lucide-react";
import Image from "next/image";
import AlbumInternationnal from "../Health/Album/AlbumInternationnal";

// Données des événements
const events = [
  {
    title: "Carrefour de l'Emploi",
    subtitle: "Édition Madagascar",
    image:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748861902/Candidature/carrefour-removebg-preview_20250602105817.jpg",
    description:
      "Forum international du recrutement, mettant en relation les talents africains avec les employeurs du monde entier.",
    subtext:
      "Il favorise la mobilité professionnelle, la mise en valeur des compétences locales et la création d'opportunités à l'étranger.",
    color: "cyan",
    icon: <Briefcase className="w-5 h-5 text-cyan-300" />,
    badge: "MADAGASCAR",
    cta: "En savoir plus",
  },
  {
    title: "La Grande Soirée de l'Afrique",
    subtitle: "Édition Madagascar 2025",
    image:
      "https://res.cloudinary.com/dikefxjpd/image/upload/v1750575648/afrique_soir%C3%A9_xmiahr.jpg",
    description:
      "Un événement culturel, économique et institutionnel qui célèbre l'excellence africaine.",
    subtext: "Une soirée de rayonnement continental.",
    color: "amber",
    icon: <Award className="w-5 h-5 text-amber-300" />,
    badge: "MADAGASCAR 2025",
    cta: "En savoir plus",
  },
  {
    title: "Africa IT Summit",
    subtitle: "Édition Maurice (2026)",
    image:
      "https://res.cloudinary.com/dikefxjpd/image/upload/v1750575920/AIS-blanc-GM_xd6qd0.jpg",
    description:
      "Le sommet panafricain dédié à la transformation digitale, à l'IA et à l'innovation technologique.",
    subtext:
      "Réunira décideurs, institutions, entreprises tech et partenaires autour des enjeux numériques.",
    color: "purple",
    icon: (
      <>
        <Cpu className="w-5 h-5 text-purple-300" />
      </>
    ),
    badge: "MAURICE 2026",
    cta: "Bientôt disponible",
  },
];

const EventCard = ({
  title,
  subtitle,
  image,
  description,
  subtext,
  color,
  icon,
  badge,
}: (typeof events)[0]) => {
  return (
    <div
      className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-${color}-400/50 transition-all duration-300 hover:scale-105`}
    >
      <div
        className={`w-full h-48 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-${color}-500/10 to-${
          color === "amber" ? "orange" : color
        }-500/10`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white text-sm font-bold">
          {badge}
        </div>
      </div>

      <div className="flex items-center gap-3 mb-6 relative">
        <div
          className={`p-3 bg-gradient-to-br from-${color}-500/30 to-${
            color === "amber" ? "orange" : color
          }-500/30 rounded-xl border border-${color}-400/30 relative`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br from-${color}-500/20 to-${
              color === "amber" ? "orange" : color
            }-500/20 rounded-xl blur-lg`}
          />
          <div className="relative">{icon}</div>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white">{title}</h4>
          <p className={`text-${color}-300 text-sm`}>{subtitle}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4  text-sm leading-relaxed">
        {description}
      </p>
      <p className="text-gray-400 text-sm mb-6">{subtext}</p>

      {/* <div
        className={`flex items-center text-${color}-400 group-hover:text-${color}-300 transition-colors`}
      >
        <span className="text-sm font-medium">{cta}</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </div> */}
    </div>
  );
};

const InternationnalSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[
          ["10%", "10%", "0s"],
          ["20%", "80%", "1s"],
          ["60%", "15%", "2s"],
          ["80%", "70%", "3s"],
          ["30%", "60%", "4s"],
        ].map(([top, left, delay], i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-70"
            style={{ top, left, animationDelay: delay }}
          />
        ))}

        {/* Grid */}
        <div className="absolute inset-0 opacity-10 grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-16 leading-tight">
          Volet événementiel
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            international
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          <div className="">
            <p className="text-md text-gray-300 leading-relaxed">
              Créer des plateformes de rencontre, d&apos;innovation et
              d&apos;influence à l&apos;échelle africaine et mondiale. Gate
              Africa Group conçoit et organise des événements à fort impact,
              destinés à connecter les talents, les entreprises, les
              institutions et les acteurs du changement en Afrique et à
              l&apos;international.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-16">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-cyan-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Notre Mission
                </h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  Nos événements visent à renforcer les synergies entre secteurs
                  stratégiques, promouvoir la coopération et accélérer le
                  développement économique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-12 text-center">
          Nos rendez-vous phares
        </h3>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        <AlbumInternationnal />
      </div>
    </section>
  );
};

export default InternationnalSection;
