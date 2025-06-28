import { Link } from "react-router-dom";
import { Hero } from "./Components/Sections/Hero";
import { AboutMe } from "./Components/Sections/AboutMe";
import { Education } from "./Components/Sections/Education";
import { Experience } from "./Components/Sections/Experience";
import { Projects } from "./Components/Sections/Projects";

export const Home = () => {
  return (
    <div class="min-h-screen overflow-hidden">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Education />

      {/** Credits to icons */}
      <footer>
        <p class="bg-teal-50 text-xs">
          <Link to="/attributions" target="_blank">
            Attributions
          </Link>
        </p>
      </footer>
    </div>
  );
};
