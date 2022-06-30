import React from "react";
import { Icon, ICON_NAMES } from "../lib/icons";

const OutlinedButton = ({
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
        return "border-purple_dark text-purple_dark focus:ring-slate-300";
      case "teal":
        return "border-teal_dark text-teal_dark focus:ring-slate-300";
      default:
        return "bg-purple_dark focus:ring-slate-300";
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
      className={`flex space-x-2 justify-center border-2 items-center text-white ${determineVariantClassNames()} hover:brightness-95 hover:shadow-sm focus:ring-2 focus:outline-none text-lg w-full sm:w-auto px-10 py-1 text-center filter`}
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

export default OutlinedButton;
