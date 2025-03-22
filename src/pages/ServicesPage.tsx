import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerServicios } from "../Service/serviceApi";
import { Servicio } from "../types/Servicio";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

export const ServicesPage = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerServicios();
      setServicios(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-pink-100 to-blue-100 py-10 text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Services Pet Care with Love
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          All grooming options include a complete organic and hypoallergenic bath as well as the thorough nose-to-tail attention outlined below.
          Your groomer will have a full consultation with you before getting started to review any additional costs.
        </p>
        <p className="mt-2 text-gray-700">
          Work from start to finish usually takes about an hour to an hour and a half.
        </p>
        <p className="mt-2 text-gray-700">
          Pricing may vary due to size, the condition of the coat, matting, knots and length of hair.
        </p>
      </section>

      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-pink-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.idServicio}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-pink-300 transition-shadow"
            >
              <i className={`fas ${servicio.icon} text-pink-500 text-4xl mb-4`}></i>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{servicio.titulo}</h3>
              <p className="text-gray-600 mb-4">{servicio.descripcion.slice(0, 80)}...</p>
              <Link
                to={`/services/${servicio.idServicio}`}
                className="mt-auto text-pink-500 hover:underline font-medium"
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
