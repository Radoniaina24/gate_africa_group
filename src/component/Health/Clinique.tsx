import React from "react";

export default function Clinique() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Clinique Innovation</h2>
            <div className="w-8 h-0.5 bg-white/60 mt-1"></div>
          </div>
        </div>
        <p className="text-sm leading-relaxed opacity-95">
          Un centre médical moderne, orienté vers la qualité des soins et
          l&apos;innovation médicale, combinant expertise locale et standards
          internationaux.
        </p>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Clinique Innovation propose des soins spécialisés, des services de
          diagnostic avancés et un accompagnement personnalisé des patients.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
            Soins Spécialisés
          </span>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
            Diagnostic
          </span>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
            Innovation
          </span>
        </div>
      </div>
    </div>
  );
}
