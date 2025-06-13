import React from "react";

export default function Tourisme() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="bg-white/20 rounded-full p-2 mr-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,13 12,19.5 12,19.5C12,19.5 17,13 17,9A5,5 0 0,0 12,4Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold">
              Medical Tourisme International
            </h2>
            <div className="w-8 h-0.5 bg-white/60 mt-1"></div>
          </div>
        </div>
        <p className="text-sm leading-relaxed opacity-95">
          Une plateforme spécialisée dans l&apos;organisation de parcours de
          soins internationaux, facilitant l&apos;accès aux meilleures
          structures médicales.
        </p>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          Medical Tourisme International prend en charge l&apos;ensemble du
          processus : diagnostic, organisation logistique, accompagnement
          administratif et suivi post-traitement.
        </p>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-blue-50 p-2 rounded text-blue-700 font-medium">
            Afrique
          </div>
          <div className="bg-blue-50 p-2 rounded text-blue-700 font-medium">
            Maurice
          </div>
          <div className="bg-blue-50 p-2 rounded text-blue-700 font-medium">
            Inde
          </div>
          <div className="bg-blue-50 p-2 rounded text-blue-700 font-medium">
            Europe
          </div>
        </div>
      </div>
    </div>
  );
}
