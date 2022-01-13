import React, { useState } from "react";

export const CardSelect = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <div className="flex items-center justify-between select-none mb-5">
      <div
        onClick={() => setSelectedCard(1)}
        className={`card h-[160px] w-[160px] p-4 flex justify-between flex-col 
        md:hover:bg-gray-100  border  rounded-md cursor-pointer
        ${selectedCard === 1 ? "border-[#664de5]" : ""}
        `}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              selectedCard === 1 ? "fill-[#664de5]" : "fill-black"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="font-semibold">For Myself</p>
        <p className="text-sm text-gray-400">
          Write better. Think more cleary. Stay organized.
        </p>
      </div>
      <div
        onClick={() => setSelectedCard(2)}
        className={`card h-[160px] w-[160px] p-4 flex justify-between flex-col 
        md:hover:bg-gray-100  border  rounded-md cursor-pointer
        ${selectedCard === 2 ? "border-[#664de5]" : ""}
        `}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              selectedCard === 2 ? "fill-[#664de5]" : "fill-black"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <p className="font-semibold">With my team</p>
        <p className="text-sm text-gray-400">
          Wikis, docs, tasks & projects, all in one place.
        </p>
      </div>
    </div>
  );
};
