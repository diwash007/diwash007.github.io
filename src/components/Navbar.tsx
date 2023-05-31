const NAV_LINKS = ["Home", "About Me", "Projects"];
function Navbar() {
  return (
    <div className="flex absolute top-0 left-0 gap-14 justify-center items-center px-4 py-5 w-full">
      {NAV_LINKS.map((item, index) => {
        return (
          <div
            key={index}
            className="border-0 border-b-2 cursor-pointer border-b-primary"
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Navbar;
