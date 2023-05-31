import { useNavbarContext } from "../contexts/NavbarContext";
import { PAGES } from "../data/pages";

function Navbar() {
  const { setPageIndex } = useNavbarContext();
  return (
    <div className="flex absolute top-0 left-0 z-10 gap-14 justify-center items-center px-4 py-5 w-full">
      {PAGES.map((page, index) => {
        return (
          <div
            key={index}
            className="border-0 border-b-2 cursor-pointer border-b-primary"
            onClick={() => setPageIndex(index)}
          >
            <p>{page.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
