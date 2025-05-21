import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative z-20 flex flex-col justify-center items-center h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-white text-4xl md:text-6xl font-extrabold max-w-3xl drop-shadow-xl"
      >
        Transformer l&apos;Afrique grâce à l&apos;innovation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl drop-shadow-md"
      >
        Notre mission est de catalyser le changement positif à travers la
        technologie et l&apos;entrepreneuriat.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8"
      >
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#mission" className="text-white text-4xl cursor-pointer">
            <FaChevronDown />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
