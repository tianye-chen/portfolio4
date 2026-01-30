import React from "react";
import { ItemPill } from "./ItemPill";

export const InfoBoxLarge = ({
  icon,
  title,
  content,
}) => {
  return (
    <div
      className={`group relative mx-4 min-h-full rounded-2xl bg-transparent p-8 ring-2 ring-border-inactive/5 backdrop-blur-2xl transition-all duration-300 ease-in-out hover:shadow-lg hover:ring-border-active`}
    >
      <div className="flex flex-col items-start justify-center text-center">
        <div className="mb-8 flex h-full flex-row items-center justify-center gap-4 text-2xl">
          <span className="h-min rounded-xl bg-icon-background p-2.5 text-tertiary-text">
            {icon}
          </span>
          <h2 className="text-center text-xl font-semibold transition-all duration-300 ease-in-out group-hover:text-tertiary-text">
            {title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.map((item, index) => (
            <ItemPill item={item} key={index} slateBase={true} />
          ))}
        </div>
      </div>
    </div>
  );
};
