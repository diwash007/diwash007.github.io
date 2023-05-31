import { PERSONAL_INFO } from "../data/about/personalInfo";
import Experience from "../components/about/Experience";
import Education from "../components/about/Education";
import Skills from "../components/about/Skills";

function About() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col gap-5 justify-start px-4 max-w-2xl py-[calc(theme(spacing.nav)+20px)] md:py-[calc(theme(spacing.nav)+40px)] animate-page">
        <div className="text-justify whitespace-pre-wrap">
          {PERSONAL_INFO.about}
        </div>
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default About;
