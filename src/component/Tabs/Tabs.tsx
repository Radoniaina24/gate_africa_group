"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Emedia from "../EMEDIA";
import UST from "../UST";
import { FaGraduationCap } from "react-icons/fa";
import AELI from "../AELI";

const tabs = [
  { label: "Université E-media", component: <Emedia /> },
  { label: " Université UST", component: <UST /> },
  { label: " Université AELI", component: <AELI /> },
  //   { label: "GATE OF AFRICA Magazine", component: <UST /> },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="" id="school">
      <div className="max-w-4xl mx-auto text-center pt-10">
        <div className="flex items-center justify-center gap-4">
          <div className="p-4 bg-blue-100 rounded-full shadow-md">
            <FaGraduationCap className="text-blue-600 text-4xl" />
          </div>
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide">
            Éducation
          </h1>
        </div>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Découvrez les établissements partenaires de notre plateforme
          éducative.
        </p>
      </div>
      <div className="w-full max-w-xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-4 py-2 font-semibold rounded-full transition-all duration-300 text-sm md:text-base
              ${
                activeTab === index
                  ? "text-white bg-blue-600 shadow-lg"
                  : "text-gray-600 hover:text-blue-600 bg-white border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.label}
              {activeTab === index && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-blue-600 rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].component}
        </motion.div>
      </div>
    </section>
  );
}
