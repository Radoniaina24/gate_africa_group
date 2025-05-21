import Image from "next/image";
import React from "react";

export default function HeaderSection() {
  return (
    <div className="relative z-10 mb-32">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-green-600 bg-green-50 py-1 px-3 rounded-full inline-block mb-6">
              Santé pour tous
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              Renforcer les systèmes de santé pour une Afrique en bonne santé
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nous croyons que la santé est un pilier fondamental du
              développement durable. C&apos;est pourquoi nous travaillons
              activement à renforcer les systèmes de santé à travers
              l&apos;Afrique en collaborant avec les acteurs locaux, les
              institutions publiques et les partenaires internationaux.
            </p>
            <div className="flex space-x-4">
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="h-3 w-3 rounded-full bg-blue-300"></div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent z-10"></div>
            <Image
              width={600}
              height={600}
              src="https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747804142/clinique_xcy1bm.jpg"
              alt="Professionnels de santé africains avec technologie médicale"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
