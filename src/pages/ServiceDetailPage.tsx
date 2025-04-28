import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { obtenerDetallesServicio } from "../Service/serviceDetailApi";
import { Servicio } from "../types/Servicio";
import { Header } from "../components/layout/Header";
import { Loading } from "../components/layout/Loading";
import { NotFoundMessage } from "../components/layout/NotFoundMessage";
import { TranslatableText } from "../components/common/TranslatableText";
import { obtenerSubServicios } from "../Service/subServiceApi";
import { ServiceSubList } from "../components/layout/ServiceSubList";
import { shouldScrollToTop } from "../utils/scrollUtils";

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [servicio, setServicio] = useState<Servicio | null>(null);
  const [loading, setLoading] = useState(true);
  const [subServicios, setSubServicios] = useState<Servicio[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataServicios, dataSubServicios] = await Promise.all([
          obtenerDetallesServicio(),
          obtenerSubServicios(),
        ]);

        const found = dataServicios.find(
          (s) => s.idServicio.toString() === serviceId
        );
        setServicio(found || null);

        const filteredSubServices = dataSubServicios.filter(
          (sub) => sub.idServicio.toString() === serviceId
        );
        setSubServicios(filteredSubServices);

        if (shouldScrollToTop()) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch (error) {
        console.error("Error loading service details", error);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    fetchData();
  }, [serviceId]);

  if (loading) return <Loading />;

  if (!servicio) {
    return (
      <>
        <NotFoundMessage
          imageUrl="/assets/saddoggi.gif"
          title="Oops! Service not found 🐾"
          message="We couldn't fetch that service. It might have been moved, or it’s just out for a walk!"
          buttonText="Go back to Services"
          redirectPath="/service"
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12 my-10">
        <div className="my-2">
          <button
            onClick={() => navigate("/service")}
            aria-label="servicedetail"
            className="text-black font-bold px-2 py-1 rounded-full shadow-md bg-white hover:bg-slate-200 transition duration-300"
          >
            <i className="fa-solid fa-arrow-left text-pink-500"></i>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={servicio.urlImagen ?? "/assets/default.jpg"}
            alt={servicio.titulo}
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover h-[38rem]"
          />

          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-4 flex items-center gap-3 text-blue-700">
              <i className={`fas ${servicio.icon}`}></i>
              <TranslatableText text={servicio.titulo} />
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
              <TranslatableText text={servicio.descripcion} />
            </p>

            {servicio.incluyeLista.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  <TranslatableText text="Included" />
                </h2>
                <ul className="list-disc list-inside space-y-1 mb-6 text-gray-800">
                  {servicio.incluyeLista.map((item) => (
                    <li key={item.id}>
                      <TranslatableText text={item.descripcion} />
                    </li>
                  ))}
                </ul>
              </>
            )}

            {servicio.precio.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  <TranslatableText text="Prices" />
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  {servicio.precio.map((p) => (
                    <li key={p.idPrecio}>
                      <TranslatableText text={p.rangoPeso.nombre} />:{" "}
                      <span className="font-medium text-green-600">
                        ${p.monto}
                      </span>
                    </li>
                  ))}
                </ul>

                {servicio.nota && (
                  <p className="mt-2 text-sm text-gray-500 italic">
                    <TranslatableText text={servicio.nota} />
                  </p>
                )}
              </div>
            )}
            <Link
              to="/booking"
              className="bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600 lg:text-lg self-start"
            >
              <TranslatableText text="Book an appointment" />
            </Link>
          </div>
        </div>
        <ServiceSubList subServicios={subServicios} />
      </div>
    </>
  );
};

export default ServiceDetailPage;
