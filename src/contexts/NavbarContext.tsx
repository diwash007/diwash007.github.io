import { createContext, useContext, useState } from "react";
import INavbar from "../interfaces/NavbarType";

const NavbarContext = createContext<INavbar>({
  currentPageIndex: 0,
  setCurrentPageIndex: () => {},
});

export const useNavbarContext = () => useContext(NavbarContext);

const NavbarContextProvider = ({ children }: { children: JSX.Element }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  return (
    <NavbarContext.Provider
      value={{
        currentPageIndex,
        setCurrentPageIndex,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
