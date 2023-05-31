import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import NavbarContextProvider from "./contexts/NavbarContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NavbarContextProvider>
    <App />
  </NavbarContextProvider>
);
