import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./style/textStyles.css";
import { App } from "./App";
import { LanguageProvider } from "./contexts/LanguageContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  </StrictMode>
);
