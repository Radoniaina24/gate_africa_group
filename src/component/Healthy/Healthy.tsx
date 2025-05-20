import Image from "next/image";
import React from "react";

export default function Healthy() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Decorative elements */}
      <div className="fixed -z-10 top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-green-50 to-blue-50 opacity-30 blur-3xl"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-1/3 h-screen bg-gradient-to-b from-blue-50 to-green-50 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
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
                  Renforcer les systèmes de santé pour une Afrique en bonne
                  santé
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
                  src="/api/placeholder/800/600"
                  alt="Professionnels de santé africains avec technologie médicale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Approach Title */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border-b-2 border-green-500 mb-6">
            <span className="text-blue-800 font-bold uppercase tracking-wider text-sm">
              Notre vision pour l&apos;Afrique
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Notre approche repose sur
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Quatre piliers fondamentaux qui structurent nos interventions pour
            améliorer durablement les systèmes de santé en Afrique.
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full z-0 group-hover:bg-blue-200 transition-colors duration-500"></div>
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                <Image
                  src="/api/placeholder/600/500"
                  alt="Technologies médicales innovantes en Afrique"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900">
                    L&apos;innovation dans les soins de santé
                  </h4>
                </div>
                <p className="text-gray-600 ml-16 pl-5 border-l-2 border-blue-100">
                  Mise en œuvre de solutions technologiques pour améliorer
                  l&apos;accès et la qualité des services médicaux dans les
                  zones les plus reculées.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-100 rounded-full z-0 group-hover:bg-green-200 transition-colors duration-500"></div>
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                <Image
                  src="/api/placeholder/600/500"
                  alt="Centre de santé moderne en construction en Afrique"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <span className="text-3xl">🏥</span>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900">
                    Le renforcement des infrastructures sanitaires
                  </h4>
                </div>
                <p className="text-gray-600 ml-16 pl-5 border-l-2 border-green-100">
                  Appui à la construction, la réhabilitation et
                  l&apos;équipement des centres de santé pour garantir des
                  services de qualité.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-100 rounded-full z-0 group-hover:bg-green-200 transition-colors duration-500"></div>
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                <Image
                  src="/api/placeholder/600/500"
                  alt="Session de formation du personnel médical en Afrique"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-500/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <span className="text-3xl">👩‍⚕️</span>
                  </div>
                  <h4 className="text-2xl font-bold text-green-900">
                    La formation du personnel de santé
                  </h4>
                </div>
                <p className="text-gray-600 ml-16 pl-5 border-l-2 border-green-100">
                  Renforcement des compétences des professionnels pour des soins
                  plus efficaces et adaptés aux besoins locaux.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-100 rounded-full z-0 group-hover:bg-blue-200 transition-colors duration-500"></div>
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                <Image
                  src="/api/placeholder/600/500"
                  alt="Communauté locale participant à une initiative de santé"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-900">
                    Le partenariat communautaire
                  </h4>
                </div>
                <p className="text-gray-600 ml-16 pl-5 border-l-2 border-blue-100">
                  Implication des populations locales pour des actions de santé
                  durable et adaptées aux besoins spécifiques des communautés.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
              <Image
                src="/api/placeholder/1200/600"
                alt="Silhouette de l'Afrique avec des icônes médicales"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 py-16 px-8 md:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-2xl">💚</span>
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Notre objectif
                </h3>
                <div className="w-24 h-1 bg-white/40 mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                  Une Afrique où chaque citoyen a accès à des soins de qualité,
                  accessibles, et durables.
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold italic text-white">
                    Ensemble, bâtissons des systèmes de santé plus forts, pour
                    une Afrique plus saine.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual elements */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full h-auto opacity-20"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,208C672,224,768,256,864,261.3C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute -right-12 -bottom-8 grid grid-cols-3 gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            <div className="w-2 h-2 rounded-full bg-blue-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
