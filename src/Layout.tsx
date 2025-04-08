// src/Layout.tsx
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import Footer from "./components/layout/Footer";
import { Suspense } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">{children}</main>

    <Suspense fallback={null}>
      <ScrollToTopButton />
      <WhatsAppButton />
      <Footer />
    </Suspense>
  </div>
);
