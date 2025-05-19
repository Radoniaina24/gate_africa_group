import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative z-20 flex flex-col justify-center items-center h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-white text-4xl md:text-6xl font-extrabold max-w-3xl drop-shadow-xl"
      >
        Transformer l'Afrique grâce à l'innovation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md"
      >
        Notre mission est de catalyser le changement positif à travers la
        technologie et l'entrepreneuriat.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <button className="bg-red-600 text-white font-semibold hover:bg-red-500 transition px-6 py-3 rounded-full shadow-lg">
          En savoir plus
        </button>
      </motion.div>
    </section>
  );
}
