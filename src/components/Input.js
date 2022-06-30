import React from "react";

const Input = ({ type, name, label, onChange, value }) => {
  return (
    <div className="flex flex-col space-y-0.5">
      <label
        className="font-light tracking-wide pl-1 capitalize"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="bg-gray-50 border text-xs border-slate-200 text-gray-900 rounded-md focus:ring-slate-500 focus:border-slate-500 block w-full px-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
      />
    </div>
  );
};

export default Input;
