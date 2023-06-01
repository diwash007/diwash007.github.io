import Button from "./Button";
import { FaLink, FaCode } from "react-icons/fa";

function ProjectCard({ project }: any) {
  return (
    <div className="pb-5 w-[330px] rounded-md shadow-lg">
      <div className="w-full h-48">
      <img
        src={project.image}
        alt={project.name}
        className="rounded-t-md"
      />
      </div>
      <div className="px-4 py-4 text-justify">
        <div className="flex justify-between items-center mb-2">
          <div className="inline text-lg font-medium">{project.name}</div>
          <div className="flex gap-1 items-center">
            {project.techs.map((tech: string, index: number) => (
              <span
                className="px-2 text-xs rounded-md text-primary/75 bg-primary/10 hover:text-primary"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="h-14 text-sm text-slate-700">{project.description}</div>
      </div>
      <div className="flex gap-3 justify-center px-4 whitespace-nowrap">
        <Button
          text="Live Demo"
          icon={<FaLink />}
          disabled={!project.demoLink}
          onClick={() => window.open(project.demoLink, "_blank")}
        />
        <Button
          text="Source Code"
          icon={<FaCode />}
          disabled={!project.sourceLink}
          onClick={() => window.open(project.sourceLink, "_blank")}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
