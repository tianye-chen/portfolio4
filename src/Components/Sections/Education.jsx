import { React, useState } from "react";
import { EducationBox } from "../EducationBox";
import { education } from "../Data/data";

export const Education = () => {
  const [eduInFocus, setEduInFocus] = useState(null);

  const handleSetEduInFocus = (index) => {
    console.log(index);
    setEduInFocus((prev) => (index === prev ? null : index));
  };

  return (
    /** Education */
    <div>
      <section class="bg-teal-50 py-40 pt-80">
        <div class="relative mx-auto px-4">
          <h2 class="pointer-events-none absolute -top-[16.3rem] flex items-center text-[15rem] font-bold">
            <span class="opacity-25">Education</span>
          </h2>
          <div
            class={`relative flex min-h-[80vh] flex-col gap-4 overflow-hidden rounded-4xl md:flex-row md:gap-0`}
          >
            {education.map((edu, index) => (
              <EducationBox
                key={index}
                idx={index}
                degree={edu["degree"]}
                university={edu["university"]}
                focusArea={edu["focusArea"]}
                duration={edu["duration"]}
                bg={edu["bg"]}
                courses={edu["courses"]}
                gpa={edu["gpa"]}
                visible={(eduInFocus === index) | (eduInFocus === null)}
                selected={eduInFocus === index}
                handleFocus={() => handleSetEduInFocus(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
