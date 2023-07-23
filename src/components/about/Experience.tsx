import { EXPERIENCES } from "../../data/about/experience";

const Experience = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-medium">Experience</h2>
      <ul className="list-inside gap-1 flex flex-col">
        {EXPERIENCES.map((job, index) => (
          <li key={index}>
            <span className="font-medium">{job.title}</span>
            <div className="text-sm">{job.company}</div>
            <div className="text-sm opacity-75">{job.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
