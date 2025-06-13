import {
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Heart,
  Sparkles,
  Video,
  Wheat,
} from "lucide-react";
import React from "react";

export default function Activity() {
  const sectors = [
    {
      icon: GraduationCap,
      name: "Éducation & Universités spécialisées",
      color: "text-red-600",
    },
    {
      icon: Heart,
      name: "Santé & Médical international",
      color: "text-blue-600",
    },
    {
      icon: Cpu,
      name: "Technologie & numérique",
      color: "text-red-500",
    },
    {
      icon: Briefcase,
      name: "Recrutement international",
      color: "text-blue-500",
    },
    {
      icon: Wheat,
      name: "Agriculture & agro-industrie",
      color: "text-green-600",
    },
    {
      icon: Video,
      name: "Audiovisuel, médias & communication",
      color: "text-blue-600",
    },
    {
      icon: Sparkles,
      name: "Nettoyage industriel & solutions d’hygiène",
      color: "text-purple-500",
    },
    {
      icon: Globe,
      name: "Tourisme spécialisé (médical, religieux, scientifique, affaires)",
      color: "text-orange-600",
    },
  ];
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Nos Secteurs d&apos;Activité
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nous réunissons des activités complémentaires dans des secteurs clés
          pour le développement du continent
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {sectors.map((sector, index) => {
          const IconComponent = sector.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:to-blue-50 transition-all duration-300">
                  <IconComponent
                    className={`w-8 h-8 ${sector.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {sector.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
