import { ServiceCircleCard } from "../service/ServiceCircleCard";
import { TranslatableText } from "../common/TranslatableText";
import { SectionTitle } from '../common/SectionTitle';



export const ServiceSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full items-center my-12 ">
      <div className="flex justify-center items-center flex-col w-[90%] lg:w-1/2 text-center lg:text-left space-y-4 mb-12 md:mb-0">
        <h2 className="text-3xl sm:text-5xl md:text-4xl text-center font-bold lg:text-4xl xl:text-5xl">
        <SectionTitle> Services Pet Care with Love</SectionTitle>
        </h2>
        <p className="text-gray-600 w-full max-w-2xl">
          <TranslatableText text="All grooming options include a complete organic and hypoallergenic
          bath as well as the thorough nose-to-tail attention outlined below.
          Your groomer will have a full consultation with you before getting
          started to review any additional costs. Work from start to finish
          usually takes about an hour to an hour and a half. Pricing may vary
          due to size, the condition of the coat, matting, knots and length of
          hair."/>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 justify-items-center">
        <ServiceCircleCard
          label="Cat Grooming"
          iconClass="fas fa-cat"
          link="/services/cat-grooming"
        />
        <ServiceCircleCard
          label="Dog Grooming Service"
          iconClass="fas fa-dog"
          link="/services/dog-grooming"
        />
        <ServiceCircleCard
          label="Dog Bath Services"
          iconClass="fas fa-bath"
          link="/services/dog-bath"
        />
        <ServiceCircleCard
          label="Others"
          iconClass="fas fa-paw"
          link="/service"
        />
      </div>
    </div>
  );
};
