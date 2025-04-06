import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { lazy, Suspense, useEffect, useState } from "react";
import { Loading } from "./components/layout/Loading";
import { initTranslations } from "./Service/initTranslations";
import { TranslationProvider, useTranslationContext } from "./contexts/TranslationContext";
import { BookingPage } from "./pages/BookingPage";

export const App = () => {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
};

const AppContent = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const { setTranslations, setIsLoaded } = useTranslationContext();

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const initialTranslations = await initTranslations();
        setTranslations(initialTranslations || {});
        setIsLoaded(true);
        setIsAppReady(true);
      } catch (error) {
        console.error("Error initializing app:", error);
        setIsLoaded(true); 
        setIsAppReady(true);
      }
    };

    initializeApp();
  }, [setTranslations, setIsLoaded]);

  const HomePage = lazy(() => import("./pages/HomePage"));
  const ReleasePage = lazy(() => import("./pages/ReleasePage"));
  const FAQsPage = lazy(() => import("./pages/FAQsPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage"));
  const ServicesPage = lazy(() => import("./pages/ServicesPage"));
  const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
  const GalleryPage = lazy(() => import("./pages/GalleryPage"));
  const NotFoundPage = lazy(() => import("./components/layout/NotFoundPage"));
  const Footer = lazy(() => import("./components/layout/Footer"));

  if (!isAppReady) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/release-form" element={<ReleasePage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/service" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <ScrollToTopButton />
          <WhatsAppButton />
          <Footer />
        </Suspense>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
};
