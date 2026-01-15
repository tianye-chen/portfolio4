import React from "react";

export const SkillPill = ({ skill, slateBase }) => {
  return (
    <div
      className={`text-md flex justify-center overflow-hidden rounded-full px-2.5 py-0.5 font-medium whitespace-nowrap outline-emerald-500 transition-all ease-in-out hover:bg-white hover:text-emerald-500 hover:outline-1 ${slateBase ? "bg-slate-100 text-black" : "bg-emerald-500 text-white"}`}
    >
      <div className="pointer-events-none">{skill}</div>
    </div>
  );
};
