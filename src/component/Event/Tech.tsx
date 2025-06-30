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
import { useTranslations } from "next-intl";

interface Domain {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconBg: string;
}

interface Project {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  features: string[];
  badge: string;
}

export default function GateAfricaDigital() {
  const t = useTranslations("gateAfricaDigital");
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Données statiques en partie dynamiques via next-intl
  const domains: Domain[] = [
    {
      icon: <Monitor className="w-8 h-8" aria-hidden="true" />,
      title: t("domains.0.title"),
      description: t("domains.0.description"),
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500",
    },
    {
      icon: <Brain className="w-8 h-8" aria-hidden="true" />,
      title: t("domains.1.title"),
      description: t("domains.1.description"),
      color: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-500",
    },
    {
      icon: <Shield className="w-8 h-8" aria-hidden="true" />,
      title: t("domains.2.title"),
      description: t("domains.2.description"),
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-500",
    },
    {
      icon: <PlayCircle className="w-8 h-8" aria-hidden="true" />,
      title: t("domains.3.title"),
      description: t("domains.3.description"),
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500",
    },
    {
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
      title: t("domains.4.title"),
      description: t("domains.4.description"),
      color: "from-indigo-500 to-blue-600",
      iconBg: "bg-indigo-500",
    },
  ];

  // Projets (exemple ici statique, tu peux aussi externaliser / traduire)
  const projects: Project[] = t.raw("projects");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      aria-label={t("title")}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden py-12"
    >
      {/* Background animation */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-8">
              {[
                {
                  Icon: Code,
                  bg: "from-blue-500 to-purple-600",
                  size: "w-16 h-16",
                },
                {
                  Icon: Cpu,
                  bg: "from-purple-500 to-pink-600",
                  size: "w-14 h-14",
                },
                {
                  Icon: Sparkles,
                  bg: "from-indigo-500 to-cyan-600",
                  size: "w-[72px] h-[72px]",
                },
                {
                  Icon: Database,
                  bg: "from-cyan-500 to-blue-600",
                  size: "w-14 h-14",
                },
                {
                  Icon: Smartphone,
                  bg: "from-green-500 to-emerald-600",
                  size: "w-16 h-16",
                },
              ].map(({ Icon, bg, size }, idx) => (
                <div
                  key={idx}
                  className={`${size} bg-gradient-to-br ${bg} rounded-2xl flex items-center justify-center shadow-lg animate-float`}
                  style={{ animationDelay: `${idx * 0.3}s` }}
                  aria-hidden="true"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>

            <h1 className="text-4xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 mb-8 leading-tight">
              {t.rich("title", {
                num: (children) => (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    {children}
                  </span>
                ),
                tech: (children) => (
                  <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text">
                    {children}
                  </span>
                ),
              })}
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-12">
              {t("description")}
            </p>
          </div>
        </header>

        {/* Domaines */}
        <section aria-labelledby="domains-title" className="mb-20">
          <h2
            id="domains-title"
            className="text-3xl font-bold text-slate-900 text-center mb-6"
          >
            {t("domainsTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <article
                key={index}
                tabIndex={0}
                onFocus={() => setActiveCard(index)}
                onBlur={() => setActiveCard(null)}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl transition-all duration-500 border border-white/30 overflow-hidden cursor-pointer
                  ${
                    activeCard === index
                      ? "ring-2 ring-blue-400 ring-opacity-60 hover:-translate-y-2 hover:shadow-2xl"
                      : ""
                  }
                `}
                aria-describedby={`domain-desc-${index}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  aria-hidden="true"
                ></div>

                <div
                  className={`w-16 h-16 ${domain.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{domain.icon}</div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {domain.title}
                </h3>

                <p
                  id={`domain-desc-${index}`}
                  className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                >
                  {domain.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Projets */}
        <section aria-labelledby="projects-title" className="mb-20">
          <h2
            id="projects-title"
            className="text-3xl font-bold text-slate-900 text-center mb-6"
          >
            {t("projectsTitle")}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto text-center mb-6">
            {t("projectsDescription")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <article
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 shadow-xl cursor-default"
                aria-labelledby={`project-title-${index}`}
              >
                <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                  <span className="absolute bottom-4 left-4 text-white text-sm font-bold">
                    {project.badge}
                  </span>
                </div>

                <div className="mb-6">
                  <h3
                    id={`project-title-${index}`}
                    className="text-2xl font-bold text-red-400 mb-1"
                  >
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
                  {project.features.map((feature, fIndex) => (
                    <span
                      key={fIndex}
                      className="px-4 py-2 bg-white text-gray-800 rounded-full text-xs font-medium select-none"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse inline-block" />
                  <span className="text-sm font-semibold text-slate-400">
                    {t("inDevelopment")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Animation float */}
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
    </section>
  );
}
