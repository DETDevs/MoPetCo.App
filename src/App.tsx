import { TranslationProvider } from "./contexts/TranslationContext";
import { AppContent } from "./AppContent";

export const App = () => (
  <TranslationProvider>
    <AppContent />
  </TranslationProvider>
);
