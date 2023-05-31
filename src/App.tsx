import Navbar from "./components/Navbar";
import { useNavbarContext } from "./contexts/NavbarContext";
import { PAGES } from "./data/pages";

function App() {
  const { currentPageIndex } = useNavbarContext();
  return (
    <div className="overflow-hidden">
      <Navbar />
      {PAGES[currentPageIndex].component}
    </div>
  );
}

export default App;
