import React from "react";
import CardsSection from "./CardSection";
import HeaderSection from "./HeaderSection";
import AproachTitle from "./AproachTitle";
import FinalSection from "./FinalSection";
import { FaHospitalSymbol } from "react-icons/fa";

export default function Healthy() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50"
      id="clinique"
    >
      {/* Decorative elements */}
      <div className="fixed -z-10 top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-green-50 to-blue-50 opacity-30 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-1/3 h-screen bg-gradient-to-b from-blue-50 to-green-50 opacity-30 blur-3xl"></div>
      <div className="max-w-4xl mx-auto text-center py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="p-4 bg-green-100 rounded-full shadow-md">
            <FaHospitalSymbol className="text-green-600 text-4xl" />
          </div>
          <h1 className="text-4xl font-extrabold text-green-700 tracking-wide">
            Clinique & Innovation
          </h1>
        </div>
        <p className="mt-2 text-gray-600 text-sm md:text-base">
          Clinique Innovation est un établissement de santé moderne dédié à
          l&apos;excellence médicale et à l&apos;innovation technologique. Notre
          mission est de fournir des soins de qualité supérieure en intégrant
          les dernières avancées scientifiques et en plaçant le patient au cœur
          de nos priorités.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <HeaderSection />

        {/* Approach Title */}
        <AproachTitle />

        {/* Cards Section */}
        <CardsSection />

        {/* Final CTA Section */}
        <FinalSection />
      </div>
    </section>
  );
}
