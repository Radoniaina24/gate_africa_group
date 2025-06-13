import { ArrowRight } from "lucide-react";
import { Article } from "./Post";
import { FC } from "react";
import Image from "next/image";
/* eslint-disable */
export const ArticleCard: FC<Article> = ({
  category,
  categoryColor,
  title,
  excerpt,
  date,
  readTime,
  link,
  gradient,
  imageUrl,
  imageAlt = title,
}) => {
  /**
   * Formate la date en français
   * @param dateString - Date au format string
   * @returns Date formatée
   */
  const formatDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch (error) {
      console.warn("Format de date invalide:", dateString);
      return dateString;
    }
  };

  return (
    <article
      className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-300 group shadow-xl hover:shadow-2xl"
      role="article"
      aria-labelledby={`article-title-${title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      {/* En-tête avec image ou gradient */}
      <header className="relative">
        <div
          className={`aspect-video relative overflow-hidden ${
            !imageUrl ? `bg-gradient-to-br ${gradient}` : ""
          }`}
        >
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                width={500}
                height={500}
                onError={(e) => {
                  // Fallback vers le gradient si l'image ne charge pas
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add(`bg-gradient-to-br`, gradient);
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {/* Badge catégorie */}
          <div className="absolute bottom-4 left-4 z-10">
            <span
              className={`${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm`}
              role="badge"
            >
              {category}
            </span>
          </div>
        </div>
      </header>

      {/* Contenu de l'article */}
      <div className="p-6">
        {/* Métadonnées */}
        <div
          className="flex items-center text-gray-400 text-sm mb-3"
          role="group"
          aria-label="Métadonnées de l'article"
        >
          <time dateTime={date} className="flex items-center">
            {formatDate(date)}
          </time>
          <span className="mx-2" aria-hidden="true">
            •
          </span>
          <span
            className="flex items-center"
            aria-label={`Temps de lecture: ${readTime}`}
          >
            {readTime}
          </span>
        </div>

        {/* Titre */}
        <h3
          id={`article-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-200 leading-tight"
        >
          {title}
        </h3>

        {/* Extrait */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Lien de lecture */}
        <a
          href={link}
          className="inline-flex items-center text-red-400 hover:text-red-300 text-sm font-medium transition-colors duration-200 group/link"
          aria-label={`Lire l'article complet: ${title}`}
        >
          <span>Lire la suite</span>
          <ArrowRight
            className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};
