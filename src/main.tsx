import { ViewportProvider } from "@/contexts/viewport-provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IconContext } from "react-icons";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IconContext.Provider value={{ className: "react-icon" }}>
      <ViewportProvider>
        <App />
      </ViewportProvider>
    </IconContext.Provider>
  </StrictMode>
);
