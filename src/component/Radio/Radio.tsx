"use client";
import { Radio } from "lucide-react";
import Galerie from "./Galerie";
import About from "./About";
import { FaBroadcastTower } from "react-icons/fa";

export default function RadioSection() {
  return (
    <section
      className="bg-gradient-to-b from-blue-50 via-white to-blue-50"
      id="radio"
    >
      <div className="max-w-4xl mx-auto text-center py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="p-4 bg-red-100 rounded-full shadow-md">
            <FaBroadcastTower className="text-red-600 text-4xl" />
          </div>
          <h1 className="text-4xl font-extrabold text-red-700 tracking-wide">
            E-media 107.8 FM
          </h1>
        </div>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          E-media 107.8 FM est une radio dynamique qui informe, divertit et
          connecte la communauté à travers une programmation riche, engagée et
          actuelle. Portée par une équipe passionnée, elle donne la parole à
          tous et diffuse les ondes de la culture, de l&apos;actualité et de
          l&apos;innovation.
        </p>
      </div>
      <div className="relative w-full overflow-hidden leading-[0] -mb-1">
        <svg
          className="block w-full h-0 md:h-20 rotate-180"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#1c398e"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,202.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      <div className="bg-blue-900 text-white min-h-screen p-6 md:p-8">
        {/* En-tête */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <div className="bg-red-600 rounded-full p-3 mr-4">
              <Radio size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                E-media 107.8 FM
              </h1>
              <p className="text-lg text-blue-200">
                Votre radio locale préférée
              </p>
            </div>
          </div>
        </header>

        {/* À propos de la radio */}
        <About />

        {/* Galerie d'images */}
        <Galerie />
      </div>
    </section>
  );
}
