import { Lightbulb, Globe, TrendingUp } from "lucide-react";
import React from "react";

export default function Introduction() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-red-500 hover:border-red-600 transform hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
            <Lightbulb className="w-6 h-6 text-red-600 group-hover:text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 ml-4">Innovation</h3>
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
          <h3 className="text-2xl font-bold text-gray-800 ml-4">Panafricain</h3>
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
  );
}
