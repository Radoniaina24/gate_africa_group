import React from "react";
import {
  Globe,
  Users,
  Lightbulb,
  TrendingUp,
  MapPin,
  Building2,
  Cpu,
  Heart,
  GraduationCap,
  Briefcase,
  Video,
  Wheat,
} from "lucide-react";

export default function GateAfricaPresentation() {
  const sectors = [
    { icon: GraduationCap, name: "Éducation", color: "text-red-600" },
    { icon: Heart, name: "Santé", color: "text-blue-600" },
    { icon: Cpu, name: "Technologies", color: "text-red-500" },
    { icon: Briefcase, name: "Recrutement", color: "text-blue-500" },
    { icon: TrendingUp, name: "Marketing", color: "text-red-600" },
    { icon: Video, name: "Audiovisuel", color: "text-blue-600" },
    { icon: Globe, name: "Médias", color: "text-red-500" },
    { icon: Wheat, name: "Agriculture", color: "text-blue-500" },
  ];

  const locations = [
    { name: "Madagascar", status: "Implanté", color: "bg-red-500" },
    { name: "Île Maurice", status: "Implanté", color: "bg-blue-500" },
    {
      name: "International",
      status: "En expansion",
      color: "bg-gradient-to-r from-red-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header avec animation de dégradé */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-blue-700 to-red-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 opacity-10 rounded-full translate-x-40 translate-y-40 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm">
              <Building2 className="w-10 h-10 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Gate Africa Group
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
              Groupe panafricain multidisciplinaire au cœur de l&apos;innovation
              et de la transformation digitale
            </p>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Cards d'introduction */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-red-500 hover:border-red-600 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                <Lightbulb className="w-6 h-6 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                Innovation
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Au cœur de l&apos;innovation et du développement économique sur le
              continent africain
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-blue-500 hover:border-blue-600 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <Globe className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                Panafricain
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Une vision continentale avec une approche stratégique et
              multidisciplinaire
            </p>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-red-500 hover:border-red-600 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">
                Transformation
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Acteur clé de la transformation digitale et de la modernisation
            </p>
          </div>
        </div>

        {/* Implantations géographiques */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-3xl p-10 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Implantations
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 ${location.color} rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 font-medium">{location.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Secteurs d'activité */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nos Secteurs d&apos;Activité
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un ensemble d&apos;activités complémentaires dans des secteurs
              stratégiques
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

        {/* Mission */}
        <div className="bg-gradient-to-r from-red-600 to-blue-700 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 opacity-10 rounded-full -translate-x-24 translate-y-24"></div>

          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-8 backdrop-blur-sm">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-4xl font-bold mb-8">Notre Mission</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed mb-6 text-blue-100">
                Bâtir des ponts économiques et humains, créer des synergies
                entre les talents africains et les opportunités internationales
              </p>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-gray-500">
                  Participer activement à la modernisation et au rayonnement du
                  continent à travers des projets à fort impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
