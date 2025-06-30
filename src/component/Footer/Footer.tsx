"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <section>
      <footer className="bg-blue-600 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
                Gate Africa Group
              </h3>
              <p className="text-white/90 mb-4">{t("aboutText")}</p>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
                {t("contactTitle")}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                  <span className="text-white/90">{t("address")}</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-white" />
                  <span className="text-white/90">{t("phone")}</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-white" />
                  <span className="text-white/90">{t("email")}</span>
                </li>
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
                {t("newsletterTitle")}
              </h3>
              <p className="text-white/90 mb-4">{t("newsletterText")}</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={t("placeholder")}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white font-bold py-2 px-4 rounded-md w-full transition duration-300 hover:brightness-110"
                >
                  {t("subscribe")}
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/80 text-sm mb-4 md:mb-0">
                © 2025 Gate Africa Group. {t("rights")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
