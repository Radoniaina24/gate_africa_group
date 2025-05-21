"use client";
import React from "react";
import Contact from "./Contact";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const texte =
    "Fondée en 2024, notre radio locale est bien plus qu’un simple média : c’est une véritable voix pour la communauté. Animée par la passion de l'information, de la culture et de la musique, notre équipe s'engage chaque jour à offrir une programmation riche, dynamique et accessible à tous. Nous mettons un point d’honneur à valoriser les talents locaux, à donner la parole aux acteurs de notre région, et à proposer des émissions captivantes qui abordent l’actualité, la culture, la musique, le sport, la vie associative et bien plus encore. Grâce à une approche moderne, interactive et proche de ses auditeurs, notre radio devient un lien fort entre les citoyens, les artistes, les entrepreneurs et les institutions. Rejoignez-nous et vivez une expérience radiophonique authentique, engagée et profondément enracinée dans la vie locale.";

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Bloc texte */}
      <motion.div
        className="md:col-span-2 bg-black bg-opacity-30 p-6 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold mb-4">
          À Propos de E-media 107.8 FM
        </h2>
        <p className="mb-4">{texte}</p>
        <Contact />
      </motion.div>

      {/* Bloc image */}
      <motion.div
        className="relative h-40 md:h-auto rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747805711/radio_tfde71.jpg"
          alt="Studio radio"
          className="object-cover w-full h-full"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-bold text-white text-sm">
            Studio moderne au cœur de la ville
          </p>
        </div>
      </motion.div>
    </section>
  );
}
