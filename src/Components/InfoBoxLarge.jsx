import React from "react";
import { SkillPill } from "./SkillPill";

export const InfoBoxLarge = ({
  icon,
  title,
  content,
}) => {
  return (
    <div
      class={`group relative mx-4 min-h-full rounded-2xl bg-transparent p-8 ring-2 ring-black/5 backdrop-blur-2xl transition-all duration-300 ease-in-out hover:shadow-lg hover:ring-emerald-300`}
    >
      <div class="flex flex-col items-start justify-center text-center">
        <div class="mb-8 flex h-full flex-row items-center justify-center gap-4 text-2xl">
          <span class="h-min rounded-xl bg-teal-100 p-2.5 text-emerald-600">
            {icon}
          </span>
          <h2 class="text-center text-xl font-semibold transition-all duration-300 ease-in-out group-hover:text-emerald-600">
            {title}
          </h2>
        </div>
        <div class="flex flex-wrap gap-2">
          {content.map((item, index) => (
            <SkillPill skill={item} key={index} slateBase={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
