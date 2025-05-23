import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Why() {
  const why = [
    {
      title: "Excellence Garantie",
      description:
        "Notre équipe de professionnels formés utilise les meilleures techniques et équipements pour des résultats impeccables.",
    },
    {
      title: "Flexibilité Totale",
      description:
        "Nous nous adaptons à vos horaires et besoins spécifiques, avec des interventions 24h/24 si nécessaire.",
    },
    {
      title: "Produits Premium",
      description:
        "Utilisation exclusive de produits haut de gamme, écologiques et respectueux de l'environnement.",
    },
    {
      title: "Service Client Exceptionnel",
      description:
        "Une équipe dédiée à votre satisfaction, avec un suivi personnalisé et une disponibilité constante.",
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pourquoi Choisir <span className="text-yellow-300">Sophys?</span>
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              className="space-y-6"
            >
              {why.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image avec badge animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811368/sophys_gyrxet.jpg"
              alt="Équipe Sophys au travail"
              className="rounded-2xl shadow-2xl"
              width={550}
              height={550}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 p-6 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold">100%</div>
              <div className="font-semibold">Satisfaction</div>
              <div className="font-semibold">Garantie</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
