"use client";
import Image from "next/image";
export default function CliniqueInnovationHero() {
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/Clinique.Innovation.Nanisana?",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="bg-gradient-to-br ">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Contenu texte - Côté gauche */}
          <div className="lg:w-1/2 space-y-2 lg:pr-12">
            {/* Titre principal */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Clinique Innovation
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            </div>

            {/* Description principale */}
            <p className="text-md  text-white leading-relaxed font-light">
              Un centre médical moderne, orienté vers la qualité des soins et
              l&apos;innovation médicale,
              <span className="font-medium text-white ">
                {" "}
                combinant expertise locale et standards internationaux.
              </span>
            </p>

            {/* Description secondaire */}
            <p className="text-md text-white leading-relaxed max-w-xl">
              Clinique Innovation propose des soins spécialisés, des services de
              diagnostic avancés et un accompagnement personnalisé des patients.
            </p>
            {/* Indicateurs de qualité */}
            <div className="flex flex-wrap gap-6 pt-2 text-white">
              <div className="flex items-center space-x-2 ">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Soins spécialisés</span>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Diagnostic avancé</span>
              </div>
              <div className="flex items-center space-x-2 ">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Accompagnement personnalisé
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
                    src="https://res.cloudinary.com/dikefxjpd/image/upload/v1750232360/clinique_knszhb.jpg"
                    alt="logo-gate-group-africa"
                    width={150}
                    height={60}
                    className="rounded-lg w-full h-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Logo - Côté droit */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative">
              {/* Cercle de fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full animate-pulse opacity-30 scale-110"></div>

              {/* Container du logo */}
              <div className="relative bg-white rounded-full p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                {/* Logo médical stylisé */}
                <div className="w-48 h-48 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-red-600"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                  >
                    {/* Croix médicale moderne */}
                    <rect
                      x="85"
                      y="30"
                      width="30"
                      height="140"
                      rx="15"
                      className="animate-pulse"
                    />
                    <rect
                      x="30"
                      y="85"
                      width="140"
                      height="30"
                      rx="15"
                      className="animate-pulse"
                    />

                    {/* Cercle externe */}
                    <circle
                      cx="100"
                      cy="100"
                      r="95"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      opacity="0.3"
                    />

                    {/* Points d'innovation */}
                    <circle
                      cx="100"
                      cy="40"
                      r="4"
                      className="text-cyan-500 animate-bounce"
                    />
                    <circle
                      cx="160"
                      cy="100"
                      r="4"
                      className="text-cyan-500 animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <circle
                      cx="100"
                      cy="160"
                      r="4"
                      className="text-cyan-500 animate-bounce"
                      style={{ animationDelay: "1s" }}
                    />
                    <circle
                      cx="40"
                      cy="100"
                      r="4"
                      className="text-cyan-500 animate-bounce"
                      style={{ animationDelay: "1.5s" }}
                    />
                  </svg>
                </div>
              </div>

              {/* Éléments décoratifs flottants */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-70"></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full animate-bounce opacity-70"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-bounce opacity-70"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
