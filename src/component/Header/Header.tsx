"use client";
import Navbar from "./Navbar";
import Hero from "../Hero/Hero";

export default function Header() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dx3xhdaym/image/upload/v1737520953/Indian_5_tzafqw.png')", // Remplacez par le chemin de votre image
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Section de contenu */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen text-center px-4">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
