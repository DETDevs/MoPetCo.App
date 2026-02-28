import React, { createContext, useContext } from "react";

interface TranslationContextType {
  isLoaded: boolean;
}

const TranslationContext = createContext<TranslationContextType>({
  isLoaded: true,
});

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <TranslationContext.Provider value={{ isLoaded: true }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  return useContext(TranslationContext);
};
