import React from "react";

interface AnimatedButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  color?: string; // ex: 'green', 'blue', etc.
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-xs px-4 py-1.5",
  md: "text-sm px-6 py-2",
  lg: "text-base px-8 py-3",
  xl: "text-lg px-10 py-4",
};

// Mapping des couleurs avec les classes Tailwind complètes
const colorClasses = {
  red: {
    text: "text-red-500",
    bg: "bg-red-500",
    border: "border-red-500",
  },
  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500",
    border: "border-blue-500",
  },
  green: {
    text: "text-green-500",
    bg: "bg-green-500",
    border: "border-green-500",
  },
  purple: {
    text: "text-purple-500",
    bg: "bg-purple-500",
    border: "border-purple-500",
  },
  yellow: {
    text: "text-yellow-500",
    bg: "bg-yellow-500",
    border: "border-yellow-500",
  },
  pink: {
    text: "text-pink-500",
    bg: "bg-pink-500",
    border: "border-pink-500",
  },
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label = "Devenir membre",
  onClick,
  className = "",
  color = "red",
  size = "md",
}) => {
  // Récupération des classes de couleur ou fallback vers red
  const colors =
    colorClasses[color as keyof typeof colorClasses] || colorClasses.red;

  const textColor = colors.text;
  const bgColor = colors.bg;
  const borderColor = colors.border;
  const hoverTextColor = "group-hover:text-white";
  const sizeClass = sizeClasses[size];

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded font-semibold overflow-hidden relative z-10 border group ${borderColor} sm:sm  md:${sizeClass} ${className}`}
    >
      <span
        className={`relative z-10 ${textColor} ${hoverTextColor} duration-500`}
      >
        {label}
      </span>
      <span
        className={`absolute w-full h-full ${bgColor} -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500`}
      />
      <span
        className={`absolute w-full h-full ${bgColor} -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500`}
      />
    </button>
  );
};

export default AnimatedButton;
