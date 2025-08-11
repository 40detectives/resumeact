import { ThemeProvider } from "@/contexts/theme-provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IconContext } from "react-icons";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IconContext.Provider value={{ className: "react-icon" }}>
      <ThemeProvider theme={"monotone"} palette={["#8a937f"]}>
        <App />
      </ThemeProvider>
    </IconContext.Provider>
  </StrictMode>
);
