import React, { use, useEffect, useRef } from "react";
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
  const sidePanelRef = useRef();
  const course_list = (
    <div class="relative flex max-w-fit flex-col items-center border-y py-4 text-nowrap xl:ml-6 xl:items-start xl:py-12">
      {courses.map((course, index) => (
        <div class="transition-transform duration-200 hover:scale-110">
          <p class="mr-2 text-xl">{course}</p>
        </div>
      ))}
    </div>
  );

  useGSAP(() => {
    return () => {
      gsap.killTweensOf(eduButtonTextRef.current);
    };
  }, []);

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
      class={`group/main relative z-10 flex min-h-[100vh] items-center justify-center bg-center text-white xl:block xl:min-h-[45rem] ${corners} ${visible ? "min-w-1/2" : ""} ${selected ? "min-w-screen" : "min-w-0"} ${animTransition} duration-1000`}
      style={{ backgroundImage: `url(${bg}.jpg)`, backgroundSize: "auto" }}
    >
      <div
        class={`absolute inset-0 -z-10 bg-black opacity-45 ${animTransition} duration-500 group-hover/main:opacity-60 ${corners}`}
      ></div>

      <div
        class={`absolute z-10 hidden min-h-full min-w-1/2 flex-col justify-center xl:flex ${selected ? "right-0" : "invisible -right-[75vw]"} ${animTransition} duration-1000`}
        ref={sidePanelRef}
      >
        {course_list}

        <div class="font-lexend mb-4 hidden tracking-widest text-nowrap xl:block xl:text-8xl 2xl:absolute 2xl:text-9xl">
          <h1 class="absolute top-0 2xl:-top-[23rem]">RELEVANT</h1>
          <h1 class="absolute top-[21rem] left-[23rem] rotate-90 2xl:-top-[3rem] 2xl:left-[31rem]">
            COURSES
          </h1>
          <h1 class="absolute bottom-0 2xl:-bottom-[23rem]">CGPA: {gpa}</h1>
        </div>
      </div>

      <div class="relative h-full min-h-[100vh] w-[100vw] md:w-[50vw] lg:min-h-[60vh]">
        <div
          class={`absolute flex min-h-full min-w-full flex-col items-center justify-center px-10 text-center ${animTransition} 3xl:text-nowrap duration-[850ms]`}
        >
          <div class="relative mb-2">
            <img src={`${bg}_icon.png`} class="max-w-48" />
            <img
              src={`${bg}_icon.png`}
              class="absolute top-1 left-1 -z-10 max-w-48 brightness-30"
            />
          </div>

          <div className="mb-12">
            <p class="font-lexend mb-4 text-6xl font-semibold">{university}</p>
            <p class="text-sm">{duration}</p>
            <p class="mb-2 font-semibold">{degree}</p>
            <p class="xl:mb-6">Focus in {focusArea}</p>
          </div>

          <div class="xl:hidden">
            <p class="mb-2 text-xl font-bold">Relevant Courses</p>
            <div class="mb-2">{course_list}</div>
            <p class="text-xl font-bold">CGPA: {gpa}</p>
          </div>
        </div>

        <div
          class={`group/button absolute bottom-1/6 left-1/2 hidden min-w-xs -translate-1/2 items-center justify-center overflow-hidden text-nowrap xl:flex ${animTransition} duration-[850ms]`}
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
