import React from "react";

export const SkillPill = ({ skill }) => {
  return (
    <div class="flex justify-center overflow-hidden rounded-full bg-emerald-500 px-2 pb-0.5 whitespace-nowrap text-white outline-emerald-500 transition-all ease-in-out hover:bg-white hover:text-emerald-500 hover:outline-1">
      {skill}
    </div>
  );
};
