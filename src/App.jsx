import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import "./App.css";
import { LuGraduationCap, LuMousePointer2, LuBriefcase } from "react-icons/lu";
import {
  IoCodeSlash,
  IoMailOutline,
  IoExtensionPuzzleOutline,
} from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiHandWavingFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithub, FaLaptopCode, FaRegUser } from "react-icons/fa";
import { InfoBoxLarge } from "./Components/InfoBoxLarge";
import { SkillPill } from "./Components/SkillPill";
import { EducationBox } from "./Components/EducationBox";
import { animTransition } from "./Components/helpers";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(useGSAP);

  const [gradPos, setGradPos] = React.useState({ x: 50, y: 50 });
  const [eduInFocus, setEduInFocus] = React.useState(null);
  const iconsRef = useRef([]);
  const handWaveIconRef = useRef([]);
  const downArrowRef = useRef();
  const typewriterRef = useRef([]);
  const testRef = useRef();

  const links = [
    "https://github.com/tianye-chen",
    "https://www.linkedin.com/in/tianyechen/",
    "mailto:tianyechen1@gmail.com",
  ];

  const broad_skills = [
    "Machine Learning",
    "Deep Learning",
    "Reinforcement Learning",
    "Data Science",
    "Web Development",
    "Software Engineering",
    "Game Design & Development",
  ];

  const prog_skills = [
    "Python",
    "PyTorch",
    "JavaScript",
    "React",
    "C#",
    "Unity",
    "Java",
    "Firebase",
  ];

  const hobbies = [
    "Video Games",
    "Model Building",
    "Cooking",
    "Gym",
    "Gardening",
    "Hardware Tinkering",
    "Visiting New Places",
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "SUNY University at Buffalo",
      focusArea: "Artificial Intelligence",
      duration: "2023 - 2025",
      bg: "ub",
      courses: [
        "Introduction to Machine Learning",
        "Reinforcement Learning",
        "Introduction to Computer Vision",
        "Data Models and Query Language",
        "Data Intensive Computing",
        "Deep Learning",
      ],
      gpa: 3.6,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      university: "CUNY Brooklyn College",
      focusArea: "General Software Engineering",
      duration: "2019 - 2023",
      bg: "bc",
      courses: [
        "Data Structures",
        "Game Design and Development",
        "Analysis of Algorithms",
        "Large-Scale Web Applications",
        "Multimedia Computing",
        "Modern Programming Techniques",
      ],
      gpa: 3.7,
    },
  ];

  const experience = [
    {
      title: "Fellow",
      company: "CUNY Tech Prep",
      duration: "2022 - 2023",
      description:
        "Full-stack web development and professional development program",
      skills: [
        "JavaScript",
        "React",
        "TailwindCSS",
        "Express",
        "PostgreSQL",
        "Git",
        "MVC",
        "Agile",
        "Scrum",
        "CI/CD",
      ],
    },
  ];

  // Moving gradient background for name
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    setGradPos({ x, y });
  };

  const handleSetEduInFocus = (index) => {
    console.log(index);
    setEduInFocus((prev) => (index === prev ? null : index));
  };

  useGSAP(() => {
    // Set initial properties for icons
    iconsRef.current.forEach((icon) => {
      gsap.set(icon, { opacity: 1, rotate: 0, scale: 1 });
    });

    const typewriterCursorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });
    const typewriterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const handWaveTimeline = gsap.timeline({ repeat: 2 });

    handWaveTimeline
      .to(handWaveIconRef.current, { rotate: 15, duration: 0.25, ease: "none" })
      .to(handWaveIconRef.current, { rotate: -15, duration: 0.5, ease: "none" })
      .to(handWaveIconRef.current, { rotate: 0, duration: 0.25, ease: "none" });

    broad_skills.forEach((skill, index) => {
      typewriterRef.current.forEach((el) => {
        typewriterTimeline.to(el, {
          duration: 2,
          text: skill,
          ease: "power1.inOut",
        });
      });
    });

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

    // Down arrow icon
    gsap.to(downArrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      iconsRef.current.forEach((icon) => {
        gsap.killTweensOf(icon);
      });

      typewriterRef.current.forEach((tw) => {
        gsap.killTweensOf(tw);
      });

      gsap.killTweensOf(downArrowRef.current);
    };
  }, []);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Mouse enter and leave effects for icons, rotates and scales the icon
  const handleIconMouseEnter = (index) => {
    gsap.to(iconsRef.current[index], {
      rotate: rand(-20, 20),
      duration: 0.3,
      scale: 1.2,
      ease: "power2.out",
    });
  };

  const handleIconMouseLeave = (index) => {
    gsap.to(iconsRef.current[index], {
      opacity: 1,
      rotate: 0,
      duration: 0.3,
      scale: 1,
      ease: "power2.in",
    });
  };

  return (
    <div class="min-h-screen overflow-y-hidden" onMouseMove={handleMouseMove}>
      <div class="absolute -z-10 min-h-screen min-w-screen bg-[radial-gradient(#e5e7eb_4px,transparent_0px)] [background-size:64px_64px]"></div>

      <div class="relative flex min-h-screen flex-row items-center justify-center gap-8 overflow-hidden pb-24 text-center md:text-left">
        <div class="font-lexend pointer-events-none absolute -top-1.5 left-4 hidden min-w-screen text-left text-base/85 font-bold opacity-5 sm:block sm:text-[15rem] md:text-[26rem]">
          TIANYE
        </div>
        <div class="font-lexend pointer-events-none absolute bottom-0 hidden min-w-screen text-right text-base/85 font-bold opacity-5 sm:block sm:text-[15rem] md:text-[26rem]">
          CHEN
        </div>

        <div class="">
          <h1 class="flex items-center justify-center text-3xl font-extrabold text-emerald-500 font-stretch-150% md:justify-start">
            {" "}
            <PiHandWavingFill class="mr-2" ref={handWaveIconRef} /> Hello,
            I'm{" "}
          </h1>
          <h1
            class={`font-roboto mb-4 bg-clip-text text-5xl leading-normal font-extrabold text-transparent md:text-6xl`}
            style={{
              backgroundImage: `radial-gradient(circle at ${gradPos.x}% ${gradPos.y}%, #a855f7, #10b981, #0ea5e9)`,
            }}
          >
            Tianye Chen
          </h1>
          <p class="mb-4 text-xl font-bold text-emerald-500">
            Master's Graduate in Computer Science
          </p>

          <p class="absolute hidden text-center text-4xl font-light md:block">
            Specializing in{" "}
            <span
              class="border-r-2 border-emerald-500 pr-1"
              ref={(el) => (typewriterRef.current[0] = el)}
            >
              {broad_skills[broad_skills.length - 1]}
            </span>
          </p>

          <div class="absolute left-1 flex min-w-screen flex-col items-center gap-2 text-center text-2xl font-light md:hidden">
            <p> Specializing in </p>
            <span
              class="border-r-2 border-emerald-500 pr-1"
              ref={(el) => (typewriterRef.current[1] = el)}
            ></span>
          </div>
        </div>
        <div class="absolute bottom-1/5 flex min-w-screen flex-col items-center justify-center gap-6 px-6 text-emerald-500">
          <h1 class="font-lexend text-2xl" ref={testRef}>
            Let's{" "}
            <span class="relative before:absolute before:-inset-1 before:skew-y-4 before:bg-emerald-500">
              <span class="relative mr-1 text-white">Connect</span>
            </span>
          </h1>
          <div class="flex gap-6 text-3xl">
            {[FiGithub, FiLinkedin, IoMailOutline].map((Icon, index) => (
              <a
                key={index}
                href={links[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  key={index}
                  ref={(uniqueRef) => (iconsRef.current[index] = uniqueRef)}
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

      <section class="bg-teal-50 pt-40 pb-80">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center justify-center text-3xl font-bold">
            {" "}
            <FaRegUser class="mr-2" /> About Me
          </h2>
          <p class="mb-8 text-center text-lg font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            veniam minus eveniet ipsa excepturi, sit suscipit rerum quis commodi
            repellendus sapiente iusto incidunt corrupti voluptatum nobis
            officia magnam accusantium molestias?
          </p>
        </div>
      </section>

      <section class="-translate-y-70 pt-20">
        <div class="mx-auto max-w-5/6 rounded-4xl border-1 border-gray-300 bg-white shadow-lg shadow-gray-300 2xl:max-w-7xl">
          <div class="grid rounded-4xl md:grid-cols-3">
            <InfoBoxLarge
              icon={<FaLaptopCode />}
              title="What I can do"
              description={"Areas of expertise that I have worked on."}
              content={broad_skills}
              corner={"left"}
            />
            <InfoBoxLarge
              icon={<IoCodeSlash />}
              title="What I know"
              description={
                "Programming languages and tools I am proficient in."
              }
              content={prog_skills}
            />
            <InfoBoxLarge
              icon={<IoExtensionPuzzleOutline />}
              title="What my hobbies are"
              description={"Interests and activities I enjoy outside of work."}
              content={hobbies}
              corner={"right"}
            />
          </div>
        </div>
      </section>

      <section class="bg-teal-50 py-40">
        <div class="relative mx-auto px-4">
          <h2 class="pointer-events-none absolute -top-[16.3rem] flex items-center text-[15rem] font-bold">
            {/*<LuGraduationCap class="mr-2" /> */}{" "}
            <span class="opacity-25">Education</span>
          </h2>
          <div
            class={`relative flex min-h-[80vh] flex-col gap-4 overflow-hidden rounded-4xl md:flex-row md:gap-0`}
          >
            {education.map((edu, index) => (
              <EducationBox
                key={index}
                idx={index}
                degree={edu["degree"]}
                university={edu["university"]}
                focusArea={edu["focusArea"]}
                duration={edu["duration"]}
                bg={edu["bg"]}
                courses={edu["courses"]}
                gpa={edu["gpa"]}
                visible={(eduInFocus === index) | (eduInFocus === null)}
                selected={eduInFocus === index}
                handleFocus={() => handleSetEduInFocus(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section class="py-40">
        <div class="mx-autopx-4 relative">
          <h2 class="absolute -top-[14rem] -z-10 mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            {/*<LuBriefcase class="mr-2" />*/}{" "}
            <span class="opacity-25">Experience</span>
          </h2>
          <div class="flex min-w-screen items-center justify-center">
            <div class="z-10 grid grid-cols-1 gap-12">
              {experience.map((exp, index) => (
                <div key={index} class="border-l-2 border-emerald-200 pl-8">
                  <p class="text-lg font-semibold">
                    {exp["company"]}{" "}
                    <span class="text-sm text-gray-500">{exp["duration"]}</span>
                  </p>
                  <p class="font-semibold text-balance text-gray-500">
                    {exp["title"]}
                  </p>
                  <p class="mb-4 text-gray-500">{exp["description"]}</p>

                  <div class="flex flex-wrap gap-2">
                    {exp["skills"].map((ExpSkill, SkillIndex) => (
                      <SkillPill skill={ExpSkill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="bg-teal-50 py-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center text-3xl font-bold">
            {" "}
            <FaLaptopCode class="mr-2" /> Projects{" "}
          </h2>
        </div>
      </section>
    </div>
  );
}

export default App;
