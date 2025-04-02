import { Header } from "../components/layout/Header";
import { AboutSection } from "../components/Home/AboutSection";
import { GallerySection } from "../components/Home/GallerySection";
import { HomePageSection } from "../components/Home/HomePageSection";
import { ReviewList } from "../components/Home/ReviewList";
import { ServiceSection } from "../components/Home/ServiceSection";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageSection />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <ReviewList />
    </>
  );
};
