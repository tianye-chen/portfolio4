import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import { LuGraduationCap, LuMousePointer2, LuBriefcase } from "react-icons/lu";
import { IoCodeSlash, IoMailOutline } from "react-icons/io5";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiHandWavingFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaLaptopCode, FaRegUser } from "react-icons/fa";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [gradPos, setGradPos] = React.useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    setGradPos({ x, y });
  };

  const broad_skills = [
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Web Dev",
    "Software Engineering",
    "Game Design & Dev",
  ];

  const prog_skills = [
    "Python",
    "JavaScript",
    "C#",
    "Java",
    "PyTorch",
    "Unity",
    "React",
    "Firebase",
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "SUNY University at Buffalo",
      focus: "Artificial Intelligence",
      duration: "2023 - 2025",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      university: "CUNY Brooklyn College",
      duration: "2019 - 2023",
    },
  ];

  const experience = [
    {
      title: "Intern",
      company: "S&P Global",
      duration: "Summer 2024",
      description: "Assisted in LLM training and handling big data",
    },
    {
      title: "Fellow",
      company: "CUNY Tech Prep",
      duration: "2022 - 2023",
      description:
        "Full-stack web development and professional development program",
    },
  ];

  return (
    <div class="min-h-screen" onMouseMove={handleMouseMove}>
      <div class="relative flex min-h-screen flex-row items-center justify-center gap-8 overflow-hidden text-center md:text-left">
        <div class="">
          <h1 class="flex items-center text-3xl font-extrabold text-emerald-500 font-stretch-150%">
            {" "}
            <PiHandWavingFill class="mr-2" /> Hello, I'm{" "}
          </h1>
          <h1
            class="mb-4 bg-clip-text text-6xl leading-normal font-extrabold text-transparent transition-all duration-450 ease-in-out"
            style={{
              backgroundImage: `radial-gradient(circle at ${gradPos.x}% ${gradPos.y}%, #a855f7, #10b981, #0ea5e9)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Tianye Chen
          </h1>
          <p class="mb-4 text-xl font-bold text-emerald-500">
            Master's Graduate in Computer Science
          </p>
          <p class="font-light">
            {" "}
            Specializing in machine learning and deep learning
          </p>
        </div>
        <div class="absolute bottom-1/4 flex min-w-screen flex-row items-center justify-center gap-4 px-6 text-3xl text-emerald-500">
          <FiGithub />
          <FiLinkedin />
          <IoMailOutline />
        </div>

        <IoIosArrowDown class="absolute bottom-10 flex justify-center text-4xl text-emerald-500" />
      </div>

      <section class="bg-teal-50 py-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center text-3xl font-bold">
            {" "}
            <LuGraduationCap class="mr-2" /> Education
          </h2>
          <div class="grid grid-cols-1 gap-12">
            {education.map((edu, index) => (
              <div class="border-l-2 border-emerald-200 pl-8">
                <p class="text-lg font-semibold">
                  {edu["university"]}{" "}
                  <span class="text-sm text-gray-500">{edu["duration"]}</span>
                </p>
                <p class="mb-2 font-semibold text-balance text-gray-500">
                  {edu["degree"]}
                </p>
                {edu["focus"] && (
                  <p class="text-gray-500">Focus in {edu["focus"]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center text-3xl font-bold">
            {" "}
            <IoCodeSlash class="mr-2" /> Technologies{" "}
          </h2>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            {prog_skills.map((skill, index) => (
              <div
                class="rounded-lg bg-teal-50 py-4 pr-32 pl-4 text-left font-light text-nowrap shadow-md"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="bg-teal-50 py-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center text-3xl font-bold">
            {" "}
            <LuMousePointer2 class="mr-2" /> Skills{" "}
          </h2>
          <div class="grid-col-2 grid gap-4 md:grid-cols-4">
            {broad_skills.map((skill, index) => (
              <div
                class="rounded-lg bg-white py-4 pr-24 pl-4 text-left font-light text-nowrap shadow-md"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center text-3xl font-bold">
            {" "}
            <LuBriefcase class="mr-2" /> Experience{" "}
          </h2>
          <div class="grid-cols1 grid gap-12">
            {experience.map((exp, index) => (
              <div class="border-l-2 border-emerald-200 pl-8">
                <p class="text-lg font-semibold">
                  {exp["company"]}{" "}
                  <span class="text-sm text-gray-500">{exp["duration"]}</span>
                </p>
                <p class="mb-2 font-semibold text-balance text-gray-500">
                  {exp["title"]}
                </p>
                <p class="text-gray-500">{exp["description"]}</p>
              </div>
            ))}
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

      <section class="py-20">
        <div class="mx-auto max-w-4xl px-4">
          <h2 class="mb-8 flex items-center text-3xl font-bold">
            {" "}
            <FaRegUser class="mr-2" /> About Me
          </h2>
        </div>
      </section>
    </div>
  );
}

export default App;
