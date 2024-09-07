import { IconContext } from "react-icons";
import { PERSONAL_INFO } from "../data/about/personalInfo";

const Socials = () => {
  return (
    <div className="flex gap-3 justify-center sm:justify-start">
      {PERSONAL_INFO.socials.map((social, index) => (
        <IconContext.Provider
          key={index}
          value={{ size: "30", className: "hover:text-primary" }}
        >
          <a
            href={social.link}
            target="_blank"
            key={index}
            aria-label={social.title}
            title={social.title}
          >
            {social.icon}
          </a>
        </IconContext.Provider>
      ))}
    </div>
  );
};

export default Socials;
