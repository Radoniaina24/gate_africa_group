import React from "react";

type Tag = {
  label: string;
  bg: string;
  text: string;
};

type University = {
  name: string;
  description: string;
  icon: React.ReactNode;
  tags: Tag[];
  gradient: string;
};

// Header principal
const SectionHeader: React.FC = () => (
  <div className="text-center mb-16">
    <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
      Excellence Académique
    </div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8">
      La force de nos <span className="text-red-600">3 universités</span>
    </h1>
    <div className="max-w-4xl mx-auto space-y-6 text-lg text-white leading-relaxed">
      <p className="font-medium">
        Notre force réside dans la complémentarité stratégique de nos trois
        pôles universitaires.
      </p>
      <p>
        Chaque établissement apporte une expertise ciblée — technologies
        avancées, management stratégique et industries créatives — couvrant
        ainsi l&apos;ensemble des compétences essentielles pour accompagner les
        grandes transformations économiques de l&apos;Afrique.
      </p>
    </div>
  </div>
);

// Déclaration de la synergie
const SynergyStatement: React.FC = () => (
  <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl">
    <div className="text-center max-w-4xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 rounded-full p-4">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
      <p className="text-xl sm:text-2xl font-semibold leading-relaxed">
        Grâce à cette synergie, nous formons des talents immédiatement
        opérationnels et parfaitement adaptés aux besoins des entreprises et des
        institutions.
      </p>
    </div>
  </div>
);

// Carte d'une université
const UniversityCard: React.FC<University> = ({
  name,
  description,
  icon,
  tags,
  gradient,
}) => (
  <div className="group bg-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300 transform hover:-translate-y-2">
    <div className="text-center mb-6">
      <div
        className={`bg-gradient-to-br ${gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div
        className={`w-16 h-1 bg-gradient-to-r ${gradient} mx-auto rounded-full`}
      />
    </div>
    <p className="text-gray-700 leading-relaxed">{description}</p>
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className={`${tag.bg} ${tag.text} px-3 py-1 rounded-full text-sm font-medium`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  </div>
);

// Composant principal
const UniversitesSection: React.FC = () => {
  const universities: University[] = [
    {
      name: "E-Media",
      description:
        "Université dédiée à l'audiovisuel, au cinéma, au son et aux métiers créatifs de l'image et de la production",
      gradient: "from-purple-500 to-pink-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
        </svg>
      ),
      tags: [
        { label: "Audiovisuel", bg: "bg-purple-100", text: "text-purple-700" },
        { label: "Cinéma", bg: "bg-pink-100", text: "text-pink-700" },
        { label: "Production", bg: "bg-purple-100", text: "text-purple-700" },
      ],
    },
    {
      name: "UST-IO",
      description:
        "Université spécialisée en robotique, intelligence artificielle, automatisation et technologies émergentes",
      gradient: "from-blue-500 to-cyan-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
        </svg>
      ),
      tags: [
        { label: "Robotique", bg: "bg-blue-100", text: "text-blue-700" },
        { label: "IA", bg: "bg-cyan-100", text: "text-cyan-700" },
        { label: "Tech", bg: "bg-blue-100", text: "text-blue-700" },
      ],
    },
    {
      name: "AELI",
      description:
        "Académie orientée vers le BTP, l'énergie, l'entrepreneuriat et les métiers techniques appliqués",
      gradient: "from-orange-500 to-red-600",
      icon: (
        <svg
          className="w-10 h-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,2L14,9H21L15.5,13.5L17.5,21L12,16.5L6.5,21L8.5,13.5L3,9H10L12,2Z" />
        </svg>
      ),
      tags: [
        { label: "BTP", bg: "bg-orange-100", text: "text-orange-700" },
        { label: "Énergie", bg: "bg-red-100", text: "text-red-700" },
        { label: "Business", bg: "bg-orange-100", text: "text-orange-700" },
      ],
    },
  ];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />
        <SynergyStatement />
        <div className="grid lg:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <UniversityCard key={idx} {...uni} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitesSection;
