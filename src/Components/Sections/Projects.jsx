import { React } from "react";
import { SkillPill } from "../SkillPill";
import { projects } from "../Data/data";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Projects = () => {
  return (
    <div>
      {/** Projects */}
      <section class="bg-teal-50 py-40">
        <div class="relative mx-auto px-4">
          <h2 class="pointer-events-none absolute -top-[14rem] mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            <span class="opacity-25">Projects</span>
          </h2>

          <div class="flex min-w-screen items-center justify-center">
            <div class="z-10 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((proj, index) => (
                <div key={index} class="border-l-2 border-emerald-200 px-8">
                  <p class="text-lg font-semibold">
                    {proj["title"]}{" "}
                    <span class="text-sm text-gray-500">{proj["year"]}</span>
                    <div class="flex gap-2 py-2">
                      <a
                        href={proj["repo"]}
                        target="_blank"
                        class="transition-all ease-in-out hover:text-emerald-400"
                      >
                        {" "}
                        <FiGithub title="Repository" />
                      </a>
                      {proj["demo"] ? (
                        <a
                          href={proj["demo"]}
                          target="_blank"
                          class="transition-all ease-in-out hover:text-emerald-400"
                        >
                          <FaExternalLinkAlt title="Demo" />
                        </a>
                      ) : (
                        ""
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
        </div>
      </section>
    </div>
  );
};
