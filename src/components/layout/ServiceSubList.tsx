import { Servicio } from "../../types/Servicio";
import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";

interface Props {
  subServicios: Servicio[];
}

export const ServiceSubList: React.FC<Props> = ({ subServicios }) => {
  if (subServicios.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-pink-500 mb-6">
        <SectionTitle>
          <TranslatableText text="Related Services 🐾" />
        </SectionTitle>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {subServicios.map((sub) => (
          <div
            key={sub.idSubServicio}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
            <TranslatableText text={sub.titulo}/>
            </h3>
            <p className="text-gray-600 mb-4">
              <TranslatableText text={sub.descripcion} />
            </p>

            {sub.precio.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1 text-green-600">
                  <TranslatableText text="Prices" />
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {sub.precio.map((p) => (
                    <li key={p.idPrecio}>
                      <TranslatableText text={p.rangoPeso.nombre} />:{" "}
                      <span className="font-medium">${p.monto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
