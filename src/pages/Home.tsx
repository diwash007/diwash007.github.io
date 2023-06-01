import { PERSONAL_INFO } from "../data/about/personalInfo";
import Socials from "../components/Socials";

function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center px-4 w-full h-screen sm:flex-row animate-page">
      <div className="w-52 h-52 sm:w-[270px] sm:h-[270px]">
        <img
          src="/assets/img/profile.jpg"
          className="w-full h-full rounded-full border ring-2 ring-offset-2 ring-primary"
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold md:text-5xl">
            Hi, I'm{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {PERSONAL_INFO.name}
            </span>
          </p>
          <div className="flex flex-col gap-1 pl-4">
            {PERSONAL_INFO.bios.map((bio, index) => {
              return (
                <a className="flex gap-2" href={bio.link} key={index}>
                  <span className="">{bio.icon}</span>
                  {bio.title}
                </a>
              );
            })}
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Home;
