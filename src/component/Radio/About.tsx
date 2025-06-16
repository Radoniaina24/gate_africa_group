"use client";
import React from "react";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Galerie from "./Galerie";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Bloc texte */}
      <motion.div className="md:col-span-2  p-6 rounded-xl bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="rounded-2xl p-5 sm:p-10 ">
            <div className=" flex gap-3 text-md font-semibold  text-white leading-relaxed ">
              <div>
                <CheckCircle className="text-red-500" />{" "}
              </div>
              Écoutez de la bonne musique, vos émissions préférées et accédez à
              des contenus éducatifs de qualité.
            </div>
            <div className=" flex gap-3 text-md font-semibold leading-relaxed">
              <div>
                <CheckCircle className="text-red-500" />
              </div>
              E-media FM : la radio économique et éducative numéro 1 à
              Madagascar, écoutée dans plus de 5 grandes régions du pays.
            </div>
            <div className="mt-4">
              <a
                href="https://gateofafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r text-sm from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-5 flex justify-center items-center py-3 rounded-xl font-semibold transition-all duration-300 transform  hover:shadow-2xl  group"
              >
                Ecouter la radio
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>{" "}
          </div>
          <StatsSection />
        </div>
      </motion.div>

      <Galerie />
    </section>
  );
}

interface StatCardProps {
  title: string;
  subtitle: string;
}

const StatCard = ({ title, subtitle }: StatCardProps) => (
  <div className="bg-white rounded-xl p-6 border border-red-200 shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-red-400">
    <div className="text-4xl font-extrabold text-red-600 mb-2">{title}</div>
    <div className="text-sm font-medium text-gray-800">{subtitle}</div>
  </div>
);

function StatsSection() {
  const stats = [
    { title: "#1", subtitle: "Radio Économique" },
    { title: "5+", subtitle: "Grandes Régions" },
    { title: "📻", subtitle: "Contenu Éducatif" },
  ];

  return (
    <div className="flex items-center">
      <div className="hidden xl:block">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} title={stat.title} subtitle={stat.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
}
