import { PageType } from "../interfaces/PageType";
import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export const PAGES: PageType[] = [
  {
    title: "Home",
    component: <Home />,
  },
  {
    title: "About Me",
    component: <About />,
  },
  { title: "Projects", component: <Projects /> },
];
