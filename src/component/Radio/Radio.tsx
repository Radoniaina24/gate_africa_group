"use client";
import { Radio } from "lucide-react";
import Galerie from "./Galerie";
import About from "./About";

export default function RadioSection() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white min-h-screen p-6 md:p-8">
      {/* En-tête */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
        <div className="flex items-center">
          <div className="bg-red-600 rounded-full p-3 mr-4">
            <Radio size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">E-media 107.8 FM</h1>
            <p className="text-lg text-blue-200">Votre radio locale préférée</p>
          </div>
        </div>
      </header>

      {/* À propos de la radio */}
      <About />

      {/* Galerie d'images */}
      <Galerie />
    </div>
  );
}
