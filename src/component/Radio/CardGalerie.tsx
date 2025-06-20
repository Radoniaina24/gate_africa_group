import React from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string; // Source de l'image
  altText: string; // Texte alternatif pour l'image
  title: string; // Titre de la carte
  animationEffect?: string; // Effet d'animation AOS (optionnel)
  onButtonClick?: (title: string) => void; // Fonction appelée au clic du bouton
}

const CardGalerie: React.FC<CardProps> = ({
  imageSrc,
  altText,
  title,
  animationEffect = "fade-left", // Effet par défaut
  onButtonClick, // Fonction appelée au clic du bouton
}) => {
  const texteBtn = "Voir l'album";
  return (
    <div
      className="rounded-lg bg-white p-6 shadow-lg hover:cursor-pointer dark:bg-dark"
      data-aos={animationEffect}
    >
      <Image
        src={imageSrc}
        alt={altText}
        className="h-48 w-full rounded-t-lg object-cover"
        width={500}
        height={500}
      />
      <h3 className="text-md my-6 text-center lowercase font-semibold text-gray-800">
        {title}
      </h3>
      <div className="text-center">
        <button
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => onButtonClick && onButtonClick(title)}
        >
          {texteBtn}
        </button>
      </div>
    </div>
  );
};

export default CardGalerie;
