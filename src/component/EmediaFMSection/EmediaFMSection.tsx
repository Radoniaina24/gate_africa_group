import React from "react";

export default function EmediaFMSection() {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-600 tracking-tight">
              E-media FM
            </h1>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Main Description */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-red-100 p-8 sm:p-10 transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              Écoutez de la bonne musique, vos émissions préférées et accédez à
              des contenus éducatifs de qualité.
            </p>
          </div>

          {/* Key Message */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-red-600 rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 rounded-full p-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <p className="text-lg sm:text-xl font-semibold leading-relaxed">
                E-media FM : la radio économique et éducative numéro 1 à
                Madagascar, écoutée dans plus de 5 grandes régions du pays.
              </p>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-red-600 mb-2">#1</div>
              <div className="text-sm text-gray-600 font-medium">
                Radio Économique
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
              <div className="text-sm text-gray-600 font-medium">
                Grandes Régions
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-red-600 mb-2">📻</div>
              <div className="text-sm text-gray-600 font-medium">
                Contenu Éducatif
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
