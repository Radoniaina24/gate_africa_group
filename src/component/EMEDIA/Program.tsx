"use client";
import { motion } from "framer-motion";
import { BookOpenCheck, Code, Laptop, Mic, Database } from "lucide-react";
import React, { JSX } from "react";

interface ProgramCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  colorClass: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  icon,
  title,
  description,
  colorClass,
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
  >
    <motion.div
      className="flex justify-center mb-4"
      whileHover={{ rotate: 15 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {React.cloneElement(icon, {
        className: `h-16 w-16 ${colorClass} animate-pulse`,
      })}
    </motion.div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ProgramsSection = () => {
  const programData = [
    {
      icon: <Code />,
      title: "Informatique",
      description:
        "Des formations avancées en programmation, cybersécurité, et développement web.",
      colorClass: "text-blue-600",
    },
    {
      icon: <Laptop />,
      title: "Ingénierie",
      description:
        "Explorez des domaines tels que l’électronique, la mécanique et l’énergie durable.",
      colorClass: "text-green-600",
    },
    {
      icon: <Mic />,
      title: "Cinéma et Audiovisuel",
      description:
        "Des formations en production cinématographique, montage et effets spéciaux.",
      colorClass: "text-red-600",
    },
    {
      icon: <Database />,
      title: "Data Science",
      description:
        "Analyse de données, machine learning, et intelligence artificielle pour l’avenir.",
      colorClass: "text-purple-600",
    },
  ];

  return (
    <section id="programmes" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          Programmes Académiques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programData.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              colorClass={program.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
