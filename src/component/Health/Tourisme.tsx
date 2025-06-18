"use client";
import Image from "next/image";
export default function Tourisme() {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100082906043536",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="  relative overflow-hidden">
      {/* Motifs géographiques en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-300 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-teal-300 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-cyan-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-5 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Logo - Côté gauche */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
            <div className="relative">
              {/* Cercle de fond avec effet globe */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 via-teal-200 to-green-200 rounded-full animate-pulse opacity-30 scale-110"></div>

              {/* Container du logo */}
              <div className="relative bg-white rounded-full p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                {/* Logo globe médical */}
                <div className="w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Globe terrestre */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="url(#globeGradient)"
                      stroke="#10b981"
                      strokeWidth="2"
                    />

                    {/* Continents stylisés */}
                    <path
                      d="M60,80 Q80,60 100,80 Q120,100 140,80 Q160,60 180,80"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3"
                      opacity="0.7"
                    />
                    <path
                      d="M40,120 Q60,100 80,120 Q100,140 120,120 Q140,100 160,120"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3"
                      opacity="0.7"
                    />

                    {/* Croix médicale au centre */}
                    <rect
                      x="92"
                      y="75"
                      width="16"
                      height="50"
                      rx="8"
                      fill="#dc2626"
                    />
                    <rect
                      x="75"
                      y="92"
                      width="50"
                      height="16"
                      rx="8"
                      fill="#dc2626"
                    />

                    {/* Lignes de longitude/latitude */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="80"
                      ry="40"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <ellipse
                      cx="100"
                      cy="100"
                      rx="40"
                      ry="80"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1"
                      opacity="0.3"
                    />

                    {/* Avions en mouvement */}
                    <g
                      className="animate-spin"
                      style={{
                        transformOrigin: "100px 100px",
                        animationDuration: "20s",
                      }}
                    >
                      <path
                        d="M100,30 L105,35 L100,40 L95,35 Z"
                        fill="#0891b2"
                        opacity="0.8"
                      />
                      <path
                        d="M170,100 L175,105 L170,110 L165,105 Z"
                        fill="#0891b2"
                        opacity="0.8"
                      />
                      <path
                        d="M100,170 L105,175 L100,180 L95,175 Z"
                        fill="#0891b2"
                        opacity="0.8"
                      />
                      <path
                        d="M30,100 L35,105 L30,110 L25,105 Z"
                        fill="#0891b2"
                        opacity="0.8"
                      />
                    </g>

                    {/* Points de destination */}
                    <circle
                      cx="70"
                      cy="60"
                      r="3"
                      fill="#f59e0b"
                      className="animate-pulse"
                    />
                    <circle
                      cx="130"
                      cy="70"
                      r="3"
                      fill="#f59e0b"
                      className="animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <circle
                      cx="150"
                      cy="130"
                      r="3"
                      fill="#f59e0b"
                      className="animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <circle
                      cx="50"
                      cy="140"
                      r="3"
                      fill="#f59e0b"
                      className="animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    />

                    {/* Dégradé pour le globe */}
                    <defs>
                      <radialGradient id="globeGradient" cx="0.3" cy="0.3">
                        <stop offset="0%" stopColor="#a7f3d0" />
                        <stop offset="100%" stopColor="#34d399" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Éléments décoratifs - drapeaux/destinations */}
              <div className="absolute -top-6 -right-6 w-8 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm animate-bounce opacity-80"></div>
              <div
                className="absolute -bottom-6 -left-6 w-8 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-sm animate-bounce opacity-80"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-8 w-6 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm animate-bounce opacity-80"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Contenu texte - Côté droit */}
          <div className="lg:w-1/2 space-y-2 lg:pl-12">
            {/* Titre principal */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent leading-tight">
                Medical Tourisme International
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
            {/* Description principale */}
            <p className="text-md  text-white leading-relaxed font-light">
              Une plateforme spécialisée dans l&apos;organisation de parcours de
              soins internationaux,
              <span className="font-medium text-white">
                {" "}
                facilitant l&apos;accès des patients aux meilleures structures
                médicales
              </span>
              en Afrique, à l&apos;île Maurice, en Inde et en Europe.
            </p>
            {/* Description secondaire */}
            <p className="text-md text-white leading-relaxed max-w-2xl">
              Medical Tourisme International prend en charge l&apos;ensemble du
              processus : diagnostic, organisation logistique, accompagnement
              administratif et suivi post-traitement.
            </p>
            Destinations
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🌍</div>
                <span className="text-sm font-medium text-gray-700">
                  Afrique
                </span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🏝️</div>
                <span className="text-sm font-medium text-gray-700">
                  Maurice
                </span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🕌</div>
                <span className="text-sm font-medium text-gray-700">Inde</span>
              </div>
              <div className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl mb-2">🏰</div>
                <span className="text-sm font-medium text-gray-700">
                  Europe
                </span>
              </div>
            </div> */}
            {/* Services inclus */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Diagnostic</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Organisation logistique
                </span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Accompagnement administratif
                </span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Suivi post-traitement
                </span>
              </div>
            </div>
            {/* Bouton d'action */}
            <div className="pt-2">
              <div
                onClick={handleClick}
                className=" flex font-bold underline text-white  items-center gap-5 cursor-pointer"
              >
                En savoir plus
                <div className="">
                  <Image
                    src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750235595/medical_zwtmry.jpg"
                    alt="logo-gate-group-africa"
                    width={60}
                    height={60}
                    className="rounded-lg  h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
