import { Award, CheckCircle, Mail, Phone, Shield, Star } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 lg:p-16 text-center border border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 shadow-2xl">
            <Award className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Prêt à vivre l&apos;expérience
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {" "}
              Landm&apos;ark ?
            </span>
          </h3>

          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Notre équipe d&apos;experts vous accompagne de A à Z pour garantir
            votre succès.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg group">
              <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Consultation Gratuite
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-lg group">
              <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Devis Express
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Réponse sous 30 minutes
            </span>
            <span className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-blue-400" />
              Engagement qualité
            </span>
            <span className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Service premium inclus
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
