import { IconContext } from "react-icons";
import {
  FaYoutube,
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { PERSONAL_INFO } from "../data/about/personalInfo";

const ICONS = [
  <FaGithub />,
  <FaLinkedin />,
  <FaTwitter />,
  <FaYoutube />,
  <FaMedium />,
];
const Socials = () => {
  return (
    <div className="flex gap-3 justify-center sm:justify-start">
      {PERSONAL_INFO.socials.map((social, index) => (
        <IconContext.Provider
          key={index}
          value={{ size: "30", className: "hover:text-primary" }}
        >
          <a href={social.link} target="_blank" key={index}>
            {ICONS[index]}
          </a>
        </IconContext.Provider>
      ))}
    </div>
  );
};

export default Socials;
