import { FC } from "react";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "./PostCard";

export type Article = {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  link: string;
  gradient: string;
  imageUrl?: string;
  imageAlt?: string;
};

const articles: Article[] = [
  {
    id: "1",
    category: "Économie",
    categoryColor: "bg-red-500",
    title: "L'économie numérique africaine en pleine expansion",
    excerpt:
      "Une analyse approfondie de la croissance remarquable du secteur numérique sur le continent africain et ses implications pour l’avenir économique...",
    date: "2025-06-15",
    readTime: "5 min de lecture",
    link: "#",
    gradient: "from-red-400 to-red-600",
    imageUrl:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749795681/gateAfricaMagazine_tippo2.jpg",
  },
  {
    id: "2",
    category: "Politique",
    categoryColor: "bg-red-600",
    title: "Nouvelles réformes démocratiques en Afrique de l’Ouest",
    excerpt:
      "Examen des récentes initiatives politiques visant à renforcer la gouvernance démocratique dans plusieurs pays d’Afrique de l’Ouest...",
    date: "2025-06-14",
    readTime: "7 min de lecture",
    link: "#",
    gradient: "from-red-500 to-red-700",

    imageUrl:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749795681/gateAfricaMagazine_tippo2.jpg",
  },
  {
    id: "3",
    category: "Social",
    categoryColor: "bg-red-700",
    title: "Innovation éducative : l’Afrique à la pointe",
    excerpt:
      "Découvrez comment les innovations technologiques transforment l’éducation africaine et créent de nouvelles opportunités pour la jeunesse...",
    date: "2025-06-13",
    readTime: "6 min de lecture",
    link: "#",
    gradient: "from-red-600 to-red-800",
    imageUrl:
      "https://res.cloudinary.com/dbpoyo4gw/image/upload/v1749795681/gateAfricaMagazine_tippo2.jpg",
  },
];

const ArticlesSection: FC = () => (
  <section className="relative z-10 max-w-7xl mx-auto px-6 pb-16">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Derniers <span className="text-red-400">Articles</span>
      </h2>
      <p className="text-gray-300 text-lg">
        Découvrez nos analyses et reportages les plus récents
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>

    <div className="text-center">
      <a
        href="#"
        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center mx-auto group"
      >
        Voir tous les articles
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </section>
);

export default ArticlesSection;
