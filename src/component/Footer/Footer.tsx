import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
              Gate Africa Group
            </h3>
            <p className="text-white/90 mb-4">
              Ensemble, responsabiliser l&apos;avenir de toute l&apos;Afrique !
              Rejoignez Gate Africa Group pour transformer des vies grâce à
              l&apos;éducation, la santé et l&apos;innovation pour un avenir
              meilleur !
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/90 text-white/80">
                <Facebook className="text-xl" />
              </a>
              <a href="#" className="hover:text-white/90 text-white/80">
                <Twitter className="text-xl" />
              </a>
              <a href="#" className="hover:text-white/90 text-white/80">
                <Linkedin className="text-xl" />
              </a>
              <a href="#" className="hover:text-white/90 text-white/80">
                <Instagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                <span className="text-white/90">
                  Nanisana, Antananarivo 101, Madagascar
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <span className="text-white/90">+23054884377</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <span className="text-white/90">
                  contact@gateafricagroup.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
              Newsletter
            </h3>
            <p className="text-white/90 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités et offres spéciales.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white font-bold py-2 px-4 rounded-md w-full transition duration-300 hover:brightness-110"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 Gate Group Africa. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
