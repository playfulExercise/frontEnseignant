import React from "react";

export default function Button({
  children,
  additionalClass,
  setW,
  typeButton,
  ...buttonProps
}) {
  return (
    <button
      className={`group relative ${
        setW ? setW : "w-full"
      } flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white ${
        !typeButton
          ? "bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          : "bg-red-800 hover:bg-red-600 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700"
      }  transition duration-150 ease-in-out ${additionalClass}`}
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
