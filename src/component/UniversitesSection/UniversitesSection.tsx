"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Tag {
  label: string;
  bg: string;
  text: string;
}

interface University {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: Tag[];
}

const SectionHeader: React.FC = () => {
  const t = useTranslations("university.sectionHeader");
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
        {t("badge")}
      </div>
      <h1 className="text-4xl sm:text-3xl lg:text-3xl uppercase font-black text-gray-900 mb-8">
        {t("title")}
      </h1>
      <div className="max-w-4xl mx-auto space-y-6 text-md text-gray-800 leading-relaxed">
        <p className="font-medium">{t("text1")}</p>
        <p>{t("text2")}</p>
      </div>
    </div>
  );
};

const SynergyStatement: React.FC = () => {
  const t = useTranslations("university");
  return (
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
          {t("synergy")}
        </p>
      </div>
    </div>
  );
};

const UniversityCard: React.FC<University> = ({
  name,
  description,
  imageUrl,
  link,
  tags,
}) => {
  const t = useTranslations("university");
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-700">{description}</p>
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-red-600 transition"
        >
          {t("learnMore")}
        </a>
      </div>
    </div>
  );
};

const UniversitesSection: React.FC = () => {
  const t = useTranslations("university");

  const universities: University[] = [
    {
      name: t("emedia.name"),
      description: t("emedia.description"),
      imageUrl:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747222338/logoEmedia_ookb0v.jpg",
      link: "https://e-mediauniversity.io/",
      tags: t.raw("emedia.tags").map((label: string) => ({
        label,
        bg: "bg-purple-100",
        text: "text-purple-700",
      })),
    },
    {
      name: t("ust.name"),
      description: t("ust.description"),
      imageUrl:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1747221943/logoUST_eyzey1.png",
      link: "https://ust-io.com/",
      tags: t.raw("ust.tags").map((label: string) => ({
        label,
        bg: "bg-blue-100",
        text: "text-blue-700",
      })),
    },
    {
      name: t("aeli.name"),
      description: t("aeli.description"),
      imageUrl:
        "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1746176127/Candidature/admin_20250502085526.jpg",
      link: "https://www.facebook.com/profile.php?id=100064225684491",
      tags: t.raw("aeli.tags").map((label: string) => ({
        label,
        bg: "bg-orange-100",
        text: "text-orange-700",
      })),
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full mb-5"></div>
        </div>
        <SectionHeader />
        <div className="grid grid-cols-1">
          <SynergyStatement />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {universities.map((uni, idx) => (
            <UniversityCard key={idx} {...uni} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitesSection;
