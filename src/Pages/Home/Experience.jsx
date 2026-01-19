import { React } from "react";
import { ItemPill } from "../../Components/ItemPill";
import { experience } from "../../Data/data";

export const Experience = () => {
  return (
    <div>
      {/** Experience */}
      <section className="py-40">
        <div className="relative mx-auto px-4">
          <h2 className="absolute -top-[14rem] -z-10 mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            {/*<LuBriefcase className="mr-2" />*/}
            <span className="opacity-8">Experience</span>
          </h2>
          <div className="flex min-w-screen items-center justify-center">
            <div className="z-10 grid grid-cols-1 gap-12">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-emerald-200 pl-8 max-w-3xl">
                  <p className="text-lg font-semibold">
                    {exp["company"]}{" "}
                    <span className="text-sm text-gray-500">{exp["duration"]}</span>
                  </p>
                  <p className="font-semibold text-balance text-gray-500">
                    {exp["title"]}
                  </p>
                  <p className="mb-4 text-gray-500">{exp["description"]}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp["skills"].map((ExpSkill, SkillIndex) => (
                      <ItemPill key={SkillIndex} skill={ExpSkill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
