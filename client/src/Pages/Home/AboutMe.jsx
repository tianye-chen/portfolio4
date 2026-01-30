import { FaLaptopCode } from "react-icons/fa";
import { IconTextSnippet } from "../../Components/IconTextSnippet";

export const AboutMe = () => {
  return (
    <div className="text-primary-text">
      {/** About Me */}
      <section id="about" className="bg-secondary-background pt-60 pb-40">
        <div className="relative mx-auto flex flex-col items-center justify-center px-[6rem]">
          <h2 className="pointer-events-none absolute -top-[19rem] mb-8 w-full text-3xl text-[15rem] font-bold">
            <span className="opacity-8">About Me</span>
          </h2>
          <div className="mb-8 max-w-4xl text-center text-3xl font-light md:text-left">
            <p>
              Hey there, thanks for stopping by! I'm a passionate developer who
              loves creating new and interesting projects. My journey in tech
              has been fueled by curiosity and a dream to build solutions that
              matter.
            </p>
            <br />
            <p>
              Here you can find out a bit more about me and what I've been
              working on.
            </p>
          </div>

          <IconTextSnippet
            icon={<FaLaptopCode />}
            title="Always Building"
            text="My work is never truly finished because my ideas never stop coming. I'm always building something new, driven by the desire to turn the ideas in my mind into reality. That passion for creating is what drives me forward."
          />
        </div>
      </section>
    </div>
  );
};
