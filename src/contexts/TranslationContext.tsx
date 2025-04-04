import React, { createContext, useContext, useState } from "react";

interface TranslationContextType {
  translations: Record<string, string>;
  setTranslations: (translations: Record<string, string>) => void;
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <TranslationContext.Provider value={{ translations, setTranslations, isLoaded, setIsLoaded }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslationContext must be used within a TranslationProvider");
  }
  return context;
};
