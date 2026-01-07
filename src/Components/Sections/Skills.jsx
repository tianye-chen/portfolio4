import { React } from "react";
import { InfoBoxLarge } from "../InfoBoxLarge";
import { ai_data_dev, back_dev, cloud_devops, front_dev, game_dev, prog_langs } from "../Data/data";
import { FaLaptopCode } from "react-icons/fa";
import { IoCodeSlash, IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineWebAsset } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";

export const Skills = () => {
  const infoBoxes = [
    {
      icon: <IoCodeSlash />,
      title: "Programming Languages",
      content: prog_langs,
    },
    {
      icon: <MdOutlineWebAsset />,
      title: "Frontend Development",
      content: front_dev,
    },
    {
      icon: <GoDatabase />,
      title: "Backend Development",
      content: back_dev,
    },
    {
        icon: <BsStars />,
        title: "Data & AI Development",
        content: ai_data_dev,
    },
    {
        icon: <CiCloudOn />,
        title: "Cloud & DevOps",
        content: cloud_devops,
    },
    {
      icon: <IoExtensionPuzzleOutline />,
      title: "Game Development",
      content: game_dev,
    }
  ];

  return (
    <div>
      <section class="py-40">
        {/** Personal attributes */}
        <div class="relative">
          <h2 class="pointer-events-none absolute -top-[14rem] mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            <span class="opacity-8">Skills & Tech</span>
          </h2>

          <div class="grid gap-6 rounded-4xl md:grid-cols-3 mx-auto max-w-5/6 2xl:max-w-7xl">
            {infoBoxes.map((box, index) => (
              <div>
                <InfoBoxLarge
                  icon={box["icon"]}
                  title={box["title"]}
                  content={box["content"]}
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
