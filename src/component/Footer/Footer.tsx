import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
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
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="hover:text-white/90 text-white/80">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-white/90 text-white/80">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="hover:text-white/90 text-white/80">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                <span className="text-white/90">
                  Nanisana, Antananarivo 101, Madagascar
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <span className="text-white/90">+261 38 78 777 37</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <span className="text-white/90">
                  administration@aeli.africa
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
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
                className="bg-white text-red-600 hover:bg-yellow-100 font-bold py-2 px-4 rounded-md w-full transition duration-300"
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
