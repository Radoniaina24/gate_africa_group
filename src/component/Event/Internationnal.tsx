"use client";
import React, { JSX } from "react";
import { useTranslations } from "next-intl";
import { Globe, Briefcase, Award, Cpu } from "lucide-react";
import Image from "next/image";
import AlbumInternationnal from "../Health/Album/AlbumInternationnal";

const iconMap: Record<string, JSX.Element> = {
  cyan: <Briefcase className="w-5 h-5 text-cyan-300" />,
  amber: <Award className="w-5 h-5 text-amber-300" />,
  purple: <Cpu className="w-5 h-5 text-purple-300" />,
};

const EventCard = ({
  title,
  subtitle,
  image,
  description,
  subtext,
  color,
  icon,
  badge,
}: {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  subtext: string;
  color: string;
  icon: JSX.Element;
  badge: string;
}) => (
  <div
    className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-${color}-400/50 transition-all duration-300 hover:scale-105`}
  >
    <div
      className={`w-full h-48 rounded-xl mb-6 relative overflow-hidden bg-gradient-to-br from-${color}-500/10 to-${
        color === "amber" ? "orange" : color
      }-500/10`}
    >
      <Image src={image} alt={title} fill className="object-cover rounded-xl" />
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

    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
    <p className="text-gray-400 text-sm">{subtext}</p>
  </div>
);

export default function InternationnalSection() {
  const t = useTranslations("internationnal");
  const events = t.raw("events") as {
    title: string;
    subtitle: string;
    description: string;
    subtext: string;
    badge: string;
    color: string;
  }[];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 opacity-10 grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-16 leading-tight">
          {t("title")}
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t("highlight")}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          <p className="text-md text-gray-300 leading-relaxed">{t("intro")}</p>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 mb-16">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-cyan-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t("missionTitle")}
                </h3>
                <p className="text-gray-300 text-md leading-relaxed">
                  {t("missionText")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-12 text-center">
          {t("eventsTitle")}
        </h3>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard
              key={i}
              {...event}
              icon={iconMap[event.color] || <Briefcase />}
              image={
                event.color === "cyan"
                  ? "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1748861902/Candidature/carrefour-removebg-preview_20250602105817.jpg"
                  : event.color === "amber"
                  ? "https://res.cloudinary.com/dikefxjpd/image/upload/v1750575648/afrique_soir%C3%A9_xmiahr.jpg"
                  : "https://res.cloudinary.com/dikefxjpd/image/upload/v1750575920/AIS-blanc-GM_xd6qd0.jpg"
              }
            />
          ))}
        </div>

        <AlbumInternationnal />
      </div>
    </section>
  );
}
