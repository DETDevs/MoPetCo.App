import { CookieConsent } from "./components/common/CookieConsent";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import Footer from "./components/layout/Footer";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/layout/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const cleanRoutes = ["/verify-email"];

  const showExtras = !cleanRoutes.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      {showExtras && (
        <Suspense fallback={null}>
          <Header />
          <ScrollToTopButton />
          <WhatsAppButton />
          <CookieConsent />
          <Footer />
        </Suspense>
      )}
    </div>
  );
};
