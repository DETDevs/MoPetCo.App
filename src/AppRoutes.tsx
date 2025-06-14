// src/AppRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom";
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
  BookingPage,
  NotFoundPage,
  PromocionesPage,
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
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/promociones" element={<PromocionesPage />} />
      <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
      <Route path="/not-found-page" element={<NotFoundPage />}/>

      <Route path="/*" element={<Navigate to="/not-found-page" />} />
    </Routes>
  </Suspense>
);
