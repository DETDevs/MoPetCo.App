import { Servicio } from "../../types/Servicio";
import { Link } from "react-router-dom";
import { TranslatableText } from "../common/TranslatableText";

interface Props {
  servicio: Servicio;
}

export const ServiceCard = ({ servicio }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-pink-300 transition-shadow p-6 text-center flex flex-col items-center">
      <i className={`fas ${servicio.icon} text-pink-500 text-4xl mb-4`}></i>
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        <TranslatableText text={servicio.titulo} />
      </h3>
      <p className="text-gray-600 text-sm mb-4">
        <TranslatableText text={servicio.descripcion.slice(0, 80)} />...
      </p>
      <Link
        to={`/services/${servicio.idServicio}`}
        className="text-pink-500 text-sm font-medium hover:underline"
      >
        <TranslatableText text="Read More" /> →
      </Link>
    </div>
  );
};
