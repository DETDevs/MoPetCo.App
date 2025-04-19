import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import './style/textStyles.css';
import { App } from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
