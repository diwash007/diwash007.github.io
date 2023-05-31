import ProjectCard from "../components/project/ProjectCard";
import { PROJECTS } from "../data/projects";

function Projects() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-wrap gap-14 justify-center items-center px-4 max-w-6xl animate-page py-nav md-py-nav">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
