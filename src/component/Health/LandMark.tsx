import React from "react";

export default function LandMark() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* En-tête colorée */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white">
        <div className="flex items-center mb-3">
          <div className="bg-white/20 rounded-full p-1.5 mr-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-bold">Landm&apos;Ark</h2>
            <p className="text-xs opacity-80">
              Communication, Marketing & Événementiel
            </p>
          </div>
        </div>
        <p className="text-xs leading-relaxed opacity-95">
          La filiale spécialisée de Gate Africa Group dans les métiers de la
          communication, du marketing stratégique et de l&apos;événementiel à
          forte valeur ajoutée.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="p-4 space-y-4 text-xs text-gray-700 leading-relaxed">
        <p>
          Alliant créativité, expertise technique et approche terrain,
          Landm&apos;Ark accompagne les entreprises et institutions dans la
          conception et la mise en œuvre de leurs stratégies de communication,
          de visibilité et de développement de marque, en Afrique et à
          l&apos;international.
        </p>

        <div>
          <p className="font-semibold text-gray-800 mb-2">
            Nos domaines d&apos;intervention :
          </p>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-purple-500 rounded-full mt-1 mr-2"></span>
              Marketing digital et communication institutionnelle
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-purple-500 rounded-full mt-1 mr-2"></span>
              Création de contenu multimédia et audiovisuel
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-purple-500 rounded-full mt-1 mr-2"></span>
              Organisation d&apos;événements corporate, salons et roadshows
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-purple-500 rounded-full mt-1 mr-2"></span>
              Street marketing et opérations terrain
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-purple-500 rounded-full mt-1 mr-2"></span>
              Conseil en image et positionnement de marque
            </li>
          </ul>
        </div>

        <p>
          Grâce à ses équipes expérimentées, ses équipements professionnels et
          son réseau international, Landm&apos;Ark propose des solutions
          intégrées et innovantes, adaptées aux besoins des acteurs économiques
          publics et privés.
        </p>
      </div>
    </div>
  );
}
