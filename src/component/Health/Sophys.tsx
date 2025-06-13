import React from "react";

export default function Sophys() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold">Sophys</h2>
            <p className="text-xs opacity-80">
              Hygiène, Propreté & Solutions Sanitaires
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed opacity-95">
          Spécialisée dans l&apos;hygiène professionnelle, le nettoyage
          industriel, la désinfection et les solutions sanitaires globales.
        </p>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
            MARQUE VIRUSTOP
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Au-delà des services classiques, Sophys développe ses propres gammes
            de produits d&apos;entretien et de désinfection.
          </p>
        </div>

        <div className="space-y-1 text-xs">
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Nettoyage industriel & tertiaire
          </div>
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Entretien établissements de santé
          </div>
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Désinfection & traitements
          </div>
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Dératisation & désinsectisation
          </div>
          <div className="flex items-center text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Production de produits spécialisés
          </div>
        </div>
      </div>
    </div>
  );
}
