import {
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

type InfoCardProps = {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  description?: string;
  list?: string[];
};

const InfoCard = ({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  description,
  list,
}: InfoCardProps) => (
  <div className={`bg-gray-100 bg-opacity-15 rounded-xl p-6 backdrop-blur-sm`}>
    <div
      className={`flex items-center justify-center w-12 h-12 ${iconBg} bg-opacity-20 rounded-full mb-4 mx-auto`}
    >
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
      {title}
    </h3>
    {description && (
      <p className="text-sm leading-relaxed text-blue-500 text-center italic">
        {description}
      </p>
    )}
    {list && (
      <div className="space-y-3 mt-3">
        {list.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-green-300 mt-0.5 flex-shrink-0" />
            <p className="text-sm leading-relaxed text-blue-500">{item}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const cards: InfoCardProps[] = [
  {
    icon: Lightbulb,
    iconColor: "text-yellow-300",
    iconBg: "bg-yellow-500",
    title: "Notre Devise",
    description:
      "« Construire l'Afrique de demain par l'éducation, l'innovation et les opportunités. »",
  },
  {
    icon: Target,
    iconColor: "text-green-300",
    iconBg: "bg-green-500",
    title: "Notre Vision",
    description:
      "Être un acteur panafricain de référence, capable de connecter les talents, les savoirs, les ressources et les entreprises autour de projets concrets de développement économique, technologique, éducatif et social.",
  },
  {
    icon: Users,
    iconColor: "text-red-300",
    iconBg: "bg-red-500",
    title: "Notre Mission",
    list: [
      "Solutions intégrées dans l'éducation, santé, technologie, agro-industrie, médias",
      "Former des professionnels pour la transformation économique",
      "Créer des passerelles vers les marchés internationaux",
      "Contribuer au développement durable des territoires",
    ],
  },
];

export default function Mission() {
  return (
    <div className="bg-gradient-to-br from-red-600 via-purple-600 to-blue-700 rounded-2xl p-8 text-white relative overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300 opacity-10 rounded-full -translate-x-16 translate-y-16"></div>

      <div className="relative">
        <div className="grid lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <InfoCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
