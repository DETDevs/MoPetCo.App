import React from "react";

/**
 * AppInitializer — previously loaded translations from the Google Translate API.
 * With the new static JSON-based i18n, translations are imported synchronously,
 * so this component simply renders its children immediately.
 *
 * Kept as a wrapper to avoid changing the component tree in AppContent.tsx.
 */
export const AppInitializer = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
