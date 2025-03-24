import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerDetallesServicio } from "../Service/serviceDetailApi";
import { Servicio } from "../types/Servicio";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";
import { Loading } from "../components/ui/Loading";
import { NotFoundMessage } from "../components/ui/NotFoundMessage";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";

export const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [servicio, setServicio] = useState<Servicio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerDetallesServicio();
        const found = data.find((s) => s.idServicio.toString() === serviceId);
        setServicio(found || null);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error loading service details", error);
        setServicio(null);
      }
    };
    fetchData();
  }, [serviceId]);

  if (loading) return <Loading />;

  if (!servicio) {
    return (
      <>
        <Header />
        <NotFoundMessage
          imageUrl="/assets/saddoggi.gif"
          title="Oops! Service not found 🐾"
          message="We couldn't fetch that service. It might have been moved, or it’s just out for a walk!"
          buttonText="Go back to Services"
          redirectPath="/service"
        />
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
            className="text-black font-bold px-2 py-1 rounded-full shadow-md bg-white hover:bg-slate-200 transition duration-300"
          >
            <i className="fa-solid fa-arrow-left text-pink-500"></i>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Imagen del servicio */}
          <img
            src={servicio.urlImagen ?? "/assets/default.jpg"}
            alt={servicio.titulo}
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[38rem]"
          />

          {/* Detalles del servicio */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-blue-700">
              <i className={`fas ${servicio.icon}`}></i>
              {servicio.titulo}
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              {servicio.descripcion}
            </p>

            {servicio.incluyeLista.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  Included
                </h2>
                <ul className="list-disc list-inside space-y-1 mb-6 text-gray-800">
                  {servicio.incluyeLista.map((item) => (
                    <li key={item.id}>{item.descripcion}</li>
                  ))}
                </ul>
              </>
            )}

            {servicio.precio.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  Prices
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  {servicio.precio.map((p) => (
                    <li key={p.idPrecio}>
                      {p.rangoPeso.nombre}:{" "}
                      <span className="font-medium text-green-600">
                        ${p.monto}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};
