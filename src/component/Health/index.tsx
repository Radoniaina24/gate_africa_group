import React from "react";
import Clinique from "./Clinique";
import Tourisme from "./Tourisme";
import Sophys from "./Sophys";
import Agribusiness from "./Agribusiness";
import LandMark from "./LandMark";

export default function Health() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {" "}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Volet Santé — Clinique Innovation & Medical Tourisme International
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 font-medium tracking-wide">
              Gate Africa Group développe également des activités dans le
              domaine de la santé à travers deux structures complémentaires
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto h-full">
          {/* Three Column Layout */}
          <div className="grid lg:grid-cols-3 gap-6 h-auto">
            {/* Clinique Innovation */}
            <Clinique />

            {/* Medical Tourisme International */}
            <Tourisme />

            {/* Sophys */}
            <Sophys />
          </div>
          <div className="grid lg:grid-cols-2 gap-6 h-auto py-10">
            {/* Gate Africa Agribusiness */}
            {/* <Agribusiness /> */}
            {/* Landmark */}
            {/* <LandMark /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
