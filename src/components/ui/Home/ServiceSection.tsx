import { ServiceCircleCard } from "../ServiceCircleCard";

export const ServiceSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full items-center my-12 ">
      <div className="flex justify-center items-center flex-col w-1/2 lg:w-1/2 text-center lg:text-left space-y-4 mb-12 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold lg:text-6xl">
          Services Pet Care with Love
        </h2>
        <p className="text-gray-600 w-[22rem] md:w-full lg:w-[45rem] lg:text-2xl">
          All grooming options include a complete organic and hypoallergenic
          bath as well as the thorough nose-to-tail attention outlined below.
          Your groomer will have a full consultation with you before getting
          started to review any additional costs. Work from start to finish
          usually takes about an hour to an hour and a half. Pricing may vary
          due to size, the condition of the coat, matting, knots and length of
          hair.
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
