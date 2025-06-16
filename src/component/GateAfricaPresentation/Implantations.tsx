import {
  Briefcase,
  Cpu,
  GraduationCap,
  Heart,
  MapPin,
  Video,
  Wheat,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProfessionalLayout() {
  const sectors = [
    {
      icon: GraduationCap,
      name: "Éducation & Universités spécialisées",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Heart,
      name: "Santé & Médical international",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: Cpu,
      name: "Technologie & numérique",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Briefcase,
      name: "Recrutement international",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Wheat,
      name: "Agriculture & agro-industrie",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Video,
      name: "Audiovisuel, médias & communication",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const locations = [
    {
      name: "Madagascar",
      status: "Siège Social",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      code: "mg",
    },
    {
      name: "Île Maurice",
      status: "Bureau Régional",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      code: "mu",
    },
    {
      name: "International",
      status: "Expansion Active",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      icon: "🚀",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side - Activities */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-6">
              <div className="mb-8">
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full border border-blue-200 mb-3">
                  <Briefcase className="w-3 h-3 mr-1 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700">
                    Nos Activités
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Secteurs d&apos;Activité
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Des domaines d&apos;expertise complémentaires pour répondre
                  aux enjeux stratégiques de développement continental.
                </p>
              </div>

              <div className="space-y-3">
                {sectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div
                        className={`w-8 h-8 ${sector.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className={`w-4 h-4 ${sector.color}`} />
                      </div>
                      <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                        {sector.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right Side - Implementations */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-6">
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 shadow-lg border border-blue-100/50 backdrop-blur-sm">
                <div className="mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50 mb-3">
                    <MapPin className="w-3 h-3 mr-1 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700">
                      Nos Implantations
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Présence Internationale
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Un réseau stratégique en expansion continue pour servir nos
                    clients à travers le monde.
                  </p>
                </div>

                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-blue-50/50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className="relative">
                        <div
                          className={`rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {location.code ? (
                            <Image
                              src={`https://flagcdn.com/w40/${location.code}.png`}
                              alt={`Drapeau de ${location.name}`}
                              height={50}
                              width={50}
                              className="w-6 h-4 object-cover mx-auto mb-2 rounded-sm shadow"
                            />
                          ) : (
                            location.icon
                          )}
                        </div>
                        {index < 2 && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                          {location.name}
                        </h3>
                      </div>
                      <span className="inline-flex px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {location.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      Expansion Continue
                    </h4>
                  </div>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    Notre stratégie de développement international nous
                    positionne comme un acteur clé dans l&apos;océan Indien et
                    au-delà.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
