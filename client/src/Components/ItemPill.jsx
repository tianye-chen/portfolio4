import React from "react";

export const ItemPill = ({item, slateBase }) => {
  return (
    <div
      className={`text-md flex justify-center overflow-hidden rounded-full px-2.5 py-0.5 font-medium whitespace-nowrap outline-1 transition-all outline-transparent ease-in-out hover:bg-white hover:text-primary hover:outline-1 hover:outline-primary ${slateBase ? "bg-slate-100 text-black" : "bg-primary text-white"}`}
    >
      <div className="pointer-events-none">{item}</div>
    </div>
  );
};
