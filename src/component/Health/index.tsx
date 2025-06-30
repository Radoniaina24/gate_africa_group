"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Clinique from "./Clinique";
import Tourisme from "./Tourisme";

export default function Health() {
  const t = useTranslations("health");

  return (
    <section className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
            <div className="max-w-lg mx-auto">
              <p className="text-lg text-gray-400 font-medium tracking-wide">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto h-full">
          <Clinique />
          <Tourisme />
        </div>
      </div>
    </section>
  );
}
