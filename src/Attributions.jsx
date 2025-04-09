import React from "react";
import { icons, attributions } from "./Components/aboutMeIcons";

export const Attributions = () => {
  return (
    <div class="pl-4">
      <p class="mb-4">Icon Attributions:</p>
      {icons.map((name, index) => (
        <div key={index} class="flex h-[48px] gap-4 hover:text-blue-600">
          <img src={`./about_me_icons/${name}.png`} />
          {attributions[name]}
        </div>
      ))}
    </div>
  );
};
