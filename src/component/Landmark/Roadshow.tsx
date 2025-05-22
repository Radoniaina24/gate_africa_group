import { Music, Star, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Roadshow() {
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl"></div>
      <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
      <div className="relative text-white p-12 lg:p-16 rounded-3xl overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Music className="w-full h-full" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="font-semibold">Service Premium Exclusif</span>
            </div>

            <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Roadshow All-in-One
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {" "}
                Elite
              </span> */}
            </h3>

            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              L&apos;expérience événementielle ultime avec notre solution
              complète intégrant les dernières technologies pour créer des
              moments exceptionnels qui marquent les esprits.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Animation Pro</div>
                  <div className="text-sm text-blue-200">Équipe certifiée</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Audio 4K</div>
                  <div className="text-sm text-blue-200">Qualité studio</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-2xl opacity-30 transform rotate-6"></div>
            <Image
              src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747811175/landmark_cn1yj9.jpg"
              alt="Roadshow Elite Experience"
              className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
