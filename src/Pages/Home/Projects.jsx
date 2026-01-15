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
      <section className="bg-teal-50 py-40" id="projects">
        <div className="relative mx-auto px-4">
          <h2 className="pointer-events-none absolute -top-[14rem] mb-8 flex justify-around text-3xl text-[15rem] font-bold">
            <span className="opacity-8">Projects</span>
          </h2>

          <div className="flex min-w-screen items-center justify-center">
            <div className="z-10 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((proj, index) => (
                <div key={index} className="border-l-2 border-emerald-200 px-8">
                  <div className="text-lg font-semibold">
                    {proj["title"]}{" "}
                    <span className="text-sm text-gray-500">{proj["year"]}</span>

                    {/** Project Links */}
                    <div className="flex gap-2 py-2">
                      {proj["repo"] && (
                        <a
                          href={proj["repo"]}
                          target="_blank"
                          className="transition-all ease-in-out hover:text-emerald-400"
                        >
                          {" "}
                          <FiGithub title="Repository" />
                        </a>
                      )}
                      {proj["demo"] && (
                        <a
                          href={proj["demo"]}
                          target="_blank"
                          className="transition-all ease-in-out hover:text-emerald-400"
                        >
                          <FaExternalLinkAlt title="Demo" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div>
                    {proj["attributes"].map((att, attIndex) => (
                      <span key={attIndex}>{att}</span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-500">{proj["description"]}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj["tech"].map((tech, techIndex) => (
                      <SkillPill skill={tech} key={techIndex}/>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20">
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
