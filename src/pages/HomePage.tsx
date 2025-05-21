// HomePage.tsx
import { Header } from "../components/layout/Header";
import { HomePageSection } from "../components/Home/HomePageSection";
import { AboutSection } from "../components/Home/AboutSection";
import { ServiceSection } from "../components/Home/ServiceSection";
import { Suspense, lazy } from "react";
import { Loading } from "../components/layout/Loading";
import { PromocionSection } from "../components/Home/PromocionSection";

const GallerySection = lazy(() => import("../components/Home/GallerySection"));
const ReviewList = lazy(() => import("../components/Home/ReviewList"));

const HomePage = () => {
  return (
    <>
      <HomePageSection />
      <AboutSection />
      <ServiceSection />

      <Suspense fallback={<Loading />}>
        <GallerySection />
      </Suspense>

      <PromocionSection />

      <Suspense fallback={<Loading />}>
        <ReviewList />
      </Suspense>
    </>
  );
};

export default HomePage;
