import { React } from "react";
import { InfoBoxLarge } from "../InfoBoxLarge";
import { broad_skills, prog_skills, hobbies } from "../Data/data";
import { FaLaptopCode } from "react-icons/fa";
import { IoCodeSlash, IoExtensionPuzzleOutline } from "react-icons/io5";

export const AboutMe = () => {
  const infoBoxes = [
    {
      icon: <FaLaptopCode />,
      title: "What I can do",
      description: "Areas of expertise that I have worked on.",
      content: broad_skills,
      corner: "left",
    },
    {
      icon: <IoCodeSlash />,
      title: "What I know",
      description: "Programming languages and tools I am proficient in.",
      content: prog_skills,
      corner: null,
    },
    {
      icon: <IoExtensionPuzzleOutline />,
      title: "What my hobbies are",
      description: "Interests and activities I enjoy outside of work.",
      content: hobbies,
      corner: "right",
    },
  ];

  return (
    <div>
      {/** About Me */}
      <section class="bg-teal-50 py-60 pb-80">
        <div class="relative mx-auto flex items-center justify-center px-[6rem]">
          <h2 class="pointer-events-none absolute -top-[19rem] mb-8 w-full text-3xl text-[15rem] font-bold">
            <span class="opacity-25">About Me</span>
          </h2>
          <p class="mb-8 max-w-4xl text-center text-3xl font-light md:text-left">
            Hey there, thanks for stopping by! Here you can find out a bit more
            about me and what I've been working on.
          </p>
        </div>
      </section>

      <section class="-my-40 -translate-y-40 py-20">
        {/** Personal attributes */}
        <div class="pointer-events-none mx-auto max-w-5/6 2xl:max-w-7xl">
          <div class="grid gap-6 rounded-4xl md:grid-cols-3">
            {infoBoxes.map((box, index) => (
              <div>
                <InfoBoxLarge
                  icon={box["icon"]}
                  title={box["title"]}
                  description={box["description"]}
                  content={box["content"]}
                  corner={box["corner"]}
                  inFocus={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div class="absolute -top-25 bottom-0 -z-20 hidden min-h-full min-w-full translate-y-70 bg-cover drop-shadow-2xl">
          <br />
        </div>
      </section>
    </div>
  );
};
