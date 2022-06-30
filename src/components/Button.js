import React from "react";
import { Icon, ICON_NAMES } from "../lib/icons";

const Button = ({
  text,
  disabled,
  type,
  variant = "purple",
  icon = true,
  ICON_NAME,
  onClick,
}) => {
  //

  const determineVariantClassNames = () => {
    switch (variant) {
      case "purple":
        return "bg-purple_light focus:ring-slate-300";
      case "pink":
        return "bg-pink_dark focus:ring-slate-300";
      default:
        return "bg-purple_light focus:ring-slate-300";
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      type={type}
      disabled={disabled}
      className={`flex space-x-2 justify-center items-center text-white ${determineVariantClassNames()} hover:brightness-95 hover:shadow-sm focus:ring-2 focus:outline-none text-lg w-full sm:w-auto px-8 py-1 text-center filter`}
    >
      <span>{text}</span>
      {icon && (
        <Icon
          ICON_NAME={ICON_NAME ? ICON_NAME : ICON_NAMES.CHEVRON_RIGHT}
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
