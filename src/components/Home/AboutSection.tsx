import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";
import homeHeader from "/assets/home_header-1.png";
import croppedLogo from "/assets/cropped-M-Logo.png";


export const AboutSection = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row w-full h-auto items-center justify-center mt-12"
    >
      <div className="w-full md:w-1/2 flex justify-center items-center flex-col lg:w-[24rem] xl:w-[37rem]">
        <div className="title">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            {/* <SectionTitle>MoPetCO</SectionTitle> */}
          </h1>
          <img src={croppedLogo} alt="logo" />
        </div>
        <p className="text-content">
          <TranslatableText text="We are a premier mobile grooming service with over 20 years of experience, proudly serving Miami-Dade, Broward, and Palm Beach counties." />
        </p>
        <p className="text-content">
          <TranslatableText text="As passionate animal lovers, we are dedicated to pampering your furry companions with the highest level of care." />
        </p>
        <p className="text-content">
          <TranslatableText text="Understanding the increasing demand for professional pet grooming, we go above and beyond to bring a luxury grooming experience straight to your doorstep." />
        </p>
        <p className="text-content">
          <TranslatableText text="Our state-of-the-art mobile grooming van is fully equipped to provide the same—if not superior—quality of service as a traditional salon." />
        </p>
        <p className="text-content">
          <TranslatableText text="We use only the finest, all-natural, veterinarian-recommended products to ensure your pet’s safety, health, and comfort." />
        </p>
        <p className="text-content">
          <TranslatableText text="At MoPetCo, we are committed to delivering affordable, safe, and top-quality grooming services tailored to your pet’s needs." />
        </p>
      </div>
      <div className="flex justify-center items-center md:w-[20rem] lg:w-[30rem] lg:h-[30rem]">
        <img
          src={homeHeader}
          alt="woof"
          className="h-auto lg:h-[32rem] lg:w-[25rem]"
        />
      </div>
    </div>
  );
};
