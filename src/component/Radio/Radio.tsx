"use client";

import { Radio } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import About from "./About";
import GaleriePhotoAlbum from "./AlbumStudio";

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function RadioSection() {
  const t = useTranslations("radio");

  return (
    <section id="radio">
      {/* Decorative SVG Top Wave */}
      <div className="relative w-full overflow-hidden leading-[0] -mb-1">
        <svg
          className="block w-full h-0 md:h-20 rotate-180"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#1c398e"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,202.7C960,171,1056,117,1152,112C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="bg-blue-900 text-white p-6 md:p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <div className="bg-red-600 rounded-full p-3 mr-4">
              <Radio size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>
              <p className="text-lg text-blue-200">{t("subtitle")}</p>
            </div>
          </div>
        </header>

        {/* About Section */}
        <About />

        {/* Studio Gallery Section */}
        <section className="py-10">
          <motion.div
            className="max-w-7xl mx-auto text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {t("visitStudio")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          </motion.div>

          {/* Galerie des photos du studio */}
          <GaleriePhotoAlbum />
        </section>
      </div>
    </section>
  );
}
