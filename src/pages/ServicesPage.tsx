import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Servicio } from "../types/Servicio";
import { Loading } from "../components/layout/Loading";
import { obtenerDetallesServicio } from "../Service/serviceDetailApi";
import { TranslatableText } from "../components/common/TranslatableText";
import { PawprintsDecor } from "../components/common/PawprintsDecor";
import { SectionTitle } from "../components/common/SectionTitle";
import { saveScrollPosition } from "../utils/scrollUtils";

const ServicesPage = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

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
        const data = await obtenerDetallesServicio();
        setServicios(data);
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        console.error("Error fetching services", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <section className="relative bg-gradient-to-r from-white via-pink-50 to-blue-50 py-20 px-6 text-center overflow-hidden">
        <PawprintsDecor />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-wide mb-4 drop-shadow">
          <TranslatableText text="Pet Care Services with Love" />
        </h1>

        <div className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto space-y-4 tracking-wide">
          <p className="text-center text-content">
            <TranslatableText
              text="All grooming options include a complete organic and hypoallergenic
          bath as well as the thorough nose-to-tail attention outlined below"
            />
          </p>
          <p className="text-content">
            <TranslatableText text="Your groomer will have a full consultation with you before getting started to review any additional costs" />
          </p>
          <p className="text-content">
            <TranslatableText text="Work from start to finish usually takes about an hour to an hour and a half  Pricing may vary due to size, the condition of the coat, matting,
          knots and length of hair." />
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-600 tracking-wide drop-shadow-sm mb-8">
          <SectionTitle>
            <TranslatableText text="Our Services" />
          </SectionTitle>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {servicios.map((servicio, index) => {
            const iconColorClass =
              iconColorClasses[index % iconColorClasses.length];

            return (
              <div
                key={servicio.idServicio}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-pink-300"
              >
                <i
                  className={`fas ${servicio.icon} text-5xl mb-5 ${iconColorClass}`}
                ></i>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  <TranslatableText text={servicio.titulo} />
                </h3>

                {servicio.descripcion && (
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    <TranslatableText
                      text={servicio.descripcion.slice(0, 90)}
                    />
                    ...
                  </p>
                )}

                <Link
                  to={`/services/${servicio.idServicio}`}
                  onClick={saveScrollPosition}
                  className="mt-auto text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-all duration-300"
                >
                  <TranslatableText text="Read More" /> →
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
