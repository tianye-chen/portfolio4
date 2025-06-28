import { React, useRef, useState } from "react";
import { PiHandWavingFill } from "react-icons/pi";
import { gsap } from "gsap";
import { links, broad_skills } from "../Data/data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(useGSAP);

  const firstNameBGLargeRef = useRef();
  const lastNameBGLargeRef = useRef();
  const nameCenterSectionRef = useRef([]);
  const handWaveIconRef = useRef([]);
  const downArrowRef = useRef();
  const socialsRef = useRef([]);
  const socialIconsRef = useRef([]);
  const typewriterRef = useRef([]);

  const [gradPos, setGradPos] = useState({ x: 50, y: 50 });

  const refPush = (el, ref) => {
    ref.current.push(el);
  };

  // Moving gradient background for name
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    setGradPos({ x, y });
  };

  useGSAP(() => {
    // Set initial properties for social media icons on the name page
    socialIconsRef.current.forEach((icon) => {
      gsap.set(icon, { opacity: 1, rotate: 0, scale: 1 });
    });

    gsap.set(firstNameBGLargeRef.current, { opacity: 0, translateX: -1000 });
    gsap.to(firstNameBGLargeRef.current, {
      opacity: 0.05,
      translateX: 0,
      duration: 4,
      ease: "power1.inOut",
    });

    gsap.set(lastNameBGLargeRef.current, { opacity: 0, translateX: 1000 });
    gsap.to(lastNameBGLargeRef.current, {
      opacity: 0.05,
      translateX: 0,
      duration: 4,
      ease: "power1.inOut",
    });

    nameCenterSectionRef.current.forEach((item) => {
      gsap.set(item, { opacity: 0, translateY: -30 });
    });

    socialsRef.current.forEach((item) => {
      gsap.set(item, { opacity: 0, translateY: 100 });
    });

    socialsRef.current.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        translateY: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    });

    const startUpTimeLine = gsap.timeline({});

    nameCenterSectionRef.current.forEach((item, index) => {
      startUpTimeLine.to(
        item,
        {
          opacity: 1,
          translateY: 0,
          duration: 1.5,
        },
        0.5 * index,
      );
    });

    // For text loop on the name page
    const typewriterCursorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });
    const typewriterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Cycle through each skill in the loop with typing effect
    broad_skills.forEach((skill) => {
      typewriterRef.current.forEach((el) => {
        typewriterTimeline.to(el, {
          duration: 2,
          text: skill,
          ease: "power1.inOut",
        });
      });
    });

    // Animate the blinking cursor effect
    typewriterRef.current.forEach((el) => {
      typewriterCursorTimeline.fromTo(
        el,
        {
          borderRightColor: "#10b981",
          duration: 1,
          repeat: -1,
          ease: "steps(1)",
        },
        {
          borderRightColor: "transparent",
          duration: 1,
          repeat: -1,
          ease: "steps(1)",
        },
      );
    });

    // For hand icon waving effect on the hand page
    const handWaveTimeline = gsap.timeline({ repeat: 2 });

    handWaveTimeline
      .to(handWaveIconRef.current, { rotate: 15, duration: 0.25, ease: "none" })
      .to(handWaveIconRef.current, { rotate: -15, duration: 0.5, ease: "none" })
      .to(handWaveIconRef.current, { rotate: 0, duration: 0.25, ease: "none" });

    // Down arrow icon
    gsap.to(downArrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      socialIconsRef.current.forEach((item) => {
        gsap.killTweensOf(item);
      });

      typewriterRef.current.forEach((item) => {
        gsap.killTweensOf(item);
      });

      nameCenterSectionRef.current.forEach((item) => {
        gsap.killTweensOf(item);
      });

      socialsRef.current.forEach((item) => {
        gsap.killTweensOf(item);
      });

      gsap.killTweensOf(firstNameBGLargeRef.current);
      gsap.killTweensOf(lastNameBGLargeRef.current);
      gsap.killTweensOf(downArrowRef.current);
    };
  }, []);

  // Mouse enter and leave effects for icons, rotates and scales the icon
  const handleIconMouseEnter = (index) => {
    gsap.to(socialIconsRef.current[index], {
      rotate: rand(-20, 20),
      duration: 0.3,
      scale: 1.2,
      ease: "power2.out",
    });
  };

  const handleIconMouseLeave = (index) => {
    gsap.to(socialIconsRef.current[index], {
      opacity: 1,
      rotate: 0,
      duration: 0.3,
      scale: 1,
      ease: "power2.in",
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {/** Dotted background pattern */}
      <div class="absolute -z-10 min-h-screen min-w-screen bg-[radial-gradient(#e5e7eb_4px,transparent_0px)] [background-size:64px_64px]"></div>

      <div class="relative flex min-h-screen flex-row items-center justify-center gap-8 overflow-hidden pb-24 text-center md:text-left">
        <div
          class="font-lexend pointer-events-none absolute -top-1.5 left-4 hidden min-w-screen text-left text-base/85 font-bold opacity-5 sm:block sm:text-[15rem] md:text-[26rem]"
          ref={firstNameBGLargeRef}
        >
          DANIEL
        </div>
        <div
          class="font-lexend pointer-events-none absolute bottom-0 hidden min-w-screen text-right text-base/85 font-bold opacity-5 sm:block sm:text-[15rem] md:text-[26rem]"
          ref={lastNameBGLargeRef}
        >
          CHEN
        </div>

        <div class="">
          <h1
            class="flex items-center justify-center text-3xl font-extrabold text-emerald-500 font-stretch-150% md:justify-start"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            {" "}
            <PiHandWavingFill class="mr-2" ref={handWaveIconRef} /> Hello,
            I'm{" "}
          </h1>
          <h1
            class={`font-roboto mb-4 bg-clip-text text-5xl leading-normal font-extrabold text-transparent md:text-6xl`}
            style={{
              backgroundImage: `radial-gradient(circle at ${gradPos.x}% ${gradPos.y}%, #a855f7, #10b981, #0ea5e9)`,
            }}
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            Daniel Chen
          </h1>
          <p
            class="mb-4 text-xl font-bold text-emerald-500"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            Master's Graduate in Computer Science
          </p>

          <p
            class="absolute hidden text-center text-4xl font-light md:block"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            Specializing in{" "}
            <span
              class="border-r-2 border-emerald-500 pr-1"
              ref={(el) => (typewriterRef.current[0] = el)}
            >
              {broad_skills[broad_skills.length - 1]}
            </span>
          </p>

          <div
            class="absolute left-1 flex min-w-screen flex-col items-center gap-2 text-center text-2xl font-light md:hidden"
            ref={(el) => refPush(el, nameCenterSectionRef)}
          >
            <p> Specializing in </p>
            <span
              class="border-r-2 border-emerald-500 pr-1"
              ref={(el) => (typewriterRef.current[1] = el)}
            ></span>
          </div>
        </div>
        <div
          class="absolute bottom-1/5 flex min-w-screen flex-col items-center justify-center gap-6 px-6 text-emerald-500"
          ref={(el) => refPush(el, socialsRef)}
        >
          <h1 class="font-lexend text-2xl">
            Let's{" "}
            <span class="relative before:absolute before:-inset-1 before:skew-y-4 before:bg-emerald-500">
              <span class="relative mr-1 text-white">Connect</span>
            </span>
          </h1>
          <div
            class="flex gap-6 text-3xl"
            ref={(el) => refPush(el, socialsRef)}
          >
            {[FiGithub, FiLinkedin, IoMailOutline].map((Icon, index) => (
              <a
                key={index}
                href={links[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  key={index}
                  ref={(uniqueRef) =>
                    (socialIconsRef.current[index] = uniqueRef)
                  }
                  onMouseEnter={() => handleIconMouseEnter(index)}
                  onMouseLeave={() => handleIconMouseLeave(index)}
                  class="cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>

        <IoIosArrowDown
          class="absolute bottom-10 flex justify-center text-4xl text-emerald-500"
          ref={downArrowRef}
        />
      </div>
    </div>
  );
};
