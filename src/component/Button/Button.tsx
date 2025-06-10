import React from "react";

interface AnimatedButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  color?: string; // ex: 'green', 'blue', etc.
  size?: "sm" | "md" | "lg" | "xl"; // Nouvelle prop pour les tailles
}

const sizeClasses = {
  sm: "text-xs px-4 py-1.5",
  md: "text-sm px-6 py-2",
  lg: "text-base px-8 py-3",
  xl: "text-lg px-10 py-4",
};

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label = "Devenir membre",
  onClick,
  className = "",
  color = "green",
  size = "md",
}) => {
  const textColor = `text-${color}-500`;
  const bgColor = `bg-${color}-500`;
  const borderColor = `border-${color}-500`;
  const hoverTextColor = "group-hover:text-white";
  const sizeClass = sizeClasses[size];
  console.log(borderColor);
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer rounded font-semibold overflow-hidden relative z-10 border group  border-${color}-500 ${sizeClass} ${className}`}
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
