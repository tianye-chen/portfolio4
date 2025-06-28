import { React } from "react";
import { SkillPill } from "../SkillPill";
import { experience } from "../Data/data";

export const Experience = () => {
  return (
    <div>
      {/** Experience */}
      <section class="py-40">
        <div class="relative mx-auto px-4">
          <h2 class="absolute -top-[14rem] -z-10 mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            {/*<LuBriefcase class="mr-2" />*/}
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
    </div>
  );
};
