// components/Card.tsx
import Image from "next/image";

export interface CardProps {
  color: "blue" | "red";
  icon: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const Card: React.FC<CardProps> = ({
  color,
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  const bgColor = `bg-green-200`;
  const hoverBgColor = `group-hover:bg-${color}-200`;
  const iconBgColor = `bg-green-500/10`;
  const textColor = `text-${color}-900`;

  return (
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div
        className={`absolute -right-4 -top-4 w-24 h-24 ${bgColor} rounded-full z-0 ${hoverBgColor} transition-colors duration-500`}
      />
      <div className="h-72 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover w-full h-full transform transition-transform duration-700"
        />
      </div>
      <div className="p-8 relative z-10">
        <div className="flex items-center mb-6">
          <div
            className={`w-16 h-16 ${iconBgColor} backdrop-blur-sm rounded-full flex items-center justify-center mr-5 shadow-lg`}
          >
            <span className="text-2xl">{icon}</span>
          </div>
          <h4 className={`text-2xl font-bold ${textColor}`}>{title}</h4>
        </div>
        <p className={`text-gray-600 ml-16 pl-5 border-l-2 border-green-500`}>
          {description}
        </p>
      </div>
    </div>
  );
};
