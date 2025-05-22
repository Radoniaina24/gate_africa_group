import React from "react";
import { Clock, Shield, Target, Zap } from "lucide-react";

export default function Benefit() {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Sécurité Garantie",
      description:
        "Véhicules certifiés avec maintenance rigoureuse et assurance premium incluse.",
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Disponibilité 24/7",
      description:
        "Service client permanent et intervention rapide partout en France.",
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: "Solutions Sur Mesure",
      description:
        "Chaque projet est unique, nos solutions s'adaptent à vos besoins spécifiques.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Réactivité Express",
      description:
        "Réservation instantanée et mise à disposition en moins de 2 heures.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
        >
          <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {advantage.icon}
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-3 text-center">
            {advantage.title}
          </h4>
          <p className="text-slate-600 text-sm text-center leading-relaxed">
            {advantage.description}
          </p>
        </div>
      ))}
    </div>
  );
}
