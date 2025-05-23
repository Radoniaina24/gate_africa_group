import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactItems() {
  const contactItems = [
    {
      icon: <MapPin className="text-white" size={20} />,
      title: "Adresse",
      content: "Nanisana, Antananarivo 101, Madagascar",
      bgColor: "bg-red-500",
    },
    {
      icon: <Phone className="text-white" size={20} />,
      title: "Téléphone",
      content: "+230 5488 4377",
      bgColor: "bg-green-500",
    },
    {
      icon: <Mail className="text-white" size={20} />,
      title: "Email",
      content: "contact@gateafricagroup.com",
      bgColor: "bg-sky-600",
    },
  ];

  // Animation variants pour le conteneur
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants pour chaque item
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  // Animation pour l'icône
  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <motion.div
      className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {contactItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center group cursor-pointer"
          variants={itemVariants}
          whileHover={{
            y: -10,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
        >
          <motion.div
            className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 ${item.bgColor} shadow-lg`}
            variants={iconVariants}
            initial="rest"
            whileHover={{
              ...iconVariants.hover,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            }}
            whileTap="tap"
            style={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>
          </motion.div>

          <motion.h4
            className="font-semibold text-lg text-gray-800 mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {item.title}
          </motion.h4>

          <motion.p
            className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {item.content}
          </motion.p>

          {/* Ligne décorative animée */}
          <motion.div
            className={`h-0.5 w-0 ${item.bgColor} mt-2 rounded-full`}
            whileHover={{
              width: "100%",
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
