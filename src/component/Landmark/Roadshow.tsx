"use client"; // si tu es sous Next.js
import { Music, Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Roadshow() {
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl"></div>
      <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-white p-12 lg:p-16 rounded-3xl overflow-hidden"
      >
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Music className="w-full h-full" />
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">Service Premium Exclusif</span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Roadshow All-in-One
            </h3>

            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              L&apos;expérience événementielle ultime avec notre solution
              complète intégrant les dernières technologies pour créer des
              moments exceptionnels qui marquent les esprits.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Animation Pro",
                  desc: "Équipe certifiée",
                },
                {
                  icon: <Music className="w-6 h-6" />,
                  title: "Audio 4K",
                  desc: "Qualité studio",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-blue-200">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-2xl opacity-30 transform rotate-6"></div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811175/landmark_cn1yj9.jpg"
                alt="Roadshow Elite Experience"
                className="relative rounded-2xl shadow-2xl w-full transition-transform duration-500"
                width={500}
                height={500}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
