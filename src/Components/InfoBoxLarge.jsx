import React from "react";

export const InfoBoxLarge = ({ icon, title, description, content, corner, inFocus }) => {
  return (
    <div
      class={`relative ring-2 ring-black/5 bg-red px-4 min-h-full py-16 transition-all ease-in-out rounded-4xl mx-4 bg-transparent backdrop-blur-2xl`}
    >
      <div class="flex flex-col items-center justify-center text-center">
        <div class="mb-8 text-4xl">{icon}</div>
        <div class="mb-8">
          <h2 class="mb-4 text-2xl font-bold">{title}</h2>
          <p class="text-center text-gray-500">{description}</p> 
        </div>
        {content.map((item, index) => (
          <div>
            <p class="py-2 text-lg font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
