import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "./components/layout/Loading";
import {
  HomePage,
  ReleasePage,
  FAQsPage,
  ContactPage,
  ServicesPage,
  ServiceDetailPage,
  GalleryPage,
  // BookingPage,
  NotFoundPage,
  PromocionesPage,
  VerifyEmailPage,
  ServicesShowcase,
  BookingNewPage
} from "./lazyPages";

export const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/release-form" element={<ReleasePage />} />
      <Route path="/faqs" element={<FAQsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/service" element={<ServicesPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      {/* <Route path="/booking" element={<BookingPage />} /> */}
      <Route path="//verify-email" element={<VerifyEmailPage />} />
      <Route path="/promociones" element={<PromocionesPage />} />
      <Route path="/serivecesshow" element={<ServicesShowcase/>} />
      <Route path="/services/:serviceId" element={<ServiceDetailPage />} />

      <Route path="/booking" element={<BookingNewPage />} />


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);
