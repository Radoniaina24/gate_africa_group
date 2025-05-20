import React from "react";
import CardsSection from "./CardSection";
import HeaderSection from "./HeaderSection";
import AproachTitle from "./AproachTitle";
import FinalSection from "./FinalSection";

export default function Healthy() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="fixed -z-10 top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-green-50 to-blue-50 opacity-30 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-1/3 h-screen bg-gradient-to-b from-blue-50 to-green-50 opacity-30 blur-3xl"></div>

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
