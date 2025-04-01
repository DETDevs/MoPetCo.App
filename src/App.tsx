import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ReleasePage } from "./pages/ReleasePage";
import { FAQsPage } from "./pages/FAQsPage";
import { ContactPage } from "./pages/ContactPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { GalleryPage } from "./pages/GalleryPage";
import { NotFoundPage } from "./components/layout/NotFoundPage";
import { Footer } from "./components/layout/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/release-form" element={<ReleasePage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/services/:serviceId"
              element={<ServiceDetailPage />}
            />
          </Routes>
        </main>
        <Footer />

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
