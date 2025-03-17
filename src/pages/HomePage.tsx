import { AboutSection } from "../components/ui/Home/AboutSection";
import { HomePageSection } from "../components/ui/Home/HomePageSection";
import { ServiceSection } from "../components/ui/Home/ServiceSection";

export const HomePage = () => {
  return (
    <>
      <HomePageSection />
      <AboutSection/>
      <ServiceSection/>
    </>
  );
};
