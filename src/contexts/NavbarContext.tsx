import { createContext, useContext, useState } from "react";
import INavbar from "../interfaces/NavbarType";

const NavbarContext = createContext<INavbar>({
  currentPageIndex: 0,
  setPageIndex: () => {},
});

export const useNavbarContext = () => useContext(NavbarContext);

const NavbarContextProvider = ({ children }: { children: JSX.Element }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  function setPageIndex(page: number) {
    setCurrentPageIndex(page);
  }

  return (
    <NavbarContext.Provider
      value={{
        currentPageIndex,
        setPageIndex,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
