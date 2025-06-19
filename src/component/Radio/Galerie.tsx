"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";

export default function Galerie() {
  return (
    <section className="relative">
      <Image
        src={
          "https://res.cloudinary.com/dikefxjpd/image/upload/v1750341065/radio_FM_mh1jg0.jpg"
        }
        alt={"Photo radio 6"}
        width={400}
        height={400}
        className="object-cover rounded-2xl"
      />
    </section>
  );
}
