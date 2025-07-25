import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  className?: string;
}

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
        ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
