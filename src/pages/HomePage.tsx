import { Suspense, lazy } from "react";
import { Header } from "../components/layout/Header";
import { HomePageSection } from "../components/Home/HomePageSection";
import { Loading } from "../components/layout/Loading";

const AboutSection = lazy(() => import("../components/Home/AboutSection"));
const ServiceSection = lazy(() => import("../components/Home/ServiceSection"));
const PromocionSection = lazy(() => import("../components/Home/PromocionSection"));
const GallerySection = lazy(() => import("../components/Home/GallerySection"));
const ReviewList = lazy(() => import("../components/Home/ReviewList"));

const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageSection />

      <Suspense fallback={<Loading />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ServiceSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <PromocionSection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ReviewList />
      </Suspense>
    </>
  );
};

export default HomePage;
