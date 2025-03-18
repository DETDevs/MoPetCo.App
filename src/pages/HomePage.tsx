import { AboutSection } from "../components/ui/Home/AboutSection";
import { GallerySection } from "../components/ui/Home/GallerySection";
import { HomePageSection } from "../components/ui/Home/HomePageSection";
import { ServiceSection } from "../components/ui/Home/ServiceSection";

export const HomePage = () => {
  return (
    <>
      <HomePageSection />
      <AboutSection/>
      <ServiceSection/>
      <GallerySection/>
    </>
  );
};
