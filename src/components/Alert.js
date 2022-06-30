import React, { useContext } from "react";
import Slide from "@mui/material/Slide";

import AlertContext from "../context/Alert/AlertContext";
import { Icon, ICON_NAMES } from "../lib/icons";

const Alert = () => {
  const { initialState, show, message, duration, variant, progress, setAlert } =
    useContext(AlertContext);

  const determineVariantClassNames = () => {
    switch (variant) {
      case "info":
        return {
          parent:
            "bg-blue-100 rounded-sm dark:bg-blue-200 text-blue-700 dark:text-blue-800",
          message: "text-blue-700 dark:text-blue-800",
          button:
            "bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
          progress: "bg-blue-500 dark:bg-blue-500",
        };
      case "success":
        return {
          parent:
            "bg-emerald-100 rounded-sm dark:bg-emerald-200 text-emerald-700 dark:text-emerald-800",
          message: "text-emerald-700 dark:text-emerald-800",
          button:
            "bg-emerald-100 text-emerald-500 rounded-lg focus:ring-2 focus:ring-emerald-400 p-1.5 hover:bg-emerald-200 inline-flex h-8 w-8 dark:bg-emerald-200 dark:text-emerald-600 dark:hover:bg-emerald-300",
          progress: "bg-emerald-500 dark:bg-emerald-500",
        };
      case "warning":
        return {
          parent:
            "bg-yellow-100 rounded-sm dark:bg-yellow-200 text-yellow-700 dark:text-yellow-800",
          message: "text-yellow-700 dark:text-yellow-800",
          button:
            "bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
          progress: "bg-yellow-500 dark:bg-yellow-500",
        };
      case "error":
        return {
          parent:
            "bg-red-100 rounded-sm dark:bg-red-200 text-red-700 dark:text-red-800",
          message: "text-red-700 dark:text-red-800",
          button:
            "bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
          progress: "bg-red-500 dark:bg-red-500",
        };
      default:
        return {
          parent:
            "bg-blue-100 rounded-sm dark:bg-blue-200 text-blue-700 dark:text-blue-800",
          message: "text-blue-700 dark:text-blue-800",
          button:
            "bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
          progress: "bg-blue-500 dark:bg-blue-500",
        };
    }
  };

  return (
    <Slide direction="left" in={show} mountOnEnter unmountOnExit>
      <div className="absolute z-50 top-5 right-5">
        <div
          className={`flex p-3 ${determineVariantClassNames().parent}`}
          role="alert"
        >
          <Icon ICON_NAME={ICON_NAMES.INFO} className="w-5 h-5" />
          <div
            className={`ml-3 mr-2 text-sm font-medium ${
              determineVariantClassNames().message
            }`}
          >
            {message}
          </div>
          <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 ${
              determineVariantClassNames().button
            }`}
            aria-label="Close"
            onClick={() => {
              setAlert({
                show: false,
                progress: initialState.progress,
                duration: initialState.duration,
              });
            }}
          >
            <span className="sr-only">Close</span>
            <Icon ICON_NAME={ICON_NAMES.X} className="w-5 h-5" />
          </button>
          <div className="w-full left-0 bottom-1 transform ease-linear translate-y-full absolute h-1 bg-transparent">
            <div
              className={`h-1 rounded-r-sm ease-linear ${
                determineVariantClassNames().progress
              }`}
              style={{
                width: `${progress}%`,
                transition: "width 1.01s 0s linear",
              }}
            ></div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Alert;
