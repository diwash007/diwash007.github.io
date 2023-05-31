import { SKILLS, SKILL_ICONS } from "../../data/about/skills";

const Skills = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-medium">Skills</h2>
      <ul className="list-inside">
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <span>{skill.name}</span>
          </li>
        ))}
        <div className="flex flex-wrap gap-2 mt-5">
          {Object.entries(SKILL_ICONS).map(([iconName, iconUrl]) => (
            <img src={iconUrl} className="w-12" key={iconName} alt={iconName} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Skills;
