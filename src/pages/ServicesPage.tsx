import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import { Link } from "react-router-dom";

export const ServicesPage = () => {
  const services = [
    {
      id: "dog-bath",
      icon: "fa-bath",
      title: "Dog Bath Services",
      description: "Includes shampoo, conditioner, ear cleaning, and more.",
    },
    {
      id: "dog-grooming",
      icon: "fa-cut",
      title: "Dog Full Grooming",
      description: "Haircut, shampoo, nail trim, and complete grooming care.",
    },
    {
      id: "treatments",
      icon: "fa-pump-soap",
      title: "Treatments",
      description: "Special treatments for skin, fleas, shedding, and more.",
    },
    {
      id: "cat-grooming",
      icon: "fa-cat",
      title: "Cat Grooming",
      description: "Gentle grooming for cats, including trims and baths.",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section con fondo degradado */}
      <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 text-center shadow-inner my-8 md:my-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Services Pet Care with Love
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg px-4">
          All grooming options include a complete organic and hypoallergenic
          bath as well as the thorough nose-to-tail attention outlined below.
          Your groomer will have a full consultation with you before getting
          started to review any additional costs.
        </p>
        <p className="mt-2 text-gray-700">
          Work from start to finish usually takes about an hour to an hour and a
          half.
        </p>
        <p className="mt-2 text-gray-700">
          Pricing may vary due to size, the condition of the coat, matting,
          knots and length of hair.
        </p>
      </section>

      {/* Cards de Servicios */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-pink-300 transition duration-300 hover:scale-105"
            >
              <i
                className={`fas ${service.icon} text-pink-500 text-5xl mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6`}
              ></i>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
              <Link
                to={`/services/${service.id}`}
                className="mt-auto bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};
