import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerServicios } from "../Service/serviceApi";
import { Servicio } from "../types/Servicio";
import { Header } from "../components/layout/Header";
import { Loading } from "../components/layout/Loading";
import { WhatsAppButton } from "../components/common/WhatsAppButton";
import { TranslatableText } from "../components/common/TranslatableText";
import { PawprintsDecor } from "../components/common/PawprintsDecor";
import { SectionTitle } from "../components/common/SectionTitle";

export const ServicesPage = () => {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await obtenerServicios();
      setServicios(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-r from-white via-pink-50 to-blue-50 py-20 px-6 text-center overflow-hidden">
        {/* Pawprints decorativas */}
        <PawprintsDecor />

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-wide mb-6 drop-shadow">
          Services Pet Care with Love
        </h1>

        {/* Párrafos descriptivos */}
        <div className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto space-y-4 tracking-wide">
          <p>
            All grooming options include a complete organic and hypoallergenic
            bath as well as the thorough nose-to-tail attention outlined below.
          </p>
          <p>
            Your groomer will have a full consultation with you before getting
            started to review any additional costs.
          </p>
          <p>
            Work from start to finish usually takes about an hour to an hour and
            a half. Pricing may vary depending on size, matting, coat condition
            and length of hair.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto relative">
        {/* Título con pawprints decorativos */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-600 tracking-wide drop-shadow-sm">
          <SectionTitle>
            <TranslatableText text="Our Services" />
          </SectionTitle>
        </h2>

        {/* Tarjetas de servicio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {servicios.map((servicio) => (
            <div
              key={servicio.idServicio}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-pink-300"
            >
              <i
                className={`fas ${servicio.icon} text-pink-500 text-5xl mb-5`}
              ></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                <TranslatableText text={servicio.titulo} />
              </h3>
              {servicio.descripcion && (
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                  <TranslatableText text={servicio.descripcion.slice(0, 90)} />
                  ...
                </p>
              )}
              <Link
                to={`/services/${servicio.idServicio}`}
                className="mt-auto text-sm bg-pink-500 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-600 transition"
              >
                <TranslatableText text="Read More" /> →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
};
