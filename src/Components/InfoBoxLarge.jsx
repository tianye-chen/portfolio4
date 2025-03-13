import React from "react";

export const InfoBoxLarge = ({ icon, title, description, content, corner }) => {
  return (
    <div
      class={`border-1 border-gray-200 bg-white px-4 py-16 transition-all ease-in-out hover:scale-110 hover:rounded-4xl hover:shadow-lg ${corner === "left" ? "rounded-t-4xl md:rounded-t-none md:rounded-l-4xl" : ""} ${corner === "right" ? "rounded-b-4xl md:rounded-r-4xl md:rounded-b-none" : ""}`}
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
