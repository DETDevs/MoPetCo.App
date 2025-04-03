import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import { ScrollToTopButton } from "./components/common/ScrollToTopButton";
import { lazy, Suspense } from "react";
import { Loading } from "./components/layout/Loading";

export const App = () => {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const ReleasePage = lazy(() => import("./pages/ReleasePage"));
  const FAQsPage = lazy(() => import("./pages/FAQsPage"));
  const ContactPage = lazy(() => import("./pages/ContactPage"));
  const ServicesPage = lazy(() => import("./pages/ServicesPage"));
  const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
  const GalleryPage = lazy(() => import("./pages/GalleryPage"));
  const NotFoundPage = lazy(() => import("./components/layout/NotFoundPage"));
  const Footer = lazy(() => import("./components/layout/Footer"));

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
              <Route
                path="/services/:serviceId"
                element={<ServiceDetailPage />}
              />
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
