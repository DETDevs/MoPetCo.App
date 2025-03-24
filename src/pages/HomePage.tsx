import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { AboutSection } from "../components/ui/Home/AboutSection";
import { GallerySection } from "../components/ui/Home/GallerySection";
import { HomePageSection } from "../components/ui/Home/HomePageSection";
import { ReviewList } from "../components/ui/Home/ReviewList";
import { ServiceSection } from "../components/ui/Home/ServiceSection";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageSection />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <ReviewList />
      <WhatsAppButton />
      <Footer />
    </>
  );
};
