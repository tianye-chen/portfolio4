import { Link } from "react-router-dom";
import { Hero } from "./Pages/Home/Hero";
import { AboutMe } from "./Pages/Home/AboutMe";
import { Skills } from "./Pages/Home/Skills";
import { Education } from "./Pages/Home/Education";
import { Experience } from "./Pages/Home/Experience";
import { Projects } from "./Pages/Home/Projects";

export const Home = () => {
  return (
    <div class="min-h-screen overflow-hidden">
      <Hero />
      <AboutMe />
      <Skills />
      {false && <Experience />}
      <Projects />
      {false && <Education />}

      {/** Credits to icons */}
      {false && (
        <footer>
          <p class="bg-teal-50 text-xs">
            <Link to="/attributions" target="_blank">
              Attributions
            </Link>
          </p>
        </footer>
      )}
    </div>
  );
};
