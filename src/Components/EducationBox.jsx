import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip, TextPlugin } from "gsap/all";

export const EducationBox = ({
  idx,
  degree,
  university,
  focusArea,
  duration,
  bg,
  visible,
  selected,
  handleFocus,
}) => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(Flip);

  const corners = idx === 0 ? "rounded-l-4xl" : "rounded-r-4xl";
  const eduButtonTextRef = useRef();

  const handleButtonClick = () => {
    handleFocus();

    const tl = gsap.timeline();

    tl.to(eduButtonTextRef.current, {
      translateY: 2500,
      duration: 0.3,
    }).to(eduButtonTextRef.current, {
      text: selected ? "Learn More" : "Return",
      translateY: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      class={`group/main relative z-10 min-h-[60vh] bg-center text-white ${corners} ${visible ? "min-w-1/2" : ""} ${selected ? "min-w-screen" : "min-w-0"} transition-all duration-1000 ease-in-out`}
      style={{ backgroundImage: `url(${bg}.jpg)`, backgroundSize: "auto" }}
    >
      <div
        class={`absolute inset-0 -z-10 bg-black opacity-35 transition-all duration-300 ease-in-out group-hover/main:opacity-40 ${corners}`}
      ></div>

      <div
        class={`flex min-h-full min-w-full flex-col justify-center text-center text-nowrap`}
      >
        <p class="font-lexend text-6xl font-semibold">{university}</p>
        <p class="text-sm">{duration}</p>
        <p class="mb-2 font-semibold">{degree}</p>
        <p class="">Focus in {focusArea}</p>
      </div>

      <div
        class={`group/button absolute bottom-1/5 left-1/2 hidden min-w-xs -translate-1/2 items-center justify-center xl:flex ${visible ? "" : "scale-x-0"} overflow-hidden text-nowrap transition-all duration-1000 ease-in-out`}
        onClick={handleButtonClick}
      >
        <div class="px-16 pt-4 pb-4.5 transition-all duration-500 ease-in-out hover:cursor-pointer">
          <p
            class="min-h-full text-3xl font-thin tracking-tight transition-all duration-500 ease-in-out group-hover/button:tracking-widest"
            ref={eduButtonTextRef}
          >
            Learn More
          </p>
          <div class="absolute top-0 left-1/2 min-h-full min-w-0 border-t-1 border-b-1 border-white transition-all duration-500 ease-in-out group-hover/button:left-0 group-hover/button:min-w-full">
            <br />
          </div>
          <div class="absolute top-0 left-0 -z-10 min-h-full min-w-full bg-gray-500 opacity-10 transition-all duration-500 ease-in-out group-hover/button:left-1/2 group-hover/button:min-w-0">
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
