import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip, TextPlugin } from "gsap/all";
import { FaExternalLinkAlt } from "react-icons/fa";

export const EducationBox = ({
  idx,
  degree,
  university,
  focusArea,
  duration,
  bg,
  courses,
  gpa,
  visible,
  selected,
  handleFocus,
}) => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(Flip);

  const corners = idx === 0 ? "rounded-l-4xl" : "rounded-r-4xl";
  const animTransition = "transition-all ease-in-out";
  const eduButtonTextRef = useRef();

  const handleButtonClick = () => {
    handleFocus();

    const tl = gsap.timeline();

    tl.to(eduButtonTextRef.current, {
      translateY: 2500,
      duration: 0.35,
      onComplete: () => {
        eduButtonTextRef.current.textContent = selected
          ? "Learn More"
          : "Return";
      },
    }).to(eduButtonTextRef.current, {
      translateY: 0,
      duration: 0.35,
    });
  };

  return (
    <div
      class={`group/main relative z-10 min-h-[60vh] bg-center text-white ${corners} ${visible ? "min-w-1/2" : ""} ${selected ? "min-w-screen" : "min-w-0"} ${animTransition} duration-1000`}
      style={{ backgroundImage: `url(${bg}.jpg)`, backgroundSize: "auto" }}
    >
      <div
        class={`absolute inset-0 -z-10 bg-black opacity-45 ${animTransition} duration-500 group-hover/main:opacity-60 ${corners}`}
      ></div>

      <div
        class={`absolute z-10 flex min-h-full min-w-1/2 flex-col justify-center ${selected ? "right-0" : "invisible -right-[75vw]"} ${animTransition} duration-1000`}
      >
        {/*TODO: Make absolutes relative to the relevant courses box*/}
        <div class="ml-6 flex max-w-6/9 flex-col items-start justify-start border-y py-12 text-nowrap">
          {courses.map((course, index) => (
            <div class={`hover:scale-110 ${animTransition} duration-200`}>
              <p class="mr-2 text-3xl">{course}</p>
            </div>
          ))}
        </div>

        <div class="font-lexend mb-4 text-9xl tracking-widest text-nowrap">
          <h1 class="absolute top-0">RELEVANT</h1>
          <h1 class="absolute top-[20rem] -right-[17rem] rotate-90">COURSES</h1>
          <h1 class="absolute bottom-0">CGPA: {gpa}</h1>
        </div>
      </div>

      <div class="relative h-full min-h-[60vh] w-[50vw]">
        <div
          class={`absolute flex min-h-full min-w-full flex-col justify-center text-center ${animTransition} text-nowrap duration-[850ms]`}
        >
          <p class="font-lexend text-6xl font-semibold">{university}</p>
          <p class="text-sm">{duration}</p>
          <p class="mb-2 font-semibold">{degree}</p>
          <p class="">Focus in {focusArea}</p>
        </div>

        <div
          class={`group/button absolute bottom-1/5 left-1/2 hidden min-w-xs -translate-1/2 items-center justify-center overflow-hidden text-nowrap xl:flex ${animTransition} duration-[850ms]`}
          onClick={handleButtonClick}
        >
          <div
            class={`px-16 pt-4 pb-4.5 ${animTransition} duration-500 hover:cursor-pointer`}
          >
            <p
              class={`min-h-full text-3xl font-thin tracking-tight ${animTransition} duration-500 group-hover/button:tracking-widest`}
              ref={eduButtonTextRef}
            >
              Learn More
            </p>
            <div
              class={`absolute top-0 left-1/2 min-h-full min-w-0 border-t-1 border-b-1 border-white ${animTransition} duration-500 group-hover/button:left-0 group-hover/button:min-w-full`}
            >
              <br />
            </div>
            <div
              class={`absolute top-0 left-0 -z-10 min-h-full min-w-full bg-gray-500 opacity-10 ${animTransition} duration-500 group-hover/button:left-1/2 group-hover/button:min-w-0`}
            >
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
