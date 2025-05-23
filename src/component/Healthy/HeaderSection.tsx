"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <motion.div
      className="relative z-10 mb-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Blobs animés */}
      <motion.div
        className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply opacity-10 animate-blob"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.div
        className="absolute -top-10 -right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      <motion.div
        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Texte */}
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <motion.span
              className="text-xs uppercase tracking-widest font-semibold text-green-600 bg-green-50 py-1 px-3 rounded-full inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Santé pour tous
            </motion.span>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Renforcer les systèmes de santé pour une Afrique en bonne santé
            </motion.h2>

            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Nous croyons que la santé est un pilier fondamental du
              développement durable. C&apos;est pourquoi nous travaillons
              activement à renforcer les systèmes de santé à travers
              l&apos;Afrique en collaborant avec les acteurs locaux, les
              institutions publiques et les partenaires internationaux.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <div className="h-3 w-3 rounded-full bg-blue-300" />
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent z-10"></div>
            <Image
              width={600}
              height={600}
              src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747804142/clinique_xcy1bm.jpg"
              alt="Professionnels de santé africains avec technologie médicale"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
