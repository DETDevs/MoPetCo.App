import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";
import { obtenerServicios } from "../../Service/serviceApi";
import { Servicio } from "../../types/Servicio";

const ServiceSection = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  // Definimos los colores como en la otra página
  const iconColorClasses = [
    "text-pink-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerServicios();
        setServicios(data.slice(0, 4)); // Los primeros 4
      } catch (error) {
        console.error("Error fetching services", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-16 px-2 max-w-5xl mx-auto flex flex-col justify-center items-center">
      <SectionTitle>
        <TranslatableText text="Our Services" />
      </SectionTitle>

      <p className="text-content md:w-[85%] mb-4">
        <TranslatableText text="All grooming options include a complete organic and hypoallergenic bath as well as the thorough nose-to-tail attention outlined below. Your groomer will have a full consultation with you before getting started to review any additional costs. Work from start to finish usually takes about an hour to an hour and a half. Pricing may vary due to size, the condition of the coat, matting, knots and length of hair." />
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-100 justify-items-center">
        {servicios.map((servicio, index) => {
          const iconColorClass = iconColorClasses[index % iconColorClasses.length];

          return (
            <Link
              key={servicio.idServicio}
              to={`/services/${servicio.idServicio}`}
              className="flex w-60 flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-pink-300 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-pink-500`}>
                <i
                  className={`fa-solid ${
                    servicio.icon ?? "fa-dog"
                  } text-3xl ${iconColorClass} group-hover:text-white`}
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition">
                <TranslatableText text={servicio.titulo} />
              </h3>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/service"
          className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full 
                     font-semibold shadow-lg hover:bg-pink-600 transition duration-300"
        >
          <TranslatableText text="See All Services" />
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;