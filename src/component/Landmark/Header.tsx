"use client";

import { CheckCircle, Star, Truck } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"
      >
        <div className="bg-white p-4 rounded-full">
          <Truck className="w-10 h-10 text-blue-600" />
        </div>
      </motion.div>

      <div className="relative">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 mb-6 tracking-tight"
        >
          Landm&apos;ark
        </motion.h1>

        <motion.div
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 12, scale: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          className="absolute -top-4 -right-4 lg:-right-8"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
            PREMIUM
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-2xl text-slate-600 font-light leading-relaxed mb-8">
          L&apos;excellence automobile et événementielle au service de votre
          succès professionnel
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {[
            {
              text: "Certifié ISO 9001",
              icon: <CheckCircle className="w-4 h-4 mr-2" />,
              class: "bg-green-100 text-green-800",
              delay: 0.8,
            },
            {
              text: "Leader du marché",
              icon: <Star className="w-4 h-4 mr-2" />,
              class: "bg-blue-100 text-blue-800",
              delay: 1,
            },
          ].map((badge, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: badge.delay, duration: 0.5 }}
              className={`flex items-center px-4 py-2 rounded-full ${badge.class}`}
            >
              {badge.icon}
              {badge.text}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
