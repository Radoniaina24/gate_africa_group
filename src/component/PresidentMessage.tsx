import Image from "next/image";
import React from "react";

export default function PresidentMessage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mot du PDG
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <div className="text-gray-800 leading-relaxed space-y-3">
              <div>
                <h2 className="text-xl font-bold text-blue-600 mb-2">
                  Rojo Claudino Andrianasolo
                </h2>
                <p className="text-orange-500 font-semibold mb-4">
                  Président – Gate Africa Group
                </p>
              </div>

              <p className="text-sm">
                « L&apos;Afrique est riche de ses talents, de ses idées, de ses
                ressources. Ce qu&apos;il lui faut aujourd&apos;hui, c&apos;est
                un écosystème capable de structurer cette richesse, de la faire
                grandir, et de la connecter à des opportunités réelles.
                C&apos;est là qu&apos;intervient Gate Africa Group. »
              </p>

              <p className="text-sm">
                Notre mission est claire : accompagner la transformation du
                continent secteur par secteur, en plaçant l&apos;éducation, la
                technologie, la santé, l&apos;agriculture, les médias, le
                développement économique et l&apos;innovation au cœur de notre
                stratégie.
              </p>

              <p className="text-sm">
                Implanté à Madagascar, à l&apos;île Maurice et tourné vers
                l&apos;international, notre groupe agit comme un pont entre les
                compétences africaines et les marchés mondiaux, tout en restant
                profondément ancré dans les réalités locales.
              </p>

              <p className="text-sm">
                À travers nos universités, nos plateformes numériques, nos
                événements panafricains, nos projets agro-industriels, nos
                actions dans la santé, le tourisme, le business development ou
                encore le recrutement, nous croyons à une Afrique forte,
                autonome et connectée.
              </p>

              <p className="text-sm">
                Et parce que nous avons un cœur avant tout, nous plaçons
                également l&apos;humain au centre de notre engagement. À travers
                notre ONG Gate Africa Humanitarian, nous agissons aux côtés des
                communautés pour soutenir la scolarisation des enfants, lutter
                contre le cancer infantile, protéger l&apos;environnement,
                prévenir les violences basées sur le genre, et accompagner les
                plus vulnérables.
              </p>

              <p className="text-sm">
                Développer l&apos;Afrique, c&apos;est aussi faire grandir les
                autres.
              </p>

              <p className="text-sm">
                Gate Africa Group, ce n&apos;est pas seulement un groupe
                multisectoriel. C&apos;est une vision, une mécanique
                d&apos;impact, et une volonté constante de bâtir l&apos;Afrique
                de demain avec méthode, confiance et audace.
              </p>

              <p className="font-semibold text-blue-600">
                « Le développement n&apos;est pas une promesse, c&apos;est une
                construction. Et nous en posons les fondations. »
              </p>
            </div>
          </div>

          {/* President Image - Right Side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {/* President Image */}
              <Image
                width={500}
                height={500}
                src="https://res.cloudinary.com/dikefxjpd/image/upload/v1751259926/513821233_729096259709575_5086806052839970218_n_fgvldq.jpg"
                alt="Rojo Claudino Andrianasolo - Président Gate Africa Group"
                className="w-full aspect-[3/4] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
