import React from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full px-10 py-6 z-20 flex justify-between items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-4"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase text-white leading-tight">
          <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm">
            Gate
          </span>{" "}
          <span className="text-white">Africa</span>{" "}
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-400 bg-clip-text text-transparent font-medium tracking-widest text-sm md:text-lg align-super">
            Group
          </span>
        </h1>
      </motion.div>
    </header>
  );
}
