import { useNavbarContext } from "../contexts/NavbarContext";
import { PAGES } from "../data/pages";

function Navbar() {
  const { setCurrentPageIndex, currentPageIndex } = useNavbarContext();
  return (
    <div className="flex absolute top-0 left-0 z-10 gap-14 justify-center items-center px-4 py-5 w-full">
      {PAGES.map((page, index) => {
        return (
          <div
            key={index}
            className={`cursor-pointer ${
              currentPageIndex === index &&
              "border-0 border-b-2 border-b-primary"
            }`}
            onClick={() => setCurrentPageIndex(index)}
          >
            <p>{page.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
