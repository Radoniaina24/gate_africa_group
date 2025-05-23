"use client";
import { Clock, Sparkles, Star } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-12 relative"
      >
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-2xl opacity-30 animate-pulse"></div>
          <h1 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
            SOPHYS
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center items-center space-x-4 mb-8"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <Sparkles
            className="h-8 w-8 text-yellow-400 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-3xl md:text-3xl font-light mb-8 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
      >
        NETTOYAGE PREMIUM RÉVOLUTIONNAIRE
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="text-xl md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-300"
      >
        L&apos;excellence redéfinie par l&apos;innovation technologique et
        l&apos;artisanat de luxe.
        <br />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">
          Votre vision de la perfection devient réalité.
        </span>
      </motion.p>

      {/* Stats Premium */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2, delayChildren: 1.2 }}
        className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {[
          { number: "99.9%", label: "Satisfaction", icon: Star },
          { number: "24/7", label: "Service Elite", icon: Clock },
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="group text-center"
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 transition-transform duration-300">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
