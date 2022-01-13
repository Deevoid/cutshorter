import React from "react";

export const FormHeader = (props) => {
  const { title, subTitle } = props;
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl md:text-3xl mb-3">{title}</h1>
      <p className=" font-medium text-gray-400 text-base ">{subTitle}</p>
    </div>
  );
};
