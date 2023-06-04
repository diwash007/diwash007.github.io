import ProjectCard from "../components/project/ProjectCard";
import { PROJECTS } from "../data/projects";

function Projects() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 px-4 animate-page py-nav md-py-nav">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
