import React from "react";

export const Button = (props) => {
  const { text, onClick, type = "button" } = props;
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className="text-center block bg-indigo-600 p-3 w-full rounded-md text-gray-200 hover:bg-indigo-800 transition-colors duration-200"
    >
      {text}
    </button>
  );
};
