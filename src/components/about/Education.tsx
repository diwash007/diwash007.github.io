import { EDUCATION } from "../../data/about/education";

const Education = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-medium">Education</h2>
      <ul className="list-inside">
        {EDUCATION.map((degree, index) => (
          <li key={index}>
            <span>{degree.degree}</span>
            <span className="text-sm"> | {degree.institution}</span>
            <span className="text-sm opacity-75"> | {degree.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
