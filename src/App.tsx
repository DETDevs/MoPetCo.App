import { TranslationProvider } from "./contexts/TranslationContext";
import { AppContent } from "./AppContent";
import { TooltipProvider } from "@/components/ui/tooltip"; 

export const App = () => (
  <TooltipProvider> 
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  </TooltipProvider>
);
