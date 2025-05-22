import { CheckCircle, Star, Truck } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8">
        <div className="bg-white p-4 rounded-full">
          <Truck className="w-10 h-10 text-blue-600" />
        </div>
      </div>

      <div className="relative">
        <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 mb-6 tracking-tight">
          Landm&apos;ark
        </h1>
        <div className="absolute -top-4 -right-4 lg:-right-8">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg">
            PREMIUM
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-slate-600 font-light leading-relaxed mb-8">
          L&apos;excellence automobile et événementielle au service de votre
          succès professionnel
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 mr-2" />
            Certifié ISO 9001
          </span>
          <span className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 mr-2" />
            Leader du marché
          </span>
          {/* <span className="flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            <Award className="w-4 h-4 mr-2" />
            15 ans d&apos;expertise
          </span> */}
        </div>
      </div>
    </div>
  );
}
