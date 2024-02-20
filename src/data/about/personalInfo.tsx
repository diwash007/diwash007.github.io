import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa";
import { PersonalInfoType } from "../../interfaces/PersonalInfoType";

export const PERSONAL_INFO: PersonalInfoType = {
  name: "Diwash Dahal",
  role: "Software Developer",
  email: "diwashdahal75@gmail.com",
  about:
    "I am a highly motivated computer science enthusiast with a passion for problem-solving and software development. " +
    "I am a quick learner and open to new challenges and opportunities to expand my skills." +
    "\n" +
    "With my strong analytical skills and attention to detail, I am confident in my ability to contribute to any team and achieve success in my career as a software developer.",
  socials: [
    {
      title: "github",
      link: "https://github.com/diwash007",
      icon: <FaGithub />,
    },
    {
      title: "linkedin",
      link: "https://linkedin.com/in/diwashdahal",
      icon: <FaLinkedin />,
    },
    {
      title: "youtube",
      link: "https://youtube.com/@dahaldiwash2",
      icon: <FaYoutube />,
    },
    {
      title: "medium",
      link: "https://medium.com/@diwashdahal",
      icon: <FaMedium />,
    },
  ],
  bios: [
    {
      emoji: "💻",
      title: "Aspiring Software Developer",
    },
    { emoji: "📚", title: "A student, eager to learn and grow" },
    {
      emoji: "📧",
      title: "diwashdahal75@gmail.com",
      link: "mailto:diwashdahal@gmail.com",
    },
  ],
};
