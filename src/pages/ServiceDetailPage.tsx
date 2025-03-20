import { useParams } from "react-router-dom";
import { servicesData } from "../types/servicesData";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import { useNavigate } from "react-router-dom";

export const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find((s) => s.id === serviceId);

  const navigate = useNavigate();
  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl font-bold text-red-600">Service not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 my-20">
        <div className="my-2">
          <button
            onClick={() => navigate("/service")}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300"
          >
            ← Back to Services
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Imagen a la izquierda */}
          <img
            src={`/assets/${service.image}`}
            alt={service.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[38rem]"
          />

          {/* Detalles a la derecha */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-blue-700">
              <i className={`${service.icon}`}></i>
              {service.title}
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Lista de servicios */}
            <ul className="list-disc list-inside space-y-1 mb-6 text-gray-800">
              {service.services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Precios si hay */}
            {service.prices && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  Prices
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  {service.prices.map((price, index) => (
                    <li key={index}>{price}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
