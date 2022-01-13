import React from "react";

export const ProgressBar = ({ onChange, step }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-12 md:mb-16">
        {/* create an array of length 4 */}
        {Array.from({ length: 4 }).map((item, index) => {
          return (
            <div key={index} className="relative flex items-center">
              <div
                onClick={() => {
                  onChange(index + 1);
                }}
                className={`h-8 w-8 rounded-full flex items-center cursor-pointer
                 justify-center text-white ${
                   index + 1 <= step
                     ? "bg-[#664de5]"
                     : "bg-gray-50 border text-black"
                 } `}
              >
                {index + 1}
              </div>
              {/* hide progress meter for last step */}
              {index < 3 && (
                <div className="md:w-20 w-14 bg-gray-200 h-[2px]">
                  <div
                    className={`bg-[#664de5] h-[2px] transition-all duration-100 ${
                      index + 1 < step
                        ? "w-full"
                        : index + 1 === step
                        ? "w-1/2"
                        : "w-0"
                    }`}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
