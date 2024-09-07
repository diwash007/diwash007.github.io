import Navbar from "./components/Navbar";
import { useNavbarContext } from "./contexts/NavbarContext";
import { PAGES } from "./data/pages";

function App() {
  const { currentPageIndex } = useNavbarContext();
  return (
    <div className="overflow-hidden">
      <Navbar />
      {PAGES[currentPageIndex].component}
      <img
        src="/assets/img/bg.jpg"
        className="object-cover fixed top-0 left-0 w-screen h-screen -z-10 sm:object-fill"
        alt="background"
      />
    </div>
  );
}

export default App;
