import React from "react";

// Header principal
const SectionHeader: React.FC = () => (
  <div className="text-center mb-16">
    <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
      Excellence Académique
    </div>
    <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 mb-8">
      La force de nos <span className="text-red-600">3 universités</span>
    </h1>
    <div className="max-w-4xl mx-auto space-y-6 text-md text-gray-800 leading-relaxed">
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
  <div className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl">
    <div className="text-center max-w-4xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 rounded-full p-4">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div>
      <p className="text-lg sm:text-lg font-semibold leading-relaxed">
        Grâce à cette synergie, nous formons des talents immédiatement
        opérationnels et parfaitement adaptés aux besoins des entreprises et des
        institutions.
      </p>
    </div>
  </div>
);

interface Tag {
  label: string;
  bg: string;
  text: string;
}

interface University {
  name: string;
  description: string;
  imageUrl: string; // Ajouté pour afficher une image
  link: string; // Lien vers le site ou une page
  tags: Tag[];
  gradient?: string;
  icon?: string;
}

const UniversityCard: React.FC<University> = ({
  name,
  description,
  imageUrl,
  link,
  tags,
}) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 w-full max-w-sm">
    {/* Image d’en-tête */}
    <img src={imageUrl} alt={name} className="w-full h-36 object-cover" />

    {/* Contenu */}
    <div className="p-4 space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`${tag.bg} ${tag.text} px-2 py-0.5 rounded-full text-xs font-medium`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Bouton lien */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-red-600 transition"
      >
        En savoir plus
      </a>
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
      tags: [
        { label: "Audiovisuel", bg: "bg-purple-100", text: "text-purple-700" },
        { label: "Cinéma", bg: "bg-pink-100", text: "text-pink-700" },
        { label: "Production", bg: "bg-purple-100", text: "text-purple-700" },
      ],
      imageUrl:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747222338/logoEmedia_ookb0v.jpg",
      link: "https://e-mediauniversity.io/",
    },
    {
      name: "UST-IO",
      description:
        "Université spécialisée en robotique, intelligence artificielle, automatisation et technologies émergentes",
      gradient: "from-blue-500 to-cyan-600",

      tags: [
        { label: "Robotique", bg: "bg-blue-100", text: "text-blue-700" },
        { label: "IA", bg: "bg-cyan-100", text: "text-cyan-700" },
        { label: "Tech", bg: "bg-blue-100", text: "text-blue-700" },
      ],
      imageUrl:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747221943/logoUST_eyzey1.png",
      link: "https://ust-io.com/",
    },
    {
      name: "AELI",
      description:
        "Académie orientée vers le BTP, l'énergie, l'entrepreneuriat et les métiers techniques appliqués",
      gradient: "from-orange-500 to-red-600",

      tags: [
        { label: "BTP", bg: "bg-orange-100", text: "text-orange-700" },
        { label: "Énergie", bg: "bg-red-100", text: "text-red-700" },
        { label: "Business", bg: "bg-orange-100", text: "text-orange-700" },
      ],
      imageUrl:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1746176127/Candidature/admin_20250502085526.jpg",
      link: "",
    },
  ];

  return (
    <section className=" bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <SectionHeader />
          <SynergyStatement />
        </div>

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
