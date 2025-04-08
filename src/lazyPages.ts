// src/lazyPages.ts
import { lazy } from "react";

export const HomePage = lazy(() => import("./pages/HomePage"));
export const ReleasePage = lazy(() => import("./pages/ReleasePage"));
export const FAQsPage = lazy(() => import("./pages/FAQsPage"));
export const ContactPage = lazy(() => import("./pages/ContactPage"));
export const ServicesPage = lazy(() => import("./pages/ServicesPage"));
export const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
export const GalleryPage = lazy(() => import("./pages/GalleryPage"));
export const BookingPage = lazy(() => import( "./pages/BookingPage"));
export const NotFoundPage = lazy(() => import("./components/layout/NotFoundPage"));
export const Footer = lazy(() => import("./components/layout/Footer"));

