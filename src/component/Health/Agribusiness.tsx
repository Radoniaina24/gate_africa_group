import React from "react";

export default function Agribusiness() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* En-tête orange */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4 text-white">
        <div className="flex items-center mb-3">
          <div className="bg-white/20 rounded-full p-1.5 mr-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A2,2 0 0,1 14,4V8A2,2 0 0,1 12,10A2,2 0 0,1 10,8V4A2,2 0 0,1 12,2M21,9V7L15,10L21,13V11A10,10 0 0,1 11,21A10,10 0 0,1 1,11A10,10 0 0,1 11,1A10,10 0 0,1 21,9Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-bold">Gate Africa Agribusiness</h2>
            <p className="text-xs opacity-80">Agriculture & Agro-Industrie</p>
          </div>
        </div>
        <p className="text-xs leading-relaxed opacity-95">
          La branche agricole et agro-industrielle de Gate Africa Group, engagée
          dans le développement des filières stratégiques.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="p-4 space-y-4 text-xs text-gray-700 leading-relaxed">
        <p>
          Gate Africa Agribusiness est la branche agricole et agro-industrielle
          de Gate Africa Group, engagée dans le développement des filières
          stratégiques de production, de transformation et de valorisation
          agricole.
        </p>

        <p>
          Notre approche intègre l&apos;ensemble de la chaîne de valeur, depuis
          la production jusqu&apos;à la commercialisation, en favorisant les
          modèles durables, l&apos;innovation technologique et
          l&apos;agro-entrepreneuriat.
        </p>

        <div>
          <p className="font-semibold text-gray-800 mb-2">
            Nos axes d&apos;intervention :
          </p>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-orange-500 rounded-full mt-1 mr-2"></span>
              Production agricole et élevage
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-orange-500 rounded-full mt-1 mr-2"></span>
              Transformation agroalimentaire
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-orange-500 rounded-full mt-1 mr-2"></span>
              Développement de filières exportatrices
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-orange-500 rounded-full mt-1 mr-2"></span>
              Accompagnement des exploitations et des coopératives
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-orange-500 rounded-full mt-1 mr-2"></span>
              Intégration des nouvelles technologies agricoles (agritech)
            </li>
          </ul>
        </div>

        <p>
          Gate Africa Agribusiness contribue activement à la souveraineté
          alimentaire, à la création d&apos;emplois locaux et au développement
          économique durable, en positionnant l&apos;agriculture comme un
          véritable moteur de croissance en Afrique.
        </p>
      </div>
    </div>
  );
}
