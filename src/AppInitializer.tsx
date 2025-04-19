// src/AppInitializer.tsx
import { useEffect, useState } from "react";
import { useTranslationContext } from "./contexts/TranslationContext";
import { initTranslations } from "./Service/initTranslations";
import { Loading } from "./components/layout/Loading";

export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  const [isAppReady, setIsAppReady] = useState(false);
  const { setTranslations, setIsLoaded } = useTranslationContext();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const initialTranslations = await initTranslations();
        setTranslations(initialTranslations || {});
      } catch (error) {
        console.error("Error initializing app:", error);
      } finally {
        setIsLoaded(true);
        setIsAppReady(true);
      }
    };

    initializeApp();
  }, [setTranslations, setIsLoaded]);

  if (!isAppReady) {
    return <Loading />;
  }

  return <>{children}</>;
};
