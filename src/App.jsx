import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  const [gradPos, setGradPos] = React.useState({ x: 50, y: 50 });
  const icons = useRef([]);
  const starIcon = useRef([]);
  const downArrow = useRef();

  const links = [
    "https://github.com/tianye-chen",
    "https://www.linkedin.com/in/tianyechen/",
    "mailto:tianyechen1@gmail.com"
  ]

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
      title: "Fellow",
      company: "CUNY Tech Prep",
      duration: "2022 - 2023",
      description:
        "Full-stack web development and professional development program",
    },
  ];
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;

    setGradPos({ x, y });
  };

  useGSAP(() => {
    icons.current.forEach((icon) => {
      gsap.set(icon, { opacity: 1, rotate: 0, scale: 1})
    })

    gsap.to(downArrow.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    })

    return () => {
      icons.current.forEach((icon) => {
        gsap.killTweensOf(icon)
      })

      gsap.killTweensOf(downArrow.current)
    }
  }, []);

  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleIconMouseEnter = (index) => {
    gsap.to(icons.current[index], {
      rotate: rand(-20, 20),
      duration: 0.3,
      scale: 1.2,
      ease: "power2.out",
    });
  };

  const handleIconMouseLeave = (index) => {
    gsap.to(icons.current[index], {
      opacity: 1,
      rotate: 0,
      duration: 0.3,
      scale: 1,
      ease: "power2.in",
    });
  };

  return (
    <div class="min-h-screen" onMouseMove={handleMouseMove}>
      <div class="absolute -z-10 min-h-screen min-w-screen bg-[radial-gradient(#e5e7eb_4px,transparent_0px)] [background-size:64px_64px]"></div>

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
        <div class="absolute bottom-1/5 flex min-w-screen flex-col items-center justify-center gap-6 px-6 text-emerald-500">
          <h1 class='text-2xl font-semibold'>Let's Talk</h1>
          <div class="flex gap-6 text-3xl">
            {[FiGithub, FiLinkedin, IoMailOutline].map((Icon, index) => (
                <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
                  <Icon
                    key={index}
                    ref={(uniqueRef) => (icons.current[index] = uniqueRef)}
                    onMouseEnter={() => handleIconMouseEnter(index)}
                    onMouseLeave={() => handleIconMouseLeave(index)}
                    class="cursor-pointer"
                  />
                </a>
              ))}
            </div>
        </div>

        <IoIosArrowDown class="absolute bottom-10 flex justify-center text-4xl text-emerald-500" ref={downArrow}/>
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
              description={
                "Areas of expertise that I have worked on."
              }
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
            <LuBriefcase class="mr-2" /> Experience{" "}
          </h2>
          <div class="grid grid-cols-1 gap-12">
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
    </div>
  );
}

export default App;
