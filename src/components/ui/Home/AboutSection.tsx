import { TranslatableText } from "../TranslatableText";



export const AboutSection = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-auto items-center justify-center mt-12">
      <div className="w-full md:w-1/2 flex justify-center items-center flex-col lg:w-[24rem] xl:w-[37rem]">
        <h1  className="text-5xl font-bold mb-4">
          MoPetCO
        </h1>
        <p className="text-xl text-gray-500 w-[22rem] md:w-[25rem] lg:w-full">
          <TranslatableText text="We are a premier mobile grooming service with over 20 years of
          experience, proudly serving Miami-Dade, Broward, and Palm Beach
          counties. As passionate animal lovers, we are dedicated to pampering
          your furry companions with the highest level of care. Understanding
          the increasing demand for professional pet grooming, we go above and
          beyond to bring a luxury grooming experience straight to your
          doorstep. Our state-of-the-art mobile grooming van is fully equipped
          to provide the same—if not superior—quality of service as a
          traditional salon. We use only the finest, all-natural,
          veterinarian-recommended products to ensure your pet’s safety, health,
          and comfort. At MoPetCo, we are committed to delivering affordable,
          safe, and top-quality grooming services tailored to your pet’s needs."/>
        </p>
      </div>
      <div className="flex justify-center items-center md:w-[20rem] lg:w-[30rem] lg:h-[30rem]">
        <img
          src="/assets/home_header-1.png"
          alt=""
          className="h-auto lg:h-[32rem] lg:w-[25rem]"
        />
      </div>
    </div>
  );
};
