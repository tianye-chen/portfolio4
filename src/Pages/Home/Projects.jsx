import { React } from "react";
import { SkillPill } from "../../Components/SkillPill";
import { projects } from "../../Data/data";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IconTextSnippet } from "../../Components/IconTextSnippet";

export const Projects = () => {
  return (
    <div>
      {/** Projects */}
      <section class="bg-teal-50 py-40" id="projects">
        <div class="relative mx-auto px-4">
          <h2 class="pointer-events-none absolute -top-[14rem] mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            <span class="opacity-8">Projects</span>
          </h2>

          <div class="flex min-w-screen items-center justify-center">
            <div class="z-10 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((proj, index) => (
                <div key={index} class="border-l-2 border-emerald-200 px-8">
                  <p class="text-lg font-semibold">
                    {proj["title"]}{" "}
                    <span class="text-sm text-gray-500">{proj["year"]}</span>
                    <div class="flex gap-2 py-2">
                      {proj["repo"] && (
                        <a
                          href={proj["repo"]}
                          target="_blank"
                          class="transition-all ease-in-out hover:text-emerald-400"
                        >
                          {" "}
                          <FiGithub title="Repository" />
                        </a>
                      )}
                      {proj["demo"] && (
                        <a
                          href={proj["demo"]}
                          target="_blank"
                          class="transition-all ease-in-out hover:text-emerald-400"
                        >
                          <FaExternalLinkAlt title="Demo" />
                        </a>
                      )}
                    </div>
                  </p>
                  <div>
                    {proj["attributes"].map((att, attIndex) => (
                      <span>{att} </span>
                    ))}
                  </div>
                  <p class="mb-4 text-gray-500">{proj["description"]}</p>
                  <div class="flex flex-wrap gap-2">
                    {proj["tech"].map((tech, techIndex) => (
                      <SkillPill skill={tech} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="pt-20">
            <IconTextSnippet 
              icon={<FaArrowAltCircleUp />}
              title="Always Improving"
              text="There is no such thing as a perfect project. I am always looking for ways to improve my work, reflecting on my past projects and making better and more efficient solutions each time."
            />
          </div>
        </div>
      </section>
    </div>
  );
};
