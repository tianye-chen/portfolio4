import { React } from "react";
import { InfoBoxLarge } from "../../Components/InfoBoxLarge";
import {
  ai_data_dev,
  back_dev,
  cloud_devops,
  front_dev,
  game_dev,
  prog_langs,
} from "../../Data/data";
import { IoCodeSlash, IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineWebAsset } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { IconTextSnippet } from "../../Components/IconTextSnippet";
import { FaBook } from "react-icons/fa";

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
    },
  ];

  return (
    <div>
      <section id="skills" className="py-40">
        {/** Personal attributes */}
        <div className="relative">
          <h2 className="pointer-events-none absolute -top-[14rem] mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            <span className="opacity-8">Skills & Tech</span>
          </h2>

          <div className="container mx-auto">
            <div className="mx-auto grid max-w-5/6 gap-6 rounded-4xl md:grid-cols-3 2xl:max-w-7xl">
              {infoBoxes.map((box, index) => (
                <div>
                  <InfoBoxLarge
                    icon={box["icon"]}
                    title={box["title"]}
                    content={box["content"]}
                    key={index}
                  />
                </div>
              ))}
            </div>

            <div className="pt-20">
              <IconTextSnippet
                icon={<FaBook />}
                title="Always Learning"
                text="I am a forever student. Technology is constantly evolving and never stays still, and neither do I. I'm always trying to learn new things to keep up with the world and to keep it fresh."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
