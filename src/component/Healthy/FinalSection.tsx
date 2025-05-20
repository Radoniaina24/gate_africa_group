import Image from "next/image";
import React from "react";

export default function FinalSection() {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <Image
            width={500}
            height={500}
            src="/api/placeholder/1200/600"
            alt="Silhouette de l'Afrique avec des icônes médicales"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 py-16 px-8 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre objectif
            </h3>
            <div className="w-24 h-1 bg-white/40 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Une Afrique où chaque citoyen a accès à des soins de qualité,
              accessibles, et durables.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
              <p className="text-2xl md:text-3xl font-bold italic text-white">
                Ensemble, bâtissons des systèmes de santé plus forts, pour une
                Afrique plus saine.
              </p>
            </div>
          </div>
        </div>

        {/* Visual elements */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto opacity-20"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute -right-12 -bottom-8 grid grid-cols-3 gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
        <div className="w-2 h-2 rounded-full bg-blue-300"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-300"></div>
        <div className="w-2 h-2 rounded-full bg-blue-300"></div>
        <div className="w-2 h-2 rounded-full bg-blue-200"></div>
        <div className="w-2 h-2 rounded-full bg-blue-100"></div>
      </div>
    </div>
  );
}
