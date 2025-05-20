// components/CardsSection.tsx
import { Card, CardProps } from "./Card";

const cards: CardProps[] = [
  {
    color: "blue",
    icon: "💡",
    title: "L'innovation dans les soins de santé",
    description:
      "Mise en œuvre de solutions technologiques pour améliorer l'accès et la qualité des services médicaux dans les zones les plus reculées.",
    imageSrc: "/api/placeholder/600/500",
    imageAlt: "Technologies médicales innovantes en Afrique",
  },
  {
    color: "green",
    icon: "🏥",
    title: "Le renforcement des infrastructures sanitaires",
    description:
      "Appui à la construction, la réhabilitation et l'équipement des centres de santé pour garantir des services de qualité.",
    imageSrc: "/api/placeholder/600/500",
    imageAlt: "Centre de santé moderne en construction en Afrique",
  },
  {
    color: "green",
    icon: "👩‍⚕️",
    title: "La formation du personnel de santé",
    description:
      "Renforcement des compétences des professionnels pour des soins plus efficaces et adaptés aux besoins locaux.",
    imageSrc: "/api/placeholder/600/500",
    imageAlt: "Session de formation du personnel médical en Afrique",
  },
  {
    color: "blue",
    icon: "🤝",
    title: "Le partenariat communautaire",
    description:
      "Implication des populations locales pour des actions de santé durable et adaptées aux besoins spécifiques des communautés.",
    imageSrc: "/api/placeholder/600/500",
    imageAlt: "Communauté locale participant à une initiative de santé",
  },
];

const CardsSection: React.FC = () => (
  <div className="relative mb-32">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  </div>
);

export default CardsSection;
