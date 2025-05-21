"use client";
import Image from "next/image";
import React from "react";

interface GalerieItem {
  src: string;
  alt: string;
}

const galerie: GalerieItem[] = [
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136474/20_radio_uurk1k.jpg",
    alt: "Photo radio 1",
  },
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136464/15_radio_c7uyup.jpg",
    alt: "Photo radio 2",
  },
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136509/9_radio_waal3i.jpg",
    alt: "Photo radio 3",
  },
  {
    src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136497/3_radio_wdfoxu.jpg",
    alt: "Photo radio 4",
  },
];

export default function Galerie() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Galerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galerie.map((image, index) => (
          <div key={index} className="relative h-52 rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
