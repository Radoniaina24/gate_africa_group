"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Cpu,
  Shield,
  Monitor,
  Zap,
  Sparkles,
  PlayCircle,
  Brain,
  Database,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const domains = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Plateformes Digitales",
    description:
      "Développement de plateformes digitales (éducation, médias, recrutement, économie sociale)",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Intelligence Artificielle",
    description:
      "Intelligence artificielle & automatisation (via notre université technologique UST-IO)",
    color: "from-purple-500 to-pink-500",
    iconBg: "bg-purple-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersécurité & Cloud",
    description: "Cybersécurité, cloud et infrastructure numérique",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500",
  },
  {
    icon: <PlayCircle className="w-8 h-8" />,
    title: "Contenus Numériques",
    description:
      "Création de contenus numériques, production audiovisuelle et médias panafricains",
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Transformation Digitale",
    description: "Transformation digitale des entreprises et administrations",
    color: "from-indigo-500 to-blue-600",
    iconBg: "bg-indigo-500",
  },
];

const projects = [
  {
    name: "GateAfri",
    subtitle: "Réseau socio-économique",
    description:
      "Le réseau panafricain pour connecter talents, entreprises et opportunités à travers le continent.",
    image:
      "https://res.cloudinary.com/dikefxjpd/image/upload/v1750660067/africagate_u18a88.jpg",
    color: "indigo",
    features: ["Réseau Social", "Opportunités", "Talents", "Continental"],
    badge: "À venir",
  },
  {
    name: "Afrimuz",
    subtitle: "Plateforme musicale",
    description:
      "Une plateforme musicale pour valoriser les artistes africains à l'échelle mondiale.",
    image:
      "https://res.cloudinary.com/dikefxjpd/image/upload/v1750660067/africamuz_lqpkh7.jpg",
    color: "fuchsia",
    features: ["Musique", "Culture", "Artistes", "International"],
    badge: "À venir",
  },
];

export default function GateAfricaDigital() {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16 ">
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <div
                className="w-[72px] h-[72px] bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-xl animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div
                className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "0.7s" }}
              >
                <Database className="w-7 h-7 text-white" />
              </div>
              <div
                className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Smartphone className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-4xl  font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 mb-8 leading-tight">
              Volet{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Numérique
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text">
                Technologie
              </span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
              Accélérer la transformation digitale de l&apos;Afrique par
              l&apos;innovation, l&apos;intelligence artificielle et les
              solutions numériques.
            </p>
          </div>
        </div>

        <div className="mb-20 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Nos domaines d&apos;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                action
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div
                key={`domain-${index}`}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/30 overflow-hidden ${
                  activeCard === index
                    ? "ring-2 ring-blue-400 ring-opacity-60"
                    : ""
                }`}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div
                  className={`w-16 h-16 ${domain.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{domain.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {domain.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Projets numériques d&apos;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                avenir
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Deux initiatives révolutionnaires en cours de développement
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 shadow-xl"
              >
                <div className="w-full h-48 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    {project.badge}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-xs font-medium "
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-400">
                    En cours de développement
                  </span>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
